<!-- message -->
<template>
  <div class="message-container">
    <!-- <div class="patList">
      <span class="now_pat">当前咨询人</span>
      <span class="change_pat" @click="openPatientList">切换咨询人</span>
    </div> -->
    <van-cell
        class="base-info"
        center
        :border="false"
      >
        <div class="name" slot="title">目前共有
        <span class="noread">1</span>
        条未读消息</div>
    </van-cell>
    <!-- <div class="types_container">
      <div
        class="message_types"
        :class="{'active': true}"
        @click="changeMsgType('all','全部消息')"
      >全部消息</div>
      <div
        class="message_types"
        :class="{'active':messageType==='SUBMIT_SUCCESS'}"
        @click="changeMsgType('SUBMIT_SUCCESS','提交成功')"
      >提交成功</div>
      <div
        class="message_types"
        :class="{'active':messageType==='REG_SUCCESS'}"
        @click="changeMsgType('REG_SUCCESS','预约成功')"
      >预约成功</div>
      <div
        class="message_types"
        :class="{'active':messageType==='DOCTOR_RECEPTION'}"
        @click="changeMsgType('DOCTOR_RECEPTION','医生回复')"
      >医生回复</div>
      <div
        class="message_types"
        :class="{'active':messageType==='DOCTOR_RETURNNUMBER'}"
        @click="changeMsgType(' DOCTOR_RETURNNUMBER','医生退号')"
      >医生退号</div>
      <div
        class="message_types"
        :class="{'active':messageType==='FINISH_VISIT'}"
        @click="changeMsgType('FINISH_VISIT','结束咨询')"
      >结束咨询</div>
      <div
        class="message_types"
        :class="{'active':messageType==='WAIT_EVALUATE_VISIT'}"
        @click="changeMsgType('WAIT_EVALUATE_VISIT','满意度评价')"
      >满意度评价</div>
    </div> -->
      <div class="message_wrap">
        <div class="message_list" :class="{'active':true}">
        <!-- <div class="message_item">
          <div class="message_item_t">
            <img src="./images/dynamic_tips.png" />
            <span class="type_text">系统消息</span>
            <span class="date">2021-03-33</span>
          </div>
          <div class="message_item_b">陈国光医生已接诊</div>
        </div> -->
        <div class="message_item">
          <div class="message_item_t">
            <img src="./images/dynamic_tips.png" />
            <span class="type_text">系统消息</span>
            <span class="date">2021-06-14</span>
          </div>
          <div class="message_item_b">医生已经回复，点击查看</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
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
.message-container {
  .base-info {
      background: url("./images/banner.png") no-repeat;
      height: 50px;
      background-color: unset;
      padding-left: 25px;
      padding-bottom:0px;
      padding-top:0px;
      .name {
        font-size: 15px;
        color: #fff;
      }
      .update-btn {
        height: 20px;
        width: 80px;
        font-size: 12px;
        color: #666666;
      }
  }
  .patList {
    position: relative;
    display: flex;
    width: 100%;
    height: 110px;
    line-height: 110px;
    background-color: blue;
    background: "./images/dynamic_bg.png" no-repeat;
    //@include bis("~dg/user_info/dynamic_bg.png");
    .now_pat {
      color: #fff;
      font-size: 32px;
      text-indent: 10px;
      font-weight: bold;
    }
    .change_pat {
      position: absolute;
      right: 0px;
      top: 20px;
      width: 190px;
      height: 75px;
      line-height: 75px;
      color: #fff;
      font-size: 28px;
      text-indent: center;
      text-indent: 1em;
      //@include bis("~dg/user_info/dynamic_change.png");
    }
}
.nav {
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 13px;
  background: #fff;
  font-size: 12px;
  color: #333;
  box-shadow: 0 2px 9px 1px rgba(209, 209, 209, 0.51);
}
.nav .readAll {
  border: 1px solid blue;
  color: blue;
  font-size: 12px;
  padding: 0 15px;
  border-radius: 20px;
  margin-left: 10px;
}
.nav .readAll:active {
  background: #ddd;
}
.types_container {
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 90px;
  background: #fff;
  border-top: 1px solid #dcdcdc;
  overflow: hidden;
  transition: all 0.3s;
  padding: 0 5px 14px 5px;
  box-sizing: border-box;
  .message_types {
    min-width: 20px;
    height: 24px;
    line-height: 24px;
    background: #eee;
    border-radius: 24px;
    font-size: 14px;
    color: #333;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
    margin-left: 8px;
    margin-top: 15px;
    transition: all 0.3s;
  }
  .message_types.active {
    background: blue;
    color: #fff;
  }
}
.types_container.hidden {
  height: 0;
  padding: 0;
}
.message_list {
  background: #18202608;
  width: 100%;
  // bottom: 119px;
  // bottom: 50px;
  height: 710px;
  overflow: auto;
  &.active {
    top: 180px;
  }
  .message_wrap{
    padding-top:10px;
  }
}
.message_item {
  position: relative;
  width: 365px;
  height: 80px;
  background: #fff;
  box-shadow: 0 2px 9px 1px rgba(209, 209, 209, 0.51);
  border-radius: 8px;
  margin: 10px 0 0 5px;
  margin-right: 5px;
  padding: 0px 0px;
  color: #999;
  box-sizing: border-box;
}
.message_item.noread {
  color: #333;
}
.message_item.noread:after {
  position: absolute;
  top: 36px;
  left: 43px;
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  background: #ff4335;
  border-radius: 50%;
}
.message_item_t img {
  width: 32px;
  height: 32px;
  padding: 0 0 0 20px;
  vertical-align: -18px;
}
.message_item_t .type_text {
  font-size: 20px;
  margin: -20px 0px 0px 8px;
  color: #333333;
  font-weight: bold;
}
.message_item_t .date {
  float: right;
  font-size: 17px;
  color: #999999;
  margin: 10px 10px;
}
.message_item_b {
  padding-left: 51px;
  margin-top: 0px;
  font-size: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

}
</style>
