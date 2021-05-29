<!-- 搜索栏 -->
<template>
  <div class="search-bar">
     <van-nav-bar class="app-nav-bar">
      <van-button
      class="city-btn"
      slot="title"
      icon="arrow-down"
      type='info'>广州市</van-button>
      <van-button
      class="search-btn"
      slot="title"
      icon="search"
      type='info' round>输入地名进行搜索</van-button>
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
.search-bar{
  /deep/ .van-nav-bar__title{
    max-width: unset;
  }
  /deep/ .van-nav-bar__content{
    box-shadow: 0px 1px 3px #c8c9cc;
    border: none;
  }
  .van-button--info{
      border: none;
    }
  .city-btn{
    background: transparent;
    padding: 0px 15px 0 0px
  }
  .search-btn{
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
