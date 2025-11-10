import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jean_tannous_portfolio/', // ← important pour GitHub Pages
})