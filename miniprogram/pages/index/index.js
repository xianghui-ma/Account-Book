// index.js
// const app = getApp()
Page({
  data: {
    loading: false
  },
  // 点击后显示loading标记，并跳转页面
  toggleButtonState: function(){
    this.setData({
      loading: true
    });
    wx.navigateTo({
      url: "/pages/accountlist/accountlist"
    })
  }
});