<!-- login -->
<template>
  <div class="login-container">
    <van-nav-bar
    class="app-nav-bar"
    title="注册/登陆"
    left-arrow
    @click-left="$router.back()"/>
    <!-- 登陆表单 -->
    <van-form>
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号码"
      />
      <van-field
        class="yanzhengma-margin"
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码">
          <template #button>
            <van-button size="small" round>发送验证码</van-button>
          </template>
        </van-field>
    </van-form>
    <div class="login-btn-wrap">
      <van-button
       type="info"
       @click="onlogin"
       block>登陆</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机
        code: '' // 验证码
      }
    }
  },

  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onlogin () {
      // 1 找到数据接口
      // 2 封装请求方法
      // 3 请求调用登陆
      try {
        const res = await login(this.user)
        // 4 处理响应结果
        console.log(res)
      } catch (err) {
        console.log(err)
        console.log('登陆失败', err)
      }
    }
  }
}

</script>
<style lang='less' scoped>
.login-container {
  .login-btn-wrap {
    padding: 13px 8px;
    .van-button {
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
.login-container {
  .van-cell-group {
    .yanzhengma-margin{
      /deep/ .van-field__left-icon{
        margin-top: 4px;
      }
    }
  }
}
</style>
