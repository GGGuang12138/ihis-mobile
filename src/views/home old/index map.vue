<!-- service -->
<template>
  <div class="amap-wrap">
    <el-amap ref="map"
    vid="amapContainer"
    :zoom="zoom">
    </el-amap>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
  name: 'amap',
  components: {
  },
  props: {},
  data () {
    return {
      map: null,
      zoom: 15, // 地图层级
      center: [113.3245904, 23.1066805]

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
  }
}

</script>
<style lang='less' scoped>
.amap-wrap{
  height: 94vh;
}
</style>
