import React from 'react'
import { motion } from 'framer-motion'

export default function SkillChip({ children }) {
  return (
    <motion.span
      className="text-sm px-3 py-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-700 bg-white/70 dark:bg-white/5 shadow-sm"
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.span>
  )
}
