import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import project1 from '../assets/projects/unisportcover.webp'
import project2 from '../assets/projects/AWCHEM/awchem.webp'
import project3 from '../assets/projects/wdcover.webp'
import project4 from '../assets/projects/ashcover.webp'
import GitStats from '../components/Gitstats'
import ScrollToTop from '../components/ScrollToTop'
import Atlas from '../assets/certificates/atlas.webp'
import PHP from '../assets/certificates/php.webp'

const ROLES = ['Full Stack Developer', 'Problem Solver', 'UI/UX Enthusiast', 'React Developer']

const featuredProjects = [
  {
    href: '/projects/1',
    image: project1,
    alt: 'UniSport project screenshot',
    title: 'UniSport - Full Stack Project',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication', 'Tailwind CSS'],
  },
  {
    href: '/projects/2',
    image: project2,
    alt: 'AWCHEM project screenshot',
    title: 'AWCHEM - Full Stack Project', 
    tech: ['Laravel', 'React', 'Vite', 'MySQL', 'REST API', 'Tailwind CSS'],
  },
  {
    href: '/projects/4',
    image: project3,
    alt: 'Wageesha Diaz Portfolio project screenshot',
    title: 'Wageesha Diaz Portfolio ',
    tech: ['React', 'Tailwind CSS', 'Motions', 'EmailJS'],
  },
  {
    href: '/projects/7',
    image: project4,
    alt: 'Ash Project screenshot',
    title: 'Ash Design Studio Portfolio',
    tech: ['React', 'Tailwind CSS', 'EmailJS'],
  },
]

const certifications = [
  {
    href: 'https://learn.mongodb.com/c/gXiGj1yqT0eDRjRWaZT7Gg',
    image: Atlas,
    alt: 'MongoDB Atlas Certification',
    title: 'Getting Started with MongoDB Atlas',
    company: 'MongoDB University',
  },
  {
    href: 'https://learn.mongodb.com/c/moyrJBd3T_KOM8JOXjw6IQ',
    image: PHP,
    alt: 'MongoDB PHP Certification',
    title: 'Connecting to MongoDB in PHP',
    company: 'MongoDB University',
  },
]

