import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import projects from '../data/projects'

const ProjectDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const projectId = Number(id)
  const project = projects.find((p) => p.id === projectId) || projects[0]
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setActiveImg(0)
  }, [projectId])

  const screenshots = project.screenshots ?? []
  const hasScreenshots = screenshots.length > 0
  const activeScreenshot = screenshots[Math.min(activeImg, screenshots.length - 1)]

  return (
    <div>
      {/* ── Header ── */}
      <div className="flex flex-col items-center mt-30 px-4 md:px-6 ">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-10 flex items-center justify-between">
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-main transition-colors duration-200 cursor-pointer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7 7M5 12l7-7"/>
            </svg>
            Go Back
          </motion.button>
        </div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center mt-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/70 mt-6 text-center max-w-2xl font-main"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {project.tagline}
        </motion.p>

        {/* ── Links ── */}
        <motion.div
          className="flex items-center gap-4 mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-main font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/50 px-4 py-2 rounded-full transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-main font-medium text-white border border-white/50 hover:border-white px-4 py-2 rounded-full transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        </motion.div>
      </div>

      {/* ── Main content ── */}
      <div className="mt-12 px-4 md:px-10 max-w-5xl mx-auto w-full mb-16">

        {/* ── Screenshots ── */}
        <motion.fieldset
          className="border border-white/50 rounded-3xl p-6 md:p-8 mb-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <legend className="text-sm font-main font-bold text-white px-3 rounded-full">Screenshots</legend>

          {/* Main image */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 md:p-4 mb-4">
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/20">
              {hasScreenshots ? (
                <img
                  src={activeScreenshot?.src}
                  alt={activeScreenshot?.caption || `${project.title} screenshot`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    e.target.parentElement.innerHTML = `<span class="text-white/20 text-sm font-main">Screenshot ${activeImg + 1}</span>`
                  }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-white/20 text-sm font-main">No screenshots available</span>
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail strip */}
          {hasScreenshots ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {screenshots.map((shot, i) => (
                <button
                  key={`${shot.src}-${i}`}
                  onClick={() => setActiveImg(i)}
                  className={`group relative aspect-video overflow-hidden rounded-xl border bg-white/5 transition-all duration-200 cursor-pointer ${
                    activeImg === i ? 'border-white/60 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]' : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<span class="text-white/30 text-xs">${i + 1}</span>`
                    }}
                  />
                </button>
              ))}
            </div>
          ) : null}

          {hasScreenshots && activeScreenshot?.caption && (
            <p className="text-white/40 text-xs font-main mt-3 text-center">
              {activeScreenshot.caption}
            </p>
          )}
        </motion.fieldset>

        {/* ── Description ── */}
        <motion.fieldset
          className="border border-white/50 rounded-3xl p-6 md:p-8 mb-6"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <legend className="text-sm font-main font-bold text-white px-3 rounded-full">About</legend>
          <p className="text-white/70 font-main text-sm leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </motion.fieldset>

        {/* ── Features + Tech side by side ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          <motion.fieldset
            className="border border-white/50 rounded-3xl p-6 md:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <legend className="text-sm font-main font-bold text-white px-3 rounded-full">Key Features</legend>
            <div className="flex flex-col gap-3 mt-2">
              {project.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-white/70 font-main">
                  <span className="text-white/30 mt-0.5 shrink-0">→</span>
                  {f}
                </div>
              ))}
            </div>
          </motion.fieldset>

          <motion.fieldset
            className="border border-white/50 rounded-3xl p-6 md:p-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.06 }}
          >
            <legend className="text-sm font-main font-bold text-white px-3 rounded-full">Technologies</legend>
            <div className="flex flex-wrap gap-3 mt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.fieldset>

        </div>
      </div>
    </div>
  )
}

export default ProjectDetail