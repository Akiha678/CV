import { useCallback, useEffect, useState } from 'react'

/**
 * 主题管理 Hook (Theme Hook)
 *
 * 负责「明亮 / 暗黑 / 跟随系统」三种模式的状态与持久化。
 * 独立于组件存在，可在任意组件复用。
 */

export type ThemeMode = 'light' | 'dark' | 'system'

export const THEME_STORAGE_KEY = 'cv-theme'

const THEME_CLASS = 'dark'

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(mode: ThemeMode): void {
  const root = document.documentElement
  const resolved =
    mode === 'system' ? getSystemTheme() : mode

  root.classList.toggle(THEME_CLASS, resolved === 'dark')
  root.style.colorScheme = resolved
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'system'
    return (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || 'system'
  })

  useEffect(() => {
    applyTheme(mode)
    localStorage.setItem(THEME_STORAGE_KEY, mode)

    // 跟随系统：监听系统主题变化
    if (mode === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const onChange = () => applyTheme('system')
      mq.addEventListener('change', onChange)
      return () => mq.removeEventListener('change', onChange)
    }
    return undefined
  }, [mode])

  const toggle = useCallback(() => {
    setMode((prev) => {
      if (prev === 'light') return 'dark'
      if (prev === 'dark') return 'light'
      // 系统模式下点击，切到与当前渲染相反的主题
      return getSystemTheme() === 'dark' ? 'light' : 'dark'
    })
  }, [])

  const setModeExplicit = useCallback((next: ThemeMode) => setMode(next), [])

  return { mode, resolved: mode === 'system' ? getSystemTheme() : mode, setMode: setModeExplicit, toggle }
}