import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/core/utils/cn'
import styles from './Section.module.css'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string
  title: string
  subtitle?: string
  badge?: string
  fullWidth?: boolean
  children: ReactNode
}

/**
 * 现代通用区块容器 (CSS Modules)
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
    <section id={id} className={cn(styles.section, className)} {...rest}>
      <div className={styles.header}>
        {badge && <span className={styles.badge}>{badge}</span>}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={cn(styles.body, fullWidth && styles.bodyFull)}>
        {children}
      </div>
    </section>
  )
}