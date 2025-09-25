import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import site from '../data/site.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle>Projets</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {site.projects.map((p) => {
          const slug = p.title
            .toLowerCase()
            .normalize('NFD').replace(/\p{Diacritic}/gu, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
          const anchorId = `project-${slug}`
          return <ProjectCard key={p.title} anchorId={anchorId} {...p} />
        })}
      </div>
    </section>
  )
}
