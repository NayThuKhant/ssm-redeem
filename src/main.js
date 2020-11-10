import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '@/assets/css/tailwind.css'
window.axios = require("axios")

createApp(App).use(router).mount('#app')
