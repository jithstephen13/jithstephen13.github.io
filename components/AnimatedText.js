import React from 'react'
import {motion} from "framer-motion"

const singleword={
    intial:{
      opacity:0
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        delay:1,
        staggerChildren:0.08
      }
    }
  }
  

const AnimatedText = ({text,className=""}) => {
  return (
    <motion.div className='w-full max-auto py-2 flex item- center justify-center text-center overflow-hidden'>
       <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-4xl ${className}`} 
       variants={singleword}
       intial="intial"
       animate="animate"
       >
        
        {text.split(' ').map((word,index)=>
        <span key={word+"-"+index}>{word}&nbsp;</span>)}
        </motion.h1>  
      </motion.div>
  )
}

export default AnimatedText