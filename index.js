(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LocationHelper"] = factory();
	else
		root["LocationHelper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LocationHelper = function () {
	    function LocationHelper(url) {
	        _classCallCheck(this, LocationHelper);

	        var location = document.createElement("a");
	        location.href = url ? url : window.location.href;
	        if (!location.origin) {
	            location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
	        }
	        this.url = location.href.split('?')[0];
	        this.hash = location.hash;
	        this.host = location.host;
	        this.hostname = location.hostname;
	        this.href = location.href;
	        this.origin = location.origin;
	        this.pathname = location.pathname;
	        this.port = location.port;
	        this.protocol = location.protocol;
	        this.search = location.search;
	        this.source = location;
	        this.params = {};
	        this.setParams();
	    }

	    LocationHelper.prototype.mergeParams = function mergeParams(params) {
	        if ({}.toString.call(params) !== '[object Object]') return this;

	        for (var name in params) {
	            if (params.hasOwnProperty(name)) {
	                this.params[name] = params[name];
	            }
	        }
	        return this;
	    };

	    LocationHelper.prototype.setParams = function setParams(params) {
	        if ({}.toString.call(params) === '[object Object]') return this.mergeParams(params);

	        var arr = [],
	            paramsArr = typeof params === 'string' ? params : this.search.replace(/^\?/, '').split('&');

	        for (var i = 0; i < paramsArr.length; i++) {
	            if (!paramsArr[i]) continue;
	            arr = paramsArr[i].split('=');

	            if (!arr[0]) continue;
	            this.params[arr[0]] = arr[1];
	        }
	        return this;
	    };

	    LocationHelper.prototype.getParams = function getParams(name) {
	        return name ? this.params[name] : this.params;
	    };

	    LocationHelper.prototype.removeParams = function removeParams(params) {
	        if (!params) {
	            this.params = {};
	            return this;
	        }
	        if (typeof params === 'string') params = [params];
	        if ({}.toString.call(params) !== "[object Array]") return this;
	        for (var i = 0; i < params.length; i++) {
	            if (this.params.hasOwnProperty(params[i])) {
	                delete this.params[params[i]];
	            }
	        }
	        return this;
	    };

	    LocationHelper.prototype.serialize = function serialize(traditional) {
	        if (traditional) {
	            var result = [],
	                params = this.getParams();
	            for (var name in params) {
	                if (params.hasOwnProperty(name)) {
	                    result.push(name + '=' + params[name]);
	                }
	            }
	            return this.origin + this.pathname + (result.length > 0 ? '?' + result.join('&') : '');
	        }
	        return { url: this.url, params: this.getParams() };
	    };

	    return LocationHelper;
	}();

	exports.default = LocationHelper;
	module.exports = exports["default"];

/***/ })
/******/ ])
});
;