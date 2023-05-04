<template>
  <view class="videoList">
    <view class="swiper-box">
      <swiper class="swiper" :vertical="true" @change="changeplay" @touchstart="touchStart" @touchend="touchEnd">
        <swiper-item v-for="(item,index) of list" :key="index">
          <view class="swiper-item">
            <videoPlay :video="item" @changeClick='changeClick' ref="player" :index="index"></videoPlay>
          </view>
          <view class="listleftbox">
            <videoLeft :video="item"></videoLeft>
          </view>
          <view class="listrightbox">
            <videoRight :video="item" ref="right"></videoRight>
          </view>

        </swiper-item>

      </swiper>
    </view>
  </view>
</template>

<script>
  import videoPlay from '../videoPlay/videoPlay.vue'
  import videoRight from '../videoRight/videoRight.vue'
  import videoLeft from '../videoLeft/videoLeft.vue'

  var time = null
  export default {
    name: "videoList",
    components: {
      videoPlay,
      videoRight,
      videoLeft
    },
    mounted() {
      this.getVideo()
    },
    data() {
      return {
        list: [],
        pageStatrY: 0,
        pageEndY: 0,
        page: 0
      };
    },

    methods: {
      changeClick() {
        //双击点赞 调用子组件的方法
        this.$refs.right[0].change()

      },
      //上下滑动触发事件
      changeplay(res) {
        clearTimeout(time)
        this.page = res.detail.current
        time = setTimeout(() => {
          if (this.pageStatrY < this.pageEndY) {
            setTimeout(() => {
              this.$refs.player[this.page].player()
            }, 20)
            this.$refs.player[this.page + 1].pause()
            this.pageStatrY = 0
            this.pageEndY = 0
          } else {
            setTimeout(() => {
              this.$refs.player[this.page].player()
            }, 20)
            this.$refs.player[this.page - 1].pause()
            this.pageStatrY = 0
            this.pageEndY = 0
          }
        }, 1)
      },
      //获取向下滑动的值
      touchStart(res) {
        this.pageStatrY = res.changedTouches[0].pageY

      },
      //获取向上滑动的值
      touchEnd(res) {
        this.pageEndY = res.changedTouches[0].pageY

      },
      getVideo() {
        uni.request({
          url: 'https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video',
          method: "POST",
          data: {
            info: 'get_video'
          },
          success: (res) => {
            this.list = res.data.data

          },
        })
      }
    }
  }
</script>

<style>
  .videoList {
    height: 100%;
    width: 100%;
  }

  .swiper-box {
    height: 100%;
    width: 100%;
  }

  .swiper {
    height: 100%;
    width: 100%;
  }

  .swiper-item {
    height: 100%;
    width: 100%;
    z-index: 19;
  }

  .title {
    color: #FFFFFF;
  }

  /deep/.listleftbox {
    z-index: 20;
    position: absolute;
    bottom: 15px;
    left: 10px;
  }

  /deep/.listrightbox {
    z-index: 20;
    position: absolute;
    bottom: 60px;
    right: 10px;
    color: #FFFFFF;
  }
</style>