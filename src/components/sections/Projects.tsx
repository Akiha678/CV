import { resumeData } from '@/data/resume'
import { Section, Icon } from '@/components/ui'
import './Projects.css'

/**
 * 项目展示区块（卡片网格）
 */
export function Projects() {
  const { projects } = resumeData

  return (
    <Section id="projects" title="项目" subtitle="Featured Projects">
      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.id} className="projects__card">
            <header className="projects__card-header">
              <h3 className="projects__name">{project.name}</h3>
              <div className="projects__links">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`打开 ${project.name} 项目`}
                  >
                    <Icon name="external" size={18} />
                  </a>
                )}
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`查看 ${project.name} 源码`}
                  >
                    <Icon name="github" size={18} />
                  </a>
                )}
              </div>
            </header>
            <p className="projects__description">{project.description}</p>

            {project.details && project.details.length > 0 && (
              <ul className="projects__details">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            )}

            {project.tags.length > 0 && (
              <div className="projects__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="projects__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}