<!-- service -->
<template>
  <div class="home-container">
    <van-nav-bar class="app-nav-bar">
      <van-button
      class="search-btn"
      slot="title"
      icon="search"
      to="/search"
      type='info' round>搜索</van-button>
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab v-model="active"
      :key="channel.id"
      :title="channel.name"
      v-for="channel in channels">
      <article-list :channel = "channel"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ArticleList from './components/article-list'
import { getUserChannels } from '@/api/article'
export default {
  name: '',
  components: {
    ArticleList
  },
  props: {},
  data () {
    return {
      channels: []
    }
  },

  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      var channels = []
      if (this.user) {
        // 已登录，请求获取线上的用户频道列表数据
        const { data } = await getUserChannels()
        channels = data.data.channels
      } else {
        // 没有登录，判断是否有本地存储的频道列表数据
        // const localChannels = getItem('user-channels')

        // 如果有本地存储的频道列表则使用
        // if (localChannels) {
        //   channels = localChannels
        // } else {
        // 用户没有登录，也没有本地存储的频道，那就请求获取默认推荐的频道列表
        const { data } = await getUserChannels()
        channels = data
        // }
      }
      // console.log('channel', channels)
      // 把处理好的数据放到 data 中以供模板使用
      this.channels = channels
      // console.log('channel2', this.channels)
      // 请求获取频道数据
      // const { data } = await getUserChannels()
      // this.channels = data.data.channels
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
