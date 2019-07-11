// 使用微信提供的接口实现
// ref: https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html#wxrequestobject
// url中不能带有端口

function request(url, data, method, success, fail) {

  var querydata = []

  if (data && method == 'GET') {
    data = undefined;
  }

  // if (waiting && API.showWaiting) {
  //   API.showWaiting();
  // }

  var callback_success = function (response) { //{data, statusCode, header}
    
    var data = response.data;
    console.log(typeof(data),data);

    console.log("data", data.data);
    console.log("type", typeof(data.data));
    if (data.errCode == 0) {
      var str = response.header["Set-Cookie"];
      if(str != undefined){
        var arr = str.split(";");
        wx.setStorageSync("sessionid", arr[0])
        console.log(wx.getStorageSync("sessionid"));
      }

      // 处理成功返回数据
      success && success.call(null, data.data);
    } else {
      // 处理失败信息
      fail && fail.call(null, data); // { errCode, errMsg }
    }
  }

  var callback_fail = function() {
    var error = {
      errCode: -1,
      errMsg: "IOERROR",
    };

    fail && fail.call(null, error);
  }

  var callback_complete = function() {
    // if (waiting && API.hideWaiting) {
    //   API.hideWaiting();
    // }
  }

  var req_header = {
    'content-type': 'text/html; charset=utf-8',
    'cookie': wx.getStorageSync("sessionid")
  };

  var req_data = {
    url: url,
    method: method,
    header: req_header,
    success: callback_success,
    fail: callback_fail,
    complete: callback_complete,
  };

  if (data) {
    req_data.data = data;
  }

  wx.request(req_data);
}

module.exports = {
  request: request,
}
