<!-- my -->
<template>
  <div class="my-container">
    <van-cell-group class="my-info">
      <van-cell
        class="base-info"
        center
        :border="false"
      >
        <van-image
          class="avatar"
          slot="icon"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="info">
            <div class="patient_name">陈国光 </div>
            <div class="patient_gender">男 年龄:12</div>
            <div class="patient_phone">联系方式:15625501056</div>
        </div>
      </van-cell>
      <van-grid class="data-info" :border="false" :column-num="2">
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">13</div>
            <div class="text">关注医生</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">13</div>
            <div class="text">关注医院</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <div class="userinfo_body">
        <div class="mannger_list">
          <div class="health_manager">
            <h3 class="bigTitle">健康档案</h3>
            <div class="main_box">
              <div class="item" >
                <img src="./images/jkdda.png" alt />
                <p>健康档案</p>
              </div>
              <div class="item">
                <img src="./images/jbxx.png" alt />
                <p>基本信息</p>
              </div>
            </div>
          </div>
          <div class="order_manager">
            <h3 class="bigTitle">订单中心</h3>
            <div class="main_box">
              <div class="item" @click="jumpOrderList('',0)">
                <img src="./images/qbdd.png" alt />
                <p>全部订单</p>
              </div>
              <div class="item" @click="jumpOrderList('SERVICE_PACK',1)">
                <img src="./images/qbdd.png" alt />
                <p>健康计划</p>
              </div>
              <div class="item" @click="jumpOrderList('CONSULATION_PACK',2)">
                <img src="./images/qbdd.png" alt />
                <p>咨询订单</p>
              </div>
              <div class="item" @click="toUnderLine">
                <img src="./images/qbdd.png" alt />
                <p>预约线下</p>
              </div>
            </div>
          </div>
          <div class="base_manager">
            <h3 class="bigTitle">其他</h3>
            <div class="main_box">
              <div class="item" @click="jumpToPatManager">
                <img src="./images/userinfo_cardmanager.png" alt />
                <p>档案卡管理</p>
                <span class="arrow_icon"></span>
              </div>
              <div class="item" @click="jumpToPatInfo">
                <img src="./images/userinfo_patRecord.png" alt />
                <p>患者档案</p>
                <span class="arrow_icon"></span>
              </div>
              <div class="item" @click="jumpToMyEvaluation">
                <img src="./images/userinfo_evaluate.png" alt />
                <p>订单评价</p>
                <span class="arrow_icon"></span>
              </div>
              <div class="item" @click="jumpToMyEvaluation">
                <img src="./images/userinfo_evaluate.png" alt />
                <p>我的回复</p>
                <span class="arrow_icon"></span>
              </div>
              <div class="item" @click="jumpToAddress">
                <img src="./images/userinfo_address.png" alt />
                <p>我的地址</p>
                <span class="arrow_icon"></span>
              </div>
              <div class="item" @click="jumpToCouppon">
                <img src="./images/userinfo_evaluate.png" alt />
                <p>优惠券</p>
                <span class="arrow_icon"></span>
              </div>

            </div>
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
    return {}
  },

  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style lang='less' scoped>
.my-container{
  .my-info {
    background: url("./images/banner.png") no-repeat;
    position:unset;
    height:200px;
    .base-info {
      height: 130px;
      background-color: unset;
      padding-left: 25px;
      padding-bottom:0px;
      padding-top:0px;
      .avatar {
        box-sizing: border-box;
        width: 90px;
        height: 90px;
        border: 2px solid #fff;
        margin: 10px 20px 5px 20px;
      }
      .info {
        height: 90px;
        margin: 20px 0px 0px 0px;
        .patient_name {
          font-size: 30px;
          align-items: center;
          color: #fff;
        }
        .patient_gender {
          margin: 5px 0px 0px 0px;
          font-size: 15px;
          align-items: center;
          color: #fff;
        }
        .patient_age {
          font-size: 15px;
          align-items: center;
          color: #fff;
        }
        .patient_phone {
          font-size: 15px;
          align-items: center;
          color: #fff;
        }
      }
    }
    .data-info {
      position:unset;
      color: transparent;
      .data-info-item {
        position:unset;
        height: 40px;
        margin: -10px 0px 20px 0px;
        .text-wrap {
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .count {
            font-size: 18px;
          }
          .text {
            font-size: 11px;
          }
        }
      }
    }
    /deep/ .van-grid-item__content {
      background-color: unset;
    }
  }
  .userinfo_body {
    background: transparent;
    .mannger_list {
      margin-top: -30px;
      padding-bottom:10px;
    }
    .health_manager {
      position: relative;
      height: 115px;
      width: 360px;
      margin: 0 auto;
      margin-bottom: 10px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 16px 0px rgba(207, 207, 207, 0.6);
      border-radius: 10px;
      padding: 0 0px;
      .main_box {
        display: flex;
        margin: 0px 0px 20px 0px;
        justify-content: space-around;
        & > .item {
          margin: 8px 0 20px 0;
          flex: 1;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-right: 1px solid #dcdcdc;
          &:last-child {
            border: none;
          }
          & > img {
            width: 25px;
            height: 25px;
            display: block;
            margin-right: 4px;
          }
          & > p {
            font-size: 15px;
            color: #333;
            text-align: center;
          }
        }
      }
    }
    .order_manager {
      position: relative;
      height: 115px;
      width: 360px;
      margin: 0 auto;
      margin-bottom: 10px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 16px 0px rgba(207, 207, 207, 0.6);
      border-radius: 10px;
      padding: 0 0px;
      .main_box {
        display: flex;
        margin: 0px 0px 10px 0px;
        justify-content: space-around;
        & > .item {
          flex: 1;
          height: 80px;
          & > img {
            width: 25px;
            height: 25px;
            display: block;
            margin: 0 auto;
            margin-top: 15px;
          }
          & > p {
            font-size: 15px;
            color: #333;
            text-align: center;
            margin: 0px;
          }
        }
      }
    }
    .base_manager {
      position: relative;
      height: 345px;
      width: 360px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 16px 0px rgba(207, 207, 207, 0.35);
      border-radius: 10px;
      padding: 0 0;
      margin-bottom: 80px;
      .main_box {
        & > .item {
          position: relative;
          display: flex;
          align-items: center;
          height: 50px;
          display: flex;
          border-bottom: 1px solid #dcdcdc;
          margin: 0px 10px 0px 10px;
          padding: 0 20px;
          &:last-child {
            border: none;
          }
          & > img {
            max-width: 20px;
            max-height: 20px;
            display: inline-block;
            margin-right: 10px;
          }
          & > p {
            font-size: 15px;
            color: #333;
            text-align: center;
          }
          & > .arrow_icon {
            position: absolute;
            right: 20px;
            top: 32px;
            width: 20px;
            height: 32px;
            display: block;
            //@include bis("./images/appo_arrow_right.png");
            margin-left: 10px;
          }
        }
      }
    }
  }
  .bigTitle {
  font-size: 15px;
  font-weight: bold;
  color: #333;
  height: 40px;
  margin: 0px 10px 0px 10px;
  line-height: 40px;
  text-indent: 1em;
  border-bottom: 1px solid #dcdcdc;

  &:after {
    position: absolute;
    left: 14px;
    top: 10px;
    width: 6px;
    height: 20px;
    background: blue;
    border-radius: 1px;
    display: block;
    content: "";
  }
}
}
</style>
