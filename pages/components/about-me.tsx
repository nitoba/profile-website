/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import styles from '../../styles/about-me.module.css'
import { ModalHistory } from './modal-history'
import { SocialLinks } from './social-links'

export function AboutMe() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      {
        modalIsOpen && <ModalHistory onClose={() => setModalIsOpen(false)} /> 
      }
      <section className='grid grid-cols-2 mt-28 gap-x-7'>
        <div className='w-full h-12'>
          <span className='text-green font-light text-xl'>SOBRE MIM</span>
          <h2 className="text-text-title text-3xl mt-5">Olá 👋🏽 prazer, Bruno.</h2>
          <p className='text-text-body text-ellipsis text-left mt-5 line-clamp-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae illo magni minus eius natus fugiat enim ipsa illum harum doloremque minima, autem assumenda beatae voluptatibus commodi placeat nihil recusandae.</p>
          <span
            onClick={() => setModalIsOpen(true)}
            className='
            text-text-title 
            w-max underline
            font-light
            mt-5
            block
            hover:opacity-70
            hover:text-red
            transition-all
            duration-200
            cursor-pointer'
            >
              Ver história completa
          </span>
          
          <div className="mt-12">
                <SocialLinks />
          </div>

          <span className="mt-12 block text-lg text-text-title tracking-widest">CONQUISTAS IMPORTANTES</span>
          <ul className="mt-10">
            <li className="flex gap-4 items-center mb-5">
              <img src="assets/icons/check.svg" alt="Check icon" />
              <span className="text-text-body">Conquista 1</span>
            </li>
            <li className="flex gap-4 items-center mb-5">
              <img src="assets/icons/check.svg" alt="Check icon" />
              <span className="text-text-body">Conquista 2</span>
            </li>
            <li className="flex gap-4 items-center mb-5">
              <img src="assets/icons/check.svg" alt="Check icon" />
              <span className="text-text-body">Conquista 3</span>
            </li>

            <li className="flex gap-4 items-center mb-5">
              <img src="assets/icons/check.svg" alt="Check icon" />
              <span className="text-text-body">Conquista 4</span>
            </li>
          </ul>
        </div>
        <div className={`${styles.card} flex items-end justify-end rounded-t-xl`}>
          <img 
            src="assets/images/profile.jpg" 
            alt="Profile photo" 
            className={`
            object-cover
            h-auto scale-x-[-1]
            saturate-0
            opacity-80
            hover:saturate-100
            hover:opacity-90 
            transition-all 
            duration-300
            rounded-2xl`
          }
          />
        </div>
      </section>
    </>
  )
}