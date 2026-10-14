import { Section, Icon } from '@/components/ui'
import type { Education, Experience as ExperienceType } from '@/types/resume'
import styles from './Experience.module.css'

export interface ExperienceProps {
  experiences: ExperienceType[]
  education: Education[]
}

/**
 * 现代研发经历时间轴组件 (CSS Modules)
 */
export function Experience({ experiences, education }: ExperienceProps) {
  return (
    <Section
      id="experience"
      title="研发经历与实践沉淀"
      subtitle="Engineering Journey, Research Experience & Milestones"
      badge="Career & Timeline"
      fullWidth
    >
      <div className={styles.wrapper}>
        {/* 时间轴主体 */}
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <article key={exp.id} className={styles.card}>
              <div className={styles.node}>
                <span className={`${styles.pin} ${exp.current ? styles.isCurrent : ''}`} />
              </div>

              <div className={styles.content}>
                <header className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.orgRow}>
                      <span className={styles.company}>{exp.company}</span>
                      {exp.current && (
                        <span className={styles.statusChip}>进行中</span>
                      )}
                    </div>
                  </div>

                  <span className={styles.dateBadge}>
                    <Icon name="briefcase" size={13} />
                    <span>
                      {exp.startDate} – {exp.endDate ?? '至今'}
                    </span>
                  </span>
                </header>

                <p className={styles.summary}>{exp.summary}</p>

                {exp.bullets && exp.bullets.length > 0 && (
                  <ul className={styles.bullets}>
                    {exp.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <div className={styles.tags}>
                    {exp.highlights.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* 教育背景 */}
        {education.length > 0 && (
          <div className={styles.eduBlock}>
            <div className={styles.eduHeader}>
              <Icon name="education" size={18} className={styles.eduIcon} />
              <h3>教育背景与专业训练</h3>
            </div>

            <div className={styles.eduGrid}>
              {education.map((edu) => (
                <div key={edu.id} className={styles.eduCard}>
                  <div className={styles.eduMain}>
                    <span className={styles.eduSchool}>{edu.school}</span>
                    <span className={styles.eduMajor}>{edu.major}</span>
                  </div>
                  <div className={styles.eduSub}>
                    <span className={styles.eduDegree}>{edu.degree}</span>
                    <span className={styles.eduDate}>
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  {edu.description && (
                    <p className={styles.eduDesc}>{edu.description}</p>
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