import { useEffect, useState } from 'react'

/**
 * 媒体查询 Hook
 *
 * 响应式逻辑的可复用封装，便于在组件中根据断点切换行为。
 * 示例：`const isMobile = useMediaQuery('(max-width: 768px)')`
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const mql = window.matchMedia(query)
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches)
    setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}