<!-- 文章详情 -->
<template>
  <div class="article-container">
    <van-nav-bar
      class="app-nav-bar"
      title="资讯详情"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="article-wrap">
      <h1 class="title">策策策策策鹅测出</h1>
      <van-cell center class="user-info">
        <div slot="title" class="name">陈医生</div>
        <van-image
          slot="icon"
          class="avatar"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="label" class="pubdate">中山大学第一附属医院 神经外科</div>
        <van-button
          class="follow-btn"
          :type="false ? 'default' : 'info'"
          :icon="false? '' : 'plus'"
          round
          size="small"
        >{{ true ? '已关注' : '关注' }}</van-button>
      </van-cell>
      <div
        class="markdown-body"
        v-html="content"
        ref="article-content"
      ></div>
    </div>
    <div class="article-bottom">
      <van-button
        class="comment-btn"
        type="default"
        round
        size="small"
        @click="isPostShow = true"
      >写评论</van-button>
      <van-icon
        name="comment-o"
        :info="totalCommentCount"
        color="#777"
      />
      <van-icon
        :color="true ? 'orange' : '#777'"
        :name="true ? 'star' : 'star-o'"
        @click="onCollect"
      />
      <van-icon
        :color="true ? 'hotpink' : '#777'"
        :name="true ? 'good-job' : 'good-job-o'"
        @click="onLike"
      />
      <van-icon name="share" color="#777777"></van-icon>
    </div>
    <van-popup
      v-model="isPostShow"
      position="bottom"
    >
      <post-comment
        :target="articleId"
        @post-success="onPostSuccess"
      />
    </van-popup>
  </div>
</template>

<script>
import './github-markdown.css'
// 在组件中获取动态路由参数：
//    方式一：this.$route.params.articleId
//    方式二：props 传参，推荐
//      this.articleId
export default {
  name: 'ArticleDetail',
  components: {},
  props: {
    articleId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      article: null,
      isPostShow: false,
      content: '<h1>part1</h1><p>啊啥的2阿福测试文章3号测试文章3号</p><hr><p><s>a啊啥的爱上</s></p><p><strong>123啊啥的</strong></p><p><em>阿道夫</em></p><ul><li><p>123</p></li></ul><p>123</p><h2>part2</h2><ol><li><p>123</p></li><li><p>123</p></li></ol><ol><li><p>124asf</p></li></ol><ul data-type="todo_list"><li data-type="todo_item" data-done="true"><span class="todo-checkbox" contenteditable="false"></span><div class="todo-content"><p>123df</p></div></li><li data-type="todo_item" data-done="true"><span class="todo-checkbox" contenteditable="false"></span><div class="todo-content"><p>asd1</p></div></li><li data-type="todo_item" data-done="false"><span class="todo-checkbox" contenteditable="false"></span><div class="todo-content"><p>qqwe</p></div></li></ul><h3><span style="color: #00bcd4;">23df123</span></h3><p><span style="color: #ff9800;">asd123</span><span style="color: #000000;">adf</span></p><p></p><p><strong><span style="color: #3f51b5;">asd123</span></strong></p><p><span style="color: #009688;">123</span></p>'
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
.article-wrap {
  position: fixed;
  left: 0;
  right: 0;
  top: 46px;
  bottom: 44px;
  overflow-y: auto;
}
.title {
  font-size: 20px;
  color: #3a3a3a;
  padding: 24px 20px 18px;
  background-color: #fff;
  margin: 0;
}

.user-info {
  .avatar {
    width: 45px;
    height: 45px;
    margin-right: 12px;
  }
  .name {
    font-size: 18px;
    color: #333333;
  }
  .pubdate {
    font-size: 13px;
    width: 200px;
    color: #b4b4b4;
  }
  .follow-btn {
    width: 85px;
    height: 29px;
  }
}

ul {
  list-style: unset;
}

.markdown-body {
  padding: 14px;
  background-color: #fff;
}

.article-bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  height: 50px;
  border-top: 1px solid #d8d8d8;
  background-color: #fff;
  .comment-btn {
    width: 141px;
    height: 30px;
    border: 1px solid #eeeeee;
    font-size: 15px;
    line-height: 23px;
    color: #a7a7a7;
  }
  .van-icon {
    font-size: 20px;
    .van-info {
      font-size: 11px;
      background-color: #e22829;
    }
  }
}
</style>
