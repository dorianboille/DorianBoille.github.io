import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-professionnel/', // Replace with your repository name
  server: {
    port: 3000,
    host: true
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
});