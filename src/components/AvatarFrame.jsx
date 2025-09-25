import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function AvatarFrame({ src, alt = 'Photo de profil' }) {
  const [error, setError] = useState(false)
  return (
    <motion.div
      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
      whileHover={{ rotate: -1.5, y: -4 }}
    >
      {/* Gradient frame */}
      <div className="absolute inset-0 rounded-2xl p-[3px] bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500">
        <div className="w-full h-full rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-white/40 dark:border-zinc-800 overflow-hidden shadow-2xl">
          {!error ? (
            <img src={src} alt={alt} className="w-full h-full object-cover" onError={() => setError(true)} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900">
              <span className="text-4xl font-bold tracking-tight text-zinc-600 dark:text-zinc-300">MB</span>
            </div>
          )}
        </div>
      </div>
      {/* Soft glow */}
      <div className="absolute -inset-3 rounded-3xl bg-violet-500/20 blur-2xl" aria-hidden="true" />
    </motion.div>
  )
}
