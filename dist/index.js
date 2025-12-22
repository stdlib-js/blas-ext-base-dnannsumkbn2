"use strict";var g=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var x=g(function(Q,d){
var k=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist');function D(a,n,c,y,r,m,C){var v,j,R,u,_,f,i,e,q,l,b,s;if(i=C,a<=0)return r[i]=0,r[i+m]=0,r;if(f=y,c===0)return k(n[f])?(r[i]=0,r[i+m]=0,r):(r[i]=n[f]*a,r[i+m]=a,r);for(s=0;s<a&&(e=n[f],k(e)!==!1);s++)f+=c;if(s===a)return r[i]=0,r[i+m]=0,r;if(b=1,v=e,f+=c,s+=1,v===0)for(;s<a;s++){if(e=n[f],k(e)===!1){if(e!==0){R=!0;break}v+=e,b+=1}f+=c}else R=!0;for(j=0,u=0;s<a;s++)e=n[f],k(e)===!1&&(q=v+e,p(v)>=p(e)?l=v-q+e:l=e-q+v,v=q,q=u+l,p(u)>=p(l)?_=u-q+l:_=l-q+u,u=q,j+=_,b+=1),f+=c;return r[i]=R?v+u+j:v,r[i+m]=b,r}d.exports=D
});var t=g(function(S,o){
var h=require('@stdlib/strided-base-stride2offset/dist'),F=x();function G(a,n,c,y,r){return F(a,n,c,h(a,c),y,r,h(2,r))}o.exports=G
});var A=g(function(T,z){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=t(),I=x();H(w,"ndarray",I);z.exports=w
});var J=require("path").join,K=require('@stdlib/utils-try-require/dist'),L=require('@stdlib/assert-is-error/dist'),M=A(),E,B=K(J(__dirname,"./native.js"));L(B)?E=M:E=B;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
