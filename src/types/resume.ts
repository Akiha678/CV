/**
 * 领域类型定义层 (Domain Types Layer)
 *
 * 所有与简历内容相关的数据类型在这里统一定义。
 * 这些类型是"纯数据契约"，不依赖任何 UI 或框架实现，
 * 保证数据层、业务层与表现层之间通过稳定的类型契约解耦。
 */

/** 全局个人信息概要 */
export interface Profile {
  /** 姓名 */
  name: string
  /** 求职/展示用的职称 */
  title: string
  /** 一句话介绍/标语 */
  tagline: string
  /** 个人简介，用于 About 区块 */
  bio: string
  /** 头像/形象图片地址（相对 public 或外链） */
  avatarUrl?: string
  /** 第三方社交/作品链接 */
  links: ProfileLink[]
}

export interface ProfileLink {
  /** 展示名称，如 GitHub */
  label: string
  /** 完整 URL */
  url: string
  /** 图标 key，由 UI 层映射为实际图标 */
  icon?: string
}

/** 一条工作/项目经历 */
export interface Experience {
  id: string
  /** 公司/组织 */
  company: string
  /** 职位 */
  role: string
  /** 开始时间（ISO 字符串，或展示字符串如 "2021.03"） */
  startDate: string
  /** 结束时间；null 表示至今 */
  endDate?: string | null
  /** 是否当前在职 */
  current?: boolean
  /** 经历简介 */
  summary: string
  /** 关键词/技术栈 */
  highlights?: string[]
  /** 经历明细列表 */
  bullets?: string[]
}

/** 项目卡片 */
export interface Project {
  id: string
  /** 项目名称 */
  name: string
  /** 一句话描述 */
  description: string
  /** 项目详情/亮点 */
  details?: string[]
  /** 技术栈关键词 */
  tags: string[]
  /** 项目链接 */
  url?: string
  /** 源码链接 */
  sourceUrl?: string
}

/** 技能项 */
export interface Skill {
  /** 技能名称，如 React */
  name: string
  /** 熟练度 0-100 */
  level?: number
  /** 分类，如 "Frontend" */
  category?: string
}

/** 联系方式 */
export interface Contact {
  email: string
  phone?: string
  location?: string
  /** 网页联系方式，如博客、简历 PDF */
  webs: ContactLink[]
}

export interface ContactLink {
  label: string
  url: string
}

/** 教育背景 */
export interface Education {
  id: string
  school: string
  major: string
  degree?: string
  startDate?: string
  endDate?: string
  description?: string
}