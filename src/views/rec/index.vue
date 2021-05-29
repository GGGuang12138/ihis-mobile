<!-- 推荐页面 -->
<template>
  <div class="rec-container">
    <el-amap vid="amap" :plugin="plugin" class="amap-demo"> </el-amap>
    <van-nav-bar class="app-nav-bar">
      <van-button
      class="city-btn"
      slot="title"
      icon="arrow-down"
      type='info'>{{city}}</van-button>
      <van-button
      class="search-btn"
      slot="title"
      icon="search"
      type='info' round>搜索</van-button>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      city: this.$route.query.city
    }
  },

  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}

</script>
<style lang='less' scoped>
.rec-container{
  /deep/ .van-nav-bar__title{
    max-width: unset;
  }
  .van-button--info{
      border: none;
    }
  .city-btn{
    background: transparent;
    padding: 0px 10px 0 0px
  }
  .search-btn{
    background: #5babfb;
    width: 277px;
    height: 32px;
    .van-icon{
      font-size: 16px;
    }
    .van-button__text{
      font-size: 14px;
      color: white;
    }
  }
}
</style>
