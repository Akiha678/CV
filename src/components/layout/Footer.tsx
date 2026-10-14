import { resumeData } from '@/data/resume'
import { Icon } from '@/components/ui'
import styles from './Footer.module.css'

/**
 * 现代页脚组件 (CSS Modules)
 */
export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandSide}>
          <div className={styles.logoGroup}>
            <span className={styles.logoBadge}>S</span>
            <div>
              <span className={styles.title}>{resumeData.profile.name}</span>
              <span className={styles.subtitle}>Portfolio & Online CV</span>
            </div>
          </div>
          <p className={styles.desc}>
            “{resumeData.profile.tagline}”
          </p>
        </div>

        <div className={styles.actionsSide}>
          <div className={styles.links}>
            <a
              href="https://github.com/Akiha678"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <Icon name="github" size={16} />
              <span>GitHub</span>
            </a>
            <a href={`mailto:${resumeData.contact.email}`} className={styles.link}>
              <Icon name="mail" size={16} />
              <span>Email</span>
            </a>
            <button
              type="button"
              className={`${styles.link} ${styles.topBtn}`}
              onClick={scrollToTop}
            >
              <span>回到顶部 ↑</span>
            </button>
          </div>

          <p className={styles.copyright}>
            © {year} {resumeData.profile.name} (Akiha678). Built with React 19, TypeScript & Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}