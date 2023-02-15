'use client'

import { GithubLogo, Link } from 'phosphor-react'
import NextLink from 'next/link'
export function CardProject() {
  return (
    <div className="rounded-2xl relative w-full">
      <header className="flex items-center justify-between absolute top-4 rounded-md px-4 w-full">
        <h3 className="text-zinc-300 text-lg font-medium line-clamp-2 leading-tight">
          Title of my project asdasd asdasdasdasdkjha sadlhskadjhksjdha
          kajshdakjshdkajs dakjshdakjhsd aksdjhakjsdh
        </h3>
        <div className="flex gap-2">
          <NextLink
            href={'#'}
            className="bg-zinc-700 rounded w-6 h-6 text-white hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <GithubLogo />
          </NextLink>
          <NextLink
            href={'#'}
            className="bg-zinc-700 rounded w-6 h-6 text-white hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <Link />
          </NextLink>
        </div>
      </header>

      <img
        className="object-cover w-full h-full overflow-hidden rounded-2xl"
        src="https://github.com/nitoba.png"
        alt=""
      />
      <footer className="bg-zinc-700/60 absolute bottom-4 left-4 right-4 rounded-lg px-4 py-3 backdrop-blur-sm">
        <p className="text-xs text-zinc-300 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem
          possimus necessitatibus nam eligendi repudiandae aut corrupti eum
          architecto quo, voluptatum enim nisi incidunt maiores eaque. Ullam ad
          nesciunt dolor!
        </p>
      </footer>
    </div>
  )
}
