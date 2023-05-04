"use strict";
const common_vendor = require("../../common/vendor.js");
const videoPlay = () => "../videoPlay/videoPlay.js";
const videoRight = () => "../videoRight/videoRight.js";
const videoLeft = () => "../videoLeft/videoLeft.js";
var time = null;
const _sfc_main = {
  name: "videoList",
  components: {
    videoPlay,
    videoRight,
    videoLeft
  },
  mounted() {
    this.getVideo();
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
      this.$refs.right[0].change();
    },
    //上下滑动触发事件
    changeplay(res) {
      clearTimeout(time);
      this.page = res.detail.current;
      time = setTimeout(() => {
        if (this.pageStatrY < this.pageEndY) {
          setTimeout(() => {
            this.$refs.player[this.page].player();
          }, 20);
          this.$refs.player[this.page + 1].pause();
          this.pageStatrY = 0;
          this.pageEndY = 0;
        } else {
          setTimeout(() => {
            this.$refs.player[this.page].player();
          }, 20);
          this.$refs.player[this.page - 1].pause();
          this.pageStatrY = 0;
          this.pageEndY = 0;
        }
      }, 1);
    },
    //获取向下滑动的值
    touchStart(res) {
      this.pageStatrY = res.changedTouches[0].pageY;
    },
    //获取向上滑动的值
    touchEnd(res) {
      this.pageEndY = res.changedTouches[0].pageY;
    },
    getVideo() {
      common_vendor.index.request({
        url: "https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/video",
        method: "POST",
        data: {
          info: "get_video"
        },
        success: (res) => {
          this.list = res.data.data;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_videoPlay2 = common_vendor.resolveComponent("videoPlay");
  const _easycom_videoLeft2 = common_vendor.resolveComponent("videoLeft");
  const _easycom_videoRight2 = common_vendor.resolveComponent("videoRight");
  (_easycom_videoPlay2 + _easycom_videoLeft2 + _easycom_videoRight2)();
}
const _easycom_videoPlay = () => "../videoPlay/videoPlay.js";
const _easycom_videoLeft = () => "../videoLeft/videoLeft.js";
const _easycom_videoRight = () => "../videoRight/videoRight.js";
if (!Math) {
  (_easycom_videoPlay + _easycom_videoLeft + _easycom_videoRight)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.sr("player", "b2dad7de-0-" + i0, {
          "f": 1
        }),
        b: common_vendor.o($options.changeClick, index),
        c: "b2dad7de-0-" + i0,
        d: common_vendor.p({
          video: item,
          index
        }),
        e: "b2dad7de-1-" + i0,
        f: common_vendor.p({
          video: item
        }),
        g: common_vendor.sr("right", "b2dad7de-2-" + i0, {
          "f": 1
        }),
        h: "b2dad7de-2-" + i0,
        i: common_vendor.p({
          video: item
        }),
        j: index
      };
    }),
    b: common_vendor.o((...args) => $options.changeplay && $options.changeplay(...args)),
    c: common_vendor.o((...args) => $options.touchStart && $options.touchStart(...args)),
    d: common_vendor.o((...args) => $options.touchEnd && $options.touchEnd(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniapp/video/components/videoList/videoList.vue"]]);
wx.createComponent(Component);
