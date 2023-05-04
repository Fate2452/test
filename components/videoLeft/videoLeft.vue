<template>
  <view class="listLeft">

    <view class="author">
      <text class="iconfont icon-renzheng2 biaozhi"></text>
      <view class="title">{{video.username}}</view>
    </view>

    <view class="title-box">
      <text class="iconfont icon-wenben biaozhi"></text>
      <view class="title">{{video.msg}}</view>
    </view>
    <view class="weizhi">
      <text class="iconfont icon-didian biaozhi"></text>
      <view class="title">上海市</view>
    </view>


  </view>

</template>

<script setup>
  import {
    toRefs
  } from 'vue'
  const props = defineProps({
    video: {
      type: Object,
    }
  })
  //解构
  const {
    video
  } = toRefs(props)
</script>

<style>
  .listLeft {
    height: 120px;
    margin-left: 10px;
    color: #FFFFFF;
    width: 230px;

  }

  .author {
    margin-top: 5px;
    height: 25px;
    line-height: 25px;
    font-size: 20px;
    color: #f4ea2a;
  }

  .weizhi {
    margin-top: 5px;
    height: 25px;
    line-height: 25px;
    font-size: 20px;
  }

  .title-box {
    margin-top: 5px;
  }

  .title {

    margin-left: 30px;
    display: inline-block;
    line-height: 20px;
    font-size: 13px;
    width: 100%;
    word-wrap: break-word;
  }

  .biaozhi {
    font-size: 20px;
    position: absolute;
  }
</style>