/**
 * 站点导航配置
 * 集中管理导航项及其对应路由，供 Header 渲染导航链接。
 */
export const NAV_ITEMS = [
  { id: 'home', label: '介绍', path: '/', exact: true },
  { id: 'projects', label: '项目经历', path: '/projects', exact: false },
  { id: 'contact', label: '联系我', path: '/contact', exact: false },
] as const

export type NavItemId = (typeof NAV_ITEMS)[number]['id']

/** 所有导航目标路径列表，用于路由守卫等场景 */
export const NAV_PATHS = NAV_ITEMS.map((item) => item.path)