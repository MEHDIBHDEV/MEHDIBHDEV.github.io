import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',                // site user = base à "/"
  build: { outDir: 'docs' } // IMPORTANT: Pages lit /docs
})
