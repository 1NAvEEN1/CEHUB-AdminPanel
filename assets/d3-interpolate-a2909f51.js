import{r as v,c as x}from"./d3-color-6502c434.js";const m=r=>()=>r;function A(r,n){return function(e){return r+e*n}}function N(r,n,e){return r=Math.pow(r,e),n=Math.pow(n,e)-r,e=1/e,function(o){return Math.pow(r+o*n,e)}}function M(r){return(r=+r)==1?w:function(n,e){return e-n?N(n,e,r):m(isNaN(n)?e:n)}}function w(r,n){var e=n-r;return e?A(r,e):m(isNaN(r)?n:r)}const y=function r(n){var e=M(n);function o(t,u){var i=e((t=v(t)).r,(u=v(u)).r),f=e(t.g,u.g),l=e(t.b,u.b),a=w(t.opacity,u.opacity);return function(c){return t.r=i(c),t.g=f(c),t.b=l(c),t.opacity=a(c),t+""}}return o.gamma=r,o}(1);function j(r,n){n||(n=[]);var e=r?Math.min(n.length,r.length):0,o=n.slice(),t;return function(u){for(t=0;t<e;++t)o[t]=r[t]*(1-u)+n[t]*u;return o}}function D(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function I(r,n){var e=n?n.length:0,o=r?Math.min(e,r.length):0,t=new Array(o),u=new Array(e),i;for(i=0;i<o;++i)t[i]=d(r[i],n[i]);for(;i<e;++i)u[i]=n[i];return function(f){for(i=0;i<o;++i)u[i]=t[i](f);return u}}function B(r,n){var e=new Date;return r=+r,n=+n,function(o){return e.setTime(r*(1-o)+n*o),e}}function g(r,n){return r=+r,n=+n,function(e){return r*(1-e)+n*e}}function E(r,n){var e={},o={},t;(r===null||typeof r!="object")&&(r={}),(n===null||typeof n!="object")&&(n={});for(t in n)t in r?e[t]=d(r[t],n[t]):o[t]=n[t];return function(u){for(t in e)o[t]=e[t](u);return o}}var p=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,s=new RegExp(p.source,"g");function R(r){return function(){return r}}function V(r){return function(n){return r(n)+""}}function k(r,n){var e=p.lastIndex=s.lastIndex=0,o,t,u,i=-1,f=[],l=[];for(r=r+"",n=n+"";(o=p.exec(r))&&(t=s.exec(n));)(u=t.index)>e&&(u=n.slice(e,u),f[i]?f[i]+=u:f[++i]=u),(o=o[0])===(t=t[0])?f[i]?f[i]+=t:f[++i]=t:(f[++i]=null,l.push({i,x:g(o,t)})),e=s.lastIndex;return e<n.length&&(u=n.slice(e),f[i]?f[i]+=u:f[++i]=u),f.length<2?l[0]?V(l[0].x):R(n):(n=l.length,function(a){for(var c=0,h;c<n;++c)f[(h=l[c]).i]=h.x(a);return f.join("")})}function d(r,n){var e=typeof n,o;return n==null||e==="boolean"?m(n):(e==="number"?g:e==="string"?(o=x(n))?(n=o,y):k:n instanceof x?y:n instanceof Date?B:D(n)?j:Array.isArray(n)?I:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?E:g)(r,n)}function z(r,n){return r=+r,n=+n,function(e){return Math.round(r*(1-e)+n*e)}}export{d as a,z as b,g as i};
