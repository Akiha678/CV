import { useState } from 'react'
import { Section, Icon } from '@/components/ui'
import { useToast } from '@/contexts'
import { contactConfig } from '@/config/contact'
import type { Contact as ContactType, Profile } from '@/types/resume'
import styles from './Contact.module.css'

export interface ContactProps {
  contact: ContactType
  profile: Profile
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'fallback'

const QUICK_ROLES = [
  '移动端开发工程师（Android / Flutter）',
  'Android 原生架构',
  'Flutter 跨平台开发',
  '实习 / 校招全职沟通',
]

/**
 * 现代生产级联系区块 (真实可用多通道直达系统)
 * - 通道 1: Web3Forms API 纯前端直达钉钉企业邮箱 (免部署后端)
 * - 通道 2: mailto 协议一键自动编码并唤起系统/钉钉邮件客户端
 * - 通道 3: 一键复制规范求职沟通函草稿，便于粘贴到微信/钉钉/企业微信
 */
export function Contact({ contact, profile }: ContactProps) {
  const { showToast } = useToast()
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: QUICK_ROLES[0],
    message: '',
  })

  // 生成格式化求职沟通函模板
  const generateMailContent = () => {
    return `陈鑫你好：

我是来自【${formData.name.trim() || '某企业招聘团队'}】的沟通负责人。
我的联系方式：${formData.email.trim() || '见本信'}
意向岗位：${formData.role}

留言内容 / 岗位职责与沟通事宜：
${formData.message.trim() || '（在此交流岗位详情、团队业务方向或面试时间）'}

期待与你的进一步沟通！
`
  }

  // 1. 复制邮箱
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email)
    showToast(`邮箱已成功复制: ${contact.email}`, 'success')
  }

  // 2. 复制电话
  const handleCopyPhone = () => {
    if (contact.phone) {
      navigator.clipboard.writeText(contact.phone)
      showToast(`电话已成功复制: ${contact.phone}`, 'success')
    }
  }

  // 3. 原生 mailto: 协议唤起客户端发信
  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(`${contactConfig.subjectPrefix} - ${formData.name || '移动端研发交流'}`)
    const body = encodeURIComponent(generateMailContent())
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    showToast('正在唤起本地邮件客户端...', 'info')
  }

  // 4. 一键复制信件草稿（直接粘贴到微信/钉钉/企业微信）
  const handleCopyDraft = () => {
    if (!formData.name.trim() && !formData.message.trim()) {
      showToast('建议先填写您的称呼和留言内容', 'warning')
    }
    const draft = generateMailContent()
    navigator.clipboard.writeText(draft)
    showToast('求职邀请函草稿已复制到剪贴板，可直接粘贴发送！', 'success')
  }

  // 5. 真实表单提交处理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('请完整填写称呼、联系方式与留言内容', 'warning')
      return
    }

    setStatus('submitting')

    // 如果配置了 Web3Forms Key，真正发送网络请求至 Web3Forms 转发到钉钉邮箱
    if (contactConfig.web3formsKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: contactConfig.web3formsKey,
            subject: `${contactConfig.subjectPrefix} - 来自 ${formData.name}`,
            from_name: `${formData.name} (简历在线访客)`,
            email: formData.email,
            message: `意向岗位：${formData.role}\n\n留言内容：\n${formData.message}`,
          }),
        })

        const result = await response.json()
        if (result.success) {
          setStatus('success')
          setStatusMsg('留言已通过在线网关成功发送至 陈鑫 的钉钉工作邮箱！')
          showToast('邮件已成功送达！', 'success')
          return
        } else {
          throw new Error(result.message || '发送失败')
        }
      } catch (err) {
        console.warn('Web3Forms delivery failed, using client mailto fallback', err)
        setStatus('fallback')
        setStatusMsg('在线表单网关临时受限，已自动为您开启客户端直连通道与信件草稿备份。')
        showToast('已切换至邮件客户端与草稿备份通道', 'warning')
        handleOpenMailClient()
      }
    } else {
      // 未配置第三方 Access Key 时，采用客户端原生唤起与草稿双轨直发
      setStatus('fallback')
      setStatusMsg('信件已准备就绪！已为您开启客户端邮件直连，并可一键复制结构化信件草稿。')
      handleOpenMailClient()
    }
  }

  const handleResetForm = () => {
    setStatus('idle')
    setStatusMsg('')
    setFormData({
      name: '',
      email: '',
      role: QUICK_ROLES[0],
      message: '',
    })
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
            求职意向：<strong>移动端开发工程师</strong>（Android / Flutter）。现居常驻：<strong>{contact.location ?? '苏州'}</strong>，期望城市：<strong>{contact.targetCity ?? '全国可飞'}</strong>。
          </p>

          <div className={styles.cards}>
            {/* 邮箱卡片 */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <Icon name="mail" size={20} />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardLabel}>电子邮箱 (钉钉企业邮)</span>
                <a href={`mailto:${contact.email}`} className={styles.cardValue} title="点击通过默认邮件客户端写信">
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
                  <a href={`tel:${contact.phone}`} className={styles.cardValue} title="点击拨打电话">
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
              title="访问 GitHub 主页"
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
              title="访问稀土掘金技术专栏"
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
                <span>求职目标：{contact.targetCity ?? '全国可飞'}</span>
              </div>
              <div className={styles.miniChip}>
                <Icon name="education" size={15} />
                <span>{profile.school ?? '荆州学院'} · 本科</span>
              </div>
            </div>
          </div>

          <div className={styles.quoteTip}>
            <span className={styles.tipDot} />
            <span>“{profile.tagline}” —— 踏实写代码，做出惊艳的移动端产品！</span>
          </div>
        </div>

        {/* 右侧：多通道真实可用留言面板 */}
        <div className={styles.formPanel}>
          <h3 className={styles.formTitle}>
            <Icon name="sparkles" size={18} className={styles.formTitleIcon} />
            <span>直接发送留言 / 求职邀请</span>
          </h3>

          {status === 'success' || status === 'fallback' ? (
            <div className={styles.feedbackState}>
              <div className={status === 'success' ? styles.feedbackIconSuccess : styles.feedbackIconWarn}>
                <Icon name={status === 'success' ? 'check' : 'mail'} size={28} />
              </div>
              <h4 className={styles.feedbackTitle}>
                {status === 'success' ? '信件已送达！' : '信件已准备就绪'}
              </h4>
              <p className={styles.feedbackDesc}>{statusMsg}</p>

              <div className={styles.draftBox}>
                {generateMailContent()}
              </div>

              <div className={styles.feedbackActions}>
                <button
                  type="button"
                  className={styles.submitBtn}
                  onClick={handleCopyDraft}
                >
                  <Icon name="copy" size={15} />
                  <span>复制此信件内容</span>
                </button>

                <button
                  type="button"
                  className={styles.outlineBtn}
                  onClick={handleOpenMailClient}
                >
                  <Icon name="mail" size={15} />
                  <span>再次唤起邮件客户端</span>
                </button>

                <button
                  type="button"
                  className={styles.outlineBtn}
                  onClick={handleResetForm}
                >
                  <span>撰写新留言</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="contact-name">您的称呼 / 组织名称 *</label>
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
                <label htmlFor="contact-email">您的回复邮箱或电话 *</label>
                <input
                  id="contact-email"
                  type="text"
                  placeholder="hr@example.com 或 手机号"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-role">沟通岗位 / 合作类型</label>
                <input
                  id="contact-role"
                  type="text"
                  placeholder="岗位类型"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
                <div className={styles.roleChips}>
                  {QUICK_ROLES.map((r) => (
                    <button
                      type="button"
                      key={r}
                      className={`${styles.roleChip} ${formData.role === r ? styles.roleChipActive : ''}`}
                      onClick={() => setFormData({ ...formData, role: r })}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message">岗位要求 / 沟通留言 *</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="请简要说明岗位要求、团队业务方向或面试交流时间..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className={styles.actionGroup}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'submitting'}
                  title="提交并发送信件至陈鑫工作邮箱"
                >
                  <Icon name="mail" size={16} />
                  <span>{status === 'submitting' ? '正在发送中...' : '立即发送信件'}</span>
                </button>

                <button
                  type="button"
                  className={styles.outlineBtn}
                  onClick={handleOpenMailClient}
                  title="使用本机默认邮箱客户端发送"
                >
                  <Icon name="arrow-up-right" size={15} />
                  <span>唤起客户端</span>
                </button>

                <button
                  type="button"
                  className={styles.outlineBtn}
                  onClick={handleCopyDraft}
                  title="生成规范求职邀请信并复制到剪贴板"
                >
                  <Icon name="copy" size={15} />
                  <span>复制草稿</span>
                </button>
              </div>

              <div className={styles.helperTip}>
                <Icon name="sparkles" size={13} style={{ color: 'var(--color-primary)' }} />
                <span>支持在线直发、系统邮件客户端唤起以及一键复制草稿多重保障，确保 100% 真实可达。</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}