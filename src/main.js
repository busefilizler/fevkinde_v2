import './main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css'
import '@/assets/fonts/styles.css'
const app = createApp(App)
app.use(createPinia())

app.mount('#app')
