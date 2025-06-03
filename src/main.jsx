import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { registerSW } from 'virtual:pwa-register'

// При открытии приложения регистрируем service worker.
// Он кэширует файлы из globPatterns и обеспечивает оффлайн-работу.
// Service worker — это фоновый JS-скрипт, который перехватывает запросы
// и может отдавать ресурсы из кэша, если нет интернета.
registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
