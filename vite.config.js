import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifest = {
  "theme_color": "#8936FF",
  "background_color": "#2EC6FE",
  "icons": [
    {
      "purpose": "maskable",
      "sizes": "512x512",
      "src": "icon512_maskable.png",
      "type": "image/png"
    },
    {
      "purpose": "any",
      "sizes": "512x512",
      "src": "icon512_rounded.png",
      "type": "image/png"
    }
  ],
  "orientation": "any",
  "display": "standalone",
  "lang": "ru-RU",
  "name": "NavigationApp",
  "short_name": "NavApp",
  "start_url": "/"
}

export default defineConfig({
  plugins: [
    react(), 
    // Подключаем плагин VitePWA для добавления поддержки PWA (установка на устройство, оффлайн-работа и т.д.)
    VitePWA({
      // Настройка регистрации service worker:
      // "autoUpdate" означает, что приложение будет автоматически проверять наличие новой версии и обновляться
      registerType: "autoUpdate",

      // Указываем, какие типы файлов нужно закэшировать (HTML, CSS, JS, иконки, изображения)
      // Это позволит работать приложению даже без подключения к интернету
      workbox: {
        globPatterns: ["**/*.{html,css,js,ico,png,svg}"], 
      },

      // Включаем поддержку PWA и service worker в режиме разработки (для локальных тестов)
      devOptions: {
        enabled: true 
      },

      // Подключаем manifest — это файл с настройками, как приложение должно выглядеть при установке на устройство
      // Например, название, иконка, цвет фона, поведение при открытии и т.д.
      manifest: manifest
    })
  ],
})

