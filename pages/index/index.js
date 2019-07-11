//index.js
//获取应用实例

Page({
  data: {
  },
  onLoad: function () {

  },
  getUserInfo: function (e) {

  },
  clicknetwok: function () {
    wx.navigateTo({
      url: `../network/network`
    })
  },
  clickexplorer: function () {
    wx.navigateTo({
      url: `../explorer/explorer`
    })
  },
  clickpool: function () {
    wx.navigateTo({
      url: `../usablepool/usablepool`
    })
  },
})