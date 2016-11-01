# LocationHelper
Location Helper

## logs

```
  v1.0.1  2016-11-01   npm publish
```

## exports

```js
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports["LocationHelper"] = factory();
  else
    root["LocationHelper"] = factory();
```

## import

```js
  import LocationHelper from 'location-helper';
  //or
  var LocationHelper = require('location-helper');
  //or
  <script src="./index.js" ></script>
  var locationHelper = new LocationHelper();
```

## params

```js
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
```

## intrface

```js
  mergeParams(params)
  setParams(params)
  getParams(name)
  removeParams(params)
  serialize(traditional)
```

## usage

```js
  var locationHelper = new LocationHelper('/a');

  locationHelper.mergeParams({page:1}).serialize(true);  //a?page=1
```

## test

```
  webpack
```