// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',        // Vercel yahi folder deploy karega
    emptyOutDir: true,     // build se pehle purana dist clear ho jaye
  },
  server: {
    port: 3000,            // local dev ke liye, optional
  }
})
