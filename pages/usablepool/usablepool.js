// pages/usablepool/usablepool.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowView:false,
    datalist:[]
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
    app.api.queryXdagPool({}, {
      success: function (data) {
        wx.hideLoading();
        var info = JSON.parse(data);
        let list = [];
        list = info.content.map(d => {
          let each = {
            address: null,
            name: null,
            pool: null,
            poollink: null,
          };

          each.address = d.address;
          each.name = d.name;
          each.pool = d.pool;
          each.poollink = d.poollink;
          return each;
        })

        self.setData({
          datalist:list
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