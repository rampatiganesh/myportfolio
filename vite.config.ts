import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/myportfolio/",   // 👈 repo name must match
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

