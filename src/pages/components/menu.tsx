/* eslint-disable @next/next/no-img-element */
import { motion, useAnimation } from 'framer-motion'
import SocialLinks from './social-links'

export default function Menu({ onClose }: { onClose: () => void }) {
  const animationOpen = { transform: 'translateY(0rem)', opacity: 1 }
  const animationClose = { transform: 'translateY(-24rem)', opacity: 0 }

  const controls = useAnimation()

  controls.start(animationOpen)

  async function closeMenu() {
    await controls.start(animationClose)
    onClose()
  }

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 z-40 backdrop-blur-sm"
      onClick={closeMenu}
    >
      <motion.div
        initial={animationClose}
        animate={controls}
        transition={{ duration: 0.4 }}
        className="h-96 w-full bg-background-fg fixed top-0 right-0"
      >
        <div className="flex flex-col items-end p-8 justify-between h-[100%]">
          <header>
            <img
              onClick={closeMenu}
              className="cursor-pointer hover:scale-125 transition-all duration-300"
              src="assets/icons/close.svg"
              alt="Close icon"
            />
          </header>
          <nav>
            <ul className="flex flex-col">
              <li className="text-text-title text-right group">
                <a
                  className="md:group-hover:text-red-500 transition-all duration-300"
                  href="#about"
                  onClick={closeMenu}
                >
                  Sobre mim
                </a>
              </li>
              <li className="mt-6 text-text-title text-right group">
                <a
                  className="md:group-hover:text-red-500 transition-all duration-300"
                  href="#testimonials"
                  onClick={closeMenu}
                >
                  Depoimentos
                </a>
              </li>
              <li className="mt-6 text-text-title text-right group">
                <a
                  className="md:group-hover:text-red-500 transition-all duration-300"
                  href="#techs"
                  onClick={closeMenu}
                >
                  Tecnologias
                </a>
              </li>
              <li className="mt-6 text-text-title text-right group">
                <a
                  className="md:group-hover:text-red-500 transition-all duration-300"
                  href="#contact"
                  onClick={closeMenu}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <SocialLinks />
        </div>
      </motion.div>
    </div>
  )
}
