<!-- layout -->
<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view/>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/service">栏目</van-tabbar-item>
      <van-tabbar-item icon="more-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layoutIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },

  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}

</script>
<style lang='less' scoped></style>
