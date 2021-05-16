<!-- service -->
<template>
  <div class="home-container">
    <el-amap vid="amap" :plugin="plugin" class="amap-demo"> </el-amap>
    <van-nav-bar class="app-nav-bar">
      <van-button
      class="city-btn"
      slot="title"
      icon="arrow-down"
      type='info'>{{city}}</van-button>
      <van-button
      class="search-btn"
      slot="title"
      icon="search"
      type='info' round>搜索</van-button>
    </van-nav-bar>
    <van-swipe  class="swiper">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" @click="Preview_img(images,index)"/>
      </van-swipe-item>
    </van-swipe>
    <van-grid square>
      <!-- <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" /> -->
      <van-grid-item icon='./images/icon1.png' text="我的挂号" alt/>
      <van-grid-item icon="photo-o" text="我的咨询" />
      <van-grid-item icon="photo-o" text="我的报告" />
      <van-grid-item icon="photo-o" text="门诊缴费" />
      <van-grid-item icon="photo-o" text="医院查找" />
      <van-grid-item icon="photo-o" text="满意度调查" />
      <van-grid-item icon="photo-o" text="复诊建议" />
      <van-grid-item icon="photo-o" text="健康课程" />
    </van-grid>
    <!-- <van-tabs v-model="active">
      <van-tab title="推荐专家"><article-list :channel = "channel"/></van-tab>
      <van-tab title="附近名医">附近名医</van-tab>
      <van-tab title="就诊过专家">就诊过专家</van-tab>
      <van-tab title="儿科专家">儿科专家</van-tab>
      <van-tab title="儿科专家">儿科专家</van-tab>
      <van-tab title="儿科专家">儿科专家</van-tab>
      <van-tab v-model="active"
      :key="channel.id"
      :title="doctorChannel.name"
      v-for="channel in doctorChannels"></van-tab>
    </van-tabs> -->
    <div class="recommend">
      <van-tabs v-model="activeDeptId" scrollspy color="blue">
        <van-tab title="推荐专家" name=""></van-tab>
        <van-tab title="就诊过医生" name="200091"></van-tab>
        <van-tab title="附近名医" name="DP000176"></van-tab>
        <van-tab title="附近医院" name="20034"></van-tab>
      </van-tabs>
      <div class="doctor-box">
        <betterScroll :scrollX="true" :useTransition="true"  :scrollY="false">
            <div class="doctor_box_list" >
              <div class="doctor_box_list_item">
                <div class="header_img_box">
                  <img src="./images/icon1.png"/>
                </div>
                <div class="doctor_item_name">你好啊</div>
                <div class="doctor_item_title">测试</div>
              </div>
              <div class="doctor_box_list_item">
                <div class="header_img_box">
                  <img src="./images/icon1.png"/>
                </div>
                <div class="doctor_item_name">你好啊</div>
                <div class="doctor_item_title">测试</div>
              </div>
              <div class="doctor_box_list_item">
                <div class="header_img_box">
                  <img src="./images/icon1.png"/>
                </div>
                <div class="doctor_item_name">你好啊</div>
                <div class="doctor_item_title">测试</div>
              </div>
              <div class="doctor_box_list_item">
                <div class="header_img_box">
                  <img src="./images/icon1.png"/>
                </div>
                <div class="doctor_item_name">你好啊</div>
                <div class="doctor_item_title">测试</div>
              </div>
              <div class="doctor_box_list_item">
                <div class="header_img_box">
                  <img src="./images/icon1.png"/>
                </div>
                <div class="doctor_item_name">你好啊</div>
                <div class="doctor_item_title">测试</div>
              </div>
            </div>
          </betterScroll>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecDoctorChannels } from '@/api/user'
export default {
  name: '',
  components: {
  },
  props: {},
  data () {
    var self = this
    return {
      city: '定位中',
      plugin: [{
        pName: 'CitySearch',
        events: {
          init (o) {
            o.getLocalCity((status, result) => {
              if (status === 'complete' && result.info === 'OK') {
                self.city = result.city
                console.log(result)
              }
            })
          }
        }
      }],
      active: 2,
      doctorChannels: [], // 推荐医生频道
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },

  computed: {},
  watch: {},
  created () {
    this.loadDoctorChannels()
  },
  mounted () {
  },
  methods: {
    async loadDoctorChannels () {
      // 请求获取频道数据
      const { data } = await getRecDoctorChannels()
      console.log(data)
    }
  }
}

</script>
<style lang='less' scoped>
.doctor-box {
  height: 100px;
  // display: flex;
  overflow:hidden;
  .doctor_box_list {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    overflow: auto;
    height:100px;
      .doctor_box_list_item {
        min-width: 95px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0px;
        overflow: hidden;
        background-color: #fff;
        .header_img_box {
        position: relative;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 0px;
        img {
          position: absolute;
          top: 10px;
          background: #fff;
          border-radius: 5px;
          width: auto;
          height: auto;
          width: 85%;
          height: 85%;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
        }
      }
      .doctor_item_name {
        font-size: 12px;
        color: #353535;
        text-align: center;
      }
      .doctor_item_title {
        width: 100%;
        font-size: 12px;
        text-align: center;
        color: hsla(0, 0%, 53%, 0.93);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .doctor_status_label {
        position: absolute;
        z-index: 9;
        background: #7fbf72;
        height: 40px;
        bottom: 0;
        left: 0;
        right: 0;
        line-height: 40px;
        text-align: center;
        font-size: 22px;
        color: #fff;
        &.is_stop {
          background: rgba(160, 160, 160, 0.8);
        }
      }
    }
  }
  }
.swiper {
  height: 150px;
  .van-swipe-item {
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
  }
}
.amap-wrap{
  height: 100vh;
}
.home-container{
  /deep/ .van-nav-bar__title{
    max-width: unset;
  }
  .van-button--info{
      border: none;
    }
  .city-btn{
    background: transparent;
    padding: 0px 10px 0 0px
  }
  .search-btn{
    background: #5babfb;
    width: 277px;
    height: 32px;
    .van-icon{
      font-size: 16px;
    }
    .van-button__text{
      font-size: 14px;
      color: white;
    }
  }
}
</style>
