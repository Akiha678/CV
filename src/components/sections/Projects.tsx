import { useState } from 'react'
import { Section, Icon } from '@/components/ui'
import type { Project } from '@/types/resume'
import styles from './Projects.module.css'

export interface ProjectsProps {
  projects: Project[]
}

type CategoryFilter = 'All' | 'Mobile' | 'CrossPlatform' | 'Desktop' | 'Web' | 'Library'

const CATEGORY_NAMES: Record<CategoryFilter, string> = {
  All: '全部项目',
  Mobile: '移动原生 (Android / iOS)',
  CrossPlatform: '跨平台 (Flutter + Rust)',
  Desktop: '桌面端 (Qt / C++)',
  Library: '架构组件库',
  Web: 'Web & 全栈',
}

const LANGUAGE_COLORS: Record<string, string> = {
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  'Rust / Flutter': '#DEA584',
  Rust: '#DEA584',
  'C++': '#F34B7D',
  TypeScript: '#3178C6',
}

/**
 * 现代开源项目展示组件 (CSS Modules)
 */
export function Projects({ projects }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true
    return project.category === activeCategory
  })

  return (
    <Section
      id="projects"
      title="精选开源项目与架构实践"
      subtitle="Featured Open Source Projects & Architecture Implementations"
      badge="Open Source & Works"
      fullWidth
    >
      {/* 分类过滤器 */}
      <div className={styles.filterBar}>
        {(Object.keys(CATEGORY_NAMES) as CategoryFilter[]).map((cat) => {
          const count = cat === 'All'
            ? projects.length
            : projects.filter((p) => p.category === cat).length

          if (cat !== 'All' && count === 0) return null

          return (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{CATEGORY_NAMES[cat]}</span>
              <span className={styles.filterCount}>{count}</span>
            </button>
          )
        })}
      </div>

      {/* 项目卡片网格 */}
      <div className={styles.grid}>
        {filteredProjects.map((project) => {
          const langColor = project.language ? (LANGUAGE_COLORS[project.language] || '#3b82f6') : '#3b82f6'

          return (
            <article key={project.id} className={styles.card}>
              <header className={styles.cardHeader}>
                <div className={styles.headerLeft}>
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

                <div className={styles.links}>
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                      aria-label={`查看 ${project.name} 源码`}
                      title="查看 GitHub 仓库"
                    >
                      <Icon name="github" size={17} />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                      aria-label={`打开 ${project.name} 项目`}
                      title="访问主页 / 演示"
                    >
                      <Icon name="external" size={17} />
                    </a>
                  )}
                </div>
              </header>

              <div className={styles.cardBody}>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>

                {project.details && project.details.length > 0 && (
                  <ul className={styles.details}>
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>

              {project.tags.length > 0 && (
                <footer className={styles.cardFooter}>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </footer>
              )}
            </article>
          )
        })}
      </div>
    </Section>
  )
}