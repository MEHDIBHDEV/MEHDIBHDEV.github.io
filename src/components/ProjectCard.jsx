import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

function normalizeUrl(url) {
  if (!url || typeof url !== 'string') return null
  const trimmed = url.trim()
  if (!trimmed) return null
  if (/^(https?:)?\/\//i.test(trimmed)) {
    return trimmed.startsWith('http') ? trimmed : `https:${trimmed}`
  }
  if (/^(www\.)?[a-z0-9.-]+\.[a-z]{2,}(:\d+)?(\/.*)?$/i.test(trimmed)) {
    return `https://${trimmed.replace(/^\/+/, '')}`
  }
  return null
}

export default function ProjectCard({
  anchorId,
  title,
  description,
  tech = [],
  site,
  demo,
  code,
  repo,
  image,
  imageAlt,
}) {
  const siteUrl = normalizeUrl(site) || normalizeUrl(demo)
  const codeUrl = normalizeUrl(code) || normalizeUrl(repo)
  const fallbackAlt = `Aperçu du projet ${title}`

  return (
    <motion.article
      id={anchorId}
      className="card overflow-hidden hover:border-violet-500/40 focus-within:border-violet-500/60 transition-colors"
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="aspect-video relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={imageAlt || fallbackAlt}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300">
            Image en cours d'ajout
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-4 p-4">
        <header>
          <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">{title}</h3>
          {description ? (
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
          ) : null}
        </header>
        {tech?.length ? (
          <ul className="flex flex-wrap gap-2" aria-label="Technologies du projet">
            {tech.map((t) => (
              <li
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/40 dark:border-zinc-700"
              >
                {t}
              </li>
            ))}
          </ul>
        ) : null}
        <footer className="mt-auto flex flex-wrap gap-2">
          {siteUrl ? (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ouvrir le site du projet ${title}`}
              className="btn-primary inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
            >
              <ExternalLink size={16} aria-hidden="true" /> Voir le site
            </a>
          ) : null}
          {codeUrl ? (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consulter le code du projet ${title}`}
              className="btn-secondary inline-flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
            >
              <Github size={16} aria-hidden="true" /> Code
            </a>
          ) : null}
        </footer>
      </div>
    </motion.article>
  )
}
