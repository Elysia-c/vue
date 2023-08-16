import Vant from 'vant'
import 'vant/lib/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
createApp(App).use(Vant).mount('#app')
