import { useState } from 'react'
import { resumeData } from '@/data/resume'
import { Section, Icon } from '@/components/ui'
import './Contact.css'

/**
 * 现代主流联系区块
 * 涵盖一键复制邮箱、GitHub 主页直达与快速留言交互
 */
export function Contact() {
  const { profile, contact } = resumeData
  const [copied, setCopied] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    // 模拟发送成功
    setFormSent(true)
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
      <div className="contact__container">
        {/* 左侧：即时联络通道卡片 */}
        <div className="contact__info">
          <p className="contact__intro">
            无论您是有客户端/跨平台架构研发机会、音视频底层合作，还是想深入交流技术，欢迎随时与我联络！
          </p>

          <div className="contact__cards">
            {/* 邮箱卡片 */}
            <div className="contact__card">
              <div className="contact__card-icon">
                <Icon name="mail" size={20} />
              </div>
              <div className="contact__card-body">
                <span className="contact__card-label">电子邮箱</span>
                <a href={`mailto:${contact.email}`} className="contact__card-value">
                  {contact.email}
                </a>
              </div>
              <button
                type="button"
                className="contact__copy-btn"
                onClick={handleCopyEmail}
                title="复制邮箱"
                aria-label="复制邮箱"
              >
                <Icon name={copied ? 'check' : 'copy'} size={16} />
                <span>{copied ? '已复制' : '复制'}</span>
              </button>
            </div>

            {/* GitHub 官方主页 */}
            <a
              href="https://github.com/Akiha678"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card contact__card--link"
            >
              <div className="contact__card-icon">
                <Icon name="github" size={20} />
              </div>
              <div className="contact__card-body">
                <span className="contact__card-label">GitHub Profile</span>
                <span className="contact__card-value">github.com/Akiha678</span>
              </div>
              <Icon name="arrow-up-right" size={16} className="contact__arrow-icon" />
            </a>

            {/* 实验室与常驻地 */}
            <div className="contact__meta-row">
              <div className="contact__mini-chip">
                <Icon name="location" size={15} />
                <span>{contact.location}</span>
              </div>
              <div className="contact__mini-chip">
                <Icon name="layers" size={15} />
                <span>研发实验室：Smartlab411</span>
              </div>
            </div>
          </div>

          <div className="contact__quote-tip">
            <span className="contact__tip-dot" />
            <span>“{profile.tagline}” —— 代码即生活，期待与卓越同行！</span>
          </div>
        </div>

        {/* 右侧：快速在线致信表单 */}
        <div className="contact__form-panel">
          <h3 className="contact__form-title">
            <Icon name="sparkles" size={18} className="contact__form-title-icon" />
            发送快速留言
          </h3>

          {formSent ? (
            <div className="contact__success-state">
              <div className="contact__success-icon">
                <Icon name="check" size={28} />
              </div>
              <h4>留言已就绪！</h4>
              <p>感谢您的来信，消息已记录并准备直通 SeanChen 的工作信箱。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__field">
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

              <div className="contact__field">
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

              <div className="contact__field">
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

              <button type="submit" className="contact__submit-btn">
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