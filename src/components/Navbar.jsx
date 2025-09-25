import React from 'react'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-zinc-200/40 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40">
      <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight hover:opacity-90 heading-gradient">Mehdi BOUCHERROUR</a>
        <div className="flex items-center gap-1 sm:gap-2">
          <a href="#about" className="px-3 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-400">À propos</a>
          <a href="#projects" className="px-3 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-400">Projets</a>
          <a href="#project-site-vitrine-neuilly-bureaux-services" className="hidden md:inline-flex px-3 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-400" title="Aller au projet Neuilly">Neuilly</a>
          <a href="#skills" className="px-3 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-400">Compétences</a>
          <a href="#contact" className="px-3 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-400">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
