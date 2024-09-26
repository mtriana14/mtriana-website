import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensures that paths are correctly handled in production
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei'], // Ensures these dependencies are pre-bundled
  },
  build: {
    rollupOptions: {
      input: './index.html', // Ensures the correct entry point for the build
    },
  },
});
