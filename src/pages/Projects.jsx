import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// ─── ADD YOUR PROJECT IMAGES HERE ────────────────────────────────────────────
import project1 from '../assets/projects/wageesha_portfolio.webp'
import project2 from '../assets/projects/unisports.webp'
import project3 from '../assets/projects/Smart Campus/sdpT.webp'
import project4 from '../assets/projects/sportify/spdp2.webp'
import project5 from '../assets/projects/Figma/fdpT.webp'
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    number: '01',
    title: 'Wageesha Diaz Portfolio',
    description: 'A modern personal portfolio website designed and developed to showcase skills, projects, and experience as a frontend developer.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    image: project1,
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: 'UniSport — Campus Project',
    description: 'A campus sports management platform built as an academic project, allowing students to register, manage, and track university sports events.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: project2,
    featured: false,
  },
  {
    id: 3,
    number: '03',
    title: 'Smart Campus Hub — Academic Project',
    description: 'Short description.',
    tech: ['React', 'Spring Boot', 'Tailwind CSS'],
    image: project3,
    featured: false,
  },
  {
    id: 4,
    number: '04',
    title: 'Sportify — Campus Project',
    description: 'Another short description.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB'],
    image: project4     ,
    featured: false,
  },
  {
    id: 5,
    number: '05',
    title: 'Graphify — Campus Project',
    description: '',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Mobile App Design'], 
    image: project5     ,
    featured: false,
  },
]

const Projects = () => {
  const navigate = useNavigate()

  return (
    <div>

      {/* ── Heading ── */}
      <div className="flex flex-col items-center mt-36 px-4 md:px-6">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Project 
        </motion.h2>
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-center mt-2 text-white/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.06 }}
        >
         Showcase
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-white/70 mt-6 text-center max-w-2xl font-main"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          Coded at 2am, deployed at 6am, still working today. Those should make my AMMA proud.
        </motion.p>
      </div>

      {/* ── Grid ── */}
      <div className="mt-12 px-4 md:px-10 max-w-5xl mx-auto w-full mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="flex flex-col gap-3 cursor-pointer group"
            >

              {/* Image */}
              <div className="rounded-2xl h-56 md:h-72 w-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title row */}
              <div className="flex items-start justify-between px-1">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="text-xs font-main font-bold text-white px-2 py-0.5 rounded-full border border-white/20 bg-white/5">
                        Featured
                      </span>
                    )}
                    <span className="text-xs font-main text-white/30 tracking-widest">{project.number}</span>
                  </div>
                  <div className="text-white text-lg font-main font-medium">
                    {project.title}
                  </div>
                </div>
              </div>

              {/* Tech pills + links */}
              <div className="flex items-center justify-between px-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Projects