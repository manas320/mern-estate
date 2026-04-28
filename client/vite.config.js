import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 1. Add this import

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // 2. Force resolve React to the root node_modules to ensure PureComponent is found
      react: path.resolve('./node_modules/react'),
    },
  },
 optimizeDeps: {
    // Add the specific storage path here
    include: ['redux-persist', 'react', 'redux-persist/lib/storage'], 
  },
})