
var http = require('./http/http.js');

var SERVER_HOST = 'http://127.0.0.1:8080';

/** 向api发送请求 */
function api_request(api, data, req_callback) {
  var url = SERVER_HOST + api;
  req_callback = req_callback || {};
  http.request(url, data, 'GET', req_callback.success, req_callback.fail);
}

/////////////////////////////////////////////////////////////////////////

// 在这里添加更多的API接口

var API = {};
/////////////////////////////////////////////////////////////////////////

API.queryXdagNetwork = function(data, callback) {
  api_request('/api/xdag/queryXdagNetwork', data, callback);
}

API.queryXdagPool = function(data, callback) {
  api_request('/api/xdag/queryXdagPool', data, callback);
}

/** 导出 */
module.exports = API;
