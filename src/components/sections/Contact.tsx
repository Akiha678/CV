import { resumeData } from '@/data/resume'
import { Section, Icon } from '@/components/ui'
import './Contact.css'

/**
 * 联系方式区块
 */
export function Contact() {
  const { profile, contact } = resumeData

  return (
    <Section id="contact" title="联系我" subtitle="Let's Connect">
      <div className="contact">
        <p className="contact__intro">
          如果你对我的经历或项目感兴趣，欢迎通过以下方式联系我。很乐意聊聊前端、架构或合作机会。
        </p>

        <div className="contact__cards">
          <a className="contact__card" href={`mailto:${contact.email}`}>
            <span className="contact__icon">
              <Icon name="mail" size={22} />
            </span>
            <span className="contact__label">Email</span>
            <span className="contact__value">{contact.email}</span>
          </a>

          {contact.phone && (
            <a className="contact__card" href={`tel:${contact.phone}`}>
              <span className="contact__icon">
                <Icon name="phone" size={22} />
              </span>
              <span className="contact__label">电话</span>
              <span className="contact__value">{contact.phone}</span>
            </a>
          )}

          {contact.location && (
            <div className="contact__card">
              <span className="contact__icon">
                <Icon name="location" size={22} />
              </span>
              <span className="contact__label">城市</span>
              <span className="contact__value">{contact.location}</span>
            </div>
          )}
        </div>

        <div className="contact__links">
          <h4>也可通过以下平台了解我</h4>
          <div className="contact__platforms">
            {contact.webs.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                <Icon name={profile.links.find((l) => l.url === link.url)?.icon as never ?? 'website'} size={18} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}