import Vue from 'vue'
// 高德地图
import VueAMap from 'vue-amap'
// 全局注册组件
Vue.use(VueAMap)
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'd5076e57919e2533c1326b1ad24e6e43',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'Geolocation', 'Geocoder', 'CitySearch'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
})
