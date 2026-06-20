import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  base: process.env.CF_PAGES ? '/' : '/operation-portfolio/',
  define: {
    __CF_PAGES__: JSON.stringify(Boolean(process.env.CF_PAGES)),
  },
  resolve: {
    alias: {
      '@dog-video': fileURLToPath(
        new URL(
          process.env.CF_PAGES ? './src/data/dogVideo.cloudflare.js' : './src/data/dogVideo.github.js',
          import.meta.url,
        ),
      ),
    },
  },
  assetsInclude: ['**/*.glb'],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
});
