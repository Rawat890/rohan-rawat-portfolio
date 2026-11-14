import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens user's mail client pre-filled and shows instant confirmation state
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

${formData.message}`
    )}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            08. Contact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Looking for a Full-Stack, MERN, or React Native developer? Reach out via email, LinkedIn, GitHub, or send a direct message below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 block"
            >
              <div className="p-3 rounded-xl bg-brand-500/15 text-brand-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Email</p>
                <p className="text-sm sm:text-base font-semibold text-white break-all">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 block"
            >
              <div className="p-3 rounded-xl bg-brand-500/15 text-brand-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">LinkedIn</p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  Connect on LinkedIn
                </p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 block"
            >
              <div className="p-3 rounded-xl bg-brand-500/15 text-brand-400">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">GitHub</p>
                <p className="text-sm sm:text-base font-semibold text-white">
                  github.com/Rawat890
                </p>
              </div>
            </a>

            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-brand-500/15 text-brand-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Phone &amp; Location</p>
                <p className="text-sm font-semibold text-white">
                  {personalInfo.phone}
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-400" />
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Full-Stack / React Native Opportunity"
                className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or role..."
                className="w-full px-4 py-3 rounded-xl bg-dark-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition-colors resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-500/25"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  Opening email client...
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
