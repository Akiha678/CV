import { useEffect, useState } from 'react'

/**
 * 滚动监听 Hook (Scroll Spy)
 *
 * 监听滚动位置，返回当前处于视野中的区块 id，用于导航高亮。
 * 实现了「防抖」机制，避免滚动时频繁触发重渲染。
 */

interface UseScrollSpyOptions {
  /** 需要监听的区块 id 列表，按页面从上到下的顺序传入 */
  sectionIds: string[]
  /** 偏移量，单位为像素；顶部固定导航时用于修正 */
  offset?: number
  /** 防抖毫秒数，默认 50ms */
  throttleMs?: number
}

export function useScrollSpy({ sectionIds, offset = 80, throttleMs = 50 }: UseScrollSpyOptions): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    let ticking = false

    const computeActive = (): string | null => {
      const scrollTop = window.scrollY
      // 文档底部时，即使最后一个区块高度未达阈值也设为 active
      const docEnd = document.documentElement.scrollHeight - scrollTop <= window.innerHeight + offset

      let current: string | null = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const top = rect.top + window.scrollY - offset
        if (top <= scrollTop + offset || (el === lastElement(sectionIds) && docEnd)) {
          current = id
        }
      }
      return current
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.setTimeout(() => {
        ticking = false
        setActiveId(computeActive())
      }, throttleMs)
    }

    // 初始计算一次
    setActiveId(computeActive())
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join('|'), offset, throttleMs])

  return activeId
}

/** 供 computeActive 使用的辅助：比较 id 是否最后一个 */
function lastElement(ids: string[]): HTMLElement | null {
  const lastId = ids[ids.length - 1]
  return lastId ? document.getElementById(lastId) : null
}