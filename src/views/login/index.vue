<!-- login -->
<template>
  <div class="login-container">
    <van-nav-bar
    class="app-nav-bar"
    title="注册/登陆"
    left-arrow
    @click-left="$router.back()"/>
    <!-- 登陆表单 -->
    <van-form @submit="onlogin">
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号码"
        :rules="formRules.mobile"
      />
      <van-field
        class="yanzhengma-margin"
        v-model="user.code"
        clearable
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        :rules="formRules.code"
        >
          <template #button>
            <van-button size="small" round>发送验证码</van-button>
          </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button
          type="info"
          block>登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { Toast } from 'vant'

export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机
        code: '' // 验证码
      },
      formRules: {
        mobile: [
          { required: true, message: '' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },

  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onlogin () {
      Toast.loading({
        message: '登陆中。。。', // 手机号
        forbidClick: true, // 禁止背景点击
        duration: 0 // 0, 不会自动取消
      })
      try {
        const res = await login(this.user)
        Toast.success('登陆成功')
        // Toast.clear()
        console.log(res)
      } catch (err) {
        Toast.fail('登陆失败，手机或验证码错误')
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
  .van-form{
    .yanzhengma-margin{
      /deep/ .van-field__left-icon{
        margin-top: 4px;
      }
    }
  }
}
</style>
