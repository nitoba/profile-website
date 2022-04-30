import { SocialLinks } from "./social-links"
import { motion, useAnimation } from "framer-motion"
import { ReactNode } from "react"
/* eslint-disable @next/next/no-img-element */
type ModalProps = {
    onClose: () => void,
    children: ReactNode,
}

export function Modal({ onClose, children }: ModalProps) {
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
                className="bg-background-fg xl:w-[40%] w-[80%] rounded-xl px-6 py-9 ">
                <header className="flex justify-end mb-8">
                    <img
                        onClick={onCloseModal}
                        className="cursor-pointer hover:scale-125 transition-all duration-300"
                        src="assets/icons/close.svg"
                        alt="Close icon" />
                </header>
                <main className="w-full flex justify-center">
                    {children}
                </main>
            </motion.div>
        </div>
    )
}