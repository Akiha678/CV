import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/core/utils/cn'
import styles from './Card.module.css'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean
  glow?: boolean
  glass?: boolean
  children: ReactNode
}

export function Card({
  hoverable = false,
  glow = false,
  glass = false,
  className = '',
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        styles.card,
        hoverable && styles.hoverable,
        glow && styles.glow,
        glass && styles.glass,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
