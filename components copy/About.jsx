
const About = () => {
  return (
    <section id="about" className="relative z-10 text-gray-300 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
      <div className="border-t border-gray-800 pt-16 mt-8">
        <h1 className="font-black text-5xl md:text-7xl text-white uppercase tracking-wider mb-12 text-left">
          About <span className="text-primary block">Me</span>
        </h1>

        <div className="flex flex-col md:flex-row text-left gap-12">
          <div className="md:w-1/2 flex flex-col justify-start text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              Hi, my name is <span className="font-bold text-primary">Jith</span> and I am a{" "}
              <span className="font-bold text-white">highly ambitious</span>,
              <span className="font-bold text-white"> self-motivated</span>, and
               <span className="font-bold text-primary"> Full Stack Web Developer</span>.
            </p>
            <p className="text-gray-400">
              Frontend Developer with 2+ years of experience building fast, secure, and user-friendly
              web applications using React.js. Expert in Redux Toolkit, JavaScript/ES6+, and modern
              frontend tooling, with a proven track record of delivering responsive interfaces for
              platforms serving 10M+ users. Passionate about writing clean code, improving UX, and
              building products that make a real impact.
            </p>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-start text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              I believe that you should{" "}
              <span className="font-bold text-primary uppercase">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible.
            </p>
            <p className="text-gray-400">
              I am excited to see where my career takes me and am
              always open to new opportunities. Let's create something extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About