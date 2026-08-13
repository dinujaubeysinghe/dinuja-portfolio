import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// ─── ADD YOUR PROJECT IMAGES HERE ────────────────────────────────────────────
import project1 from '../assets/projects/wdcover.webp'
import project2 from '../assets/projects/unisportcover.webp'
import project3 from '../assets/projects/Smart Campus/sdpT.webp'
import project4 from '../assets/projects/sportify/spdp2.webp'
import project5 from '../assets/projects/Figma/fdpT.webp'
import project6 from '../assets/projects/AW Chem/awhome.webp'
import project7 from '../assets/projects/ashcover.webp'
import project8 from '../assets/projects/AWCHEM/awchem.webp'
import project9 from '../assets/projects/BentotaSamantha/bscover.webp'
// ─────────────────────────────────────────────────────────────────────────────

const projects = [
   {
    id: 1,
    number: '01',
    title: 'UniSport — Full Stack Project',
    description: 'A campus sports management platform built as an academic project, allowing students to register, manage, and track university sports events.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication', 'Tailwind CSS'],
    image: project2,
    featured: true,
  },
  {
    id: 2,
    number: '02',
    title: 'AWCHEM — Full Stack Project',
    description: 'A Sinhala-language A/L chemistry tutoring platform enabling a teacher to manage classes, quizzes, and student progress with role-based dashboards.',
    tech: ['Laravel', 'React', 'Vite', 'MySQL', 'REST API', 'Tailwind CSS'],
    image: project8,
    featured: true,
  },
  {
    id: 3,
    number: '03',
    title: 'AW Chem — Figma Project',
    description: 'Short description.',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Web App Design'],
    image: project6,
    featured: false,
  },
  {
    id: 4,
    number: '04',
    title: 'Wageesha Diaz Portfolio',
    description: 'A modern personal portfolio website designed and developed to showcase skills, projects, and experience as a frontend developer.',
    tech: ['React', 'Tailwind CSS', 'Motions', 'EmailJS'],
    image: project1,
    featured: true,
  },
  {
    id: 5,
    number: '05',
    title: 'Smart Campus Hub — Full Stack Project',
    description: 'Short description.',
    tech: ['React', 'Spring Boot', 'Tailwind CSS', 'REST API', 'MongoDB'],
    image: project3,
    featured: false,
  },
  {
    id: 6,
    number: '06',
    title: 'Graphify — Figma Project',
    description: '',
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Mobile App Design'], 
    image: project5     ,
    featured: false,
  },
  {
    id: 7,
    number: '07',
    title: 'Ash Design Studio Portfolio',
    description: '',
    tech: ['React', 'Tailwind CSS', 'EmailJS'], 
    image: project7,
    featured: false,
  },
  {
    id: 8,
    number: '08',
    title: 'Bentota Samantha Tours & Travels',
    description: '',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    image: project9,
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