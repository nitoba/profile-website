import Link from 'next/link'
import { Button } from './button'

export function ContactMe() {
  return (
    <section
      id="contact"
      className="mt-24 flex flex-col items-center justify-center"
    >
      <h2 className="flex text-text-title text-3xl items-center justify-center text-center">
        Entre em contato comigo
      </h2>
      <Link href="mailto:nito.ba.dev@gmail.com">
        <Button className="mt-8"> Entrar em contato</Button>
      </Link>
    </section>
  )
}
