import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { authService, TOKEN_KEY } from './api/authService'

import App from './App.vue'
import { router } from './router'

const token = localStorage.getItem(TOKEN_KEY)
if (token) {
  authService.setToken(token)
}

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')
