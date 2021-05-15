<!-- service -->
<template>
  <div class="home-container">
    <van-nav-bar class="app-nav-bar">
      <van-button
      class="search-btn"
      slot="title"
      icon="search"
      type='info' round>搜索</van-button>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="推荐专家"><article-list :channel = "channel"/></van-tab>
      <van-tab title="附近名医">附近名医</van-tab>
      <van-tab title="就诊过专家">就诊过专家</van-tab>
      <van-tab title="儿科专家">儿科专家</van-tab>
      <van-tab title="儿科专家">儿科专家</van-tab>
      <van-tab title="儿科专家">儿科专家</van-tab>
      <van-tab v-model="active"
      :key="channel.id"
      :title="articleChannel.name"
      v-for="channel in doctorChannels"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ArticleList from './components/article-list'
export default {
  name: '',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      articleChannels: []
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
.home-container{
  /deep/ .van-nav-bar__title{
    max-width: unset;
  }
  .van-button--info{
      border: none;
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
