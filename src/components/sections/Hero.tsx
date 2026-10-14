import { Link } from 'react-router-dom'
import { resumeData } from '@/data/resume'
import { Icon } from '@/components/ui'
import './hero.css'

/**
 * 首屏 Hero 区块
 */
export function Hero() {
  const { profile } = resumeData

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">你好，我是</p>
          <h1 className="hero__title">{profile.name}</h1>
          <p className="hero__subtitle">{profile.title}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <Link to="/contact" className="hero__btn hero__btn--primary">
              与我联系
            </Link>
            <Link to="/projects" className="hero__btn hero__btn--outline">
              查看项目
            </Link>
          </div>

          <ul className="hero__socials" aria-label="社交链接">
            {profile.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <Icon name={(link.icon as never) ?? 'website'} size={20} />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          {profile.avatarUrl ? (
            <img src={profile.avatarUrl} alt={`${profile.name} 的头像`} className="hero__avatar" />
          ) : (
            <div className="hero__placeholder">
              <Icon name="website" size={64} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}