"use strict";var k=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var j=k(function(P,_){
var R=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-abs/dist');function C(a,e,c,l,r,m,B){var n,p,s,t,q,i,f,v,u,y,d;if(n=0,i=B,a<=0)return r[i]=n,r[i+m]=0,r;if(q=l,c===0)return R(e[q])?(r[i]=n,r[i+m]=0,r):(r[i]=e[q]*a,r[i+m]=a,r);for(p=0,s=0,y=0,d=0;d<a;d++)f=e[q],R(f)===!1&&(v=n+f,b(n)>=b(f)?u=n-v+f:u=f-v+n,n=v,v=s+u,b(s)>=b(u)?t=s-v+u:t=u-v+s,s=v,p+=t,y+=1),q+=c;return r[i]=n+s+p,r[i+m]=y,r}_.exports=C
});var g=k(function(Q,E){
var o=require('@stdlib/strided-base-stride2offset/dist'),D=j();function F(a,e,c,l,r){return D(a,e,c,o(a,c),l,r,o(2,r))}E.exports=F
});var z=k(function(S,w){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=g(),H=j();G(h,"ndarray",H);w.exports=h
});var I=require("path").join,J=require('@stdlib/utils-try-require/dist'),K=require('@stdlib/assert-is-error/dist'),L=z(),x,A=J(I(__dirname,"./native.js"));K(A)?x=L:x=A;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
