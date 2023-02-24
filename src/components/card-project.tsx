'use client'

import { GithubLogo, Link } from 'phosphor-react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Project } from '../types/project'

type Props = {
  project: Project
}

export function CardProject({ project }: Props) {
  return (
    <div className="rounded-2xl relative w-full">
      <header className="flex items-center justify-between absolute top-4 rounded-md px-4 w-full">
        <h3 className="z-10 text-zinc-300 text-lg font-medium line-clamp-2 leading-tight">
          {project.title}
        </h3>
        <div className="flex gap-2">
          <NextLink
            href={'/'}
            className="bg-zinc-700 rounded w-6 h-6 text-white hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <GithubLogo />
          </NextLink>
          <NextLink
            href={'/'}
            className="bg-zinc-700 rounded w-6 h-6 text-white hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <Link />
          </NextLink>
        </div>
      </header>

      {!project.thumbnailUrl ? (
        <div className="bg-zinc-700 blur-[2px] h-full rounded-2xl" />
      ) : (
        <Image
          className="object-cover w-96 h-96 overflow-hidden rounded-2xl bg-zinc-600"
          src={project.thumbnailUrl ?? ''}
          width="400"
          height="400"
          alt=""
        />
      )}

      <footer className="bg-zinc-700/60 absolute bottom-4 left-4 right-4 rounded-lg px-4 py-3 backdrop-blur-md">
        <p className="text-xs text-zinc-300 line-clamp-4">
          {project.description}
        </p>
      </footer>
    </div>
  )
}
