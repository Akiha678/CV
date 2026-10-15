import { Section, Icon } from '@/components/ui'
import type { Education, Experience as ExperienceType, Honor } from '@/types/resume'
import styles from './Experience.module.css'

export interface ExperienceProps {
  experiences: ExperienceType[]
  education: Education[]
  honors?: Honor[]
}

/**
 * 现代研发经历与荣誉资质时间轴组件 (CSS Modules)
 */
export function Experience({ experiences, education, honors = [] }: ExperienceProps) {
  return (
    <Section
      id="experience"
      title="工作经历与专业沉淀"
      subtitle="深入企业移动端开发实战，涵盖 BLE 硬件联动、瓦片地图离线渲染与大型自适应客户端架构。"
      badge="Work & Career"
      fullWidth
    >
      <div className={styles.wrapper}>
        {/* 时间轴主体：工作实习经历 */}
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
                        <span className={styles.statusChip}>在职实习</span>
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
                    {exp.bullets.map((point, i) => {
                      const colonIdx = point.indexOf('：')
                      if (colonIdx > 0 && colonIdx < 14) {
                        const title = point.slice(0, colonIdx)
                        const desc = point.slice(colonIdx + 1)
                        return (
                          <li key={i}>
                            <strong>{title}：</strong>
                            <span>{desc}</span>
                          </li>
                        )
                      }
                      return <li key={i}>{point}</li>
                    })}
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

        {/* 荣誉证书、竞赛奖项与专利软著 */}
        {honors.length > 0 && (
          <div className={styles.honorsBlock}>
            <div className={styles.honorsHeader}>
              <Icon name="star" size={18} className={styles.honorsIcon} />
              <h3>荣誉奖项、发明专利与软件著作权</h3>
            </div>

            <div className={styles.honorsGrid}>
              {honors.map((h) => (
                <div key={h.id} className={styles.honorCard}>
                  <span className={styles.honorDate}>{h.date}</span>
                  <span className={styles.honorTitle}>{h.title}</span>
                  {h.detail && <p className={styles.honorDetail}>{h.detail}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

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
                    <span className={styles.eduMajor}>{edu.major}（{edu.degree}）</span>
                  </div>
                  <div className={styles.eduSub}>
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