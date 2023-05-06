
const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-black border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top p-2 md:space-x-10 md:space-y-0 md:p-4 md:flex-row text-center">
          <div className="md:w-1/2 flex flex-col justify-center">
            
            <p>
              Hi, my name is <span className="font-bold text-purple-700">Jith</span>  and I am a{" "}
              <span className="font-bold text-purple-700">{"highly ambitious "}</span>,
              <span className="font-bold text-purple-700">{" self-motivated"}</span>, and
               
               <span className="font-bold text-purple-700">Full Stack Web Developer</span>
            </p>
            <br />
            <p>
              I complted Full Stack Web Developer from Masai School having 1200 hr Coding experience.and looking to enhance my professional experience with an IT company specializing in web development. I am armed with a deep sense of responsibility and enthusiasm to give 110% for any endeavor.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-purple-700">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
            
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default About