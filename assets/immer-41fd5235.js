function P(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function D(t){return!!t&&!!t[v]}function R(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===gt}(t)||Array.isArray(t)||!!t[it]||!!(!((e=t.constructor)===null||e===void 0)&&e[it])||G(t)||H(t))}function k(t,e,r){r===void 0&&(r=!1),_(t)===0?(r?Object.keys:E)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,o){return e(o,n,t)})}function _(t){var e=t[v];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:G(t)?2:H(t)?3:0}function x(t,e){return _(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function st(t,e){return _(t)===2?t.get(e):t[e]}function ut(t,e,r){var n=_(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function ft(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function G(t){return dt&&t instanceof Map}function H(t){return bt&&t instanceof Set}function S(t){return t.o||t.t}function L(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=ct(t);delete e[v];for(var r=E(e),n=0;n<r.length;n++){var o=r[n],i=e[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function Q(t,e){return e===void 0&&(e=!1),T(t)||D(t)||!R(t)||(_(t)>1&&(t.set=t.add=t.clear=t.delete=vt),Object.freeze(t),e&&k(t,function(r,n){return Q(n,!0)},!0)),t}function vt(){P(2)}function T(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function m(t){var e=B[t];return e||P(18,t),e}function pt(t,e){B[t]||(B[t]=e)}function J(){return N}function W(t,e){e&&(m("Patches"),t.u=[],t.s=[],t.v=e)}function M(t){X(t),t.p.forEach(yt),t.p=null}function X(t){t===N&&(N=t.l)}function Y(t){return N={p:[],l:N,h:t,m:!0,_:0}}function yt(t){var e=t[v];e.i===0||e.i===1?e.j():e.g=!0}function U(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||m("ES5").S(e,t,n),n?(r[v].P&&(M(e),P(4)),R(t)&&(t=z(e,t),e.l||K(e,t)),e.u&&m("Patches").M(r[v].t,t,e.u,e.s)):t=z(e,r,[]),M(e),e.u&&e.v(e.u,e.s),t!==at?t:void 0}function z(t,e,r){if(T(e))return e;var n=e[v];if(!n)return k(e,function(f,a){return tt(t,n,e,f,a,r)},!0),e;if(n.A!==t)return e;if(!n.P)return K(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=L(n.k):n.o,i=o,u=!1;n.i===3&&(i=new Set(o),o.clear(),u=!0),k(i,function(f,a){return tt(t,n,o,f,a,r,u)}),K(t,o,!1),r&&t.u&&m("Patches").N(n,r,t.u,t.s)}return n.o}function tt(t,e,r,n,o,i,u){if(D(o)){var f=z(t,o,i&&e&&e.i!==3&&!x(e.R,n)?i.concat(n):void 0);if(ut(r,n,f),!D(f))return;t.m=!1}else u&&r.add(o);if(R(o)&&!T(o)){if(!t.h.D&&t._<1)return;z(t,o),e&&e.A.l||K(t,o)}}function K(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&Q(e,r)}function C(t,e){var r=t[v];return(r?S(r):t)[e]}function et(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function A(t){t.P||(t.P=!0,t.l&&A(t.l))}function $(t){t.o||(t.o=L(t.t))}function q(t,e,r){var n=G(e)?m("MapSet").F(e,r):H(e)?m("MapSet").T(e,r):t.O?function(o,i){var u=Array.isArray(o),f={i:u?1:0,A:i?i.A:J(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},a=f,l=I;u&&(a=[f],l=F);var c=Proxy.revocable(a,l),p=c.revoke,s=c.proxy;return f.k=s,f.j=p,s}(e,r):m("ES5").J(e,r);return(r?r.A:J()).p.push(n),n}function ht(t){return D(t)||P(22,t),function e(r){if(!R(r))return r;var n,o=r[v],i=_(r);if(o){if(!o.P&&(o.i<4||!m("ES5").K(o)))return o.t;o.I=!0,n=rt(r,i),o.I=!1}else n=rt(r,i);return k(n,function(u,f){o&&st(o.t,u)===f||ut(n,u,e(f))}),i===3?new Set(n):n}(t)}function rt(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return L(t)}function mt(){function t(i,u){var f=o[i];return f?f.enumerable=u:o[i]=f={configurable:!0,enumerable:u,get:function(){var a=this[v];return I.get(a,i)},set:function(a){var l=this[v];I.set(l,i,a)}},f}function e(i){for(var u=i.length-1;u>=0;u--){var f=i[u][v];if(!f.P)switch(f.i){case 5:n(f)&&A(f);break;case 4:r(f)&&A(f)}}}function r(i){for(var u=i.t,f=i.k,a=E(f),l=a.length-1;l>=0;l--){var c=a[l];if(c!==v){var p=u[c];if(p===void 0&&!x(u,c))return!0;var s=f[c],y=s&&s[v];if(y?y.t!==p:!ft(s,p))return!0}}var b=!!u[v];return a.length!==E(u).length+(b?0:1)}function n(i){var u=i.k;if(u.length!==i.t.length)return!0;var f=Object.getOwnPropertyDescriptor(u,u.length-1);if(f&&!f.get)return!0;for(var a=0;a<u.length;a++)if(!u.hasOwnProperty(a))return!0;return!1}var o={};pt("ES5",{J:function(i,u){var f=Array.isArray(i),a=function(c,p){if(c){for(var s=Array(p.length),y=0;y<p.length;y++)Object.defineProperty(s,""+y,t(y,!0));return s}var b=ct(p);delete b[v];for(var d=E(b),O=0;O<d.length;O++){var j=d[O];b[j]=t(j,c||!!b[j].enumerable)}return Object.create(Object.getPrototypeOf(p),b)}(f,i),l={i:f?5:4,A:u?u.A:J(),P:!1,I:!1,R:{},l:u,t:i,k:a,o:null,g:!1,C:!1};return Object.defineProperty(a,v,{value:l,writable:!0}),a},S:function(i,u,f){f?D(u)&&u[v].A===i&&e(i.p):(i.u&&function a(l){if(l&&typeof l=="object"){var c=l[v];if(c){var p=c.t,s=c.k,y=c.R,b=c.i;if(b===4)k(s,function(h){h!==v&&(p[h]!==void 0||x(p,h)?y[h]||a(s[h]):(y[h]=!0,A(c)))}),k(p,function(h){s[h]!==void 0||x(s,h)||(y[h]=!1,A(c))});else if(b===5){if(n(c)&&(A(c),y.length=!0),s.length<p.length)for(var d=s.length;d<p.length;d++)y[d]=!1;else for(var O=p.length;O<s.length;O++)y[O]=!0;for(var j=Math.min(s.length,p.length),w=0;w<j;w++)s.hasOwnProperty(w)||(y[w]=!0),y[w]===void 0&&a(s[w])}}}}(i.p[0]),e(i.p))},K:function(i){return i.i===4?r(i):n(i)}})}var nt,N,Z=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",dt=typeof Map<"u",bt=typeof Set<"u",ot=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",at=Z?Symbol.for("immer-nothing"):((nt={})["immer-nothing"]=!0,nt),it=Z?Symbol.for("immer-draftable"):"__$immer_draftable",v=Z?Symbol.for("immer-state"):"__$immer_state",gt=""+Object.prototype.constructor,E=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,ct=Object.getOwnPropertyDescriptors||function(t){var e={};return E(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},B={},I={get:function(t,e){if(e===v)return t;var r=S(t);if(!x(r,e))return function(o,i,u){var f,a=et(i,u);return a?"value"in a?a.value:(f=a.get)===null||f===void 0?void 0:f.call(o.k):void 0}(t,r,e);var n=r[e];return t.I||!R(n)?n:n===C(t.t,e)?($(t),t.o[e]=q(t.A.h,n,t)):n},has:function(t,e){return e in S(t)},ownKeys:function(t){return Reflect.ownKeys(S(t))},set:function(t,e,r){var n=et(S(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=C(S(t),e),i=o==null?void 0:o[v];if(i&&i.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(ft(r,o)&&(r!==void 0||x(t.t,e)))return!0;$(t),A(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return C(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,$(t),A(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=S(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){P(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){P(12)}},F={};k(I,function(t,e){F[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),F.deleteProperty=function(t,e){return F.set.call(this,t,e,void 0)},F.set=function(t,e,r){return I.set.call(this,t[0],e,r,t[0])};var Pt=function(){function t(r){var n=this;this.O=ot,this.D=!0,this.produce=function(o,i,u){if(typeof o=="function"&&typeof i!="function"){var f=i;i=o;var a=n;return function(d){var O=this;d===void 0&&(d=f);for(var j=arguments.length,w=Array(j>1?j-1:0),h=1;h<j;h++)w[h-1]=arguments[h];return a.produce(d,function(lt){var V;return(V=i).call.apply(V,[O,lt].concat(w))})}}var l;if(typeof i!="function"&&P(6),u!==void 0&&typeof u!="function"&&P(7),R(o)){var c=Y(n),p=q(n,o,void 0),s=!0;try{l=i(p),s=!1}finally{s?M(c):X(c)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(d){return W(c,u),U(d,c)},function(d){throw M(c),d}):(W(c,u),U(l,c))}if(!o||typeof o!="object"){if((l=i(o))===void 0&&(l=o),l===at&&(l=void 0),n.D&&Q(l,!0),u){var y=[],b=[];m("Patches").M(o,l,y,b),u(y,b)}return l}P(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(l){for(var c=arguments.length,p=Array(c>1?c-1:0),s=1;s<c;s++)p[s-1]=arguments[s];return n.produceWithPatches(l,function(y){return o.apply(void 0,[y].concat(p))})};var u,f,a=n.produce(o,i,function(l,c){u=l,f=c});return typeof Promise<"u"&&a instanceof Promise?a.then(function(l){return[l,u,f]}):[a,u,f]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){R(r)||P(8),D(r)&&(r=ht(r));var n=Y(this),o=q(this,r,void 0);return o[v].C=!0,X(n),o},e.finishDraft=function(r,n){var o=r&&r[v],i=o.A;return W(i,n),U(void 0,i)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!ot&&P(20),this.O=r},e.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var u=m("Patches").$;return D(r)?u(r,n):this.produce(r,function(f){return u(f,n)})},t}(),g=new Pt,Ot=g.produce;g.produceWithPatches.bind(g);g.setAutoFreeze.bind(g);g.setUseProxies.bind(g);g.applyPatches.bind(g);g.createDraft.bind(g);g.finishDraft.bind(g);export{mt as F,Ot as f,D as r,R as t};
