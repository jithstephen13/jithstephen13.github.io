import React from "react"
import Image from "next/image"
import SlideUp from "../../components/SlideUp/SlideUp"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import AnimatedText from "../../components/AnimatedText"
import Head from "next/head"
import TransitionEfect from "../../components/TransitionEffectes/TransitionEfect"
 
const ProjectDtl=[
  {name:"Budget Store",
  imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1681715501/portfolio/Screenshot-2023-04-15-195404_osfrtk.webp",  
  dsc:"Budget Store is a web-based platform that enables users to find and rent products online with ease. It offers a secure payment gateway to ensure customers' information and transactions are protected, as well as a user-friendly interface",
  tech:["HTML" , "JavaSript" , "CSS" , "React" , "Chakra UI","Redux toolkit"," Tailwind CSS"],
  Responsibility:"Home Page, Admin page, Login/Sign up Page,Product page, Cart Page Navbar, Footer",
  dep:"https://budget-store.netlify.app/",
  git:"https://github.com/jithstephen13/BudgetStore"},

  {name:"TradeMart",
imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680443538/portfolio/tradeMart.ee82727d0146154405f8_u2ywnb.png",  
dsc:"TradeMart is clone website of IndiaMart. IndiaMart Indian e-commerce company that provides B2B and customer to customer sales services via its web portal",
tech:[ "react" ,"mongodb", "react-router", "mongoose", "expressjs","redux", "-thunk",  "firebase", "chakra UI"],
Responsibility:"Backend user Login/Sign up Page Admin Login/Sign up Page Product pages , Single Product Page Pop up",
dep:"https://trademart.netlify.app/",
git:"https://github.com/jithstephen13/TradeMart"},



{name:"Folkore",
imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680443538/portfolio/folklore.8eab392bfe5ae4c5c00f_intguh.png",  
dsc:"Folkore is built with the reference website anthropologie.com It is an e-commerce website that sells clothing, jewelry, home furniture, decorations, beauty products, and gifts and it was completed within just 5 days",
tech:["react", "redux", "express", "mongodb", "redux-thunk", "reactredux", "chakra UI",],
Responsibility:"Home Page ,Navbar,Footer, user Login/Sign up Page Admin Login/Sign up Page",
dep:"https://folkl0re.netlify.app/",
git:"https://github.com/jithstephen13/Folklore"},


{name:"Aqua Shop.com",
imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680443538/portfolio/shope.com.01a577d78fda57eccb6c_a9s4qg.png",  
dsc:"Aqua Shop is a new kind of shopping comparison site that offers the most comprehensive shopping experience on the web This Project was collaboratively built by Five members and it was completed within just 5 days",
tech:[ "HTML" ,"JavaSript" , "CSS" , "React" , "Chakra UI" , "ReactRedux"],
Responsibility:"Admin Page - Admin page operation, setting up React-Redux- Product Page Sorting",
dep:"https://github.com/NarayandasGanesh/Aquashop.com",
git:"https://aqua-shop.netlify.app/"},


{name:"Temp_Ray website",
imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680443538/portfolio/Rentmojo.57b8c600f29c400ea503_hruvns.png",  
dsc:"It is the clone of Rentmojo.com this website provides furniture and appliance for rentThis Project was individually built by me and it was completed within just 5 days",
tech:["HTML" , "JavaSript" , "CSS" , "React" , "Chakra UI"],
Responsibility:"Home Page, Admin page, Login/Sign up Page,Product page, Cart Page Navbar, Footer",
dep:"https://tem-ray-app.netlify.app/",
git:"https://github.com/jithstephen13/Temp_Ray-app/tree/main/temp_app"},

{name:"Lady Queen",
imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680456791/portfolio/icons/leadyQueen_olxur9.png",  
dsc:"Lady Queen is clone website of Urban Monkey. it is an e-commerce company that provides sales services via its web portal Project was individually built by me and it was completed within just 5 days",
tech:["HTML" , "JavaSript" , "CSS" ],
Responsibility:"Home Page, Admin page, Login/Sign up Page,Product page, Cart Page Navbar, Footer",
dep:"https://ladyqueencom.netlify.app/",
git:"https://github.com/jithstephen13/LadyQueen"},

]


const projects = () => {
 
  return (<>
    <Head>
      <title>Jith Stephen</title>
      <meta name="description" content="jith stephen portfolio" />
      
    </Head>
    <main  >
    <TransitionEfect/>
    <section id="Projects">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          <AnimatedText text="Projects" />
          <hr className="w-6 h-1 mx-auto my-4 bg-black border-0 rounded"></hr>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-10 m-auto">
          {


    ProjectDtl.map((item,idx)=>{
      return( 
      <SlideUp key={idx} offset="-300px 0px -300px 0px">
      <div className={`flex flex-col  animate-slideUpCubiBezier animation-delay-4 md:space-x-12 border-2 border-black rounded-lg shadow-lg shadow-white p-6 ${idx%2!=0 ? "mt-20":""} `}>
      <div className="text-center ">
    
      <Image
            src={`${item.imag}`}
            alt={item.name}
            width={800}
            height={1000} 
            className="mb-2 object-fill"
          />
    <div className="text-center mb-4">
       <h3 className="text-2xl">{item.name}</h3>
    </div>
         
          <p className="mb-4">{item.dsc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="font-bold">Tech Stack: </span>
          {
            item.tech.map((item,itn)=><button key={Math.random()} className="bg-black text-white h-8 p-2">{item}</button>)
          }

         
  </div>
   <p><span className="font-bold mb-4">Area of Responsibility:</span>{item.Responsibility}</p>
   
   <div className={`flex flex-row justify-center align-bottom space-x-4 mt-4 ${idx===3? "mb-12":""} `} >
                      <Link href={item.git} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={item.dep} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
  </div>

  </div>
  </div>
  </SlideUp>)
      
    })
  }
             






        </div>
       

        
      </div>
    </section></main></>
  )
}

export default projects