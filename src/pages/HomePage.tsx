import { Hero, About, Projects, Skills, Experience, Contact } from '@/components/sections'
import { useResumeData } from '@/services/resumeService'

/**
 * 介绍主页 (Clean Architecture Page Controller)
 * 依赖数据服务层，将领域模型下发给各业务区块。
 */
export function HomePage() {
  const { data } = useResumeData()

  return (
    <>
      <Hero profile={data.profile} email={data.contact.email} phone={data.contact.phone} />
      <About profile={data.profile} contact={data.contact} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Experience experiences={data.experiences} education={data.education} honors={data.honors} />
      <Contact contact={data.contact} profile={data.profile} />
    </>
  )
}