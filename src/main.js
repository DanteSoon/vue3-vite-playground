import { createApp } from 'vue'
import { Button } from 'vant'
import App from './App.vue'
import Router from '@/router/index'
import store from '@/vuex/index'
import $http from '@/axios/index'
import '@/assets/styles/index.scss'
import microApp from '@micro-zoe/micro-app'

microApp.start()

window.projectAxios = $http

const app = createApp(App)
app.config.globalProperties.$test = '我是Properties挂载到全局的方法'
app.provide('$test1', '我是依赖注入挂载到全局的方法')
app.use(Button)
app.use(Router)
app.use(store)
app.mount('#app')
