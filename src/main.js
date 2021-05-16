import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自动设置REM基准值 （即html标签字体大小）
import 'amfe-flexible'
// 加载 Vant 组件库
import Vant from 'vant'
// 加载全局样式 先加载 vant 再加载 自定义样式 进行覆盖，可以代替!important强制覆盖
import './styles/index.less'
// 加载 Vant 组件库样式
import 'vant/lib/index.css'
// 高德地图
import './plugin/aMap'
// 全局注册组件
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
