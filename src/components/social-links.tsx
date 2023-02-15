import Link from 'next/link'
import { InstagramLogo, LinkedinLogo, GithubLogo } from 'phosphor-react'

export function SocialLinks() {
  return (
    <div className="flex items-center gap-8">
      <Link
        href="https://instagram.com/nito.b.a"
        target="_blank"
        className="hover:scale-125 transition-all duration-300"
        rel="noreferrer"
      >
        <InstagramLogo size={32} className="text-blue-500" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/bruno-alves-882173161/"
        target="_blank"
        className="hover:scale-125 transition-all duration-300"
        rel="noreferrer"
      >
        <LinkedinLogo size={32} className="text-blue-500" />
      </Link>
      <Link
        href="https://github.com/Nitoba/"
        target="_blank"
        className="hover:scale-125 transition-all duration-300"
        rel="noreferrer"
      >
        <GithubLogo size={32} className="text-blue-500" />
      </Link>
    </div>
  )
}
