// main.js

import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import '@/utils/rem.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// 设置 Vue 配置
Vue.config.productionTip = false

// 使用插件
Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: 'FaRpbk6I6i7084DcIRoQNCv20WpHWfV7'
})
Vue.use(Antd)

// 配置 axios
axios.defaults.baseURL = '/rtsi/'
Vue.prototype.$http = axios

const request = axios.create({
  headers: { 'Content-Type': 'application/json' }
})
Vue.prototype.$api = request

// 启动应用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')