import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",

  build: {
    // Разбиваем bundle: react и router в отдельные чанки
    // → браузер кэширует их отдельно, не перекачивает при обновлении страниц
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react":  ["react", "react-dom"],
          "vendor-router": ["react-router-dom"],
        },
      },
    },

    // Порог инлайнинга: файлы < 4 KB → base64 в JS (иконки SVG)
    // файлы > 4 KB → отдельный файл (фото JPG/AVIF) — оставляем дефолт
    assetsInlineLimit: 4096,

    // esbuild минификация — быстрее terser, результат тот же
    minify: "esbuild",
    target: "es2020",

    // sourcemap в проде не нужен — убирает ~30% от размера чанков
    sourcemap: false,
  },
})