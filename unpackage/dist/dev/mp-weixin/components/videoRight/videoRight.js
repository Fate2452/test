"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "videoright",
  props: ["video"],
  data() {
    return {
      color: ""
    };
  },
  methods: {
    //点击爱心变红（即点赞）或者变白（取消点赞）
    changeColor() {
      this.color = this.color === "" ? "color:red;" : "";
    },
    //双击点赞
    change() {
      this.color = "color:red;";
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.video.href,
    b: common_vendor.s($data.color),
    c: common_vendor.o((...args) => $options.changeColor && $options.changeColor(...args)),
    d: common_vendor.t($props.video.like),
    e: common_vendor.t($props.video.like_n),
    f: common_vendor.t($props.video.pinlun.length),
    g: common_vendor.t($props.video.sms_n)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniapp/video/components/videoRight/videoRight.vue"]]);
wx.createComponent(Component);
