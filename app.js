var api = require('js/api.js')
var util = require('utils/util.js')
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  api: api,
  util: util,
  globalData: {
  }
})