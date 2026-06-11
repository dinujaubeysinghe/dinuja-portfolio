import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import project1 from '../assets/projects/wageesha_portfolio.webp'
import project2 from '../assets/projects/unisports.webp'

const ROLES = ['Full Stack Developer','Problem Solver', 'UI/UX Enthusiast',  'React Developer']

const SKILLS = [
  { label: 'React', color: '#61DAFB' },
  { label: 'Figma', color: '#F05032' },
  { label: 'JavaScript', color: '#F7DF1E' },
  { label: 'Tailwind CSS', color: '#38BDF8' },
  { label: 'MongoDB', color: '#47A248' },
  { label: 'Express.js', color: '#ffffff' },
  { label: 'TypeScript', color: '#3178C6' },
  { label: 'Git', color: '#F05032' },
]

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [visible, setVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 0)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const role = ROLES[roleIndex]
    let timeout

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
      } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        timeout = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length)
          setTyping(true)
        }, 0)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#000200]">

      {/* Ambient overlays removed to keep background solid #000200 */}
      <div />

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center"
      >
        {/* Availability badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-main text-white/70 border border-white/10 bg-white/5 backdrop-blur mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="font-main font-bold text-white leading-none mb-4"
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 7rem)',
            letterSpacing: '-0.02em',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
          }}
        >
          DINUJA
          <br />
          <span className='text-white/50'>UBEYSINGHE</span>
        </h1>

        {/* Typewriter role */}
        <div
          className="font-main text-white/60 mb-8 h-8 flex items-center justify-center"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s ease 0.25s',
          }}
        >
          <span>{displayed}</span>
          <span
            className="ml-0.5 inline-block w-0.5 bg-primary"
            style={{
              height: '1.2em',
              background: '#ffffff',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </div>

        {/* Short bio */}
        <p
          className="font-main text-white/50 max-w-xl text-sm leading-relaxed mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
          }}
        >
          I craft clean, performant web experiences with a passion for elegant code
          and thoughtful design. Based in DownSouth, Sri Lanka.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s',
          }}
        >
          <a
            href="/projects"
            className="font-main text-sm font-medium px-7 py-3 rounded-full border border-white/20 text-black bg-white hover:bg-black hover:text-white transition-all duration-300"
          >
           View Projects
          </a>
          <a
            href="/contact"
            className="font-main text-sm font-medium px-7 py-3 rounded-full text-white/80 border border-white/20 backdrop-blur transition-all duration-300 hover:border-white/40 hover:text-white hover:bg-white/5"
          >
             Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex flex-col items-center gap-2"
          style={{
            opacity: visible ? 0.4 : 0,
            transition: 'opacity 1s ease 1s',
          }}
        >
          <span className="font-main text-xs text-white/40 tracking-widest uppercase">Scroll</span>
          <div
            className="w-px h-4 bg-linear-to-b from-white/30 to-transparent"
            style={{ animation: 'scrollPulse 2s ease-in-out infinite' }}
          />
        </div>
      </section>
      {/* ── About ── */}
      <section className="relative z-10 pb-12 pt-8 px-6 max-w-5xl mx-auto" id="about">
        <motion.div className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          {/* Text */}
          <div>
            <p className="font-main text-xs text-primary uppercase tracking-widest mb-4" style={{ color: '#ffffff' }}>
              About Me
            </p>
            <h2
              className="font-main font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.15 }}
            >
              Building things that live on the internet
            </h2>
            <p className="font-main text-white/50 text-sm leading-relaxed mb-4">
              I'm a passionate developer who loves turning complex problems into simple,
              beautiful, and intuitive solutions. My focus is on creating seamless user
              experiences while writing clean and maintainable code.
            </p>
            <p className="font-main text-white/50 text-sm leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open source, or sipping a good cup of coffee ☕
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-3">
            {SKILLS.map(({ label, color }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10 cursor-default"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: color, boxShadow: `0 0 6px ${color}88` }}
                />
                <span className="font-main text-sm text-white/70">{label}</span>
              </div>
            ))}
          </div>
          </motion.div>
            <div className="flex justify-center mt-6">
            <a href="/about" className="font-main text-sm font-medium mt-6 inline-block px-5 py-3 rounded-full border border-white/20 text-white hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300">
                About Me
            </a>
        </div>
      </section>

      {/* Floating decorations removed for a solid background */}
      <div />

      {/* Keyframe styles */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.1); }
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      {/* ── Projects ── */}
      <section className="relative z-10 py-12 px-6 max-w-5xl mx-auto" id="projects">
        <div className="font-main text-white ">
            Featured Projects
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <motion.div
            className="mt-4 text-white/50 rounded-2xl w-full md:w-1/2"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <div className="rounded-2xl h-56 md:h-72 w-full overflow-hidden">
                <a href="/projects/1" rel="noopener noreferrer">
                    <img src={project2} alt="Project 2" className="rounded-2xl h-full w-full object-cover" />
                </a>
            </div>
            <div className="text-white mt-2 text-lg font-main pl-3">
                UniSport - Full Stack Project
            </div>
          </motion.div>
          <motion.div
            className="mt-4 text-white rounded-2xl w-full md:w-1/2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <div className="rounded-2xl h-56 md:h-72 w-full overflow-hidden">
                <a href="/projects/3" rel="noopener noreferrer">
                    <img src={project1} alt="Project 1" className="rounded-2xl h-full w-full object-cover" />
                </a>
            </div>
            <div className="text-white mt-2 text-lg font-main pl-3">
                Wageesha Diaz Portfolio
            </div>
          
          </motion.div>
          
        </div>
        <div className="flex justify-center mt-6">
            <a href="/projects" className="font-main text-sm font-medium mt-6 inline-block px-5 py-3 rounded-full border border-white/20 text-white hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300">
                View All Projects
            </a>
        </div>

      </section>
      {/* ── Contact ── */}
      <section className="relative z-10 pt-12 pb-16 px-6 max-w-5xl mx-auto" id="contact">
        <div className="font-main text-white mb-4 flex flex-col items-center"> 
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-white/50 text-[11px] uppercase tracking-widest font-main mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          Get in touch
        </div>
        <motion.div className="font-main text-white text-center mb-6"
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.06 }}
        >
          <h2
            className="font-main font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '-0.02em' }}
          >
            Let's{' '}
            <em className="not-italic text-white/50">chat</em>
            <br />
            Don't Be Shy
          </h2>
        </motion.div>
        <div>
             <a href="/contact" className="font-main text-sm font-medium mt-6 inline-block px-10 py-3 rounded-full border border-white/20 text-white hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300">
                Contact Me
            </a>
        </div>
        </div>
      </section>

    </div>
  )
}