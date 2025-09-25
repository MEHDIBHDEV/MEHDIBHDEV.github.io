import React from 'react'
import { motion } from 'framer-motion'
import { reveal } from '../lib/animations.js'

export default function SectionTitle({ children, id }) {
  return (
    <div>
      <motion.h2
        id={id}
        className="text-2xl md:text-3xl font-semibold tracking-tight mb-2 heading-gradient"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.h2>
      <div className="h-1 w-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full mb-6" aria-hidden="true" />
    </div>
  )
}
