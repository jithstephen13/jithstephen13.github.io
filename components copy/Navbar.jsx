"use client" // this is a client component
import React from "react"
import {  useState } from "react";

import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from "next/image"



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
                page: "Skills",
              }, 
              {
                label: "Projects",
                page: "Projects",
              },
              {
                label: "Contact",
                page: "Contact",
              },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
 

  const handleResume=()=>{
    window.location.href="https://drive.google.com/file/d/1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh/view?usp=sharing"
  }
  return (
    <header  className="w-full mx-auto py-0 px-4 sm:px-20 fixed text-white top-0 z-50 shadow bg-black dark:bg-stone-900 dark:border-b 
                        dark:border-stone-600">
      <div className="justify-between  items-center md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center justify-center space-x-2">
             
              <Image
              src="/jithlogo.67171ca21e0f39829edf.png"
              alt="logo"
              width={50}
              height={50}
            
            />
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border m-2"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl text-black" 
                >
                  <RiSunLine size={25} className="text-black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl text-blacl"
                >
                  <RiMoonFill size={25} className="text-black" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8  md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block text-white  hover:text-neutral-500 dark:text-neutral-100"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              
            
             
               <a href="https://drive.google.com/uc?export=download&id=1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh">
               <button onClick={handleResume} className="bg-blue-600
                hover:bg-purple-700   rounded-sm py-2 px-2 rounded-full-50%
                 hover:text-black transition duration-200 mt-5 mb-5
                font-playfair">Resume</button>
               </a>

               <div className={` ${
              navbar ? "hidden" : "flex"
            } justify-self-center  mt-8 md:block md:pb-0 md:mt-0`}>
               {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} color="black" />
                </button>
              )}     
               </div>
            </div>
            
          </div> 
         
        </div>
      </div>
    </header>
  )
}
