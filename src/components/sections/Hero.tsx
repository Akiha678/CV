import { Link } from 'react-router-dom'
import { Icon, Button } from '@/components/ui'
import { useToast } from '@/contexts'
import type { Profile } from '@/types/resume'
import styles from './Hero.module.css'

export interface HeroProps {
  profile: Profile
  email?: string
}

/**
 * 现代 Hero 首屏组件 (CSS Modules)
 */
export function Hero({ profile, email }: HeroProps) {
  const { showToast } = useToast()

  const handleCopyEmail = () => {
    if (email) {
      navigator.clipboard.writeText(email)
      showToast(`邮箱已成功复制: ${email}`, 'success')
    }
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        {/* 左侧主要介绍信息 */}
        <div className={styles.content}>
          {/* 状态胶囊徽标 */}
          <div className={styles.badge}>
            <span className={styles.badgePulse} />
            <span className={styles.badgeText}>{profile.status ?? '活跃开发者 · 开源探索中'}</span>
          </div>

          {/* 渐变标题 */}
          <div className={styles.titleGroup}>
            <p className={styles.eyebrow}>你好，我是</p>
            <h1 className={styles.title}>
              <span className="text-gradient">{profile.name}</span>
              <span className={styles.handleTag}>@{profile.handle}</span>
            </h1>
            <h2 className={styles.subtitle}>{profile.title}</h2>
          </div>

          {/* 个性座右铭 / 签名卡片 */}
          <div className={styles.quoteCard}>
            <div className={styles.quoteMark}>“</div>
            <p className={styles.quoteText}>{profile.tagline}</p>
          </div>

          {/* 简短专业描述 */}
          <p className={styles.bioBrief}>{profile.bio}</p>

          {/* 核心指标统计栏 */}
          {profile.stats && profile.stats.length > 0 && (
            <div className={styles.statsGrid}>
              {profile.stats.map((stat, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* 交互行动按钮 */}
          <div className={styles.actions}>
            <Link to="/projects">
              <Button variant="primary" size="md">
                <Icon name="project" size={17} />
                <span>浏览开源项目</span>
              </Button>
            </Link>

            <Button variant="secondary" size="md" onClick={handleCopyEmail}>
              <Icon name="copy" size={17} />
              <span>复制邮箱</span>
            </Button>

            <Link to="/contact">
              <Button variant="outline" size="md">
                <Icon name="mail" size={17} />
                <span>与我联系</span>
              </Button>
            </Link>
          </div>

          {/* 社交/平台快速直达 */}
          <div className={styles.socialsWrap}>
            <span className={styles.socialsLabel}>社交与主页：</span>
            <ul className={styles.socials} aria-label="社交链接">
              {profile.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={link.label}
                  >
                    <Icon name={(link.icon as never) ?? 'website'} size={15} />
                    <span>{link.label}</span>
                    <Icon name="arrow-up-right" size={12} className={styles.socialArrow} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 右侧极客形象卡片 */}
        <div className={styles.mediaCol}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatarGlow} />

            <div className={styles.avatarBox}>
              <img
                src={profile.avatarUrl}
                alt={`${profile.name} (@${profile.handle})`}
                className={styles.avatarImg}
                loading="eager"
              />
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTop}`}>
              <Icon name="terminal" size={16} className={styles.floatingIcon} />
              <div>
                <span className={styles.floatingTitle}>Kotlin · C++ · Rust</span>
                <span className={styles.floatingSub}>底层与系统研发</span>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardBottom}`}>
              <Icon name="layers" size={16} className={styles.floatingIcon} />
              <div>
                <span className={styles.floatingTitle}>Smartlab411</span>
                <span className={styles.floatingSub}>高可用跨端架构</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}