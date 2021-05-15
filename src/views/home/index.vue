<!-- service -->
<template>
  <div class="home-container">
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
      type='info' round>搜索</van-button>
    </van-nav-bar>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
       <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid square>
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
    </van-grid>
    <van-tabs v-model="active">
      <van-tab title="推荐专家"><article-list :channel = "channel"/></van-tab>
      <van-tab title="附近名医">附近名医</van-tab>
      <van-tab title="就诊过专家">就诊过专家</van-tab>
      <van-tab title="儿科专家">儿科专家</van-tab>
      <van-tab title="儿科专家">儿科专家</van-tab>
      <van-tab title="儿科专家">儿科专家</van-tab>
      <van-tab v-model="active"
      :key="channel.id"
      :title="doctorChannel.name"
      v-for="channel in doctorChannels"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getRecDoctorChannels } from '@/api/user'
import ArticleList from './components/article-list'
export default {
  name: '',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      active: 2,
      doctorChannels: [], // 推荐医生频道
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },

  computed: {},
  watch: {},
  created () {
    this.loadDoctorChannels()
  },
  mounted () {},
  methods: {
    async loadDoctorChannels () {
      // 请求获取频道数据
      const { data } = await getRecDoctorChannels()
      console.load(data)
    }
  }
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
