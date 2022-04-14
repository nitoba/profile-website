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
      <section id="about" className='grid grid-cols-2 mt-28 gap-x-7'>
        <div className='w-full h-12'>
          <span className='text-green font-light text-xl'>SOBRE MIM</span>
          <h2 className="text-text-title text-3xl mt-5">Olá 👋🏽 prazer, Bruno.</h2>
          <p className='text-text-body text-ellipsis text-left mt-5 line-clamp-3'>
            Sou um desenvolvedor apaixonado por tecnologia que fazem parte do ecosistema backend, front end e mobile. 
            Tenho facilidade em trabalhar em equipe o que me da oportunidade de pensar de maneiras diferentes para resolver problemas aumentando cada vez mais meu aprendizado.
            Sempre estou buscando aprimorar minhas habilidades estudando o que está acontecendo no mercado e buscando novas oportunidades.
            Gosto muito de aprender coisas novas relacionadas ao universo da tecnologia e por isso sempre me disponho a estudar e aplicá-las.
          </p>
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
            <a href="https://www.youtube.com/watch?v=7eSJuPSfGrQ" target="_blank" rel="noreferrer">
              <li className="flex gap-4 items-center mb-5 group">
                <img src="assets/icons/check.svg" alt="Check icon" />
                <span className="group-hover:text-red transition-all duration-300 text-text-body">Palestrante no Meetup da Flutterando</span>
              </li>
            </a>
            <a href="https://maratona.brasilmaisti.com.br/finalistas" target="_blank" rel="noreferrer">
              <li className="flex gap-4 items-center mb-5 group">
                <img src="assets/icons/check.svg" alt="Check icon" />
                <span className="group-hover:text-red transition-all duration-300 text-text-body">Finalista Maratona Unicef Samsung</span>
              </li>
            </a>
            <a href="https://sthorm.io/" target="_blank" rel="noreferrer">
              <li className="flex gap-4 items-center mb-5 group">
                <img src="assets/icons/check.svg" alt="Check icon" />
                <span className="group-hover:text-red transition-all duration-300 text-text-body">Flutter Mobile Developer at Sthorm</span>
              </li>
            </a>
            <a href="https://globalpandemicshield.com" target="_blank" rel="noreferrer">
              <li className="flex gap-4 items-center mb-5 group">
                <img src="assets/icons/check.svg" alt="Check icon" />
                <span className="group-hover:text-red transition-all duration-300 text-text-body">Full Stack Dev at Global Pandemic Shield</span>
              </li>
            </a>
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