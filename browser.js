// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,o=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol:void 0,i="function"==typeof r?r.toStringTag:"",l=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,l,f,a;if(null==t)return e.call(t);r=t[i],a=i,n=null!=(f=t)&&o.call(f,a);try{t[i]=void 0}catch(n){return e.call(t)}return l=e.call(t),n?t[i]=r:delete t[i],l}:function(t){return e.call(t)},f="function"==typeof Uint8ClampedArray,a="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,y="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;return t=function(){var t,n,e;if("function"!=typeof a)return!1;try{n=new a([-1,0,1,3.14,4.99,255,256]),e=n,t=(f&&e instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===l(e))&&0===n[0]&&0===n[1]&&1===n[2]&&3===n[3]&&5===n[4]&&255===n[5]&&255===n[6]}catch(n){t=!1}return t}()?y:function(){throw new Error(function(){var t,n=arguments,e="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)e+="&arg[]="+encodeURIComponent(n[t]);return e}("02V00,Cw"))},t},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Uint8ClampedArray=n();
//# sourceMappingURL=browser.js.map
