import { lazy, Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { PageLoading } from '@/components/ui/PageLoading'

// 现代 React 路由级懒加载 (Code Splitting)
const HomePage = lazy(() => import('@/pages').then((m) => ({ default: m.HomePage })))
const ProjectsPage = lazy(() => import('@/pages').then((m) => ({ default: m.ProjectsPage })))
const ContactPage = lazy(() => import('@/pages').then((m) => ({ default: m.ContactPage })))

/**
 * 现代应用路由配置
 * 支持按需动态分包加载与容错边界
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
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<PageLoading />}>
            <ProjectsPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoading />}>
            <ContactPage />
          </Suspense>
        ),
      },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])