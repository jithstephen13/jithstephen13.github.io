import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {motion} from "framer-motion"
import TransitionEfect from "../../components/TransitionEffectes/TransitionEfect"
import About from '../../components copy/About';
import Skills from '../../components copy/Skill';
import Projects from '../../components copy/Projects';
import Contact from '../../components copy/Contact';
import HeroSection from '../../components copy/Herosection';

export default function Home() {
 const handleResume=()=>{
      window.location.href="https://drive.google.com/file/d/1ehDoi5WD0w0hR0qPC5wuJqW8WzBqDmwk/view?usp=sharing"
    }

  return (
    <>
      <Head>
        <title>Jith Stephen | Portfolio</title>
        <meta name="description" content="jith stephen portfolio" />
      </Head>
      <main className='text-white m-0 p-0 relative focus:outline-none focus-visible:outline-none z-10'>
        <TransitionEfect/>
        <HeroSection/>

        <section className='m-0 p-0 py-12 min-h-screen flex items-center justify-center' id="home">
          <div className="flex flex-col text-center items-center justify-center animate-fadeIn
                          animation-delay-2 sm:py-30 md:py-2 md:flex-row
                          md:space-x-12 md:text-left w-full max-w-7xl px-8">
            
            <div className="md:mt-2 mr-0 md:w-1/2 flex justify-center">
              <Image
                src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1768726352/profile-image.c859b27bfd739f0bc9f3_jbpgvg.png"
                alt="pro"
                width={400}
                height={400}
                className="rounded-full shadow-[0_0_40px_rgba(255,204,0,0.4)] border-4 border-primary transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-12 md:mt-2 md:w-1/2 pl-0 md:pl-10">
              <motion.h1 
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="text-5xl font-black mt-6 md:mt-0 md:text-7xl uppercase tracking-wider text-light"
              >
                Hi, I&#39;m <span className="text-primary block mt-2">Jith Stephen</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg mt-6 mb-8 md:text-2xl text-gray-300 max-w-lg"
              > 
                Enthusiastic and passionate 
                <span className="font-semibold text-primary"> Full Stack Web Developer{" "}</span>
                 with a specialization in MERN stack, with intuitive problem-solving skills.
              </motion.p>

              <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.5 }}
               className="flex flex-row items-center justify-center md:justify-start space-x-6 mt-12"
              >
                <a href="https://drive.google.com/uc?export=download&id=1ehDoi5WD0w0hR0qPC5wuJqW8WzBqDmwk">
                  <button className="bg-primary text-dark font-bold text-lg rounded-full py-3 px-8
                                     hover:bg-primaryDark hover:shadow-[0_0_20px_rgba(255,204,0,0.6)] transition-all duration-300">
                    Resume
                  </button>
                </a>
                <a href="mailto:jithstephen96@gmail.com">
                  <button className="bg-transparent border-2 border-primary text-primary font-bold text-lg rounded-full py-3 px-8
                                     hover:bg-primary hover:text-dark hover:shadow-[0_0_20px_rgba(255,204,0,0.6)] transition-all duration-300">
                    Hire Me
                  </button>
                </a>
               </motion.div>
            </div>
          </div>
        </section>
        
        <div className="relative z-10 bg-dark/60 backdrop-blur-md pb-24">
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </div>
      </main>
    </>
  )
}
