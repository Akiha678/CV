import { resumeData } from '@/data/resume'
import { Section, Icon } from '@/components/ui'
import './about.css'

/**
 * 关于区块
 */
export function About() {
  const { profile, contact } = resumeData

  return (
    <Section id="about" title="关于我" subtitle="About">
      <p className="about__intro">{profile.bio}</p>
      <ul className="about__meta">
        <li>
          <Icon name="location" size={16} />
          <span>{contact.location}</span>
        </li>
        <li>
          <Icon name="mail" size={16} />
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <Icon name="website" size={16} />
          <span>开源与写作爱好者</span>
        </li>
      </ul>
    </Section>
  )
}