import React from 'react'
import { motion } from 'framer-motion'
import { User, Layers, Smartphone, Bot, MapPin, GraduationCap } from 'lucide-react'
import { aboutData, personalInfo } from '../data/portfolioData'

const iconMap = [Layers, Smartphone, Bot]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">
            <User className="w-4 h-4" />
            01. About Me
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            {aboutData.heading}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            {aboutData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <div className="pt-4 flex flex-wrap gap-4 text-sm text-slate-300">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 border border-slate-800">
                <MapPin className="w-4 h-4 text-brand-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900 border border-slate-800">
                <GraduationCap className="w-4 h-4 text-brand-400" />
                <span>MCA Graduate (81.50%), Panjab University</span>
              </div>
            </div>
          </motion.div>

          {/* Right Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            {aboutData.highlights.map((item, idx) => {
              const IconComponent = iconMap[idx % iconMap.length]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-brand-500/15 text-brand-400 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
