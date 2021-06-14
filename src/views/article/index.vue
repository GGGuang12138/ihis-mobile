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
      <div class="video">
        <!-- <article-image
        :articleUser="articleUser"
        :article="article"/> -->
        <article-video v-if="article.articleType == 'VOD'"
        :articleUser="articleUser"
        :article="article"/>
      </div>
      <article-image v-if="article.articleType == 'IMG'"
        :articleUser="articleUser"
        :article="article"/>
      <comment-list
        :source="articleId"
        :list="commentList"
        @update-total-count="totalCommentCount = $event"
        @reply-click="onReplyClick"
      />
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
      />
      <van-icon
        :color="articleUser.isLike !== 0 ? 'hotpink' : '#777'"
        :name="articleUser.isLike !== 0 ? 'good-job' : 'good-job-o'"
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
import { getArticle, getArticleUser } from '@/api/article'
import { addFollowDoctor, deleteFollowDoctor } from '@/api/user'
import CommentList from './components/comment-list'
import PostComment from './components/post-comment.vue'
import ArticleImage from './components/article-image'
import ArticleVideo from './components/article-video.vue'
// 在组件中获取动态路由参数：
//    方式一：this.$route.params.articleId
//    方式二：props 传参，推荐
//      this.articleId
export default {
  name: 'ArticleDetail',
  components: {
    CommentList,
    PostComment,
    ArticleImage,
    ArticleVideo
  },
  props: {
    articleId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isFollowLoading: false,
      article: null,
      articleUser: null,
      isPostShow: false
    }
  },

  computed: {},
  watch: {},
  created () {
    this.loadArticle()
    this.loadArticleUser()
  },
  mounted () {},
  methods: {
    async loadArticle () {
      const { data } = await getArticle(this.articleId)
      this.article = data
    },
    async loadArticleUser () {
      const { data } = await getArticleUser(this.articleId)
      this.articleUser = data
    },
    async onFollow () {
      this.isFollowLoading = true
      if (this.articleUser.doctor === 1) {
        // 已关注，取消关注
        await deleteFollowDoctor(this.article.creatorId)
        console.log('te')
        this.articleUser.doctor = 0
      } else {
        // 没有关注，添加关注
        await addFollowDoctor(this.article.creatorId)
        this.articleUser.doctor = 1
      }
      this.isFollowLoading = false
    }
  }
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
  padding: 10px 20px 10px;
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
