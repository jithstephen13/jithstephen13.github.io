import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { allProjects } from '../../data/projectsData'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

export default function ProjectDetail({ project }) {
  if (!project) return <div>Project not found</div>

  return (
    <>
      <Head>
        <title>{project.name} | Project Details</title>
      </Head>
      <section className='relative z-10 text-gray-300 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 min-h-screen'>
        
        <div className="mb-12">
          <Link href="/#projects">
            <button className="text-primary hover:text-white transition-colors duration-300 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <span>←</span> Back to Projects
            </button>
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 relative aspect-[4/5] overflow-hidden rounded-md bg-gray-900 shadow-[0_0_40px_rgba(255,204,0,0.2)] border-2 border-primary/20">
            <Image
              src={project.imag}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side: Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start">
            <p className="text-primary font-bold tracking-widest uppercase mb-4 text-sm">
              {project.type}
            </p>
            <h1 className="font-black text-5xl md:text-7xl text-white uppercase tracking-wider mb-8">
              {project.name}
            </h1>

            <div className="bg-dark/60 backdrop-blur-md p-8 rounded-lg border border-gray-800 mb-8 shadow-xl">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Overview</h3>
              <p className="text-lg leading-relaxed text-gray-400">
                {project.dsc}
              </p>
            </div>

            <div className="bg-dark/60 backdrop-blur-md p-8 rounded-lg border border-gray-800 mb-8 shadow-xl">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Area of Responsibility</h3>
              <p className="text-lg leading-relaxed text-gray-400">
                {project.Responsibility}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Tech Stack Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-primary/10 text-primary border border-primary/30 rounded-full px-4 py-2 text-sm font-bold shadow-[0_0_10px_rgba(255,204,0,0.1)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link href={project.dep} target="_blank">
                <button className="bg-primary text-dark font-black uppercase text-sm px-8 py-4 tracking-widest rounded hover:shadow-[0_0_20px_rgba(255,204,0,0.6)] transition-all flex items-center gap-3">
                  Visit Live <BsArrowUpRightSquare size={18} />
                </button>
              </Link>
              {project.git && project.git !== "#" && (
                <Link href={project.git} target="_blank">
                  <button className="bg-transparent border-2 border-primary text-primary font-black uppercase text-sm px-8 py-4 tracking-widest rounded hover:bg-primary hover:text-dark transition-all flex items-center gap-3">
                    View Source <BsGithub size={18} />
                  </button>
                </Link>
              )}
            </div>

          </div>
        </motion.div>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const paths = allProjects.map((p) => ({
    params: { id: p.id },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = allProjects.find((p) => p.id === params.id)
  return { props: { project } }
}
