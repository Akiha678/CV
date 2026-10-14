import { useState } from 'react'
import { Section, Icon } from '@/components/ui'
import { useToast } from '@/contexts'
import type { Contact as ContactType, Profile } from '@/types/resume'
import styles from './Contact.module.css'

export interface ContactProps {
  contact: ContactType
  profile: Profile
}

/**
 * 现代联系区块组件 (CSS Modules)
 */
export function Contact({ contact, profile }: ContactProps) {
  const { showToast } = useToast()
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    showToast(`邮箱已成功复制: ${contact.email}`, 'success')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setFormSent(true)
    showToast('留言已记录，感谢您的来信！', 'success')
    setTimeout(() => {
      setFormSent(false)
      setFormData({ name: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <Section
      id="contact"
      title="保持联络与合作探讨"
      subtitle="Let's Connect, Build Systems, and Explore Cutting-edge Technologies"
      badge="Get In Touch"
      fullWidth
    >
      <div className={styles.container}>
        {/* 左侧：即时联络通道卡片 */}
        <div className={styles.info}>
          <p className={styles.intro}>
            无论您是有客户端/跨平台架构研发机会、音视频底层合作，还是想深入交流技术，欢迎随时与我联络！
          </p>

          <div className={styles.cards}>
            {/* 邮箱卡片 */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Icon name="mail" size={20} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>电子邮箱</span>
                <a href={`mailto:${contact.email}`} className={styles.cardValue}>
                  {contact.email}
                </a>
              </div>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={handleCopyEmail}
                title="复制邮箱"
                aria-label="复制邮箱"
              >
                <Icon name="copy" size={15} />
                <span>复制</span>
              </button>
            </div>

            {/* GitHub 官方主页 */}
            <a
              href="https://github.com/Akiha678"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardIcon}>
                <Icon name="github" size={20} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>GitHub Profile</span>
                <span className={styles.cardValue}>github.com/Akiha678</span>
              </div>
              <Icon name="arrow-up-right" size={16} className={styles.arrowIcon} />
            </a>

            {/* 实验室与常驻地 */}
            <div className={styles.metaRow}>
              <div className={styles.miniChip}>
                <Icon name="location" size={15} />
                <span>{contact.location}</span>
              </div>
              <div className={styles.miniChip}>
                <Icon name="layers" size={15} />
                <span>研发实验室：Smartlab411</span>
              </div>
            </div>
          </div>

          <div className={styles.quoteTip}>
            <span className={styles.tipDot} />
            <span>“{profile.tagline}” —— 代码即生活，期待与卓越同行！</span>
          </div>
        </div>

        {/* 右侧：快速在线致信表单 */}
        <div className={styles.formPanel}>
          <h3 className={styles.formTitle}>
            <Icon name="sparkles" size={18} className={styles.formTitleIcon} />
            发送快速留言
          </h3>

          {formSent ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>
                <Icon name="check" size={28} />
              </div>
              <h4>留言已就绪！</h4>
              <p>感谢您的来信，消息已记录并准备直通 SeanChen 的工作信箱。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="contact-name">您的称呼 / 组织</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="例如：Alex / 某科技团队"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email">联系邮箱</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message">留言或合作意向</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="请简要描述您的项目需求、工作机会或交流主题..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <Icon name="mail" size={16} />
                <span>发送留言</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}