import { Section, Icon } from '@/components/ui'
import type { Skill } from '@/types/resume'
import styles from './Skills.module.css'

export interface SkillsProps {
  skills: Skill[]
}

const CATEGORY_ICONS: Record<string, 'terminal' | 'layers' | 'code' | 'compass'> = {
  '移动原生': 'terminal',
  '跨平台与系统': 'layers',
  'Web & 全栈': 'code',
  '架构与工程': 'compass',
}

/**
 * 现代技能矩阵组件 (CSS Modules)
 */
export function Skills({ skills }: SkillsProps) {
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
      <div className={styles.grid}>
        {Object.entries(grouped).map(([category, list]) => {
          const iconName = CATEGORY_ICONS[category] || 'code'

          return (
            <div key={category} className={styles.group}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>
                  <Icon name={iconName} size={18} />
                </div>
                <h3 className={styles.categoryTitle}>{category}</h3>
                <span className={styles.categoryCount}>{list.length} 项</span>
              </div>

              <ul className={styles.list}>
                {list.map((skill) => (
                  <li key={skill.name} className={styles.item}>
                    <div className={styles.row}>
                      <span className={styles.name}>{skill.name}</span>
                      {skill.level != null && (
                        <span className={styles.levelBadge}>{skill.level}%</span>
                      )}
                    </div>
                    {skill.level != null && (
                      <div className={styles.track}>
                        <div
                          className={styles.fill}
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