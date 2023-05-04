"use strict";
const common_vendor = require("../../common/vendor.js");
var timer = null;
const _sfc_main = {
  props: ["video", "index"],
  data() {
    return {
      play: false,
      dblClick: false,
      autoplay: false
    };
  },
  mounted() {
    this.videoContext = common_vendor.index.createVideoContext("myVideo", this);
  },
  methods: {
    click() {
      clearTimeout(timer);
      this.dblClick = !this.dblClick;
      timer = setTimeout(() => {
        if (this.dblClick) {
          if (this.play === false) {
            this.playThis();
          } else {
            this.pause();
          }
        } else {
          this.$emit("changeClick");
        }
        this.dblClick = false;
      }, 300);
    },
    player() {
      if (this.play === false) {
        this.videoContext.seek(0);
        this.videoContext.play();
        this.play = true;
      }
    },
    pause() {
      if (this.play === true) {
        this.videoContext.pause();
        this.play = false;
      }
    },
    playThis() {
      if (this.play === false) {
        this.videoContext.play();
        this.play = true;
      }
    },
    //首个视频自动播放
    atuo() {
      if (this.index === 0) {
        this.autoplay = true;
      }
    }
  },
  created() {
    this.atuo();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.video.src,
    b: common_vendor.o((...args) => $options.click && $options.click(...args)),
    c: common_vendor.o(() => {
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniapp/video/components/videoPlay/videoPlay.vue"]]);
wx.createComponent(Component);
