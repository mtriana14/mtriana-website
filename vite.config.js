import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei'], // Ensure these dependencies are bundled
  },
  build: {
    rollupOptions: {
      input: './index.html', // Ensure this points to your main entry file
      external: ['@react-three/fiber', '@react-three/drei'], // Mark these as external if needed
    },
  },
});
