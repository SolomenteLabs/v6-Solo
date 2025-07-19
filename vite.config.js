import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // this is the default
  build: {
    outDir: 'dist', // this tells Vercel where to find the output
    emptyOutDir: true, // optional, but helps clean old builds
  },
})

