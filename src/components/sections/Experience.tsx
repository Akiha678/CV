import { resumeData } from '@/data/resume'
import { Section, Icon } from '@/components/ui'
import './Experience.css'

/**
 * 现代主流工作与研发经历时间轴组件
 */
export function Experience() {
  const { experiences, education } = resumeData

  return (
    <Section
      id="experience"
      title="研发经历与实践沉淀"
      subtitle="Engineering Journey, Research Experience & Milestones"
      badge="Career & Timeline"
      fullWidth
    >
      <div className="experience__wrapper">
        {/* 时间轴主体 */}
        <div className="experience__timeline">
          {experiences.map((exp) => (
            <article key={exp.id} className="experience__card">
              {/* 时间轴节点与连线 */}
              <div className="experience__node">
                <span className={`experience__pin ${exp.current ? 'is-current' : ''}`} />
              </div>

              <div className="experience__content">
                <header className="experience__header">
                  <div className="experience__title-box">
                    <h3 className="experience__role">{exp.role}</h3>
                    <div className="experience__org-row">
                      <span className="experience__company">{exp.company}</span>
                      {exp.current && (
                        <span className="experience__status-chip">进行中</span>
                      )}
                    </div>
                  </div>

                  <span className="experience__date-badge">
                    <Icon name="briefcase" size={13} />
                    <span>
                      {exp.startDate} – {exp.endDate ?? '至今'}
                    </span>
                  </span>
                </header>

                <p className="experience__summary">{exp.summary}</p>

                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className="experience__bullets">
                    {exp.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="experience__tags">
                    {exp.highlights.map((tag) => (
                      <span key={tag} className="experience__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* 教育背景卡片 */}
        {education.length > 0 && (
          <div className="experience__edu-block">
            <div className="experience__edu-header">
              <Icon name="education" size={18} className="experience__edu-icon" />
              <h3>教育背景与专业训练</h3>
            </div>

            <div className="experience__edu-grid">
              {education.map((edu) => (
                <div key={edu.id} className="experience__edu-card">
                  <div className="experience__edu-main">
                    <span className="experience__edu-school">{edu.school}</span>
                    <span className="experience__edu-major">{edu.major}</span>
                  </div>
                  <div className="experience__edu-sub">
                    <span className="experience__edu-degree">{edu.degree}</span>
                    <span className="experience__edu-date">
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="experience__edu-desc">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}