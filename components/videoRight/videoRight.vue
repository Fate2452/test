<template>
  <view class="listright">
    <view class="author-img">
      <image :src="video.href" class="img"></image>
      <view class="iconfont icon-jiahao-fill add"></view>
    </view>
    <view class="iconfont icon-aixin_shixin right-box" :style="color" @click="changeColor">

    </view>
    <view class="number">
      {{video.like}}
    </view>
    <view class="iconfont icon-shoucang_shixin right-box">

    </view>
    <view class="number">
      {{video.like_n}}
    </view>
    <view class="iconfont icon-icon right-box">

    </view>
    <view class="number">
      {{video.pinlun.length}}
    </view>
    <view class="iconfont icon-fenxiangshixin right-box">

    </view>
    <view class="number">
      {{video.sms_n}}
    </view>
    <view class="iconfont icon-pengyouquan00 right-box">

    </view>


  </view>

</template>

<script>
  export default {
    name: "videoright",
    props: ['video'],
    data() {
      return {
        color: ''
      };
    },
    methods: {
      //点击爱心变红（即点赞）或者变白（取消点赞）
      changeColor() {
        this.color = this.color === '' ? 'color:red;' : ''
      },
      //双击点赞
      change() {
        this.color = "color:red;"
      }
    }
  }
</script>

<style>
  .listright {
    width: 50px;
    margin: 0 auto;
  }

  .author-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #FFFFFF;
    position: relative;
  }

  .right-box {
    width: 50px;
    height: 40px;
    margin-top: 13px;
    text-align: center;
    line-height: 40px;
    color: #FFFFFF;
    font-size: 25px;
  }

  .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .number {
    font-size: 10px;
    text-align: center;
    color: #FFFFFF;
  }

  .add {

    position: absolute;
    bottom: -9px;
    left: 16px;
    text-align: center;
    line-height: 18px;
    color: #ff0707
  }
</style>