import { Link } from 'react-router-dom'
import { Icon, Button } from '@/components/ui'
import { useToast } from '@/contexts'
import type { Profile } from '@/types/resume'
import styles from './Hero.module.css'

export interface HeroProps {
  profile: Profile
  email?: string
  phone?: string
}

/**
 * 现代 Hero 首屏组件 (CSS Modules)
 * - name: '陈鑫' 采用黑色端庄字体
 * - 突出移动端开发工程师定位与荆州学院本科背景
 */
export function Hero({ profile, email, phone }: HeroProps) {
  const { showToast } = useToast()

  const handleCopyEmail = () => {
    if (email) {
      navigator.clipboard.writeText(email)
      showToast(`邮箱已成功复制: ${email}`, 'success')
    }
  }

  const handleCopyPhone = () => {
    if (phone) {
      navigator.clipboard.writeText(phone)
      showToast(`电话已成功复制: ${phone}`, 'success')
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
            <span className={styles.badgeText}>{profile.status ?? '移动端开发工程师'}</span>
          </div>

          {/* 标题组：名字为黑色字体 */}
          <div className={styles.titleGroup}>
            <p className={styles.eyebrow}>你好，我是</p>
            <h1 className={styles.title}>
              <span className={styles.nameText}>{profile.name}</span>
              <span className={styles.handleTag}>({profile.handle})</span>
            </h1>
            <h2 className={styles.subtitle}>{profile.title}</h2>
          </div>

          {/* 基本信息标签：学校、学历、毕业时间、期望城市 */}
          <div className={styles.metaPills}>
            <span className={styles.metaPill}>
              <Icon name="education" size={14} />
              <span>{profile.school ?? '荆州学院'} · {profile.major ?? '软件工程 (本科)'}</span>
            </span>
            <span className={styles.metaPill}>
              <Icon name="briefcase" size={14} />
              <span>{profile.graduation ?? '2027年6月毕业'}</span>
            </span>
            <span className={styles.metaPill}>
              <Icon name="location" size={14} />
              <span>现居：{profile.location ?? '苏州'} · 期望：{profile.targetCity ?? '全国可飞'}</span>
            </span>
          </div>

          {/* 座右铭卡片 */}
          <div className={styles.quoteCard}>
            <div className={styles.quoteMark}>“</div>
            <p className={styles.quoteText}>{profile.tagline}</p>
          </div>

          {/* 专业综述 */}
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
                <span>查看实习与开源项目</span>
              </Button>
            </Link>

            <Button variant="secondary" size="md" onClick={handleCopyEmail}>
              <Icon name="mail" size={17} />
              <span>复制邮箱</span>
            </Button>

            {phone && (
              <Button variant="outline" size="md" onClick={handleCopyPhone}>
                <Icon name="phone" size={17} />
                <span>复制电话</span>
              </Button>
            )}

            <Link to="/contact">
              <Button variant="ghost" size="md">
                <span>与我联系 →</span>
              </Button>
            </Link>
          </div>

          {/* 社交/平台快速直达 */}
          <div className={styles.socialsWrap}>
            <span className={styles.socialsLabel}>直达通道：</span>
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

        {/* 右侧形象卡片 */}
        <div className={styles.mediaCol}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatarGlow} />

            <div className={styles.avatarBox}>
              <img
                src={profile.avatarUrl}
                alt={`${profile.name} (${profile.handle})`}
                className={styles.avatarImg}
                loading="eager"
              />
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTop}`}>
              <Icon name="terminal" size={16} className={styles.floatingIcon} />
              <div>
                <span className={styles.floatingTitle}>Kotlin · Flutter · Compose</span>
                <span className={styles.floatingSub}>移动端核心研发</span>
              </div>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardBottom}`}>
              <Icon name="layers" size={16} className={styles.floatingIcon} />
              <div>
                <span className={styles.floatingTitle}>Android & BLE 硬件通信</span>
                <span className={styles.floatingSub}>高可靠软硬件联动</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}