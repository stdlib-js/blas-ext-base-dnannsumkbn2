"use strict";var x=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var j=x(function(P,_){
var R=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-special-abs/dist');function C(a,e,q,p,r,s,b){var n,t,f,y,m,i,u,v,c,d,k;if(n=0,i=b,a<=0)return r[i]=n,r[i+s]=0,r;if(m=p,q===0)return R(e[m])?(r[i]=n,r[i+s]=0,r):(r[i]=e[m]*a,r[i+s]=a,r);for(t=0,f=0,d=0,k=0;k<a;k++)u=e[m],R(u)===!1&&(v=n+u,l(n)>=l(u)?c=n-v+u:c=u-v+n,n=v,v=f+c,l(f)>=l(c)?y=f-v+c:y=c-v+f,f=v,t+=y,d+=1),m+=q;return r[i]=n+f+t,r[i+s]=d,r}_.exports=C
});var h=x(function(Q,g){
var E=require('@stdlib/strided-base-stride2offset/dist'),D=j();function F(a,e,q,p,r){var s,b;return s=E(a,q),b=E(2,r),D(a,e,q,s,p,r,b)}g.exports=F
});var A=x(function(S,z){
var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),H=j();G(w,"ndarray",H);z.exports=w
});var I=require("path").join,J=require('@stdlib/utils-try-require/dist'),K=require('@stdlib/assert-is-error/dist'),L=A(),o,B=J(I(__dirname,"./native.js"));K(B)?o=L:o=B;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
