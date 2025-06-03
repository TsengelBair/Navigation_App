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

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    // Указываем, что помимо реакта используем технологию Vite PWA
    VitePWA({
    // автообновление 
    registerType: "autoUpdate",
    // файлы, которые нужно кэшировать
    workbox: {
      globPatterns: ["**/*.{html,css,js,ico,png,svg}"], 
    },
    // для разработки (игнорируем)
    devOptions: {
      enabled: true // <--- это включает регистрацию SW при разработке!
    },
    // в манифесте лежат инструкции, как отображать приложение при нативной установке
    manifest: manifest
  })

  ],
})

