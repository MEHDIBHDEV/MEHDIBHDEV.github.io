import React from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import SkillChip from '../components/SkillChip.jsx'
import site from '../data/site.js'

export default function Skills() {
  const groups = Object.entries(site.skills)
  return (
    <section id="skills" className="section">
      <SectionTitle>Compétences</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map(([group, items]) => (
          <div key={group} className="card p-4">
            <h3 className="font-medium mb-3">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((it) => (
                <SkillChip key={it}>{it}</SkillChip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

