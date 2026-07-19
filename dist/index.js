"use strict";var g=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var x=g(function(Q,d){
var k=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist');function D(n,e,v,y,r,m,C){var f,j,R,u,_,s,i,a,q,l,b,c;if(i=C,n<=0)return r[i]=0,r[i+m]=0,r;if(s=y,v===0)return k(e[s])?(r[i]=0,r[i+m]=0,r):(r[i]=e[s]*n,r[i+m]=n,r);for(c=0;c<n&&(a=e[s],k(a)!==!1);c++)s+=v;if(c===n)return r[i]=0,r[i+m]=0,r;if(b=1,f=a,s+=v,c+=1,f===0)for(;c<n;c++){if(a=e[s],k(a)===!1){if(a!==0){R=!0;break}f+=a,b+=1}s+=v}else R=!0;for(j=0,u=0;c<n;c++)a=e[s],k(a)===!1&&(q=f+a,p(f)>=p(a)?l=f-q+a:l=a-q+f,f=q,q=u+l,p(u)>=p(l)?_=u-q+l:_=l-q+u,u=q,j+=_,b+=1),s+=v;return r[i]=R?f+u+j:f,r[i+m]=b,r}d.exports=D
});var t=g(function(S,o){
var h=require('@stdlib/strided-base-stride2offset/dist'),F=x();function G(n,e,v,y,r){return F(n,e,v,h(n,v),y,r,h(2,r))}o.exports=G
});var A=g(function(T,z){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=t(),I=x();H(w,"ndarray",I);z.exports=w
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=A(),E,B=K(J(__dirname,"./native.js"));L(B)?E=M:E=B;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
