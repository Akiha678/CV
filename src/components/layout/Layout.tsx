import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import './layout.css'

/**
 * 应用外壳（Layout）
 * 所有页面共享的布局骨架：顶部导航 + 路由出口 + 页脚。
 */
export function Layout() {
  return (
    <>
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}