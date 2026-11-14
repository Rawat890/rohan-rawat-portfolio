import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Cpu, Wrench, Check } from 'lucide-react'
import { servicesData } from '../data/portfolioData'

const serviceIcons = {
  Globe,
  Smartphone,
  Cpu,
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            06. Services
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            How I Can Help Your Team or Product
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = serviceIcons[service.icon] || Globe
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/15 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium"
                    >
                      <Check className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
