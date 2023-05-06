import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import BIRDS from 'vanta/dist/vanta.fog.min'
import {motion} from "framer-motion"
import TransitionEfect from "../../components/TransitionEffectes/TransitionEfect"
import About from '../../components copy/About';
import Skills from '../../components copy/Skill';
import Projects from '../../components copy/Projects';
import Contact from '../../components copy/Contact';
import HeroSection from '../../components copy/Herosection';


export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xdba600,
          midtoneColor: 0xd98c7e,
          lowlightColor: 0x2d07f7,
          baseColor: 0xf4efef 
        })
      );
    }
   
  }, [vantaEffect]);


 const handleResume=()=>{
      window.location.href="https://drive.google.com/file/d/1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh/view?usp=sharing"
    }
  return (
    <>
 
      <Head>
        <title>Jith Stephen</title>
        <meta name="description" content="jith stephen portfolio" />
        
      </Head>
      <main  className=' text-black m-0 p-0 ' >
        <TransitionEfect/>
        <HeroSection/>

          <section className='m-0 p-0 min-h-screen py-12' ref={vantaRef} to="home">
        <div  className="flex flex-col  text-center items-center justify-center animate-fadeIn 
                         animation-delay-2  sm:py-30 md:py-2 md:flex-row
                          md:space-x-4 md:text-left   ">
        <div className="md:mt-2 mr-0 md:w-1/2">
           <Image
            src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1681551756/portfolio/profile-image.c859b27bfd739f0bc9f3-removebg-preview_kwvmpg_xxhxp3.webp"
            alt="pro"
            width={325}
            height={325}
            className="rounded-full md:ml-10 md:mr-10 mt-6 shadow-2xl"
          />


        </div>

        <div className="md:mt-2 md:w-3/5">
          <motion.h1  className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m  Jith Stephen!</motion.h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl"> Enthusiastic and passionate
            <span className="font-semibold text-purple-800"> Full Stack Web Developer{" "}</span>
             with a specialization in MERN stack, with intuitive problem-solving skills.
          </p>

               <div className="flex flex-row  items-center justify-center  space-x-2 mb-1 mt-20">
                <a href="https://drive.google.com/uc?export=download&id=1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh">
               <button onClick={() => openInNewTab("https://drive.google.com/file/d/1RpHZgTgGbC4Y5xsCedBbqq_YIL-hFUYh/view?usp=sharing")}  className=" bg-blue-600 rounded-sm py-2 px-2 rounded-full-50%
                                                          hover:bg-purple-700 hover:text-white transition duration-200 
                                                          font-playfair px-8 bg-red">
                <h4> Resume </h4>
                   </button>
               </a>
               <a href="mailto:jithstephen96@gmail.com">
               <button  className=" bg-black rounded-sm py-2 px-2 rounded-full-50%
                                                          hover:bg-purple-700 hover:text-white text-white transition duration-200 
                                                          font-playfair px-8 bg-red">
                <h4> Hire Me </h4>
                   </button>
               </a>
               
         
           </div>
        </div>
      </div>
      </section>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>


      </main>
    </>
  )
}
