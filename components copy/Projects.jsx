import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { useTheme } from "next-themes"
import SlideUp from "./SlideUp"

import { allProjects } from "../src/data/projectsData"

const selfProjects = allProjects.filter(p => p.type === "SELF PROJECTS");
const realWorldProjects = allProjects.filter(p => p.type === "REAL WORLD");
const articles = allProjects.filter(p => p.type === "ARTICLES");

const Projects = () => {
  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  const [currentTab, setCurrentTab] = useState(0)

  const tabs = [
    { id: 0, name: "ALL PROJECTS", data: [...realWorldProjects, ...selfProjects, ...articles] },
    { id: 1, name: "REAL WORLD", data: realWorldProjects },
    { id: 2, name: "SELF PROJECTS", data: selfProjects },
    { id: 3, name: "ARTICLES", data: articles }
  ]

  const activeData = tabs[currentTab].data

  return (
    <section id="projects" className="relative z-10 text-gray-300 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
      
      {/* Header aligned like Melvin Thambi's */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-gray-800 pb-8">
        <h1 className="font-black text-5xl md:text-7xl text-white uppercase tracking-wider mb-8 md:mb-0">
          My <span className="text-primary block">Work</span>
        </h1>

        {/* Clean minimal tabs aligned right */}
        <div className="flex flex-wrap gap-4 md:gap-8">
          {tabs.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`font-semibold tracking-wide uppercase transition-colors duration-300 text-sm md:text-base border-b-2 
              ${item.id === currentTab ? "text-primary border-primary" : "text-gray-500 border-transparent hover:text-white"}`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Artwork-style Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {activeData.map((item, idx) => (
          <SlideUp key={idx}>
            <div className="flex flex-col group cursor-pointer text-left">
              
              {/* Image Container with portrait aspect ratio */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md bg-gray-900 shadow-xl mb-6">
                <Image
                  src={item.imag}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
              </div>

              {/* Card Meta & Title */}
              <div className="pl-2">
                <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-2">
                  <span className="text-primary mr-2">♦</span> {item.tech.slice(0, 2).join(' • ')}
                </p>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-3 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2 mb-6">
                  {item.dsc}
                </p>

                {/* Minimal Learn More Box */}
                <div className="flex items-center gap-4">
                  <Link href={`/project/${item.id}`}>
                    <button className="bg-white text-black font-bold uppercase text-xs px-4 py-2 hover:bg-primary transition-colors">
                      Learn More
                    </button>
                  </Link>
                  {/* Conditionally render Git Link */}
                  {item.git && item.git !== "#" && (
                    <Link href={item.git} target="_blank">
                       <BsGithub size={24} className="text-gray-400 hover:text-white transition-colors" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  )
}

export default Projects