import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Terminal } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex]
    const speed = isDeleting ? 45 : 85

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1))
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1600)
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1))
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Animated Ambient Blobs */}
      <div className="absolute top-20 -left-24 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Available for Full-Stack & Mobile Roles</span>
            </div>

            <div className="space-y-3">
              <p className="text-slate-400 font-mono text-sm sm:text-base">
                Hi there, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                {personalInfo.name}
              </h1>
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-3xl font-bold text-gradient font-mono">
                  {displayText}
                  <span className="inline-block w-0.5 h-6 sm:h-8 bg-brand-400 ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {personalInfo.tagline}
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-brand-500/25 hover:-translate-y-0.5"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 hover:border-brand-400/50 text-white font-semibold text-sm sm:text-base transition-all hover:-translate-y-0.5"
              >
                Let&apos;s Talk
              </a>

              <a
                href={personalInfo.resumeFile}
                download
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-slate-300 hover:text-brand-400 text-sm font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Connect:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/40 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/40 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/40 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Avatar / Developer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-500 via-indigo-500 to-purple-500 opacity-35 blur-xl" />
              <div className="relative glass-card rounded-3xl p-5 animate-float">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-auto rounded-2xl object-cover shadow-xl"
                />
                <div className="mt-4 flex items-center justify-between px-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <Terminal className="w-4 h-4 text-brand-400" />
                    <span>MERN &bull; React Native &bull; LLMs</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-5 text-center sm:text-left"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
