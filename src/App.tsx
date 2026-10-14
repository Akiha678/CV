import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { HomePage, ProjectsPage, ContactPage } from '@/pages'

/**
 * 应用路由配置
 * - '/'           介绍页
 * - '/projects'   项目经历页
 * - '/contact'    联系我页
 * - 其余路径重定向到首页
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])