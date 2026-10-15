import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'


export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/class-01-assignment/',
  resolve:{
    alias:{
      "@":fileURLToPath(new URL("./src",import.meta.url))
    }
  }
})
