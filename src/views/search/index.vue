<template>
  <div class="search-container">
    <form action="/">
      <van-search
        v-model="searchText"
        placeholder="请输入搜索关键词"
        show-action
        @blur="onSearch(searchText)"
        @cancel="$router.back()"
        @focus="isResultShow = false"
      />
    </form>
    <search-result
      v-if="isResultShow"
      :search-text="searchText"
    />
    <search-history
      v-else-if="searchText"
      :searchHistories="searchHistories"
    />
  </div>
</template>

<script>
import SearchHistory from './components/search-history.vue'
// import SearchSuggestion from './components/search-suggestion'
// import SearchHistory from './components/search-history'
import SearchResult from './components/search-result'
// import { setItem, getItem } from '@/utils/storage'
// import { getSearchHistories } from '@/api/search'

export default {
  name: 'SearchIndex',
  components: {
    SearchHistory,
    // SearchSuggestion,
    // SearchHistory,
    SearchResult
  },
  props: {},
  data () {
    return {
      searchText: '', // 搜索输入框的内容
      isResultShow: false, // 控制搜索结果的显示状态
      searchHistories: [] // 搜索历史数据
    }
  },
  computed: {

  },
  watch: {
    // 监视搜索历史记录的变化，存储到本地存储
    // searchHistories () {
    //   // setItem('search-histories', this.searchHistories)
    // }
  },
  created () {
  },
  mounted () {
    document.querySelector('body').setAttribute('style', 'background-color:#f7f7f7')
  },
  methods: {
    onSearch (searchText) {
      console.log('test')
      // 把输入框设置为你要搜索的文本
      this.searchText = searchText

      // const index = this.searchHistories.indexOf(searchText)
      // if (index !== -1) {
      //   // 把重复项删除
      //   this.searchHistories.splice(index, 1)
      // }

      // 把最新的搜索历史记录放到顶部
      this.searchHistories.unshift(searchText)

      // 如果用户已登录，则把搜索历史记录存储到线上
      //    提示：只要我们调用获取搜索结果的数据接口，后端会给我们自动存储用户的搜索历史记录
      // 如果没有登录页，则把搜索历史记录存储到本地
      // setItem('search-histories', this.searchHistories)

      // 展示搜索结果
      this.isResultShow = true
    },

    async loadSearchHistories () {
    }
  }
}
</script>

<style scoped lang="less">
.search-result {
  position: fixed;
  left: 0;
  right: 0;
  top: 54px;
  bottom: 0;
  overflow-y: auto;
}
</style>
