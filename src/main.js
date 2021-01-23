import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自动设置REM基准值 （即html标签字体大小）
import 'amfe-flexible'
// 加载全局样式
import './styles/index.less'
// 加载 Vant 组件库
import Vant from 'vant'
// 加载 Vant 组件库样式
import 'vant/lib/index.css'
// 全局注册组件
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
