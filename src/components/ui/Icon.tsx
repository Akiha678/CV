import type { ReactNode, SVGProps } from 'react'
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

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

const PATHS: Record<IconName, ReactNode> = {
  github: (
    <>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.57.1.78-.25.78-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.09 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.04.77 2.1v3.12c0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </>
  ),
  document: (
    <path d="M6 2.5A1.5 1.5 0 0 1 7.5 1h6l5 5v15.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 21V2.5ZM13.5 1v4a1 1 0 0 0 1 1h4l-5-5Z" />
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  mail: (
    <path d="M2.5 5.5A1.5 1.5 0 0 1 4 4h16a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5v-13Zm1.6 1.1 7.9 6.4 7.9-6.4a6 6 0 0 0-.26-2.1H4.36a6 6 0 0 0-.26 2.1Z" />
  ),
  phone: (
    <path d="M7 2.5A1.5 1.5 0 0 1 8.5 4v2H9a1 1 0 0 1 2 0V4a1 1 0 0 1 2 0v2a1 1 0 0 1 2 0V4a1 1 0 0 1 2 0v2c0 3.8-1.3 6-3.5 7.5V20a1 1 0 0 1-2 0v-6.5C10.3 12 9 9.8 9 6V4H7A2.5 2.5 0 0 1 5 1.5v0A1 1 0 0 1 6 1h6c.55 0 1 1 1 2.5z" />
  ),
  location: (
    <>
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.3 11.3 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.3-11.3 1.4-1.4" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  external: (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6M10 14 21 3" />
    </>
  ),
}

/**
 * 轻量级图标组件，骨架 SVG。企业场景通常接入
 * 完整图标库（如 lucide），此实现便于离线演示。
 */
export function Icon({ name, size = 20, className = '', ...props }: IconProps) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  )
}