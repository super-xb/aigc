import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// Ant Design Vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

// 百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'FaRpbk6I6i7084DcIRoQNCv20WpHWfV7'
})

// Axios
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = '/rtsi/'

const apiClient = axios.create({
  headers: { 'Content-Type': 'application/json' }
})
Vue.prototype.$api = apiClient


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')