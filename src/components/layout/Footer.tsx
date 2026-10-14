import { resumeData } from '@/data/resume'
import { Icon } from '@/components/ui'
import './footer.css'

/**
 * 现代主流页脚组件
 */
export function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-side">
          <div className="footer__logo-group">
            <span className="footer__logo-badge">S</span>
            <div>
              <span className="footer__title">{resumeData.profile.name}</span>
              <span className="footer__subtitle">Portfolio & Online CV</span>
            </div>
          </div>
          <p className="footer__desc">
            “{resumeData.profile.tagline}”
          </p>
        </div>

        <div className="footer__actions-side">
          <div className="footer__links">
            <a
              href="https://github.com/Akiha678"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              <Icon name="github" size={16} />
              <span>GitHub</span>
            </a>
            <a href={`mailto:${resumeData.contact.email}`} className="footer__link">
              <Icon name="mail" size={16} />
              <span>Email</span>
            </a>
            <button
              type="button"
              className="footer__link footer__top-btn"
              onClick={scrollToTop}
            >
              <span>回到顶部 ↑</span>
            </button>
          </div>

          <p className="footer__copyright">
            © {year} {resumeData.profile.name} (Akiha678). Built with React 19, TypeScript & Vite.
          </p>
        </div>
      </div>
    </footer>
  )
}