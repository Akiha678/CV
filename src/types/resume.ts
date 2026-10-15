/**
 * 领域类型定义层 (Domain Types Layer)
 */

export interface Profile {
  /** 姓名 */
  name: string
  /** GitHub Handle 或昵称 */
  handle?: string
  /** 求职/展示用的职称 */
  title?: string
  /** 一句话介绍/标语 */
  tagline: string
  /** 个人简介 */
  bio: string
  /** 头像地址 */
  avatarUrl?: string
  /** 状态标签 */
  status?: string
  /** 学校信息 */
  school?: string
  /** 专业与学历 */
  major?: string
  /** 毕业时间 */
  graduation?: string
  /** 现居/常驻城市 */
  location?: string
  /** 期望城市 */
  targetCity?: string
  /** 快捷指标统计 */
  stats?: { label: string; value: string }[]
  /** 第三方社交/作品链接 */
  links: ProfileLink[]
}

export interface ProfileLink {
  label: string
  url: string
  icon?: string
}

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate?: string | null
  current?: boolean
  summary: string
  highlights?: string[]
  bullets?: string[]
}

/** 结构化职责明细 */
export interface ResponsibilityItem {
  title: string
  content: string
}

/** 项目卡片（分为开源项目与实习项目） */
export interface Project {
  id: string
  name: string
  /** 类型：实习项目 (internship) 或 开源项目 (opensource) */
  projectType: 'internship' | 'opensource'
  description: string
  /** 实习所属公司/单位 */
  company?: string
  /** 实习/开发周期 */
  period?: string
  /** 担任角色 */
  role?: string
  /** 项目类别 */
  category?: 'Mobile' | 'CrossPlatform' | 'Desktop' | 'Web' | 'Library' | 'All'
  /** 主要语言 */
  language?: string
  /** Star 数量（开源项目） */
  stars?: number
  /** 项目详情/亮点 */
  details?: string[]
  /** 核心负责功能模块（实习项目专项结构） */
  responsibilities?: ResponsibilityItem[]
  /** 关键技术标签 */
  tags: string[]
  /** 项目链接/主页 */
  url?: string
  /** GitHub 源码链接 */
  sourceUrl?: string
}

export interface Skill {
  name: string
  level?: number
  category?: string
  description?: string
}

export interface Honor {
  id: string
  title: string
  date: string
  category: 'award' | 'patent' | 'cert'
  detail?: string
}

export interface Contact {
  email: string
  phone?: string
  location?: string
  targetCity?: string
  webs: ContactLink[]
}

export interface ContactLink {
  label: string
  url: string
}

export interface Education {
  id: string
  school: string
  major: string
  degree?: string
  startDate?: string
  endDate?: string
  description?: string
}