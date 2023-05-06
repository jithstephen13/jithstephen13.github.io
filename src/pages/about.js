import React from 'react'
import AnimatedText from '../../components/AnimatedText'
import Head from 'next/head'
import TransitionEfect from "../../components/TransitionEffectes/TransitionEfect"

const about = () => {
  return ( <>
    <Head>
      <title>Jith Stephen</title>
      <meta name="description" content="jith stephen portfolio" />
      
    </Head>
    <main  >
    <TransitionEfect/>
  <div className="my-12 pb-12 md:pt-16 md:pb-48">
    <h1 className="text-center font-bold text-4xl">
    <AnimatedText text="About Me" />
      <hr className="w-6 h-1 mx-auto my-4 bg-black border-0 rounded"></hr>
    </h1>
    

    <div className="flex flex-col space-y-10 items-stretch justify-center align-top p-2 md:space-x-10 md:space-y-0 md:p-4 md:flex-row text-center">
      <div className="md:w-1/2 flex flex-col justify-center">
        
        <p>
          Hi, my name is <span className="font-bold text-purple-700">Jith Stephen</span>  and I am a{" "}
          <span className="font-bold text-purple-700">{"highly ambitious "}</span>and 
          <span className="font-bold text-purple-700">{" self-motivated "}</span>, 
           
           <span className="font-bold text-purple-700">Full Stack Web Developer{" "}</span>
        </p>
        <br />
        <p>
          I completed Full Stack Web Developement from Masai School with  1200 hours of  Coding experience,and looking to enhance
           my professional experience with an IT company specializing in web development. I am course with a deep sense of responsibility and enthusiasm to give 110% for any endeavor.
        </p>
        <br />
        <p>
          
          I am always seeking new experiences and love to keep myself
          engaged with  learning new things,
        </p>
        <br />
        <p>
          I believe that you should{" "}
          <span className="font-bold text-purple-700">
            never stop growing
          </span>{" "}
          and that&#39;s what I strive to do, I have a passion for
          technology and  desire to always push my limits . I am excited to see where my career leads me and am
          always open to new opportunities.
        </p>
        
      </div>
     
    </div>
  </div>
  </main>
</>
   
  )
}

export default about