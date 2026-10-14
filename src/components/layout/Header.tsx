import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '@/config/navigation'
import { useThemeContext, useToast } from '@/contexts'
import { Icon } from '@/components/ui'
import { resumeData } from '@/data/resume'
import styles from './Header.module.css'

/**
 * 现代主流毛玻璃悬浮导航栏 (CSS Modules)
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { resolved, toggle } = useThemeContext()
  const { showToast } = useToast()
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

  const handlePrint = () => {
    showToast('已唤起简历打印与 PDF 保存窗口', 'info')
    window.print()
  }

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
              <span>S</span>
              <span className={styles.statusDot} title="活跃开发中" />
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

          {/* 交互动作栏 */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.actionBtn}
              onClick={handlePrint}
              title="打印或保存为 PDF 简历"
              aria-label="打印简历"
            >
              <Icon name="print" size={17} />
              <span className={styles.actionBtnText}>导出</span>
            </button>

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
              <span>联系</span>
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
              <button
                type="button"
                className={styles.mobileActionItem}
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