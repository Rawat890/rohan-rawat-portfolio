import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { experienceData } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            03. Work Experience
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 space-y-10">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={`${exp.role}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-500 ring-4 ring-dark-950" />

              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-mono bg-brand-500/15 text-brand-400 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-brand-300 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-xs sm:text-sm text-slate-400 space-y-1 sm:text-right">
                    <p className="inline-flex items-center gap-1.5 font-mono text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-brand-400" />
                      {exp.period}
                    </p>
                    <p className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-slate-300 text-sm sm:text-base">
                  {exp.responsibilities.map((item, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-dark-800 text-slate-300 font-mono text-xs"
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
    </section>
  )
}
