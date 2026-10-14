import React from 'react'
import {
  FileText,
  Globe,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Terminal,
  Sparkles,
  Layers,
  FolderGit2,
  Star,
  Printer,
  Copy,
  Check,
  Compass,
  Briefcase,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import './icon.css'

export type IconName =
  | 'github'
  | 'document'
  | 'website'
  | 'mail'
  | 'phone'
  | 'location'
  | 'sun'
  | 'moon'
  | 'arrow-up-right'
  | 'external'
  | 'code'
  | 'terminal'
  | 'sparkles'
  | 'layers'
  | 'project'
  | 'star'
  | 'print'
  | 'copy'
  | 'check'
  | 'compass'
  | 'briefcase'
  | 'education'

const LUCIDE_MAP: Partial<Record<IconName, LucideIcon>> = {
  document: FileText,
  website: Globe,
  mail: Mail,
  phone: Phone,
  location: MapPin,
  sun: Sun,
  moon: Moon,
  'arrow-up-right': ArrowUpRight,
  external: ExternalLink,
  code: Code2,
  terminal: Terminal,
  sparkles: Sparkles,
  layers: Layers,
  project: FolderGit2,
  star: Star,
  print: Printer,
  copy: Copy,
  check: Check,
  compass: Compass,
  briefcase: Briefcase,
  education: GraduationCap,
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
  className?: string
}

/**
 * 现代轻量化图标组件
 * 兼容经典官方品牌矢量 (GitHub) 与 Lucide 图标集
 */
export function Icon({ name, size = 18, className = '', ...props }: IconProps) {
  if (name === 'github') {
    return (
      <svg
        className={`icon ${className}`}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        aria-hidden="true"
        {...props}
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
      </svg>
    )
  }

  const Component = LUCIDE_MAP[name] || Globe
  return (
    <Component
      size={size}
      className={`icon ${className}`}
      aria-hidden="true"
      {...props}
    />
  )
}