import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom plugin: converts render-blocking CSS link to async preload pattern
// This removes CSS from the critical render path without causing FOUC
// because Tailwind's bg-white root style keeps the page white until CSS loads.
function asyncCssPlugin() {
  return {
    name: 'async-css',
    transformIndexHtml(html) {
      // Replace <link rel="stylesheet" ... .css"> with async preload pattern
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
})
