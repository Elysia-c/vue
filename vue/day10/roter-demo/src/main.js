import Vant from 'vant'
import 'vant/lib/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import './assets/css/iconfonts.css'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js'
import router from './router'
// 创建一个新的 store 实例
createApp(App).use(Vant).use(router).mount('#app')
