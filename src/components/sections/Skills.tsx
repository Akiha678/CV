import { resumeData } from '@/data/resume'
import { Section, Icon } from '@/components/ui'
import './Skills.css'

// 类别图标映射
const CATEGORY_ICONS: Record<string, 'terminal' | 'layers' | 'code' | 'compass'> = {
  '移动原生': 'terminal',
  '跨平台与系统': 'layers',
  'Web & 全栈': 'code',
  '架构与工程': 'compass',
}

/**
 * 现代主流技能矩阵区块
 * 涵盖多语言分类、熟练度指示进度槽与专业工程领域覆盖
 */
export function Skills() {
  const { skills } = resumeData

  // 按分类聚类
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    const category = skill.category ?? '综合技能'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {})

  return (
    <Section
      id="skills"
      title="技术栈与专业能力"
      subtitle="Tech Stacks, Programming Languages & Architecture Competencies"
      badge="Skills & Competencies"
      fullWidth
    >
      <div className="skills__grid">
        {Object.entries(grouped).map(([category, list]) => {
          const iconName = CATEGORY_ICONS[category] || 'code'

          return (
            <div key={category} className="skills__group">
              <div className="skills__category-header">
                <div className="skills__category-icon">
                  <Icon name={iconName} size={18} />
                </div>
                <h3 className="skills__category-title">{category}</h3>
                <span className="skills__category-count">{list.length} 项</span>
              </div>

              <ul className="skills__list">
                {list.map((skill) => (
                  <li key={skill.name} className="skills__item">
                    <div className="skills__row">
                      <span className="skills__name">{skill.name}</span>
                      {skill.level != null && (
                        <span className="skills__level-badge">{skill.level}%</span>
                      )}
                    </div>
                    {skill.level != null && (
                      <div className="skills__track">
                        <div
                          className="skills__fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}