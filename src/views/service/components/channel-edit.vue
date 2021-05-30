<!-- 频道编辑 -->
<template>
  <div class="channel-edit">
    <van-nav-bar class="app-nav-bar">
      <div
        slot="title"
        class="channel-title"
      >栏目编辑</div>
    </van-nav-bar>
    <van-cell center :border="false">
      <div
        slot="title"
        class="my-title"
      >我的栏目</div>
      <van-button
        type="danger"
        plain
        round
        size="mini"
        @click="isEdit = !isEdit"
      >{{ isEdit ? '完成' : '编辑' }}</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        :class="{ active: index === active }"
        :icon="(isEdit && index !== 0) ? 'clear' : ''"
        v-for="(channel, index) in userChannels"
        :key="index"
        :text="channel.name"
        @click="onUserChannelClick(channel, index)"
      />
    </van-grid>
    <van-cell center :border="false">
      <div
        slot="title"
        class="my-title"
      >所有栏目</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="(channel, index) in allChannels"
        :key="index"
        :text="channel.name"
        @click="onAdd(channel)"
      />
    </van-grid>
  </div>
</template>

<script>
import { getUserChannels } from '@/api/article'
export default {
  name: 'ChannelEdit',
  components: {},
  props: {},
  data () {
    return {
      userChannels: [],
      allChannels: [],
      isEdit: false
    }
  },

  computed: {},
  watch: {},
  created () {
    this.getUserChannels()
  },
  mounted () {},
  methods: {
    async getUserChannels () {
      var channels = []
      if (this.user) {
        // 已登录，请求获取线上的用户频道列表数据
        const { data } = await getUserChannels()
        channels = data.data.channels
      } else {
        const { data } = await getUserChannels()
        channels = data
      }
      this.userChannels = channels
      this.allChannels = channels
    },
    async getAllChannels () {

    }

  }
}

</script>
<style lang='less' scoped>
.channel-edit {
  .van-button--mini {
    height: 25px;
    width: 50px;
  }
  .channel-title {
    font-weight: 350;
    font-size: 18px;
    color: white;
  }
  .my-title {
    font-size: 18px;
    color: #333333;
  }

  .grid-item {
    width: 80px;
    height: 43px;
    /deep/ .van-grid-item__content {
      background-color: #f4f5f6a6;
      .van-grid-item__text {
        font-size: 14px;
        color: #222;
        margin-top: 0;
      }
    }
    /deep/ .van-grid-item__icon {
      position: absolute;
      right: -5px;
      top: -5px;
      font-size: 20px;
      color: #ccc;
      z-index: 5;
    }
  }

  .active {
    /deep/ .van-grid-item__text {
      color: red !important;
    }
  }
}
</style>
