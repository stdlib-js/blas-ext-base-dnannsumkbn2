"use strict";var j=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var t=j(function(P,_){
var R=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-abs/dist');function B(a,e,u,p,r,s,m){var n,y,f,k,l,i,c,v,q,x,d;if(n=0,i=m,a<=0)return r[i]=n,r[i+s]=0,r;if(l=p,u===0)return R(e[l])?(r[i]=n,r[i+s]=0,r):(r[i]=e[l]*a,r[i+s]=a,r);for(y=0,f=0,x=0,d=0;d<a;d++)c=e[l],R(c)===!1&&(v=n+c,b(n)>=b(c)?q=n-v+c:q=c-v+n,n=v,v=f+q,b(f)>=b(q)?k=f-v+q:k=q-v+f,f=v,y+=k,x+=1),l+=u;return r[i]=n+f+y,r[i+s]=x,r}_.exports=B
});var g=j(function(Q,E){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=t();function F(a,e,u,p,r){var s,m;return s=C(a,u),r<0?m=-r:m=0,D(a,e,u,s,p,r,m)}E.exports=F
});var z=j(function(S,w){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=g(),H=t();G(h,"ndarray",H);w.exports=h
});var I=require("path").join,J=require('@stdlib/utils-try-require/dist'),K=require('@stdlib/assert-is-error/dist'),L=z(),o,A=J(I(__dirname,"./native.js"));K(A)?o=L:o=A;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
