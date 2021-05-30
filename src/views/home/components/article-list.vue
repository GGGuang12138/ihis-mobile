<!-- 资讯列表组件 -->
<template>
  <div class="article-list">
  <van-pull-refresh
      v-model="isRefreshLoading"
      :success-text="refreshSuccessText"
      :success-duration="1500"
      @refresh="onRefresh"
    >
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      >
      <article-item v-for="(article, index) in articles" :key="index" :article="article" />
      <!-- <van-cell v-for="(article, index) in articles" :key="index" :title="article.title" /> -->
    </van-list>
  </van-pull-refresh>
</div>
</template>

<script>
import { getChannelArticle } from '@/api/article'
import ArticleItem from '@/components/article-item'
export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      articles: [],
      isRefreshLoading: false,
      loading: false,
      finished: false,
      timeStamp: null
    }
  },

  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      // 1. 请求获取数据
      const { data } = await getChannelArticle({
        cid: this.channel.id, // 频道 ID
        timeStamp: this.timeStamp || 1, // 时间戳，请求新的推荐数据传当前的时间戳，请求历史推荐传指定的时间戳，timestamp 相当于页码，请求最新数据使用当前最新时间戳，下一页数据使用上一次返回的数据中的时间戳
        withTop: 1 // 是否包含置顶，进入页面第一次请求时要包含置顶文章，1-包含置顶，0-不包含
      })

      // 2. 把数据放到 list 数组中
      var result = data.data
      this.articles.push(...result)
      // 3. 设置本次加载状态结束，它才可以判断是否需要加载下一次，否则就会永远的停在这里
      this.loading = false
      // 4. 数据全部加载完成
      if (result.length) {
        // 更新获取下一页数据的页码
        this.timeStamp = data.timeStamp + 1
      } else {
        // 没有数据了，把加载状态设置结束，不再触发加载更多
        this.finished = true
      }
    },
    async onRefresh () {
      // 下拉刷新，组件自己就会展示 loading 状态
      // 1. 请求获取数据
      const { data } = await getChannelArticle({
        cid: this.channel.id, // 频道 ID
        timeStamp: 1, // 时间戳，请求新的推荐数据传当前的时间戳，请求历史推荐传指定的时间戳，timestamp 相当于页码，请求最新数据使用当前最新时间戳，下一页数据使用上一次返回的数据中的时间戳
        withTop: 1
      })
      var newData = data.data
      if (newData[0].id === this.articles[0].id) {
        this.isRefreshLoading = false
        this.refreshSuccessText = '数据已最新'
      } else {
        var index
        newData.forEach((item, i) => {
          if (item.id === this.articles[0].id) {
            index = i
          }
        })
        // 2. 把数据放到数据列表中（往顶部追加）
        var results = data.data.slice(0, index)
        this.articles.unshift(...results)
        // 3. 关闭刷新的状态 loading
        this.isRefreshLoading = false
        this.refreshSuccessText = `更新了${index}条数据`
      }
    }
  }
}

</script>
<style lang='less' scoped>
.article-list {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 90px;
  overflow-y: auto;
}
</style>
