import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { Menu } from "./menu";
import { SocialLinks } from "./social-links";

/* eslint-disable @next/next/no-img-element */
export function Header () {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
      <>
        { menuIsOpen && <Menu onClose={() => setMenuIsOpen(false)} /> }
        <header className='pt-12 flex justify-between items-center'>
          <div className="flex items-center justify-center">
            <img
              className='h-12 w-12 rounded-full'
              src="https://github.com/NitoBa.png" 
              alt="My profile foto"
            />
            <div className="ml-3">
              <h3 className="text-text-title text-base leading-none">Bruno Alves</h3>
              <span className="text-text-body text-[.75rem] font-light">Full Stack Dev</span>
            </div>
          </div>
          <button onClick={() => setMenuIsOpen(true)} className="hover:opacity-80 transition-all duration-200">
            <img className='invert-svg' src="assets/icons/menu.svg" alt="Menu icon" />
          </button>
        </header>
      </>
    )
}