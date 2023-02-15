import { AboutMe } from '../components/about-me'
import { ContactMe } from '../components/contact-me'
import { TechsUsed } from '../components/techs-used'
import { Testimonies } from '../components/testimonies'

export default function Home() {
  return (
    <div className="w-full max-w-[1220px] mx-auto px-[1.6rem]">
      <AboutMe />
      <TechsUsed />
      <Testimonies />
      <ContactMe />
    </div>
  )
}
