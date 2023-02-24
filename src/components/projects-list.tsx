import { getProjects } from '../services/getProjects'
import { CardProject } from './card-project'

export async function ProjectsList() {
  const projects = await getProjects()

  return (
    <section id="portfolio" className="mt-12 flex flex-col items-center">
      <h2 className="flex text-text-title text-3xl items-center justify-center text-center font-semibold">
        Portfolio
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
