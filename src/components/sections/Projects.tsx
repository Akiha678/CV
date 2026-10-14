import { useState } from 'react'
import { Section, Icon } from '@/components/ui'
import type { Project } from '@/types/resume'
import styles from './Projects.module.css'

export interface ProjectsProps {
  projects: Project[]
}

type ProjectTypeTab = 'all' | 'internship' | 'opensource'

const LANGUAGE_COLORS: Record<string, string> = {
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  'Dart / Kotlin': '#00B4AB',
  'Kotlin / Dart': '#00B4AB',
  'Rust / Flutter': '#DEA584',
  'C++': '#F34B7D',
  TypeScript: '#3178C6',
}

/**
 * 现代项目展示组件 (区分 实习项目 与 GitHub开源项目)
 */
export function Projects({ projects }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<ProjectTypeTab>('all')

  const internshipProjects = projects.filter((p) => p.projectType === 'internship')
  const openSourceProjects = projects.filter((p) => p.projectType === 'opensource')

  const showInternship = activeTab === 'all' || activeTab === 'internship'
  const showOpenSource = activeTab === 'all' || activeTab === 'opensource'

  return (
    <Section
      id="projects"
      title="项目经历与开源作品"
      subtitle="按业务维度清晰拆分为「企业实习项目」与「GitHub 开源生态」，全面展现移动端工程落地能力。"
      badge="Projects & OpenSource"
      fullWidth
    >
      {/* 顶部一类切换器 */}
      <div className={styles.typeTabs}>
        <button
          type="button"
          className={`${styles.typeTab} ${activeTab === 'all' ? styles.typeTabActive : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <span>全部项目</span>
          <span className={styles.typeTabBadge}>{projects.length}</span>
        </button>

        <button
          type="button"
          className={`${styles.typeTab} ${activeTab === 'internship' ? styles.typeTabActive : ''}`}
          onClick={() => setActiveTab('internship')}
        >
          <Icon name="briefcase" size={15} />
          <span>实习项目 (简历真实落地)</span>
          <span className={styles.typeTabBadge}>{internshipProjects.length}</span>
        </button>

        <button
          type="button"
          className={`${styles.typeTab} ${activeTab === 'opensource' ? styles.typeTabActive : ''}`}
          onClick={() => setActiveTab('opensource')}
        >
          <Icon name="github" size={15} />
          <span>开源项目 (GitHub 生态)</span>
          <span className={styles.typeTabBadge}>{openSourceProjects.length}</span>
        </button>
      </div>

      {/* 1. 实习项目列表 */}
      {showInternship && (
        <div style={{ marginBottom: showOpenSource ? 'var(--space-12)' : 0 }}>
          {activeTab === 'all' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-5)' }}>
              <Icon name="briefcase" size={20} style={{ color: 'var(--color-primary)' }} />
              <h3 style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 800 }}>企业实习项目经历</h3>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>工业级软硬件联动与自适应分析软件</span>
            </div>
          )}

          <div className={`${styles.grid} ${styles.gridInternship}`}>
            {internshipProjects.map((project) => (
              <article key={project.id} className={styles.internshipCard}>
                <header className={styles.internshipHeader}>
                  <div className={styles.internshipTitleRow}>
                    <h3 className={styles.internshipName}>{project.name}</h3>
                    {project.company && (
                      <span className={styles.internshipCompany}>@{project.company}</span>
                    )}
                    {project.role && (
                      <span className={styles.internshipRoleBadge}>{project.role}</span>
                    )}
                  </div>

                  {project.period && (
                    <span className={styles.internshipPeriod}>
                      <Icon name="briefcase" size={13} />
                      <span>{project.period}</span>
                    </span>
                  )}
                </header>

                <p className={styles.internshipDesc}>{project.description}</p>

                {/* 核心职责功能（三栏卡片展示） */}
                {project.responsibilities && project.responsibilities.length > 0 && (
                  <div className={styles.respList}>
                    {project.responsibilities.map((resp, i) => (
                      <div key={i} className={styles.respItem}>
                        <span className={styles.respTitle}>{resp.title}</span>
                        <p className={styles.respContent}>{resp.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* 关键技术栈标签 */}
                <footer className={styles.cardFooter}>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={`${styles.tag} ${styles.tagPrimary}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* 2. 开源项目列表 */}
      {showOpenSource && (
        <div>
          {activeTab === 'all' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-5)' }}>
              <Icon name="github" size={20} style={{ color: 'var(--color-primary)' }} />
              <h3 style={{ margin: 0, fontSize: 'var(--text-xl)', fontWeight: 800 }}>GitHub 开源生态实践</h3>
              <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>源码完全公开可查 · 持续维护</span>
            </div>
          )}

          <div className={`${styles.grid} ${styles.gridOpenSource}`}>
            {openSourceProjects.map((project) => {
              const langColor = project.language ? (LANGUAGE_COLORS[project.language] || '#3b82f6') : '#3b82f6'

              return (
                <article key={project.id} className={styles.openCard}>
                  <header className={styles.openCardHeader}>
                    <div className={styles.openHeaderLeft}>
                      {project.language && (
                        <div className={styles.langPill}>
                          <span
                            className={styles.langDot}
                            style={{ backgroundColor: langColor }}
                          />
                          <span>{project.language}</span>
                        </div>
                      )}
                      {project.stars != null && project.stars > 0 && (
                        <span className={styles.starBadge}>
                          <Icon name="star" size={13} />
                          <span>{project.stars}</span>
                        </span>
                      )}
                    </div>

                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkBtn}
                        aria-label={`查看 ${project.name} GitHub 源码`}
                        title="直达 GitHub 仓库"
                      >
                        <Icon name="github" size={17} />
                      </a>
                    )}
                  </header>

                  <div className={styles.openCardBody}>
                    <h4 className={styles.openName}>{project.name}</h4>
                    <p className={styles.openDesc}>{project.description}</p>

                    {project.details && project.details.length > 0 && (
                      <ul className={styles.openDetails}>
                        {project.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <footer className={styles.cardFooter}>
                    <div className={styles.tags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </footer>
                </article>
              )
            })}
          </div>
        </div>
      )}
    </Section>
  )
}