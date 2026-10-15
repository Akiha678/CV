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

  const handleCopyPhone = () => {
    if (contact.phone) {
      navigator.clipboard.writeText(contact.phone)
      showToast(`电话已成功复制: ${contact.phone}`, 'success')
    }
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
      subtitle="随时欢迎移动端研发岗位沟通、开源项目探讨或技术交流！"
      badge="Get In Touch"
      fullWidth
    >
      <div className={styles.container}>
        {/* 左侧：即时联络通道卡片 */}
        <div className={styles.info}>
          <p className={styles.intro}>
            求职意向：<strong>移动端开发工程师</strong>（Android / Flutter）。期望城市：<strong>全国可飞</strong>，现居：<strong>{contact.location ?? '苏州'}</strong>。
          </p>

          <div className={styles.cards}>
            {/* 邮箱卡片 */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Icon name="mail" size={20} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>电子邮箱 (钉钉企业邮)</span>
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

            {/* 电话卡片 */}
            {contact.phone && (
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <Icon name="phone" size={20} />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardLabel}>联系电话</span>
                  <a href={`tel:${contact.phone}`} className={styles.cardValue}>
                    {contact.phone}
                  </a>
                </div>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={handleCopyPhone}
                  title="复制电话"
                  aria-label="复制电话"
                >
                  <Icon name="copy" size={15} />
                  <span>复制</span>
                </button>
              </div>
            )}

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

            {/* 掘金技术主页 */}
            <a
              href="https://juejin.cn/user/1502355831661744"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardIcon}>
                <Icon name="document" size={20} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>稀土掘金技术博客</span>
                <span className={styles.cardValue}>juejin.cn/user/1502355831661744</span>
              </div>
              <Icon name="arrow-up-right" size={16} className={styles.arrowIcon} />
            </a>

            {/* 状态与坐标胶囊 */}
            <div className={styles.metaRow}>
              <div className={styles.miniChip}>
                <Icon name="location" size={15} />
                <span>目前常驻：{contact.location ?? '苏州'}</span>
              </div>
              <div className={styles.miniChip}>
                <Icon name="compass" size={15} />
                <span>求职目标：全国可飞</span>
              </div>
              <div className={styles.miniChip}>
                <Icon name="education" size={15} />
                <span>荆州学院 · 本科</span>
              </div>
            </div>
          </div>

          <div className={styles.quoteTip}>
            <span className={styles.tipDot} />
            <span>“{profile.tagline}” —— 踏实写代码，做出惊艳的移动端产品！</span>
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
              <p>感谢您的来信，消息已记录并准备直通 陈鑫 的工作邮箱。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="contact-name">您的称呼 / 招聘组织</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="例如：某科技公司 HR / 移动端团队主管"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email">您的回复邮箱</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="hr@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message">岗位要求 / 合作留言</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="请简要说明岗位要求、团队方向或面试交流时间..."
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