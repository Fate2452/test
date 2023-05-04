<template>
  <view class="head">

    <view class="iconfont icon-sousuo head-icon">
    </view>
    <view class="iconfont icon-kaiguan bottom-icon">
    </view>

    <view class="middle">
      直播
    </view>

    <view class="bottom">
      <text class="item" @click="clickRencai" :class="{'active':clickIndex===1}">
        人才
      </text>
      <text class="item" @click="clickGuzhu" :class="{'active':clickIndex===2}">
        雇主
      </text>
      <text class="item" @click="clickHehuo" :class="{'active':clickIndex===3}">
        合伙人
      </text>
      <text class="item " @click="clickTuijian" :class="{'active':clickIndex===4}">
        推荐
      </text>
      <text class="item" @click="clickGuanzhu" :class="{'active':clickIndex===5}">
        关注
      </text>
    </view>


  </view>
</template>

<script setup>
  import {
    onMounted,
    ref
  } from 'vue'
  let clickIndex = ref(4)
  const clickRencai = () => {
    clickIndex.value = 1

  }
  const clickGuzhu = () => {
    clickIndex.value = 2
  }
  const clickHehuo = () => {
    clickIndex.value = 3

  }
  const clickTuijian = () => {
    clickIndex.value = 4

  }
  const clickGuanzhu = () => {
    clickIndex.value = 5
  }
</script>

<style scoped>
  .head {
    width: 100%;
    position: fixed;
    top: 25px;
    left: 0;
    height: 70px;
    color: #ffffff;
    z-index: 20;

  }

  .head-icon {
    position: absolute;
    left: 10px;
    top: 1px;
    font-size: 20px;
  }

  .bottom-icon {
    position: absolute;
    left: 90%;
    top: 38px;
    font-size: 30px;
    color: #21fa3a;
  }



  .middle {
    position: absolute;
    left: 80rpx;
    top: 0px;
  }

  .bottom {
    position: absolute;
    width: 100%;
    height: 40px;
    left: 5px;
    top: 40px;
  }

  .bottom .item {
    width: 40px;
    margin-right: 25px;

  }

  .head .bottom text:nth-child(3) {
    color: #e6d614f5;

  }


  .head .bottom .active {
    font-size: 20px;
  }
</style>