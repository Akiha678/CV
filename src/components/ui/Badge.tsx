import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/core/utils/cn'
import styles from './Badge.module.css'

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  children: ReactNode
}

export function Badge({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(styles.badge, styles[variant], styles[size], className)}
      {...rest}
    >
      {children}
    </span>
  )
}
