<template>
  <view class="index">
    <videohead></videohead>
    <videoList></videoList>

  </view>
</template>

<script setup>
  import videohead from '../../components/videohead/videohead.vue'
  import videoList from '../../components/videoList/videoList.vue'
</script>

<style>
  .index {
    height: 100vh;
    width: 100%;
  }
</style>