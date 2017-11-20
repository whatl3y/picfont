!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("util")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(0)),a=n(r(1)),i=n(r(2)),s=n(r(9)),f=i.default.promisify(s.default);t.default={generate:function(){var e=(0,a.default)(u.default.mark(function e(t){var r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=t instanceof Array?t:[t],r=a.dest||"files/",n=a.writeFiles||!1,a=Object.assign(a,{dest:r},{files:t},{writeFiles:n}),e.next=6,f(a);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},function(e,t){e.exports=require("fs")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(r(0)),a=n(r(1)),i=n(r(4)),s=n(r(12)),f=n(r(2)),o=n(r(13)),c=n(r(14)),p=f.default.promisify(i.default.access),l=f.default.promisify(i.default.mkdir),d=f.default.promisify(o.default),m=f.default.promisify(s.default.exec);t.default={tmpdir:"PICFONT_TMP",tmpdirCreated:!1,potrace:function(){var e=(0,a.default)(u.default.mark(function e(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"svg";return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=n||t.replace(".","_")+".svg",e.next=3,m("potrace -b "+a+" -o "+n+" "+t);case 3:if(!(r=e.sent).stderr){e.next=6;break}throw r.stderr;case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),mkbitmap:function(){var e=(0,a.default)(u.default.mark(function e(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=a||this.getFileName(t),e.next=3,m("mkbitmap -f "+n+" -s 2 -t 0.48 -o "+a+" "+t);case 3:if(!(r=e.sent).stderr){e.next=6;break}throw r.stderr;case 6:return e.abrupt("return",a);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),makeBitmapFromOtherType:function(){var e=(0,a.default)(u.default.mark(function e(t){var r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=n||this.getFileName(t+".bmp"),e.next=3,c.default.read(t);case 3:return r=e.sent,e.next=6,r.write(n);case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),tmpDir:function(){var e=(0,a.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=process.env.TMPDIR||process.env.TMP)){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,this.doesPathExist(this.tmpdir);case 5:if(e.sent){e.next=8;break}return e.next=8,l(this.tmpdir);case 8:return this.tmpdirCreated=!0,e.abrupt("return",this.tmpdir);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),deleteTmpDir:function(){var e=(0,a.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.tmpdirCreated){e.next=3;break}return e.next=3,d(this.tmpdir);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),doesPathExist:function(){var e=(0,a.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t);case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),getFileName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),r=e.lastIndexOf(".");return e.substring(0,r).replace(".","_")+"_"+t+e.substring(r)}}},function(e,t,r){r(7),e.exports=r(8)},function(e,t){e.exports=require("babel-polyfill")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Potrace=t.PicturesToFont=t.FontGenerator=void 0;var u=n(r(3)),a=n(r(10)),i=n(r(5));t.FontGenerator=u.default,t.PicturesToFont=a.default,t.Potrace=i.default},function(e,t){e.exports=require("webfonts-generator")},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getVectorImages=t.getOptimizedBitmaps=t.getInitBitmaps=void 0;var u=n(r(0)),a=n(r(1)),i=t.getInitBitmaps=function(){var e=(0,a.default)(u.default.mark(function e(t){var r,n=this;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=t instanceof Array?t:[t],e.next=3,d.default.tmpDir();case 3:return r=e.sent,e.next=6,Promise.all(t.map(function(){var e=(0,a.default)(u.default.mark(function e(t){var a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof Buffer)){e.next=7;break}return a=o.default.join(r,d.default.getFileName("temp.img")),e.next=4,m(a,t);case 4:return e.next=6,d.default.makeBitmapFromOtherType(a);case 6:return e.abrupt("return",e.sent);case 7:if(!/.*\.bmp$/.test(t)){e.next=9;break}return e.abrupt("return",t);case 9:return e.next=11,d.default.makeBitmapFromOtherType(t,o.default.join(r,o.default.basename(t)+".bmp"));case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}},e,n)}));return function(t){return e.apply(this,arguments)}}()));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),s=t.getOptimizedBitmaps=function(){var e=(0,a.default)(u.default.mark(function e(t){var r=this;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=(0,a.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.default.mkbitmap(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f=t.getVectorImages=function(){var e=(0,a.default)(u.default.mark(function e(t){var r=this;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=(0,a.default)(u.default.mark(function e(t){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.default.potrace(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}()));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),o=n(r(11)),c=n(r(4)),p=n(r(2)),l=n(r(3)),d=n(r(5)),m=p.default.promisify(c.default.writeFile);t.default=function(){var e=(0,a.default)(u.default.mark(function e(t){var r,n,a,o,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:return r=e.sent,e.next=5,s(r);case 5:return n=e.sent,e.next=8,f(n);case 8:return a=e.sent,e.next=11,l.default.generate(a,c);case 11:return o=e.sent,e.next=14,d.default.deleteTmpDir();case 14:return e.abrupt("return",o);case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("rimraf")},function(e,t){e.exports=require("jimp")}]));