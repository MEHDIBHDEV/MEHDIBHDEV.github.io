import React from 'react'
import site from '../data/site.js'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t border-zinc-200/40 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <p className="text-sm">© {year} {site.identity.name}</p>
        <div className="flex items-center gap-2">
          <a href={site.socials.github} target="_blank" rel="noopener" aria-label="GitHub" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-violet-500"><Github size={18}/></a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-violet-500"><Linkedin size={18}/></a>
        </div>
      </div>
    </footer>
  )
}
