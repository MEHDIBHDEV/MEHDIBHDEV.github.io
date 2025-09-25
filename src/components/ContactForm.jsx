import React, { useState } from 'react'
import site from '../data/site.js'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Contact Portfolio')
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`)
    const href = `mailto:${site.identity.email}?subject=${subject}&body=${body}`
    window.location.href = href
  }

  return (
    <div className="card p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Contact</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">N'hésitez pas à me joindre sur les réseaux ou via le formulaire.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            <a href={site.socials.github} target="_blank" rel="noopener" className="btn-secondary justify-center" aria-label="GitHub"><Github size={16}/> GitHub</a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener" className="btn-secondary justify-center" aria-label="LinkedIn"><Linkedin size={16}/> LinkedIn</a>
            <a href={`mailto:${site.identity.email}`} className="btn-secondary justify-center" aria-label="Email"><Mail size={16}/> Email</a>
            <a href={`tel:${site.identity.phone.replace(/\s+/g,'')}`} className="btn-secondary justify-center" aria-label="Téléphone"><Phone size={16}/> Tél</a>
          </div>
        </div>
        <form className="space-y-4" onSubmit={onSubmit} noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
            <input id="name" name="name" type="text" required value={name} onChange={(e)=>setName(e.target.value)}
              className="w-full rounded-lg border border-zinc-300/60 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input id="email" name="email" type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              className="w-full rounded-lg border border-zinc-300/60 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-500"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" name="message" rows="4" required value={message} onChange={(e)=>setMessage(e.target.value)}
              className="w-full rounded-lg border border-zinc-300/60 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-500"></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-primary">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  )
}
