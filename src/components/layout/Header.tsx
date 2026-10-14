import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '@/config/navigation'
import { useThemeContext } from '@/contexts'
import { Icon } from '@/components/ui'
import { resumeData } from '@/data/resume'
import styles from './Header.module.css'

/**
 * 现代主流毛玻璃悬浮导航栏 (CSS Modules)
 * 已按要求移除顶部导出按钮
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

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.wrapper}>
        <nav className={styles.inner} aria-label="主导航">
          {/* 品牌标识 */}
          <NavLink
            to="/"
            end
            className={styles.brand}
            onClick={() => setMenuOpen(false)}
          >
            <div className={styles.avatarBadge}>
              <span>陈</span>
              <span className={styles.statusDot} title="求职意向：移动端开发工程师" />
            </div>
            <div className={styles.brandInfo}>
              <span className={styles.name}>{resumeData.profile.name}</span>
              <span className={styles.handle}>@{resumeData.profile.handle}</span>
            </div>
          </NavLink>

          {/* 桌面端导航 */}
          <ul className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  end={item.exact}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* 交互动作栏（已移除导出按钮） */}
          <div className={styles.actions}>
            <a
              href="https://github.com/Akiha678"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.actionBtn} ${styles.githubBtn}`}
              title="访问 GitHub 源码与仓库"
              aria-label="GitHub"
            >
              <Icon name="github" size={17} />
              <span className={styles.actionBtnText}>GitHub</span>
            </a>

            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggle}
              aria-label={isDark ? '切换至明亮模式' : '切换至暗色模式'}
              title={isDark ? '切换至明亮模式' : '切换至暗色模式'}
            >
              <Icon name={isDark ? 'sun' : 'moon'} size={18} />
            </button>

            <button
              type="button"
              className={styles.ctaBtn}
              onClick={() => navigate('/contact')}
            >
              <Icon name="mail" size={15} />
              <span>联系我</span>
            </button>

            <button
              type="button"
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
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
        <div className={styles.mobileOverlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.mobilePanel} onClick={(e) => e.stopPropagation()}>
            <ul className={styles.mobileLinks}>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) =>
                      `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className={styles.mobileActions}>
              <a
                href="https://github.com/Akiha678"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileActionItem}
              >
                <Icon name="github" size={18} />
                <span>GitHub @Akiha678</span>
              </a>
              <a
                href="mailto:seanchenxin@dingtalk.com"
                className={styles.mobileActionItem}
              >
                <Icon name="mail" size={18} />
                <span>发送邮件 seanchenxin@dingtalk.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}