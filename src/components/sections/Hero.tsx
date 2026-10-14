import { useState } from 'react'
import { Link } from 'react-router-dom'
import { resumeData } from '@/data/resume'
import { Icon } from '@/components/ui'
import './hero.css'

/**
 * 现代主流 Hero 首屏组件
 * 融合线性科技渐变、开发者个人徽章、真实数据指标与便捷复制交互
 */
export function Hero() {
  const { profile } = resumeData
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    if (resumeData.contact.email) {
      navigator.clipboard.writeText(resumeData.contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero__inner">
        {/* 左侧主要介绍信息 */}
        <div className="hero__content">
          {/* 状态胶囊徽标 */}
          <div className="hero__badge">
            <span className="hero__badge-pulse" />
            <span className="hero__badge-text">{profile.status ?? '活跃开发者 · 开源探索中'}</span>
          </div>

          {/* 渐变标题 */}
          <div className="hero__title-group">
            <p className="hero__eyebrow">你好，我是</p>
            <h1 className="hero__title">
              <span className="text-gradient">{profile.name}</span>
              <span className="hero__handle-tag">@{profile.handle}</span>
            </h1>
            <h2 className="hero__subtitle">{profile.title}</h2>
          </div>

          {/* 个性座右铭 / 签名卡片 */}
          <div className="hero__quote-card">
            <div className="hero__quote-mark">“</div>
            <p className="hero__quote-text">{profile.tagline}</p>
          </div>

          {/* 简短专业描述 */}
          <p className="hero__bio-brief">{profile.bio}</p>

          {/* 核心指标统计栏 */}
          {profile.stats && profile.stats.length > 0 && (
            <div className="hero__stats-grid">
              {profile.stats.map((stat, i) => (
                <div key={i} className="hero__stat-card">
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* 交互行动按钮 */}
          <div className="hero__actions">
            <Link to="/projects" className="hero__btn hero__btn--primary">
              <Icon name="project" size={18} />
              <span>浏览开源项目</span>
            </Link>

            <button
              type="button"
              className="hero__btn hero__btn--secondary"
              onClick={handleCopyEmail}
              title="复制邮箱地址"
            >
              <Icon name={copied ? 'check' : 'copy'} size={18} />
              <span>{copied ? '邮箱已复制！' : '复制邮箱'}</span>
            </button>

            <Link to="/contact" className="hero__btn hero__btn--outline">
              <Icon name="mail" size={18} />
              <span>与我联系</span>
            </Link>
          </div>

          {/* 社交/平台快速直达 */}
          <div className="hero__socials-wrap">
            <span className="hero__socials-label">社交与主页：</span>
            <ul className="hero__socials" aria-label="社交链接">
              {profile.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__social-link"
                    aria-label={link.label}
                  >
                    <Icon name={(link.icon as never) ?? 'website'} size={16} />
                    <span>{link.label}</span>
                    <Icon name="arrow-up-right" size={12} className="hero__social-arrow" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 右侧极客形象卡片 */}
        <div className="hero__media-col">
          <div className="hero__avatar-container">
            {/* 炫光光圈 */}
            <div className="hero__avatar-glow" />

            {/* 真实 GitHub 头像 */}
            <div className="hero__avatar-box">
              <img
                src={profile.avatarUrl}
                alt={`${profile.name} (@${profile.handle})`}
                className="hero__avatar-img"
                loading="eager"
              />
            </div>

            {/* 悬浮技术标签卡片 */}
            <div className="hero__floating-card hero__floating-card--top">
              <Icon name="terminal" size={16} className="hero__floating-icon" />
              <div>
                <span className="hero__floating-title">Kotlin · C++ · Rust</span>
                <span className="hero__floating-sub">底层与系统研发</span>
              </div>
            </div>

            <div className="hero__floating-card hero__floating-card--bottom">
              <Icon name="layers" size={16} className="hero__floating-icon" />
              <div>
                <span className="hero__floating-title">Smartlab411</span>
                <span className="hero__floating-sub">高可用跨端架构</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}