import { AboutMe } from '../components/about-me'
import { ContactMe } from '../components/contact-me'
import { ProjectsList } from '../components/projects-list'
import { TechsUsed } from '../components/techs-used'

export default function Home() {
  return (
    <div className="w-full max-w-[1220px] mx-auto px-[1.6rem]">
      <AboutMe />
      <TechsUsed />
      <ProjectsList />
      <ContactMe />
    </div>
  )
}
