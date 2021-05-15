<!-- 资讯列表组件 -->
<template>
  <div class="article-list">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</div>
</template>

<script>
export default {
  name: 'ArticleList',
  components: {},
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },

  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        // 请求数据push进this.list
        // this.loading = false 加载状态结束
        // this.finished = true 数据加载完成
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
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
