"use client"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Socialmedia } from "./Socialmedia";
import {motion} from "framer-motion"
import Image from "next/image";
import { Behance, GithubIcon, LinkedInIcon }  from "../components/SvgCompo/Svgicons";

const Contact = () => {
  const form = useRef();
  const [cred, setCred] = useState({});

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
    <section className={'relative z-10 text-gray-300 w-full max-w-7xl mx-auto px-6 md:px-12 py-24'} id="contact">
      <div className="border-t border-gray-800 pt-16 mt-8">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-16">
          <div className="md:w-1/2 flex flex-col">
            <h1 className="font-black text-5xl md:text-7xl text-white uppercase tracking-wider mb-8 text-center md:text-left">
              Let's <span className="text-primary">Connect</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-md">
              Have a project in mind or just want to say hi? I'd love to hear from you. Drop me a message and let's create something extraordinary.
            </p>
            <div className="flex flex-col text-white space-y-6">
              <a href="mailto:jithstephen96@gmail.com" className="hover:text-primary transition-colors group flex gap-4 items-center"> 
                <Image alt="email" width={24} height={24} src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1681718204/portfolio/email_rnmp9t.png" className="group-hover:scale-110 transition-transform"/> 
                <p className="text-xl">jithstephen96@gmail.com</p>
              </a>
              <a href="tel:+919526272502" className="hover:text-primary transition-colors group flex gap-4 items-center">  
                <Image alt="phone" width={24} height={24} src="https://res.cloudinary.com/dqgeth8jx/image/upload/v1681718204/portfolio/telephone_kclste.png" className="group-hover:scale-110 transition-transform"/> 
                <p className="text-xl">+91 9526272502</p>
              </a>
              <p className="text-gray-400 text-lg mt-4 uppercase tracking-widest text-sm">Wayanad, Kerala</p>
            </div>
            
            <div className='flex gap-8 mt-12'>
              <motion.a href='https://github.com/jithstephen13' whileHover={{y:-5, scale: 1.1}} target={'_blank' }><GithubIcon className={"text-primary w-8 h-8"}/></motion.a>
              <motion.a href='https://www.linkedin.com/in/jithstephen13/' whileHover={{y:-5, scale: 1.1}} target={'_blank' }><LinkedInIcon className={"text-primary w-8 h-8"}/></motion.a>
              <motion.a href='https://www.behance.net/jithstephen' whileHover={{y:-5, scale: 1.1}} target={'_blank' }> <Behance className={"text-primary w-8 h-8"}/></motion.a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            <iframe
              name="hidden_iframe"
              style={{ display: "none" }}
              onLoad={() => {
                if (window.submitted) {
                  window.submitted = false;
                  alert("Message sent successfully ✅");
                }
              }}
            />
            <form
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeeFxLLB7SPWhDbVpgMDDkAYfAOw1ttWjZzFjzpp8rFPhYI3g/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => { window.submitted = true; }}
              className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  name="entry.577166974"
                  className="h-14 bg-dark/60 text-white border-2 border-gray-800 focus:border-primary px-4 outline-none rounded-md transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  name="entry.1142341537"
                  className="h-14 bg-dark/60 text-white border-2 border-gray-800 focus:border-primary px-4 outline-none rounded-md transition-colors" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-widest">Message</label>
                <textarea 
                  name="entry.2116418071"
                  className="h-40 bg-dark/60 text-white border-2 border-gray-800 focus:border-primary p-4 outline-none rounded-md resize-none transition-colors" 
                />
              </div>
              <button type="submit"
                className="bg-primary text-dark font-black text-sm uppercase tracking-widest rounded py-4 px-8 hover:bg-white transition-all duration-300 mt-4 w-full md:w-auto self-start">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact