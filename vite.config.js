import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site lives at /<repo>/ until a custom domain is added.
// When you point a domain at this repo, change base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/thelostemeraldruins/',
})
