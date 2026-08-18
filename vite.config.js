import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin: converts render-blocking CSS link to async preload pattern
function asyncCssPlugin() {
  return {
    name: 'async-css',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
        (_, href) =>
          `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="${href}"></noscript>`
      );
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), asyncCssPlugin()],
  base: './',
  build: {
    // Target modern browsers for better tree-shaking and smaller output
    target: 'esnext',
    rollupOptions: {
      // Aggressive tree-shaking: remove all side-effect-free unused code
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
      },
      output: {
        // Split React vendor into its own cached chunk
        // React doesn't change between deploys → browser caches it long-term
        manualChunks(id) {
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'icons';
          }
        },
      },
    },
  },
})
