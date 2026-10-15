import { Section, Icon } from '@/components/ui'
import { useToast } from '@/contexts'
import type { Contact as ContactType, Profile } from '@/types/resume'
import styles from './Contact.module.css'

export interface ContactProps {
  contact: ContactType
  profile: Profile
}

/**
 * 现代居中对称联系区块 (直接直连真实渠道)
 * - 纯净剔除繁琐留言表单，聚焦真实可达的直接联络通道
 * - 居中对称排版，强化视觉美感与响应式对齐
 */
export function Contact({ contact, profile }: ContactProps) {
  const { showToast } = useToast()

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    showToast(`邮箱已成功复制: ${contact.email}`, 'success')
  }

  const handleCopyPhone = () => {
    if (contact.phone) {
      navigator.clipboard.writeText(contact.phone)
      showToast(`电话已成功复制: ${contact.phone}`, 'success')
    }
  }

  return (
    <Section
      id="contact"
      title="保持联络与合作探讨"
      // subtitle="随时欢迎移动端研发岗位沟通、开源项目探讨或技术交流！"
      badge="Get In Touch"
      fullWidth
    >
      <div className={styles.centerContainer}>
        {/* 顶部居中求职简介 */}
        <p className={styles.intro}>
          求职意向：<strong>移动端开发工程师</strong>。现居常驻：<strong>{contact.location ?? '江浙沪'}</strong>，期望工作地：<strong>{contact.targetCity ?? '全国可飞'}</strong>。
        </p>

        {/* 核心联络卡片 (2x2 对称美观栅格) */}
        <div className={styles.cardsGrid}>
          {/* 邮箱卡片 */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Icon name="mail" size={22} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardLabel}>电子邮箱 (钉钉企业邮)</span>
              <a
                href={`mailto:${contact.email}`}
                className={styles.cardValue}
                title="点击直接唤起系统邮件客户端发送"
              >
                {contact.email}
              </a>
            </div>
            <button
              type="button"
              className={styles.copyBtn}
              onClick={handleCopyEmail}
              title="复制邮箱地址"
              aria-label="复制邮箱"
            >
              <Icon name="copy" size={14} />
              <span>复制</span>
            </button>
          </div>

          {/* 电话卡片 */}
          {contact.phone && (
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Icon name="phone" size={22} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>联系电话</span>
                <a
                  href={`tel:${contact.phone}`}
                  className={styles.cardValue}
                  title="点击拨打电话"
                >
                  {contact.phone}
                </a>
              </div>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={handleCopyPhone}
                title="复制联系电话"
                aria-label="复制电话"
              >
                <Icon name="copy" size={14} />
                <span>复制</span>
              </button>
            </div>
          )}

          {/* GitHub 官方主页 */}
          <a
            href="https://github.com/Akiha678"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles.linkCard}`}
            title="访问 GitHub 主页"
          >
            <div className={styles.cardIcon}>
              <Icon name="github" size={22} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardLabel}>GitHub Profile</span>
              <span className={styles.cardValue}>github.com/Akiha678</span>
            </div>
            <Icon name="arrow-up-right" size={18} className={styles.arrowIcon} />
          </a>

          {/* 稀土掘金专栏 */}
          <a
            href="https://juejin.cn/user/1502355831661744"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles.linkCard}`}
            title="访问稀土掘金技术专栏"
          >
            <div className={styles.cardIcon}>
              <Icon name="document" size={22} />
            </div>
            <div className={styles.cardBody}>
              <span className={styles.cardLabel}>稀土掘金技术博客</span>
              <span className={styles.cardValue}>juejin.cn/user/1502355831661744</span>
            </div>
            <Icon name="arrow-up-right" size={18} className={styles.arrowIcon} />
          </a>
        </div>
        {/* 居中座右铭卡片 */}
        <div className={styles.quoteTip}>
          <span className={styles.tipDot} />
          <span>“{profile.tagline}” —— 踏实写代码，做出惊艳的移动端产品！</span>
        </div>
      </div>
    </Section>
  )
}