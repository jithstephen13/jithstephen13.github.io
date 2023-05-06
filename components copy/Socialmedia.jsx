import React from 'react'
import {
    AiOutlineGithub, AiOutlineLinkedin,AiFillPhone,AiFillMail } from "react-icons/ai"

export const Socialmedia = () => {

  return (
         <div className="flex flex-row items-center justify-center space-x-4 p-6 mb-1">
                
          <a href="mailto:jithstephen96@gmail.com" rel="noreferrer" target="_blank">
            <AiFillMail 
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-neutral-600"
              size={30}
            />
          </a>
          

          <a
            href="https://www.linkedin.com/in/jithstephen13/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-neutral-600"
              size={30}
            />
          </a>

          <a href="https://github.com/jithstephen13" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black dark:text-neutral-600"
              size={30}
            />
          </a>
         
        </div>
  )
}
