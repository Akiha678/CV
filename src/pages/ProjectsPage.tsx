import { Projects } from '@/components/sections'
import { useResumeData } from '@/services/resumeService'

/**
 * 项目经历独立页
 */
export function ProjectsPage() {
  const { data } = useResumeData()
  return <Projects projects={data.projects} />
}