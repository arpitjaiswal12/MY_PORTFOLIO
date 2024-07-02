import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://aspire-nex-task1-portfoliobackend-hp3o8eumn.vercel.app/',
        secure: false,
      },
    },
  },
  plugins: [react()],

})
