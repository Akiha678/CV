import { useEffect, useState } from 'react'
import { resumeData, type ResumeData } from '@/data/resume'
import { fetchGitHubRepos, fetchGitHubUser } from './githubService'

/**
 * 简历数据统一访问服务 (Repository Pattern)
 */
export const resumeService = {
  /**
   * 同步获取基准数据（用于保证首屏秒开与离线展示）
   */
  getInitialData(): ResumeData {
    return resumeData
  },

  /**
   * 异步联动 GitHub API 动态更新数据
   */
  async getEnhancedData(): Promise<ResumeData> {
    const [ghUser, ghRepos] = await Promise.all([
      fetchGitHubUser('Akiha678'),
      fetchGitHubRepos('Akiha678'),
    ])

    const clone: ResumeData = JSON.parse(JSON.stringify(resumeData))

    if (ghUser) {
      if (ghUser.public_repos && clone.profile.stats) {
        const repoStat = clone.profile.stats.find((s) => s.label.includes('仓库'))
        if (repoStat) repoStat.value = `${ghUser.public_repos} Repos`
      }
    }

    if (ghRepos && ghRepos.length > 0) {
      // 动态对齐各项目的 star 数与链接
      clone.projects = clone.projects.map((proj) => {
        const matched = ghRepos.find(
          (r) => r.name.toLowerCase() === proj.name.toLowerCase() ||
                 (r.name.toLowerCase() === 'xinchat' && proj.name.includes('XinChat'))
        )
        if (matched) {
          return {
            ...proj,
            stars: matched.stargazers_count,
            sourceUrl: matched.html_url || proj.sourceUrl,
          }
        }
        return proj
      })
    }

    return clone
  },
}

/**
 * 响应式获取完整简历数据 Hook
 */
export function useResumeData() {
  const [data, setData] = useState<ResumeData>(() => resumeService.getInitialData())
  const [isUpdating, setIsUpdating] = useState<boolean>(true)

  useEffect(() => {
    let mounted = true
    resumeService
      .getEnhancedData()
      .then((enhanced) => {
        if (mounted) {
          setData(enhanced)
          setIsUpdating(false)
        }
      })
      .catch(() => {
        if (mounted) setIsUpdating(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  return { data, isUpdating }
}
