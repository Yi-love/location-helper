'use strict';

/**
 * Jin
 * [LocationHelper url辅助类]
 * @param {[type]} url [description]
 *
 * eq:
 *    var locationHelper = new LocationHelper();
 */
function LocationHelper( url ){
  var location =  document.createElement("a");
      location.href =  url ? url : window.location.href;

  this.url      = location.href.split('?')[0];
  this.hash     = location.hash;
  this.host     = location.host;
  this.hostname = location.hostname;
  this.href     = location.href;
  this.origin   = location.origin;
  this.pathname = location.pathname;
  this.port     = location.port;
  this.protocol = location.protocol;
  this.search   = location.search;
  this.source   = location;
  this.params   = {};
  this.setParams();
}
/**
 * [mergeParams 合并参数]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
LocationHelper.prototype.mergeParams = function(params) {
    if ( ({}).toString.call(params) !== '[object Object]' ) return this;

    for (var name in params ) {
      if ( params.hasOwnProperty(name) ) {
        this.params[name] = params[name];
      }
    }
    return this;
};
/**
 * [setParams 设置参数]
 */
LocationHelper.prototype.setParams = function(params) {
  if ( ({}).toString.call(params) === '[object Object]' ) return this.mergeParams(params);

  var arr = [] , paramsArr = typeof params === 'string' ? params : this.search.replace(/^\?/,'').split('&');

  for ( var i = 0; i < paramsArr.length; i++ ) {
    if ( !paramsArr[i] ) continue;
    arr = paramsArr[i].split('=');

    if ( !arr[0]) continue;
    this.params[arr[0]] = arr[1];
  }
  return this;
};
/**
 * [getParams 获取参数]
 * @return {[type]} [description]
 */
LocationHelper.prototype.getParams = function(name) {
  return name ? this.params[name] : this.params;
};
/**
 * [removeParams 删除属性]
 * @param  {[type]} params [description]
 * @return {[type]}       [description]
 */
LocationHelper.prototype.removeParams = function(params){
  if ( !params ){
    this.params = {};
    return this;
  }
  if (typeof params === 'string') params = [params];
  if ( ({}).toString.call(params) !== "[object Array]" ) return this;
  for ( var i = 0 ; i < params.length ; i++) {
    if ( this.params.hasOwnProperty(params[i]) ) {
      delete this.params[params[i]];
    }
  }
  return this;
};
/**
 * [serialize 序列化]
 * @param  {[type]} traditional [true : 传统的会添加到url后面，类似与get请求]
 * @return {[type]}             [description]
 */
LocationHelper.prototype.serialize = function(traditional) {
  if ( traditional ) {
    var result = [] , params = this.getParams();
    for (var name in params ) {
      if ( params.hasOwnProperty(name) ) {
        result.push(name+'='+params[name]);
      }
    }
    return this.url + (result.length > 0 ? '?'+ result.join('&') : '');
  }
  return {url : this.url , params : this.getParams()};
};

module.exports = LocationHelper;
