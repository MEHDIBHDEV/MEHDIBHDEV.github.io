import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')
  const controls = useAnimation()

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) setTheme(saved)
      else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark')
    } catch (e) {}
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  const toggle = () => {
    controls.start({ rotate: [0, 25, 0] }, { type: 'spring', stiffness: 300, damping: 12 })
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      aria-label="Basculer le thème"
      onClick={toggle}
      animate={controls}
      className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-violet-100/50 dark:hover:bg-violet-500/20 transition focus:outline-none focus:ring-2 focus:ring-violet-400 dark:focus:ring-violet-500"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  )
}
