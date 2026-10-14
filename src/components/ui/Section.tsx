import type { HTMLAttributes, ReactNode } from 'react'
import './section.css'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string
  title: string
  subtitle?: string
  badge?: string
  fullWidth?: boolean
  children: ReactNode
}

/**
 * 现代风格通用区块容器
 * 支持渐变徽标、主标题、英文/副标题以及自适应宽体排版
 */
export function Section({
  id,
  title,
  subtitle,
  badge,
  fullWidth = false,
  children,
  className = '',
  ...rest
}: SectionProps) {
  return (
    <section id={id} className={`section ${className}`} {...rest}>
      <div className="section__header">
        {badge && <span className="section__badge">{badge}</span>}
        <h2 className="section__title">{title}</h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
      </div>
      <div className={`section__body ${fullWidth ? 'section__body--full' : ''}`}>
        {children}
      </div>
    </section>
  )
}