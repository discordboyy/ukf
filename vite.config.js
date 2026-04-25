import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // важно для GitHub Pages
  base: "/ukf/",

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // отдельный чанк для swiper (он тяжелее остальных)
          if (id.includes('swiper')) {
            return 'swiper'
          }

          // всё остальное из node_modules — в vendor
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },

    assetsInlineLimit: 4096,
    minify: "esbuild",
    target: "es2020",
    sourcemap: false,
  },
})