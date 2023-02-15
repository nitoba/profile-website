'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Menu } from './menu'
import { List } from 'phosphor-react'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <>
      {menuIsOpen && <Menu onClose={() => setMenuIsOpen(false)} />}
      <header className="pt-12 flex justify-between items-center">
        <div className="flex items-center justify-center">
          <div className="relative h-12 w-12">
            <Image
              className="h-full w-full rounded-full"
              src="https://github.com/NitoBa.png"
              alt="My profile foto"
              style={{ objectFit: 'cover' }}
              fill
            />
          </div>
          <div className="ml-3">
            <h3 className="text-text-title text-base leading-none">
              Bruno Alves
            </h3>
            <span className="text-text-body text-[.75rem] font-light">
              Full Stack Dev
            </span>
          </div>
        </div>
        <button
          onClick={() => setMenuIsOpen(true)}
          className="hover:opacity-80 transition-all duration-200"
        >
          <List size={32} weight="fill" className="text-red-500" />
        </button>
      </header>
    </>
  )
}
