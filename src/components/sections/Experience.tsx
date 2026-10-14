import { resumeData } from '@/data/resume'
import { Section } from '@/components/ui'
import './Experience.css'

/**
 * 工作经验区块
 */
export function Experience() {
  const { experiences, education } = resumeData

  return (
    <Section id="experience" title="工作经验" subtitle="Experience">
      <div className="experience__list">
        {experiences.map((exp) => (
          <article key={exp.id} className="experience__item">
            <header className="experience__header">
              <h3 className="experience__role">{exp.role}</h3>
              <span className="experience__date">
                {exp.startDate} – {exp.endDate ?? '至今'}
              </span>
            </header>
            <p className="experience__company">{exp.company}</p>
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
          </article>
        ))}
      </div>

      {/* 教育背景（简短附加） */}
      {education.length > 0 && (
        <div className="experience__education">
          <h3>教育背景</h3>
          {education.map((edu) => (
            <p key={edu.id}>
              {edu.school} · {edu.major}
              {degree(edu.degree)}
            </p>
          ))}
        </div>
      )}
    </Section>
  )

  function degree(value: string | undefined) {
    return value ? `（${value}）` : ''
  }
}