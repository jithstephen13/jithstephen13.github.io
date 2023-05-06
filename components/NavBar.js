import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Logo } from './Logo/Logo'
import { LinkCompo } from './Link/Link'
import {motion} from "framer-motion"
import { Behance, GithubIcon, LinkedInIcon } from './SvgCompo/Svgicons'
import { IoMdMenu, IoMdClose } from "react-icons/io"



const NAV_ITEMS= [
    {
      label: "Home",
      page: "home",
    },
    {
      label: "About",
      page: "about",
    },
  
    {
      label: "Skills",
      page: "skills",
    }, 
    {
      label: "Projects",
      page: "projects",
    },
    {
      label: "Contact",
      page: "contact",
    },
]
export const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


  return (
    <header className='flex items-center justify-between bg-dark py-6 px-8 sticky top-0 relative z-10'>
            <Logo/>
            <nav className='hidden md:flex gap-8'>

                  {NAV_ITEMS.map((item, idx) => {
                      return (
                        <LinkCompo key={idx}  {...item}/>
                      )
                    })}
            </nav>

            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border m-2"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>

            <nav className='hidden md:flex gap-4 item-top justify-center'>
            <a href="https://drive.google.com/uc?export=download&id=1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh">
               <button  onClick={() => openInNewTab("https://drive.google.com/file/d/1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh/view?usp=sharing")} className=" bg-blue-600 rounded-sm py-1 rounded-full-50% hover:bg-purple-700 hover:text-white transition duration-200 
                                                          font-playfair px-2 bg-red">
                <h4> Resume </h4>
                   </button>
               </a>
            
              <motion.a href='https://github.com/jithstephen13' whileHover={{y:-2}} target={'_blank' }><GithubIcon className={"text-white w-1rem w-1rem"}/></motion.a>
              <motion.a href='https://www.linkedin.com/in/jithstephen13/' whileHover={{y:-2}}  target={'_blank' }><LinkedInIcon className={"text-white w-1rem w-1rem"}/></motion.a>
            
             <motion.a href='https://www.behance.net/jithstephen' whileHover={{y:-2}} target={'_blank' }> <Behance className={"text-white"}/></motion.a>
             

            </nav>

            <div className='absolute top-20 left-0 bg-dark w-full md:hidden px-4 '>

          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8  md:flex md:space-x-6 md:space-y-0"
             onClick={() => setNavbar(!navbar)}
            >
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <LinkCompo key={idx}   {...item}/>
                )
              })}
              
            
             <nav className='flex md:hidden gap-4 item-top justify-center'>
              
            <a href="https://drive.google.com/uc?export=download&id=1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh">
               <button onClick={() => openInNewTab("https://drive.google.com/file/d/1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh/view?usp=sharing")} className=" bg-blue-600 rounded-sm py-1 rounded-full-50% hover:bg-purple-700 hover:text-white transition duration-200 
                                                          font-playfair px-2 bg-red">
                <h4> Resume </h4>
                   </button>
               </a>
            
              <motion.a href='https://github.com/jithstephen13' whileHover={{y:-2}} target={'_blank' }><GithubIcon className={"text-white w-1rem w-1rem"}/></motion.a>
              <motion.a href='https://www.linkedin.com/in/jithstephen13/' whileHover={{y:-2}}  target={'_blank' }><LinkedInIcon className={"text-white w-1rem w-1rem"}/></motion.a>
            
             <motion.a href='https://www.behance.net/jithstephen' whileHover={{y:-2}} target={'_blank' }> <Behance className={"text-white"}/></motion.a>
             

            </nav>

               
            </div>
            
          </div> 
         
        </div>
        
    </header>
  )
}