const SKILLS = [
  { label: 'React', color: '#61DAFB' },
  { label: 'HTML5', color: '#E34F26' },
  { label: 'CSS3', color: '#264DE4' },
  { label: 'JavaScript', color: '#F7DF1E' },
  { label: 'Figma', color: '#F05032' },
  { label: 'Tailwind CSS', color: '#38BDF8' },
  { label: 'Laravel', color: '#F05340' },
  { label: 'Express.js', color: '#ffffff' },
  { label: 'Spring Boot', color: '#6DB33F' },
  { label: 'Git/GitHub', color: '#F05032' },
  { label: 'Postman', color: '#FF6C37' },
  { label: 'MySQL', color: '#4479A1' },
  { label: 'MongoDB', color: '#47A248' },
  { label: 'Axios', color: '#5A29E4' },
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
      <ScrollToTop />
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
          I am an IT undergraduate student passionate about code and thoughtful design. Based in DownSouth, Sri Lanka.
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
          <span className="font-main text-xs text-white/80 tracking-widest uppercase">Scroll</span>
          <div
            className="w-px h-4 bg-linear-to-b from-white/30 to-transparent"
            style={{ animation: 'scrollPulse 2s ease-in-out infinite' }}
          />
        </div>
      </section>
      {/* ── About ── */}
      <section className="relative z-10 pb-12 pt-4 lg:pt-8 px-6 max-w-5xl mx-auto" id="about">
        <motion.div className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          {/* Text */}
          <div>
            <p className="font-main text-sm text-primary uppercase tracking-widest mb-4" style={{ color: '#ffffff' }}>
              About Me
            </p>
            <h2
              className="font-main font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.15 }}
            >
              Developer<span className="text-white font-serif">,</span> designer and quick learner<span className="text-white font-serif">.</span>
            </h2>
            <p className="font-main text-white/50 text-sm leading-relaxed mb-4">
              I'm a third year BSc (Hons) Information Technology undergraduate at SLIIT,
              Sri Lanka. I love turning complexproblems into simple, beautiful, and
              intuitive solutions. My focus is on creating seamless user experiences
              while writing clean and maintainable code.
            </p>
            <p className="font-main text-white/50 text-sm leading-relaxed">
              Alongside my studies, I take on freelance projects, applying what
              I learn to real client work. Outside of coding, I stay
              engaged by exploring new technologies and contributing to
              open source — with the occasional good cup of coffee ☕
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
            More About Me
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

      {/* ── Education ── */}
      <section className="relative z-10 py-12 px-6 max-w-5xl mx-auto" id="education">
        <motion.div className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="font-main text-sm text-primary uppercase tracking-widest mb-4" style={{ color: '#ffffff' }}>
              My EDUCATION
            </p>
            <h2
              className="font-main font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.15 }}
            >
              Still learning<span className="text-white font-serif">,</span> always building<span className="text-white font-serif">.</span>
            </h2>
            <p className="font-main text-white/50 text-sm leading-relaxed">
              Currently pursuing my degree while applying what I learn through
              real projects and freelance work.

              Alongside my degree, I'm currently working through
              freeCodeCamp's frontend and backend development courses, and I've completed
              MongoDB's "Getting Started with MongoDB Atlas" and "Connecting to MongoDB
              in PHP" certifications.
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-6 bg-white/5 backdrop-blur">
            <div className="flex items-start justify-between mb-2">
              <span className="font-main text-white font-semibold text-base">
                BSc (Hons) Information Technology
              </span>
              <span className="font-main text-white/40 text-xs shrink-0 ml-3">
                2024 — Present
              </span>
            </div>
            <p className="font-main text-white/50 text-sm mb-4">
              Sri Lanka Institute of Information Technology (SLIIT).
            </p>
            <span className="inline-flex items-center gap-2 text-xs font-main text-white/60 border border-white/10 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              Third Year Undergraduate
            </span>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.href}
              className="text-white rounded-2xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
            >
              <div className="rounded-2xl w-full overflow-hidden">
                <a href={cert.href} rel="noopener noreferrer" target="_blank">
                  <img src={cert.image} alt={cert.alt} className="rounded-2xl h-auto w-full object-contain" />
                </a>
              </div>
              <div className="text-white mt-4 text-lg font-main pl-3">
                {cert.title}
              </div>
              <div className="flex flex-wrap gap-2 pl-3 mt-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                  {cert.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <a href="/education" className="font-main text-sm font-medium mt-6 inline-block px-5 py-3 rounded-full border border-white/20 text-white hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300">
            View Full Education
          </a>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="relative z-10 py-12 px-6 max-w-5xl mx-auto" id="projects">
        <motion.div className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div >
            <p className="font-main text-sm text-primary uppercase tracking-widest mb-4" style={{ color: '#ffffff' }}>
              FEATURED PROJECTS
            </p>
            <h2
              className="font-main font-bold text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.15 }}
            >
              Building things that live on the internet<span className="text-white font-serif">.</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {featuredProjects.map((proj, i) => (
            <motion.div
              key={proj.href}
              className="text-white rounded-2xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
            >
              <div className="rounded-2xl h-56 md:h-72 w-full overflow-hidden">
                <a href={proj.href} rel="noopener noreferrer">
                  <img src={proj.image} alt={proj.alt} className="rounded-2xl h-full w-full object-cover" />
                </a>
              </div>
              <div className="text-white mt-2 text-lg font-main pl-3">
                {proj.title}
              </div>
              <div className="flex flex-wrap gap-2 pl-3 mt-1">
                {proj.tech.map((t) => (
                  <span key={t} className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <a href="/projects" className="font-main text-sm font-medium mt-6 inline-block px-5 py-3 rounded-full border border-white/20 text-white hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300">
            View All Projects
          </a>
        </div>
      </section>

      {/* GitHub Stats */}
      <GitStats username="dinujaubeysinghe" />

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
              Let<span className="text-white">’</span>s{' '}
              <em className="not-italic text-white/50">Chat</em>
              <br />
              Don<span className="text-white">’</span>t Hesitate<span className="text-white font-serif">.</span>
            </h2>
          </motion.div>
          <div className="font-main text-white/50 text-center max-w-lg">
            <p>Got a project, an internship opening, or just want to say hi? My inbox is always open.</p>
            <div className="flex flex-col justify-center lg:flex-row lg:gap-2">
              <a
                href="/contact"
                className="font-main text-sm font-medium mt-6 inline-block px-10 py-3 rounded-full border bg-white border-white/20 text-black hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300">
                Contact Me
              </a>
              <label className="font-main text-sm font-medium mt-6 inline-block px-10 py-3 rounded-full border border-white/20 text-white">
                contact.dinuja@gmail.com
              </label>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
