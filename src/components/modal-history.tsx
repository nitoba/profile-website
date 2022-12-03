import SocialLinks from './social-links'
import { motion, useAnimation } from 'framer-motion'
type ModalHistoryProps = {
  onClose: () => void
}

export default function ModalHistory({ onClose }: ModalHistoryProps) {
  const animationOpen = { opacity: 1, scale: 1 }
  const animationClose = { opacity: 0, scale: 0.9 }

  const controls = useAnimation()
  controls.start(animationOpen)

  async function onCloseModal(): Promise<void> {
    await controls.start(animationClose)
    onClose()
  }

  return (
    <div
      onClick={onCloseModal}
      className="
                openModal
                bg-modal-bg
                z-50
                backdrop-blur-sm
                flex
                fixed
                top-0
                left-0
                right-0
                bottom-0
                items-center
                justify-center"
    >
      <motion.div
        initial={animationClose}
        animate={controls}
        transition={{ duration: 0.2 }}
        className="bg-background-fg xl:w-[40%] w-[80%] rounded-xl px-6 py-9"
      >
        <header className="flex items-center justify-between">
          <img
            className="rounded-full h-12 w-12"
            src="https://github.com/NitoBa.png"
            alt="Profile avatar image"
          />
          <img
            onClick={onCloseModal}
            className="cursor-pointer hover:scale-125 transition-all duration-300"
            src="assets/icons/close.svg"
            alt="Close icon"
          />
        </header>

        <section className="mt-8">
          <p className="text-text-body">
            Sou um desenvolvedor apaixonado por tecnologias que fazem parte do
            ecosistema backend, front end e mobile. Tenho facilidade em
            trabalhar em equipe o que me da oportunidade de pensar de maneiras
            diferentes para resolver problemas aumentando cada vez mais meu
            aprendizado.
          </p>
          <p className="text-text-body mt-2">
            Sempre estou buscando aprimorar minhas habilidades estudando o que
            está acontecendo no mercado e buscando novas oportunidades. Gosto
            muito de aprender coisas novas relacionadas ao universo da
            tecnologia e por isso sempre me disponho a estudar e aplicá-las.
          </p>
        </section>
        <div className="mt-12">
          <SocialLinks />
        </div>
      </motion.div>
    </div>
  )
}
