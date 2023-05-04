"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "videohead",
  setup(__props) {
    let clickIndex = common_vendor.ref(4);
    const clickRencai = () => {
      clickIndex.value = 1;
    };
    const clickGuzhu = () => {
      clickIndex.value = 2;
    };
    const clickHehuo = () => {
      clickIndex.value = 3;
    };
    const clickTuijian = () => {
      clickIndex.value = 4;
    };
    const clickGuanzhu = () => {
      clickIndex.value = 5;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(clickRencai),
        b: common_vendor.unref(clickIndex) === 1 ? 1 : "",
        c: common_vendor.o(clickGuzhu),
        d: common_vendor.unref(clickIndex) === 2 ? 1 : "",
        e: common_vendor.o(clickHehuo),
        f: common_vendor.unref(clickIndex) === 3 ? 1 : "",
        g: common_vendor.o(clickTuijian),
        h: common_vendor.unref(clickIndex) === 4 ? 1 : "",
        i: common_vendor.o(clickGuanzhu),
        j: common_vendor.unref(clickIndex) === 5 ? 1 : ""
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-befdcf75"], ["__file", "D:/uniapp/video/components/videohead/videohead.vue"]]);
wx.createComponent(Component);
