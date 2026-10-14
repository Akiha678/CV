import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '@/config/navigation'
import { useThemeContext } from '@/contexts'
import { Icon } from '@/components/ui'
import './header.css'

/**
 * 顶部导航栏
 * - 吸顶 + 滚动阴影
 * - 基于路由高亮当前页面
 * - 移动端汉堡菜单
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { resolved, toggle } = useThemeContext()
  const isDark = resolved === 'dark'
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 路由切换后关闭移动端菜单、重置滚动位置
  useEffect(() => {
    if (menuOpen) setMenuOpen(false)
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 移动端菜单打开时锁定背景滚动
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const brandClass = (isActive: boolean) => `header__brand ${isActive ? 'is-active' : ''}`

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="header__inner" aria-label="主导航">
        <NavLink
          to="/"
          end
          className={({ isActive }) => brandClass(isActive)}
          onClick={() => setMenuOpen(false)}
        >
          <span className="header__logo">CV</span>
          <span className="header__brand-text">Portfolio</span>
        </NavLink>

        {/* 桌面端菜单 */}
        <ul className="header__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `header__link ${isActive ? 'is-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="header__actions">
          <button
            type="button"
            className="header__theme"
            onClick={toggle}
            aria-label={isDark ? '切换到明亮模式' : '切换到暗色模式'}
            title={isDark ? '切换到明亮模式' : '切换到暗色模式'}
          >
            <Icon name={isDark ? 'sun' : 'moon'} size={18} />
          </button>
          <button type="button" className="header__cta" onClick={() => navigate('/contact')}>
            联系我
          </button>
          <button
            type="button"
            className={`header__hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="切换菜单"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="header__mobile">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  end={item.exact}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}