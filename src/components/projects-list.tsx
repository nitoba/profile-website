import { Button } from './button'
import { CardProject } from './card-project'

export function ProjectsList() {
  return (
    <section id="portfolio" className="mt-12 flex flex-col items-center">
      <h2 className="flex text-text-title text-3xl items-center justify-center text-center font-semibold">
        Portfolio
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>

      <Button>Mostrar mais</Button>
    </section>
  )
}
