Page({
  data: {
    email: 'szq.worker+xdaglook@gmail.com',
    qq: 'xxxxxxxxxxx',
  },
  copy(e) {
    let dataset = (e.target || {}).dataset || {}
    let title = dataset.title || ''
    let content = dataset.content || ''
    wx.setClipboardData({
      data: content,
      success () {
        wx.showToast({
          title: `已复制${title}`,
        })
      },
    })
  },
})