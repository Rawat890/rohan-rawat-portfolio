import React, { useState, useEffect } from 'react'
import { Menu, X, Code2, Download } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Services', href: '#services' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navLinks.map((link) => link.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 140) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/85 backdrop-blur-lg border-b border-slate-800/80 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white group"
        >
          <span className="p-2 rounded-xl bg-brand-500/15 border border-brand-500/30 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
            <Code2 className="w-5 h-5" />
          </span>
          <span>
            Rohan<span className="text-brand-400">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/20"
          >
            Hire Me
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="xl:hidden p-2.5 rounded-xl bg-dark-800 border border-slate-700/70 text-slate-200 hover:text-brand-400 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-dark-900/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'bg-brand-500/15 text-brand-400'
                  : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 px-2 flex gap-3">
            <a
              href={personalInfo.resumeFile}
              download
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-200 text-sm font-medium hover:border-brand-400"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-semibold"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
