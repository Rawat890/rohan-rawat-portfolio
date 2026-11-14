import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark-900 border border-slate-700/80 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-8"
          >
            {/* Preview Image Header */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 sm:h-72 object-cover border-b border-slate-800"
              />
              <button
                onClick={onClose}
                aria-label="Close Preview"
                className="absolute top-4 right-4 p-2.5 rounded-full bg-dark-950/80 hover:bg-dark-800 text-white border border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-dark-950/85 border border-brand-500/30 text-brand-400 font-mono text-xs">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
                  Key Engineering Highlights
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg bg-dark-800 border border-slate-700 text-brand-300 font-mono text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 text-white font-semibold text-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Go to GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-colors shadow-lg shadow-brand-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Live App
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
