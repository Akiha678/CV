import { useState } from 'react'
import { resumeData } from '@/data/resume'
import { Section, Icon } from '@/components/ui'
import type { Project } from '@/types/resume'
import './Projects.css'

type CategoryFilter = 'All' | 'Mobile' | 'CrossPlatform' | 'Desktop' | 'Web' | 'Library'

const CATEGORY_NAMES: Record<CategoryFilter, string> = {
  All: '全部项目',
  Mobile: '移动原生 (Android / iOS)',
  CrossPlatform: '跨平台 (Flutter + Rust)',
  Desktop: '桌面端 (Qt / C++)',
  Library: '架构组件库',
  Web: 'Web & 全栈',
}

// 语言专属色标映射
const LANGUAGE_COLORS: Record<string, string> = {
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  'Rust / Flutter': '#DEA584',
  Rust: '#DEA584',
  'C++': '#F34B7D',
  TypeScript: '#3178C6',
}

/**
 * 现代主流开源项目展示区块
 * 支持多维分类切换、语言色标标识、Star 徽标与 GitHub 源码直达
 */
export function Projects() {
  const { projects } = resumeData
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')

  const filteredProjects = projects.filter((project: Project) => {
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
      {/* 分类过滤器胶囊 */}
      <div className="projects__filter-bar">
        {(Object.keys(CATEGORY_NAMES) as CategoryFilter[]).map((cat) => {
          const count = cat === 'All'
            ? projects.length
            : projects.filter((p) => p.category === cat).length

          if (cat !== 'All' && count === 0) return null

          return (
            <button
              key={cat}
              type="button"
              className={`projects__filter-btn ${activeCategory === cat ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{CATEGORY_NAMES[cat]}</span>
              <span className="projects__filter-count">{count}</span>
            </button>
          )
        })}
      </div>

      {/* 现代 Bento / Grid 卡片网格 */}
      <div className="projects__grid">
        {filteredProjects.map((project) => {
          const langColor = project.language ? (LANGUAGE_COLORS[project.language] || '#3b82f6') : '#3b82f6'

          return (
            <article key={project.id} className="projects__card">
              <header className="projects__card-header">
                <div className="projects__header-left">
                  {project.language && (
                    <div className="projects__lang-pill">
                      <span
                        className="projects__lang-dot"
                        style={{ backgroundColor: langColor }}
                      />
                      <span className="projects__lang-text">{project.language}</span>
                    </div>
                  )}
                  {project.stars != null && project.stars > 0 && (
                    <span className="projects__star-badge">
                      <Icon name="star" size={13} />
                      <span>{project.stars}</span>
                    </span>
                  )}
                </div>

                <div className="projects__links">
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link-btn"
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
                      className="projects__link-btn"
                      aria-label={`打开 ${project.name} 项目`}
                      title="访问主页 / 演示"
                    >
                      <Icon name="external" size={17} />
                    </a>
                  )}
                </div>
              </header>

              <div className="projects__body">
                <h3 className="projects__name">{project.name}</h3>
                <p className="projects__description">{project.description}</p>

                {project.details && project.details.length > 0 && (
                  <ul className="projects__details">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>

              {project.tags.length > 0 && (
                <footer className="projects__footer">
                  <div className="projects__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="projects__tag">
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