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
            <span className={styles.logoBadge}>陈</span>
            <div>
              <span className={styles.title}>{resumeData.profile.name} (SeanChen)</span>
              <span className={styles.subtitle}>移动端开发工程师 · 荆州学院本科</span>
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
            <a href={`tel:${resumeData.contact.phone}`} className={styles.link}>
              <Icon name="phone" size={16} />
              <span>电话</span>
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
            © {year} {resumeData.profile.name} (SeanChen · Akiha678). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}