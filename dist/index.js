"use strict";var _=function(m,c){return function(){return c||m((c={exports:{}}).exports,c),c.exports}};var w=_(function(T,h){
var g=require('@stdlib/math-base-assert-is-nan/dist'),j=require('@stdlib/math-base-special-abs/dist');function H(m,c,p,n,r){var v,y,e,k,i,s,q,a,f,l,b;if(p<0?i=(1-m)*p:i=0,r<0?s=-r:s=0,v=0,m<=0)return n[s]=v,n[s+r]=0,n;if(m===1||p===0)return g(c[i])?(n[s]=v,n[s+r]=0,n):(n[s]=c[i],n[s+r]=1,n);for(y=0,e=0,l=0,b=0;b<m;b++)q=c[i],g(q)===!1&&(a=v+q,j(v)>=j(q)?f=v-a+q:f=q-a+v,v=a,a=e+f,j(e)>=j(f)?k=e-a+f:k=f-a+e,e=a,y+=k,l+=1),i+=p;return n[s]=v+e+y,n[s+r]=l,n}h.exports=H
});var B=_(function(U,A){
var z=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-abs/dist');function I(m,c,p,n,r,v,y){var e,k,i,s,q,a,f,l,b,x,R;if(q=n,a=y,e=0,m<=0)return r[a]=e,r[a+v]=0,r;if(m===1||p===0)return z(c[q])?(r[a]=e,r[a+v]=0,r):(r[a]=c[q],r[a+v]=1,r);for(k=0,i=0,x=0,R=0;R<m;R++)f=c[q],z(f)===!1&&(l=e+f,u(e)>=u(f)?b=e-l+f:b=f-l+e,e=l,l=i+b,u(i)>=u(b)?s=i-l+b:s=b-l+i,i=l,k+=s,x+=1),q+=p;return r[a]=e+i+k,r[a+v]=x,r}A.exports=I
});var F=_(function(V,D){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=w(),K=B();J(C,"ndarray",K);D.exports=C
});var L=require("path").join,M=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=F(),E,G=M(L(__dirname,"./native.js"));P(G)?E=Q:E=G;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
