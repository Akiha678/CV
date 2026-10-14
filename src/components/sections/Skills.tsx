import { resumeData } from '@/data/resume'
import { Section } from '@/components/ui'
import './Skills.css'

/**
 * 技能区块：按分类展示熟练度进度条
 */
export function Skills() {
  const { skills } = resumeData

  // 按类别分组
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    const category = skill.category ?? '其他'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {})

  return (
    <Section id="skills" title="技能" subtitle="Skills">
      <div className="skills__grid">
        {Object.entries(grouped).map(([category, list]) => (
          <div key={category} className="skills__group">
            <h3 className="skills__category">{category}</h3>
            <ul className="skills__list">
              {list.map((skill) => (
                <li key={skill.name} className="skills__item">
                  <div className="skills__row">
                    <span className="skills__name">{skill.name}</span>
                    {skill.level != null && <span className="skills__level">{skill.level}%</span>}
                  </div>
                  {skill.level != null && (
                    <div className="skills__track">
                      <div className="skills__fill" style={{ width: `${skill.level}%` }} />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}