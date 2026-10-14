import { Link } from 'react-router-dom'
import { resumeData } from '@/data/resume'
import './footer.css'

/**
 * 页脚：展示版权信息与快速联系方式。
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copyright">
          © {year} {resumeData.profile.name} · 由 React + TypeScript 构建
        </p>
        <p className="footer__links">
          <a href={`mailto:${resumeData.contact.email}`}>Email</a>
          <a href={resumeData.profile.links[0]?.url ?? '#'} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link to="/">回到顶部 ↑</Link>
        </p>
      </div>
    </footer>
  )
}