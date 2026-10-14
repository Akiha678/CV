import type { GitHubRepo, GitHubUser } from '@/types/github'

const CACHE_KEY_USER = 'cv_gh_user_cache'
const CACHE_KEY_REPOS = 'cv_gh_repos_cache'
const CACHE_DURATION = 15 * 60 * 1000 // 15分钟缓存

interface CachedData<T> {
  timestamp: number
  data: T
}

function getFromCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const parsed: CachedData<T> = JSON.parse(raw)
    if (Date.now() - parsed.timestamp < CACHE_DURATION) {
      return parsed.data
    }
  } catch {
    // 忽略异常
  }
  return null
}

function saveToCache<T>(key: string, data: T) {
  try {
    const item: CachedData<T> = { timestamp: Date.now(), data }
    localStorage.setItem(key, JSON.stringify(item))
  } catch {
    // 忽略异常
  }
}

/**
 * 获取 GitHub 个人信息
 */
export async function fetchGitHubUser(username: string = 'Akiha678'): Promise<GitHubUser | null> {
  const cached = getFromCache<GitHubUser>(`${CACHE_KEY_USER}_${username}`)
  if (cached) return cached

  try {
    const res = await fetch(`https://api.github.com/users/${username}`)
    if (!res.ok) return null
    const data: GitHubUser = await res.json()
    saveToCache(`${CACHE_KEY_USER}_${username}`, data)
    return data
  } catch (err) {
    console.warn('[githubService] Failed to fetch user info, using fallback', err)
    return null
  }
}

/**
 * 获取 GitHub 公开仓库列表
 */
export async function fetchGitHubRepos(username: string = 'Akiha678'): Promise<GitHubRepo[]> {
  const cached = getFromCache<GitHubRepo[]>(`${CACHE_KEY_REPOS}_${username}`)
  if (cached) return cached

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
    if (!res.ok) return []
    const data: GitHubRepo[] = await res.json()
    saveToCache(`${CACHE_KEY_REPOS}_${username}`, data)
    return data
  } catch (err) {
    console.warn('[githubService] Failed to fetch repos, using fallback', err)
    return []
  }
}
