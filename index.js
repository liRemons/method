module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=r(1);e.exports=n},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports={dateFormat:function(e,t){function r(e){return e<10?"0"+e:e}var n=void 0,o=(n=e&&"number"==typeof e?new Date(e):e&&"string"==typeof e?new Date(parseInt(e)):new Date).getFullYear(),u=r(n.getMonth()+1),i=r(n.getDate()),c=r(n.getHours()),a=r(n.getMinutes()),d=r(n.getSeconds()),l=o+"-"+u+"-"+i+" "+c+":"+a+":"+d;return"yyyy/MM/dd HH:mm:ss"==t?l=o+"/"+u+"/"+i+" "+c+":"+a+":"+d:"yyyy/MM/dd"==t?l=o+"/"+u+"/"+i:"yyyy-MM-dd"==t?l=o+"-"+u+"-"+i:"HH:mm:ss"==t?l=c+":"+a+":"+d:"yyyy年MM月dd日 HH时mm分ss秒"==t&&(l=o+"年"+u+"月"+i+"日 "+c+"时"+a+"分"+d+"秒"),l},deepClone:function e(t){var r=function(e){return Object.prototype.toString.call(e).slice(8,-1)};if(["Null","String","Boolean","Number","Undefined","Function"].includes(r(t)))return t;if("RegExp"===r(t))return new RegExp(t);if("Date"===r(t))return new Date(t);var n="Array"===r(t)?[]:{};for(var o in t)n[o]=e(t[o]);return n},removeArrRepeat:function(e,t){if(e.length&&n("object"!==e[0]))return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(new Set(e)));var r={};return e=e.reduce((function(e,n){return!r[n[t]]&&(r[n[t]]=e.push(n)),e}),[])},arrGroup:function(e,t){if("number"==typeof t){if(e instanceof Array){for(var r=[],o=0,u=e.length;o<u;o+=t)r.push(e.slice(o,o+t));return r}var i=void 0===e?"undefined":n(e);return console.error("The expected array, get"+i),e}console.error("The second parameter should be a number")},IsPC:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],r=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){r=!1;break}return r},SUM:function(e,t){var r=void 0;return e.forEach((function(t,n){"number"!=typeof t&&"string"!=typeof t||(r="number",e[n]=Number(t))})),"number"===r?e.reduce((function(e,t){return e+t})):e.reduce((function(e,r){return e+r[t]}),0)},download:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=document.createElement("a");if(n.setAttribute("download",r),n.setAttribute("href",e),navigator.msSaveBlob){var o=Blob([e],{type:t});return navigator.msSaveBlob(o,r)}n.click()},watchScroll:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;t||(t=1e3);var n=function(e,t){var r=null;return function(){r&&clearTimeout(r),r=setTimeout(e,t)}};r.onscroll=n(e,t)},copy:function(e){var t=document.createElement("input"),r=document.querySelector("body");t.setAttribute("value",e),t.setAttribute("style","z-index:-1"),r.appendChild(t),t.select(),document.execCommand("copy"),r.removeChild(t)},viewImg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;if("IMG"===e.target.nodeName&&e.target.currentSrc){var t=document.createElement("div"),r=document.createElement("img");t.setAttribute("style","position: fixed;\n      z-index: 2001;\n      display: flex;\n      justify-content: space-around;\n      align-items: center;\n      width: 100%;\n      background: rgb(0 0 0 / 33%);\n      height: 100%;\n      top: 0;"),t.setAttribute("id","remons-view-box"),r.setAttribute("src",e.target.currentSrc),r.setAttribute("style","max-height: 100%; max-weight: 100%"),r.setAttribute("id","remons-view-img"),document.body.appendChild(t),document.querySelector("#remons-view-box").appendChild(r);var n=document.querySelector("#remons-view-box");n&&n.addEventListener("click",(function(){document.body.removeChild(n)}))}}}}]);