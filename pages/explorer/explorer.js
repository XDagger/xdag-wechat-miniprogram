// pages/explorer/explorer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:"",
    state:"",
    Difficulty:"",
    Balance:"",
    Hash:"",
    isShowView:false,
    blockString:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  bindinputblock:function (e) {
    this.setData({
      blockString: e.detail.value
    })
  }
  ,
  suo: function (e) {
    var self = this;
    
    if (this.data.blockString == "") {
      wx.showToast({
        title: "请输入查询的信息",
        icon: "none",
        duration: 2000
      })
      return
    }
    wx.showLoading({
      title: "请稍候",
      mask: true,
    });
    wx.request({
      url: 'http://127.0.0.1:8080/api/xdag/queryXdagblock/', //仅为示例，并非真实的接口地址
      data: {
        block: self.data.blockString
      },
      header: {
          'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        wx.hideLoading();
        if (res.data.errCode == -1){
          wx.showToast({
            title: "查询失败",
            icon: "none",
            duration: 2000
          })
          return
        }else if (res.data.errCode == 0){
          var info = JSON.parse(res.data.data);
          console.log(info);
          self.data.time=info.Time;
          self.data.state= info.State;
          self.data.Difficulty=info.Difficulty;
          self.data.Balance=info.Balance;
          self.data.Hash=info.Hash;
          self.setData({
            isShowView:true,
            time:info.Time,
            state:info.State,
            Difficulty:info.Difficulty,
            Balance:info.Balance,
            Hash:info.Hash,
          })
        }
      }, fail: function (data) {
        wx.hideLoading();
        console.log("data",data);
      }
    })
  }
})