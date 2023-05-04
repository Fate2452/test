"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "videoLeft",
  props: {
    video: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const {
      video
    } = common_vendor.toRefs(props);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(video).username),
        b: common_vendor.t(common_vendor.unref(video).msg)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/uniapp/video/components/videoLeft/videoLeft.vue"]]);
wx.createComponent(Component);
