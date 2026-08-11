import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ComingSoonModal
 * Matches ProjectDetail's existing visual language:
 * black background, white/50 borders, rounded-full pills, font-main.
 *
 * Usage: see integration in ProjectDetail.jsx
 */
const ComingSoonModal = ({ open, onClose, projectName }) => {
  useEffect(() => {
    if (!open) return
    const handleKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-sm border border-white/50 rounded-3xl bg-black p-8 text-center"
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* signature element: browser window with a progress bar filling in — generic "site being built" motif, reusable across any project */}
            <div className="mx-auto mb-5 h-14 w-14">
              <svg viewBox="0 0 64 64" className="h-full w-full">
                <defs>
                  <clipPath id="barClip">
                    <rect x="14" y="34" width="36" height="8" rx="4" />
                  </clipPath>
                </defs>

                {/* window frame */}
                <rect
                  x="8"
                  y="12"
                  width="48"
                  height="40"
                  rx="6"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.6"
                  strokeWidth="2.5"
                />
                {/* title bar divider */}
                <line x1="8" y1="22" x2="56" y2="22" stroke="white" strokeOpacity="0.6" strokeWidth="2.5" />
                {/* window dots */}
                <circle cx="14" cy="17" r="1.6" fill="white" fillOpacity="0.5" />
                <circle cx="19" cy="17" r="1.6" fill="white" fillOpacity="0.5" />
                <circle cx="24" cy="17" r="1.6" fill="white" fillOpacity="0.5" />

                {/* progress bar track */}
                <rect x="14" y="34" width="36" height="8" rx="4" fill="white" fillOpacity="0.08" />
                {/* progress bar fill, animates left to right then loops */}
                <g clipPath="url(#barClip)">
                  <motion.rect
                    y="34"
                    width="20"
                    height="8"
                    fill="white"
                    fillOpacity="0.6"
                    initial={{ x: -20 }}
                    animate={{ x: 50 }}
                    transition={{
                      duration: 1.6,
                      delay: 0.2,
                      repeat: Infinity,
                      repeatDelay: 0.4,
                      ease: 'easeInOut',
                    }}
                  />
                </g>
              </svg>
            </div>

            <h3 className="text-lg font-main font-bold text-white">
              {projectName} is not live yet
            </h3>
            <p className="mt-2 text-sm font-main leading-relaxed text-white/50">
              The live version isn't deployed yet. Check out the source on
              GitHub in the meantime, or come back soon.
            </p>

            <button
              onClick={onClose}
              className="mt-6 w-full font-main text-sm font-medium hover:bg-white/5 text-white border border-white/50 hover:border-white px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
            >
              Got it
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ComingSoonModal