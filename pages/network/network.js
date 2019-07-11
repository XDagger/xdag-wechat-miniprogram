// pages/netwok/netwok.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Hosts:"",
    Hashrate:"",
    Blocks:"",
    MainBlocks:"",
    ChainDifficulty:"",
    XDAGSupply:"",
    isShowView:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.showLoading({
      title: "请稍候",
      mask: true,
    });
    app.api.queryXdagNetwork({}, {
      success: function (data) {
        wx.hideLoading();
        console.log(data);
        var info = JSON.parse(data);
        console.log(info);

        self.data.Hosts = info.Hosts;
        self.data.Hashrate = info.Hashrate;
        self.data.Blocks = info.Blocks;
        self.data.MainBlocks = info.MainBlocks;
        self.data.ChainDifficulty = info.ChainDifficulty;
        self.data.XDAGSupply = info.XDAGSupply;
        self.setData({
          isShowView:true,
          Hosts:info.Hosts,
          Hashrate:info.Hashrate,
          Blocks:info.Blocks,
          MainBlocks:info.MainBlocks,
          ChainDifficulty:info.ChainDifficulty,
          XDAGSupply:info.XDAGSupply,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})