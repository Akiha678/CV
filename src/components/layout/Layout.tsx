import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from './Layout.module.css'

/**
 * 现代应用外壳布局组件 (CSS Modules)
 */
export function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}