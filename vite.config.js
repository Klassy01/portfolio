import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY === 'true' ? '/' : (process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'),
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
