import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X } from 'lucide-react'

function isValidExternal(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url)
}

function sanitizeUrl(url) {
  if (!url || typeof url !== 'string') return null
  const t = url.trim()
  if (!t) return null
  if (/^(DEMO_|REPO_|LIEN_|#)$/i.test(t)) return null
  if (isValidExternal(t)) return t
  if (/^(www\.)?[a-z0-9.-]+\.[a-z]{2,}(:\d+)?(\/.*)?$/i.test(t)) return `https://${t.replace(/^\/+/, '')}`
  return null
}

export default function ProjectModal({ open, onClose, project }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose?.()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open || !project) return null

  const demoUrl = sanitizeUrl(project.demo)
  const repoUrl = sanitizeUrl(project.repo)

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <motion.div
          className="relative z-[101] w-full max-w-2xl card overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button aria-label="Fermer" onClick={onClose} className="absolute top-3 right-3 rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2">
            <X size={18} />
          </button>
          {project.image && (
            <div className="aspect-video relative">
              <img src={project.image} alt={`Aperçu du projet ${project.title}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
            </div>
          )}
          <div className="p-5">
            <h3 id="project-modal-title" className="text-xl font-semibold heading-gradient">{project.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
              {project.role} · {project.period} · {project.location}
            </p>
            <p className="mt-3 text-sm">{project.description}</p>
            {project.tech?.length ? (
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/40 dark:border-zinc-700">{t}</span>
                ))}
              </div>
            ) : null}
            <div className="flex gap-2 mt-5">
              {demoUrl && (
                <a href={demoUrl} target="_blank" rel="noopener" className="btn-primary">
                  <ExternalLink size={16} /> Démo
                </a>
              )}
              {repoUrl && (
                <a href={repoUrl} target="_blank" rel="noopener" className="btn-secondary">
                  <Github size={16} /> Code
                </a>
              )}
              {!demoUrl && !repoUrl && (
                <span className="text-sm text-zinc-500">Aucun lien fourni pour le moment.</span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
