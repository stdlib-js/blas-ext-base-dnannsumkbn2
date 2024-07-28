// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function n(r,n,s,i,a){var d,m,o,f,l,u,p,j,h,v,b;if(l=s<0?(1-r)*s:0,u=a<0?-a:0,d=0,r<=0)return i[u]=d,i[u+a]=0,i;if(1===r||0===s)return e(n[l])?(i[u]=d,i[u+a]=0,i):(i[u]=n[l],i[u+a]=1,i);for(m=0,o=0,v=0,b=0;b<r;b++)p=n[l],!1===e(p)&&(j=d+p,h=t(d)>=t(p)?d-j+p:p-j+d,d=j,j=o+h,f=t(o)>=t(h)?o-j+h:h-j+o,o=j,m+=f,v+=1),l+=s;return i[u]=d+o+m,i[u+a]=v,i}function s(r,n,s,i,a,d,m){var o,f,l,u,p,j,h,v,b,c,x;if(p=i,j=m,o=0,r<=0)return a[j]=o,a[j+d]=0,a;if(1===r||0===s)return e(n[p])?(a[j]=o,a[j+d]=0,a):(a[j]=n[p],a[j+d]=1,a);for(f=0,l=0,c=0,x=0;x<r;x++)h=n[p],!1===e(h)&&(v=o+h,b=t(o)>=t(h)?o-v+h:h-v+o,o=v,v=l+b,u=t(l)>=t(b)?l-v+b:b-v+l,l=v,f+=u,c+=1),p+=s;return a[j]=o+l+f,a[j+d]=c,a}r(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
