<!--地图提示相关-->
<template>
  <div class="tips-wrap">
    <van-button type="info" class="button" round @click="bindShow">选择城市</van-button>
    <van-button round type="info" class="round-button" icon="location-o"></van-button>
  </div>
</template>

<script>
export default {
  name: 'amap-tips',
  components: {},
  props: {},
  data () {
    return {
    }
  },

  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    bindShow () {
      var flag = true
      this.$emit('bindShow', flag)
    }

  }
}

</script>
<style lang='less' scoped>
.tips-wrap {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 100px;
  text-align: center;
  z-index: 100;
  .button {
    box-shadow: 0px 3px 3px #c8c9cc;
    height: 45px;
    width: 120px;
    font-size: 16px;
    margin-right: 10px;
  }
  .round-button {
    box-shadow: 0px 3px 3px #c8c9cc;
    height: 45px;
    width: 45px;
    font-size: 18px;
    margin-left: 10px;
  }
}

</style>
