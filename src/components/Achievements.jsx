import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, BadgeCheck } from 'lucide-react'
import { achievementsData } from '../data/portfolioData'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">
            <Trophy className="w-4 h-4" />
            07. Achievements &amp; Certifications
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Honors &amp; Verified Credentials
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="p-2.5 rounded-xl bg-brand-500/15 text-brand-400">
                    <BadgeCheck className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs font-medium text-brand-300 mt-1">
                  {item.issuer}
                </p>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
