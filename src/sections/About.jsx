import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import site from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle>À propos</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <p className="text-zinc-700 dark:text-zinc-300">
            Développeur web motivé, orienté front-end, j'aime concevoir des interfaces modernes, accessibles et performantes. Je recherche une alternance (3 semaines entreprise / 1 semaine école) pour contribuer à des projets concrets tout en consolidant mes compétences.
          </p>
        </div>
        <div className="card p-4">
          <h3 className="font-medium mb-2">Formations</h3>
          <ul className="space-y-2 list-disc list-inside text-sm">
            {site.education.slice(0, 4).map((ed) => (
              <li key={ed}>{ed}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
