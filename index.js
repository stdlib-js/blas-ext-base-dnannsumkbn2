// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;function f(e){return e!=e}function c(e){return Math.abs(e)}function _(e,t,r,n,o){var i,u,a,l,_,p,d,b,s,y,v;if(_=r<0?(1-e)*r:0,p=o<0?-o:0,i=0,e<=0)return n[p]=i,n[p+o]=0,n;if(1===e||0===r)return f(t[_])?(n[p]=i,n[p+o]=0,n):(n[p]=t[_],n[p+o]=1,n);for(u=0,a=0,y=0,v=0;v<e;v++)!1===f(d=t[_])&&(b=i+d,s=c(i)>=c(d)?i-b+d:d-b+i,i=b,b=a+s,l=c(a)>=c(s)?a-b+s:s-b+a,a=b,u+=l,y+=1),_+=r;return n[p]=i+a+u,n[p+o]=y,n}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(a.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&u&&u.call(e,t,r.set),e},e(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n,o,i,u){var a,l,_,p,d,b,s,y,v,m,j;if(d=n,b=u,a=0,e<=0)return o[b]=a,o[b+i]=0,o;if(1===e||0===r)return f(t[d])?(o[b]=a,o[b+i]=0,o):(o[b]=t[d],o[b+i]=1,o);for(l=0,_=0,m=0,j=0;j<e;j++)!1===f(s=t[d])&&(y=a+s,v=c(a)>=c(s)?a-y+s:s-y+a,a=y,y=_+v,p=c(_)>=c(v)?_-y+v:v-y+_,_=y,l+=p,m+=1),d+=r;return o[b]=a+_+l,o[b+i]=m,o}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dnannsumkbn2=t();
//# sourceMappingURL=index.js.map
