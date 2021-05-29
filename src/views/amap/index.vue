<!-- service -->
<template>
  <div class="amap-wrap">
    <search-bar/>
    <amap-tips @bindShow="bindShow"/>
    <el-amap ref="map"
    vid="amapContainer"
    :zoom="zoom">
    </el-amap>
    <van-popup v-model="showArea" position="bottom" :style="{ height: '40%' }">
            <van-area :area-list="areaList" @confirm="onAreaConfirm" @cancel="bindCancel" />
    </van-popup>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'
import AmapTips from './components/amap-tips.vue'
import SearchBar from './components/search-bar.vue'
import { areaList } from '@vant/area-data'
export default {
  name: 'amap',
  components: {
    AmapTips,
    SearchBar
  },
  props: {},
  data () {
    return {
      map: null,
      zoom: 15, // 地图层级
      center: [113.3245904, 23.1066805],
      areaList: areaList, // 引用地区信息
      showArea: false,
      valueArea: '', // 地区值
      arrArea: []
    }
  },

  computed: {},
  watch: {},
  created () {
  },
  mounted () {
    lazyAMapApiLoaderInstance.load().then(() => {
      // eslint-disable-next-line no-undef
      this.map = new AMap.Map('amapContainer', {
        // eslint-disable-next-line no-undef
        center: new AMap.LngLat(113.3245904, 23.1066805),
        zoom: this.zoom
      })
    })
  },
  methods: {
    bindShow (flag) {
      this.showArea = flag
    },
    bindCancel () {
      this.showArea = false
    },
    // 地区选择
    onAreaConfirm (val) {
      this.showArea = false
      this.arrArea = val
      var addrInfo = val[0].name + '-' + val[1].name + '-' + val[2].name
      this.valueArea = addrInfo
    }
  }
}

</script>
<style lang='less' scoped>
.amap-wrap{
  height: 100vh;
}
</style>
