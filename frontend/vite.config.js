import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //setting proxy fro not getting CORS Error
  server: {
    proxy: {
      '/api': "http://localhost:3000",
    }
  },
  plugins: [react()],
})
