<!-- 图文资讯 -->
<template>
  <div class="image-wrap">
    <h1 class="title">{{article.title}}</h1>
      <van-cell center class="user-info">
        <div slot="title" class="name">{{article.creatorName}}</div>
        <van-image
          slot="icon"
          class="avatar"
          round
          fit="cover"
          :src="article.doctorBase.coverUrl"
        />
        <div slot="label" class="pubdate">{{article.doctorBase.hspName}} {{article.doctorBase.deptName}} </div>
        <van-button
          class="follow-btn"
          :type="articleUser.doctor === 0? 'info' : 'default'"
          :icon="articleUser.doctor === 0? 'plus' : ''"
          round
          size="small"
          :loading="isFollowLoading"
          @click="onFollow"
        >{{articleUser.doctor ===0 ? '关注' : '已关注' }}</van-button>
      </van-cell>
      <div
        class="markdown-body"
        v-html="article.contentSummary"
        ref="article-content"
      ></div>
  </div>
</template>

<script>
import './../github-markdown.css'
import { addFollowDoctor, deleteFollowDoctor } from '@/api/user'
export default {
  name: '',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    },
    articleUser: {
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
  methods: {
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
