import { Contact } from '@/components/sections'
import { useResumeData } from '@/services/resumeService'

/**
 * 联系我独立页
 */
export function ContactPage() {
  const { data } = useResumeData()
  return <Contact contact={data.contact} profile={data.profile} />
}