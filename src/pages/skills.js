import Image from 'next/image'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import AnimatedText from '../../components/AnimatedText'
import Head from 'next/head'
import TransitionEfect from "../../components/TransitionEffectes/TransitionEfect"

const skills = () => {
  return (
    <>
    <Head>
      <title>Jith Stephen</title>
      <meta name="description" content="jith stephen portfolio" />
      
    </Head>
    <main  >
    <TransitionEfect/>
    <section id="Skills">
    <div className="my-12 pb-12 md:pt-16 md:pb-48 flex flex-col">
      <h1 className="text-center font-bold text-4xl">
         
        <AnimatedText text="skills" />
        <hr className="w-6 h-1 mx-auto my-4 bg-black border-0 rounded"></hr>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-4 m-auto ">
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447206/portfolio/icons/icons8-html-5-96_wwblrr.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full  md:ml-10   shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447206/portfolio/icons/icons8-css3-96_g85yye.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full ml-10 mr-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/icons8-javascript-96_s18ya5.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full md:ml-10 mr-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/icons8-react-100_ajv0he.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full ml-10 mr-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/icons8-redux-96_wbzzdi.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full md:ml-10 mr-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full ">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447539/portfolio/icons/next-js.256x256_ihxpio.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full ml-10 mr-10 bg-white border-black shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/icons8-mongodb-96_tvshbl.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full md:ml-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/icons8-express-js-100_vslkao.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full ml-10 mr-10 bg-white shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/icons8-typescript-96_wnsnz5.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full md:ml-10 mr-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/icons8-node-js-96_vhtvuk.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full ml-10 mr-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680445870/portfolio/icons/icons8-chakra-ui-96_upihks.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full md:ml-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/icons8-tailwind-css-96_aoqjg5.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full ml-10 mr-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/icons8-git-96_imuzy6.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full md:ml-10 mr-10 shadow-2xl"
        />
          </div>
          <div className="rounded-full">
          <Image
          src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1680447205/portfolio/icons/three-js-icon_o4o4n3.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full ml-10 mr-10 bg-white shadow-2xl"
        />
          </div>
          
         
          
          

          
      </div>
      <div className="flex flex-col justify-center align-center   animate-slideUpCubiBezier animation-delay-2 md:space-x-12 p-6 mt-12 shadow-2xl m-auto">
         <GitHubCalendar username="swati082001" />
         <div className="flex justify-center mt-6">
                     <img src='https://github-readme-stats.vercel.app/api?username=jithstephen13&show_icons=true&theme=radical' className="m-auto" width={"60%"} height={"200px"} alt='' />

         </div>
         <div className="flex justify-center">
         <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jithstephen13&langs_count=8" className="m-auto h-72 mt-6" width={"60%"}  alt=''/>

         </div>
          
      </div>
     

      
    </div>
  </section></main></>
  )
}

export default skills