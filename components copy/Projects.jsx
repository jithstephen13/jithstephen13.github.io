import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { useTheme } from "next-themes"
import SlideUp from "./SlideUp"

const selfProjects = [
  // ✅ KEEPING ALL YOUR EXISTING PROJECTS (unchanged)
  {
    name:"Budget Store",
    imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1681715501/portfolio/Screenshot-2023-04-15-195404_osfrtk.webp",
    dsc:"Budget Store is a web-based platform...",
    tech:["HTML","JavaSript","CSS","React","Chakra UI","Redux toolkit","Tailwind CSS","Stripe","Three Js"],
    Responsibility:"Home Page, Admin page...",
    dep:"https://budget-store.netlify.app/",
    git:"https://github.com/jithstephen13/BudgetStore"
  },
  {
    name:"TradeMart",
    imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680443538/portfolio/tradeMart.ee82727d0146154405f8_u2ywnb.png",
    dsc:"TradeMart is clone website of IndiaMart...",
    tech:["react","mongodb","react-router","mongoose","expressjs","redux-thunk","firebase","chakra UI"],
    Responsibility:"Backend user Login...",
    dep:"https://trademart.netlify.app/",
    git:"https://github.com/jithstephen13/TradeMart"
  },
  {
    name:"Folkore",
    imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680443538/portfolio/folklore.8eab392bfe5ae4c5c00f_intguh.png",
    dsc:"Folkore is built with the reference website...",
    tech:["react","redux","express","mongodb","redux-thunk","reactredux","chakra UI"],
    Responsibility:"Home Page ,Navbar...",
    dep:"https://folkl0re.netlify.app/",
    git:"https://github.com/jithstephen13/Folklore"
  },
  {
    name:"Aqua Shop.com",
    imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680443538/portfolio/shope.com.01a577d78fda57eccb6c_a9s4qg.png",
    dsc:"Aqua Shop is a shopping comparison site...",
    tech:["HTML","JavaSript","CSS","React","Chakra UI","ReactRedux"],
    Responsibility:"Admin Page...",
    dep:"https://aqua-shop.netlify.app/",
    git:"https://github.com/NarayandasGanesh/Aquashop.com"
  },
  {
    name:"Temp_Ray website",
    imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680443538/portfolio/Rentmojo.57b8c600f29c400ea503_hruvns.png",
    dsc:"Clone of Rentmojo...",
    tech:["HTML","JavaSript","CSS","React","Chakra UI"],
    Responsibility:"Home Page...",
    dep:"https://tem-ray-app.netlify.app/",
    git:"https://github.com/jithstephen13/Temp_Ray-app/tree/main/temp_app"
  },
  {
    name:"Lady Queen",
    imag:"https://res.cloudinary.com/dqgeth8jx/image/upload/v1680456791/portfolio/icons/leadyQueen_olxur9.png",
    dsc:"Clone of Urban Monkey...",
    tech:["HTML","JavaSript","CSS"],
    Responsibility:"Home Page...",
    dep:"https://ladyqueencom.netlify.app/",
    git:"https://github.com/jithstephen13/LadyQueen"
  }
]

const realWorldProjects = [
  {
    name: "K-Smart",
    imag: "/images/ksmart.png", // add your image
    dsc: "Worked as a frontend developer in K-Smart application serving 10M+ users in Kerala.",
    tech:["React","Redux","Microservices","REST API"],
    Responsibility:"Frontend development, performance optimization, large scale UI handling",
    dep:"https://ksmart.lsgkerala.gov.in/ui/web-portal",
    git:"#"
  },
  {
    name: "KSUTE",
    imag: "/images/ksute.png",
    dsc: "Government-based project with scalable architecture and real-time data handling.",
    tech:["React","Node.js","Microservices"],
    Responsibility:"Frontend lead, reusable components, API integration",
    dep:"https://www.office.ikm.gov.in/ui/home/employee/login",
    git:"#"
  }
]

const articles = [
  {
    name: "Git Rebase",
    imag: "/images/article1.png",
    dsc: "Understanding Git Rebase with practical examples.",
    tech:["Git","Version Control"],
    Responsibility:"Technical Writing",
    dep:"https://medium.com/@jithstephen96/git-rebase-1755387bfe26",
    git:"https://medium.com/@jithstephen96/git-rebase-1755387bfe26"
  },
  {
    name: "EC2 Setup with SSL",
    imag: "/images/article2.png",
    dsc: "Step-by-step EC2 setup with SSL and deployment.",
    tech:["AWS","EC2","SSL"],
    Responsibility:"Technical Writing",
    dep:"https://medium.com/@jithstephen96/process-for-setting-up-an-ec2-instance-with-ssl-github-integration-and-front-end-deployment-b12aa8cbfb30",
    git:"https://medium.com/@jithstephen96/process-for-setting-up-an-ec2-instance-with-ssl-github-integration-and-front-end-deployment-b12aa8cbfb30"
  },
  {
    name: "Hosting using S3 + CloudFront",
    imag: "/images/image.png",
    dsc: "Complete guide for hosting using AWS services.",
    tech:["AWS","S3","CloudFront","Route53"],
    Responsibility:"Technical Writing",
    dep:"https://medium.com/@jithstephen96/website-hosting-using-s3-route-53-cloudfront-acm-and-godaddy-domain-8d27a9c5e8a0",
    git:"https://medium.com/@jithstephen96/website-hosting-using-s3-route-53-cloudfront-acm-and-godaddy-domain-8d27a9c5e8a0"
  }
]

const Projects = () => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const [currentTab, setCurrentTab] = useState(0)

  const tabs = [
    { id: 0, name: "Real World Project", data: realWorldProjects },
    { id: 1, name: "Self Project", data: selfProjects },
    { id: 2, name: "Article", data: articles }
  ]

  const activeData = tabs[currentTab].data

  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">

        <h1 className="text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-black border-0 rounded"></hr>
        </h1>

        {/* Tabs */}
        <div style={{marginBottom: "30px"}} className="min-h-20 flex flex-row justify-between mx-10 gap-4 mb-8 p-5">
          {tabs.map((item) => (
            <div
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`cursor-pointer flex justify-center items-center w-full h-10 p-3 mx-10 border-2 border-black rounded hover:bg-slate-500
              ${item.id === currentTab ? "bg-black text-white" : "bg-white"}`}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 m-auto">
          {activeData.map((item, idx) => (
            <SlideUp key={idx}>
              <div className={`flex flex-col animate-slideUpCubiBezier animation-delay-4 md:space-x-12 border-2 border-black rounded-lg shadow-lg shadow-white p-6 ${idx%2!=0 ? "mt-20":""}`}>

                <div className="text-center">
                  <Image
                    src={item.imag}
                    alt={item.name}
                    width={800}
                    height={1000}
                    className="mb-2 object-fill"
                  />

                  <h3 className="text-2xl mb-4">{item.name}</h3>

                  <p className="mb-4">{item.dsc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="font-bold text-purple-700">Tech Stack : </span>
                    {item.tech.map((tech, i) => (
                      <button key={i} className="bg-black rounded-md text-white h-8 p-2">
                        {tech}
                      </button>
                    ))}
                  </div>

                  <p>
                    <span className="font-bold text-purple-700">
                      Area of Responsibility :
                    </span>{" "}
                    {item.Responsibility}
                  </p>

                  <div className="flex flex-row justify-center space-x-4 mt-4">
                    <Link href={item.git} target="_blank">
                      <BsGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                    </Link>
                    <Link href={item.dep} target="_blank">
                      <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                    </Link>
                  </div>

                </div>

              </div>
            </SlideUp>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects