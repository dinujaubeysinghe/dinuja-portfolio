import aboutBg from '../assets/about2.webp'
import aboutBg2 from '../assets/about3.webp'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div>

      <div className="min-h-screen flex flex-col items-center justify-end mt-20 md:mt-36 px-4 md:px-6">
        <img
          src={`${window.innerWidth >= 1024 ? aboutBg2 : aboutBg}`}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-27 lg:opacity-20 pointer-events-none"
        />

        <h2
          className="text-4xl sm:text-5xl md:text-7xl font-main font-bold mb-8 md:mb-16 pb-16 md:pb-30 text-center animate-fadeUp"
          style={{ animationDelay: '150ms' }}
        >
          About Me
        </h2>
      </div>

      {/* About */}
      <section
        className="w-full h-auto pb-24 px-4 md:px-6 mx-auto animate-pop"
        style={{ animationDelay: '220ms' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="text-white font-main font-bold text-2xl md:text-3xl px-4 sm:px-8 md:px-20 lg:px-40 xl:px-88 animate-fadeUp"
            style={{ animationDelay: '300ms' }}
          >
            Ayubowan<span className="text-white/70 font-sans">..</span>
          </div>

          <div className="text-white font-main px-4 sm:px-8 md:px-20 lg:px-40 xl:px-88 mt-4 text-md md:text-md leading-relaxed">
            I am an Information Technology undergraduate with a strong passion for full stack development and building end-to-end software solutions that deliver meaningful user experiences. I enjoy turning ideas into practical solutions through technology and continuously expanding my knowledge in modern software development practices.
          </div>

          <div className="text-white font-main px-4 sm:px-8 md:px-20 lg:px-40 xl:px-88 mt-4 text-md md:text-md leading-relaxed">
            My interests span across the entire development lifecycle, from designing intuitive and responsive user interfaces to developing robust server-side applications and managing databases. I have experience working with technologies such as React, JavaScript, Tailwind CSS, Node.js, and MongoDB to create modern web solutions.
          </div>

          <div className="text-white font-main px-4 sm:px-8 md:px-20 lg:px-40 xl:px-88 mt-4 text-md md:text-md leading-relaxed">
            I am always eager to learn new technologies, take on challenging projects, and improve my technical skills. My goal is to contribute to innovative software projects, gain industry experience, and grow into a skilled full stack developer who delivers high-quality digital products.
          </div>

          <div className="text-white/70 font-main px-4 sm:px-8 md:px-20 lg:px-40 xl:px-88 mt-4 text-sm flex items-center gap-3">
            <span
              className="italic animate-fadeUp"
              style={{ animationDelay: '700ms' }}
            >
                Dinuja Ubeysinghe
            </span>
            <span
              className="inline-block line-grow"
              style={{ animationDelay: '620ms' }}
            ></span>
          </div>
          <div className="px-4 sm:px-8 md:px-20 lg:px-40 xl:px-88 pt-8">
            <a
              href="/resume/dinuja ubeysinghe resume.pdf"
              download="dinuja ubeysinghe resume.pdf"
              className='font-main text-sm font-medium px-7 py-3 rounded-full border border-white/20 text-black bg-white hover:bg-black hover:text-white transition-all duration-300'
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default About