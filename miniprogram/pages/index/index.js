// index.js
// const app = getApp()
Page({
  data: {
    loading: false
  },
  // 点击后显示loading标记
  toggleButtonState: function(){
    this.setData({
      loading: true
    });
  }
});