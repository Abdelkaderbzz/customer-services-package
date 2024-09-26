// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import path from 'path';

// Custom Vite plugin to prepend 'use client' directive
function addUseClient() {
  return {
    name: 'add-use-client',
    enforce: 'pre',
    transform(code, id) {
      if (id.endsWith('.tsx') || id.endsWith('.jsx')) {
        return `'use client';\n${code}`;
      }
      return code;
    },
  };
}

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'ViteButton',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts(), addUseClient()],
});
