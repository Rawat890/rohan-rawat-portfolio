import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FolderGit2, Github, Eye, ExternalLink } from 'lucide-react'
import { projectsData } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

const filters = ['All', 'Full-Stack / MERN + LLM', 'Full-Stack Web', 'Mobile & Web / Real-Time', 'Mobile Development']

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [previewProject, setPreviewProject] = useState(null)

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter)

  return (
    <section id="projects" className="py-24 bg-dark-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-brand-400 font-mono text-sm font-semibold uppercase tracking-wider">
              <FolderGit2 className="w-4 h-4" />
              04. Featured Projects
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
              Things I&apos;ve Built &amp; Shipped
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedFilter === filter
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                    : 'bg-dark-800 text-slate-300 hover:text-white border border-slate-700/70'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Project Screenshot */}
                <div className="relative overflow-hidden border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-dark-950/85 backdrop-blur-md border border-slate-700 text-brand-400 font-mono text-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-dark-800/90 border border-slate-700/70 text-slate-300 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mandatory Two Action Buttons per Project */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-dark-800 hover:bg-dark-700 border border-slate-700 hover:border-slate-500 text-white text-sm font-semibold transition-all"
                >
                  <Github className="w-4 h-4" />
                  Go to GitHub
                </a>

                <button
                  type="button"
                  onClick={() => setPreviewProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-md shadow-brand-500/20"
                >
                  <Eye className="w-4 h-4" />
                  Show Live Project Preview
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Live Preview Modal */}
      <ProjectModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </section>
  )
}
