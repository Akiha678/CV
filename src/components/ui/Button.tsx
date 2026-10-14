import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/core/utils/cn'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

/**
 * 现代化标准 Button 组件
 */
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(styles.btn, styles[variant], styles[size], className)}
      {...rest}
    >
      {children}
    </button>
  )
}