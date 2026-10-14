import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'

export interface ThemeContextValue {
  mode: ThemeMode
  resolved: 'light' | 'dark'
  toggle: () => void
  setMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export const THEME_STORAGE_KEY = 'cv-theme'
const DARK_CLASS = 'dark'

function systemTheme(): 'light' | 'dark' {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function readStoredMode(): ThemeMode {
  if (typeof window === 'undefined') return 'system'
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode)

  const resolved = useMemo<'light' | 'dark'>(
    () => (mode === 'system' ? systemTheme() : mode),
    [mode],
  )

  const apply = useCallback((next: ThemeMode) => {
    const nextResolved: 'light' | 'dark' =
      next === 'system' ? systemTheme() : next
    const root = document.documentElement
    root.classList.toggle(DARK_CLASS, nextResolved === 'dark')
  }, [])

  const setMode = useCallback(
    (next: ThemeMode) => {
      setModeState(next)
      apply(next)
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next)
      } catch {
        /* 隐私模式下可能写入失败，忽略即可 */
      }
    },
    [apply],
  )

  const toggle = useCallback(() => {
    setMode(resolved === 'dark' ? 'light' : 'dark')
  }, [resolved, setMode])

  const value = useMemo(
    () => ({ mode, resolved, toggle, setMode }),
    [mode, resolved, toggle, setMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeContext(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider')
  return ctx
}

/** 供非 React 环境中直接调用（如入口文件 B 包业务） */
export { systemTheme }