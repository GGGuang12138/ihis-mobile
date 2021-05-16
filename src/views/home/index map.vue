<!-- service -->
<template>
  <div class="amap-wrap">
    <el-amap ref="map"
    :zoom="zoom"
    vid="amapDemo"
    :center="center"
    :events="events">
    </el-amap>
  </div>
</template>

<script>
export default {
  name: 'amap',
  components: {
  },
  props: {},
  data () {
    return {
      zoom: 15,
      center: [113.3245904, 23.1066805]
    }
  },

  computed: {},
  watch: {},
  created () {
    this.getCurrentCity()
  },
  mounted () {},
  methods: {
    getCurrentCity () {
    }
  }
}

</script>
<style lang='less' scoped>
.amap-wrap{
  height: 100vh;
}
</style>
