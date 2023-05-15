import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import bootstrap from 'bootstrap' // eslint-disable-line
import '@/assets/scss/bootstrap.custom.scss';

createApp(App).use(router).mount('#app')
