import { Hero, About, Experience, Skills } from '@/components/sections'

/**
 * 介绍页（首页）
 * 聚合个人简介、工作经历与技能栈。
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
    </>
  )
}