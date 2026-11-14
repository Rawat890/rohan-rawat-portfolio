import React from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} <span className="text-white font-semibold">{personalInfo.name}</span>. Built with React, JavaScript &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-slate-400 hover:text-brand-400 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-slate-400 hover:text-brand-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="p-2 rounded-lg text-slate-400 hover:text-brand-400 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 p-2.5 rounded-xl bg-dark-800 hover:bg-brand-500 text-slate-200 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
