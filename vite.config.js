import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Specify the host (default is 'localhost')
    // port: 8000,        // Specify the port (default is 3000)
  },
})
