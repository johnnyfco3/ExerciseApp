import { createApp } from 'vue'
import '@fortawesome/fontawesome-free';
import 'bulma'
import { Notification } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .use(Notification)
    .mount('#app')
