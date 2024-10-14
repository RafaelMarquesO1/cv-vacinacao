import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // ...
  build: {
    // ...
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    assetsDir: 'assets',
    minify: 'terser',
    manifest: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'chunks/[name].js',
        entryFileNames: 'chunks/[name].js',
        assetFileNames: 'chunks/[name].[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': './src',
    },
  },
  server: {
    // ...
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/javascript',
    },
  },
});