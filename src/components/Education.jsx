import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { educationData } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            05. Education
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-mono text-brand-400 mb-2">
                  <span>{edu.period}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    Score: {edu.score}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-slate-300 text-sm sm:text-base mt-1">
                  {edu.institution}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-sm text-brand-300 font-medium">
                <Award className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{edu.achievement}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
