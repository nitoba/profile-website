/* eslint-disable @next/next/no-img-element */
import SocialLinks from "./social-links";

export default function Footer() {
    return (
        <footer className="flex sm:flex-row flex-col pt-6 sm:pt-0 h-28 w-full bg-background-fg relative mt-6">
            <div className="flex flex-col items-center justify-end w-full mb-2">
                <SocialLinks />
                <span className="text-text-body font-light text-xs mt-3">
                    © 2020 Nito Ba. All rights reserved.
                </span>
            </div>
            <button onClick={() => scrollTo(0, 0)}
            className="
                flex
                items-center
                justify-center
                gap-x-1
                text-text-body
                text-xs
                sm:absolute static
                bottom-0
                right-0
                mb-4
                sm:mr-4 
                mr-0
                "
            >   
                <img src="assets/icons/arrow-up.svg" alt="Arrow up icon" />
                <span>
                    Voltar ao topo
                </span>
            </button>
        </footer>
    )
}