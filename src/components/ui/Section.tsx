import type { HTMLAttributes, ReactNode } from 'react'
import './section.css'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

/**
 * 通用区块容器：统一标题、副标题与内容布局。
 */
export function Section({ id, title, subtitle, children, className = '', ...rest }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`} {...rest}>
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
      </div>
      <div className="section__body">{children}</div>
    </section>
  )
}