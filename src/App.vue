<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view/>
    <h1>黑色</h1>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <i class="toutiao toutiao-gengduo"></i>
    <van-icon name="chat-o" />
    <van-button icon="star-o" type="primary"></van-button>
    <van-button icon-prefix="toutiao" icon="gengduo" type="primary"></van-button>
  </div>
</template>

<style lang="less"></style>
<script>
export default {
  name: 'App'
}
</script>
