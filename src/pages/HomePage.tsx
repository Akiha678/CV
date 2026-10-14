import { Hero, About, Projects, Skills, Experience, Contact } from '@/components/sections'

/**
 * 介绍主页
 * 聚合 Hero 首屏、关于我、开源项目矩阵、技能栈、研发经历与快速联系
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  )
}