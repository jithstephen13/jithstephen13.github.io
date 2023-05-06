import React from 'react'
import {motion} from "framer-motion"

const TransitionEfect = () => {
  return (
    <>
     <motion.div  className=' fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-black'
     initial={{x:"100%",width:"100%"}}
     animate={{x:"0%",width:"0%"}}
     transition={{duration:.8,ease:"easeInOut"}}
     style={{ backgroundImage:`url(https://res.cloudinary.com/dqgeth8jx/image/upload/v1681551339/portfolio/jithlogo.67171ca21e0f39829edf_c1oq10.webp) `, backgroundRepeat: "no-repeat" ,backgroundPosition:"center", backgroundSize: "200px 200px"  }}
   
  
     />
     <motion.div  className=' fixed top-0 bottom-0 right-full w-3/4 h-screen z-40  bg-white'
     initial={{x:"100%",width:"100%"}}
     animate={{x:"0%",width:"0%"}}
     transition={{delay:.5,duration:1,ease:"easeInOut"}}
     style={{ backgroundImage:`url(https://res.cloudinary.com/dqgeth8jx/image/upload/v1681551339/portfolio/jithlogo.67171ca21e0f39829edf_c1oq10.webp) `, backgroundRepeat: "no-repeat" ,backgroundPosition:"center", backgroundSize: "100px 100px"  }}
      />
       <motion.div  className=' fixed top-0 bottom-0 right-full w-2/4 h-screen z-20 bg-black'
     initial={{x:"100%",width:"100%"}}
     animate={{x:"0%",width:"0%"}}
     transition={{delay:1,duration:1.2,ease:"easeInOut"}}
     style={{ backgroundImage:`url(https://res.cloudinary.com/dqgeth8jx/image/upload/v1681551339/portfolio/jithlogo.67171ca21e0f39829edf_c1oq10.webp) `, backgroundRepeat: "no-repeat" ,backgroundPosition:"center", backgroundSize: "100px 100px"  }}
     />
  </>)
}

export default TransitionEfect