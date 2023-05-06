import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import emailjs from "@emailjs/browser";
import { Behance, GithubIcon, LinkedInIcon } from "../../components/SvgCompo/Svgicons";
import { motion } from "framer-motion";
import AnimatedText from "../../components/AnimatedText";
import Head from "next/head";
import TransitionEfect from "../../components/TransitionEffectes/TransitionEfect"
import Image from 'next/image'




const contact = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const form = useRef();
  const [cred, setCred] = useState({});

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x4f4f4f,
          shininess: 66.00,
          waveHeight: 17.50,
          waveSpeed: 1.20,
          zoom: 0.84 
        })
      );
    }
   
  }, [vantaEffect]);

  const handlechenge = (e) => {
    const { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value,
    });
  };




  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hakjw5z",
        "template_oph5o6g",
        form.current,
        "pc7y9Dv2GAuWDsXZH"
      )
      .then(
        (result) => {
         console.log(result)
        },
        (error) => {
         
        }
      );

    form.current.reset();
  };



  return (
    <>
    <Head>
      <title>Jith Stephen</title>
      <meta name="description" content="jith stephen portfolio" />
      
    </Head>
    <main  >
    <TransitionEfect/>
    <section ref={vantaRef} className={'p-0 m-0'} id="Contact">
      <div >
        <h1 className="text-center font-bold text-4xl">
        <AnimatedText text={"Contact Me"}/>
          <hr className="w-6 h-1 mx-auto my-4 bg-black  border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col gap-2 w-11/12 md:w-5/12  m-auto mt-10">
                        <form   ref={form}  className="flex flex-col w-11/12 gap-2 m-auto">
                        <label>Name</label>
                        <input type="text" name="user_name"
                                  onChange={handlechenge}  className="h-10" />
                        <label>Email</label>
                        <input type="email" name="user_email"
                                  onChange={handlechenge} className="h-10" />
                        <label>Message</label>
                        <input type="text"  name="message" onChange={handlechenge} className=" h-40" />
                        <button type="submit"  onClick={sendEmail}  className=" bg-blue-600
                              hover:bg-purple-700   rounded-sm py-2 px-2 rounded-full-50%
                              hover:text-black transition duration-200 mt-10 mb-10
                              font-playfair text-center cursor-pointer  " >sent</button>
                        </form>
        </div>
         <div className="flex flex-col justify-center items-center text-white">
         <a href = "mailto: jithstephen96@gmail.com"> <div className=" flex"> <Image  alt="pro"
            width={25}
            height={25} src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1681718204/portfolio/email_rnmp9t.png" /> <p>Send Email</p></div> </a>
         <a href="tel:+919526272502">  <div className=" flex"> <Image  alt="pro"
            width={25}
            height={25} src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1681718204/portfolio/telephone_kclste.png" /> <p>+91 9526272502</p></div></a>
         <p>wayanad,kerala</p>

         </div>
        <hr className="w-6 h-1 mx-auto my-4 bg-black  border-0 rounded"></hr>

        <div className='flex gap-4 item-center justify-center'>
              <motion.a href='https://github.com/jithstephen13' whileHover={{y:-2}} target={'_blank' }><GithubIcon className={"text-white w-1rem w-1rem"}/></motion.a>
              <motion.a href='https://www.linkedin.com/in/jithstephen13/' whileHover={{y:-2}}  target={'_blank' }><LinkedInIcon className={"text-white w-1rem w-1rem"}/></motion.a>
            
              <motion.a href='https://www.behance.net/jithstephen' whileHover={{y:-2}} target={'_blank' }> <Behance className={"text-white"}/></motion.a>


              
            </div> 
              
      </div>

    </section></main></>
  )
}

export default contact