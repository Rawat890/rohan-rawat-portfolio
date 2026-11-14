import React from 'react'
import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { skillCategories } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            02. Skills &amp; Tech Stack
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Technologies I Build With
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            A practical stack covering frontend web, cross-platform mobile apps, scalable Node.js backends, databases, and LLM API integrations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    {category.badge}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-dark-800/90 border border-slate-700/70 text-slate-200 text-xs sm:text-sm font-medium hover:border-brand-400/50 hover:text-brand-300 transition-colors"
                    >
                      {skill}
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
