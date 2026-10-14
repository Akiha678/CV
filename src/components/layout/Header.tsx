import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '@/config/navigation'
import { useThemeContext } from '@/contexts'
import { Icon } from '@/components/ui'
import { resumeData } from '@/data/resume'
import './header.css'

/**
 * 现代主流毛玻璃悬浮导航栏
 * - 动态吸顶模糊背景
 * - 实时在线状态呼吸灯
 * - 主题即时切换
 * - GitHub 快速入口与一键打印简历
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { resolved, toggle } = useThemeContext()
  const isDark = resolved === 'dark'
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 路由跳转后关闭移动端菜单
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // 移动端菜单打开时锁定页面滚动
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handlePrint = () => {
    window.print()
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__wrapper">
        <nav className="header__inner" aria-label="主导航">
          {/* 品牌标识 */}
          <NavLink
            to="/"
            end
            className="header__brand"
            onClick={() => setMenuOpen(false)}
          >
            <div className="header__avatar-badge">
              <span className="header__logo-char">S</span>
              <span className="header__status-dot" title="活跃开发中" />
            </div>
            <div className="header__brand-info">
              <span className="header__name">{resumeData.profile.name}</span>
              <span className="header__handle">@{resumeData.profile.handle}</span>
            </div>
          </NavLink>

          {/* 桌面端导航 */}
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

          {/* 交互动作栏 */}
          <div className="header__actions">
            {/* 一键打印/导出 PDF 简历 */}
            <button
              type="button"
              className="header__action-btn"
              onClick={handlePrint}
              title="打印或保存为 PDF 简历"
              aria-label="打印简历"
            >
              <Icon name="print" size={17} />
              <span className="header__action-btn-text">导出</span>
            </button>

            {/* GitHub 直达 */}
            <a
              href="https://github.com/Akiha678"
              target="_blank"
              rel="noopener noreferrer"
              className="header__action-btn header__github-btn"
              title="访问 GitHub 源码与仓库"
              aria-label="GitHub"
            >
              <Icon name="github" size={17} />
              <span className="header__action-btn-text">GitHub</span>
            </a>

            {/* 主题切换 */}
            <button
              type="button"
              className="header__theme-toggle"
              onClick={toggle}
              aria-label={isDark ? '切换至明亮模式' : '切换至暗色模式'}
              title={isDark ? '切换至明亮模式' : '切换至暗色模式'}
            >
              <span className="header__theme-icon">
                <Icon name={isDark ? 'sun' : 'moon'} size={18} />
              </span>
            </button>

            {/* 联系我 CTA */}
            <button
              type="button"
              className="header__cta-btn"
              onClick={() => navigate('/contact')}
            >
              <Icon name="mail" size={15} />
              <span>联系</span>
            </button>

            {/* 移动端汉堡按钮 */}
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
      </div>

      {/* 移动端抽屉 */}
      {menuOpen && (
        <div className="header__mobile-overlay" onClick={() => setMenuOpen(false)}>
          <div className="header__mobile-panel" onClick={(e) => e.stopPropagation()}>
            <ul className="header__mobile-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      `header__mobile-link ${isActive ? 'is-active' : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="header__mobile-actions">
              <a
                href="https://github.com/Akiha678"
                target="_blank"
                rel="noopener noreferrer"
                className="header__mobile-action-item"
              >
                <Icon name="github" size={18} />
                <span>GitHub @Akiha678</span>
              </a>
              <button
                type="button"
                className="header__mobile-action-item"
                onClick={handlePrint}
              >
                <Icon name="print" size={18} />
                <span>打印 / 导出 PDF 简历</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}