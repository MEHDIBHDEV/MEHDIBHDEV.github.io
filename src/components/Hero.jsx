import React from 'react'
import { motion } from 'framer-motion'
import site from '../data/site.js'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import AvatarFrame from './AvatarFrame.jsx'

export default function Hero() {
  const { name, role, availability, location } = site.identity
  const { github, linkedin } = site.socials
  return (
    <section id="home" className="section relative">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute right-[-10%] top-[-10%] w-80 h-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-10%] w-96 h-96 rounded-full bg-violet-600/20 blur-3xl" />
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 text-center md:text-left space-y-5">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight heading-gradient"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22,1,0.36,1] }}
          >
            {role} — {location}
          </motion.p>
          <motion.p
            className="text-base text-zinc-700 dark:text-zinc-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22,1,0.36,1] }}
          >
            {availability}
          </motion.p>
          <motion.div
            className="flex items-center justify-center md:justify-start gap-3 pt-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22,1,0.36,1] }}
          >
            <a href="#projects" className="btn-primary">Voir mes projets</a>
            <a href="#contact" className="btn-secondary">Me contacter</a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center md:justify-start gap-4 pt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href={github} target="_blank" rel="noopener" aria-label="GitHub" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2">
              <Github size={20} />
            </a>
            <a href={linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${site.identity.email}`} aria-label="Email" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2">
              <Mail size={20} />
            </a>
            <a href={`tel:${site.identity.phone.replace(/\s+/g,'')}`} aria-label="Téléphone" className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2">
              <Phone size={20} />
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <AvatarFrame src={site.identity.photo} alt={`Photo de ${name}`} />
        </div>
      </div>
    </section>
  )
}
