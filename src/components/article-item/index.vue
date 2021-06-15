<!-- 文章列表项 -->
<template>
  <div class='article-item'>
    <van-cell class="article-item"
      :to="{
        name: 'article',
        params: {
          articleId: article.id
        }
      }"
    >
      <div slot="title" class="title van-multi-ellipsis--l3">{{ article.title }}</div>
      <div slot="label">
        <div
          v-if="article.coverCount === 3"
          class="cover-wrap"
        >
          <div
            class="cover-wrap-item"
            v-for="(img, index) in article.cover.images"
            :key="index"
          >
            <van-image
              class="cover-image"
              fit="cover"
              :src="img"
            />
          </div>
        </div>
        <div class="label-wrap">
          <span v-if="article.articleType === 'VOD'" class="item-type">视频</span>
          <span>{{ article.creatorName }}</span>
          <span>{{ article.id }}评论</span>
          <span>{{ article.creatorTime | relativeTime}}</span>
        </div>
      </div>
      <van-image
        v-if="article.coverCount === 1"
        class="right-cover"
        fit="cover"
        :src="article.coverUrl"
      />
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
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
.article-item {
  .title {
    font-size: 18px;
    color: #3a3a3a;
  }
  /deep/ .van-cell__value {
    flex: unset;
    width: 116px;
    height: 73px;
    margin-left: 12px;
  }
  .right-cover {
    width: 116px;
    height: 73px;
  }

  .cover-wrap {
    padding: 15px 0;
    display: flex;
    .cover-wrap-item {
      flex: 1;
      height: 73px;
      &:not(:last-child) {
        padding-right: 4px;
      }
      .cover-image {
        width: 100%;
        height: 73px;
      }
    }
  }

  .label-wrap {
    font-size: 13px;
    color: #b4b4b4;
    .item-type {
      color: #3196fa;
      font-size: 15px;
    }
  }
  .label-wrap span {
    margin-right: 12px;
  }
}
</style>
