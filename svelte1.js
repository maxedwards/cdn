var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t,n,e,o,r,s,c){const i=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(i){const r=l(n,e,o,c);t.p(r,i)}}function f(t){return null==t?"":t}function a(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function v(){return h("")}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function w(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}class x{constructor(t=null){this.a=t,this.e=this.n=null}m(t,n,e=null){this.e||(this.e=g(n.nodeName),this.t=n,this.h(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)d(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(p)}}let b;function N(t){b=t}function k(t){(function(){if(!b)throw new Error("Function called outside component initialization");return b})().$$.on_mount.push(t)}const _=[],S=[],C=[],E=[],O=Promise.resolve();let L=!1;function T(t){C.push(t)}let j=!1;const A=new Set;function J(){if(!j){j=!0;do{for(let t=0;t<_.length;t+=1){const n=_[t];N(n),P(n.$$)}for(N(null),_.length=0;S.length;)S.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];A.has(n)||(A.add(n),n())}C.length=0}while(_.length);for(;E.length;)E.pop()();L=!1,j=!1,A.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const F=new Set;let R;function H(){R={r:0,c:[],p:R}}function q(){R.r||r(R.c),R=R.p}function G(t,n){t&&t.i&&(F.delete(t),t.i(n))}function M(t,n,e,o){if(t&&t.o){if(F.has(t))return;F.add(t),R.c.push((()=>{F.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function B(t){t&&t.c()}function D(t,n,o,c){const{fragment:i,on_mount:l,on_destroy:u,after_update:f}=t.$$;i&&i.m(n,o),c||T((()=>{const n=l.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(T)}function I(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function z(t,n){-1===t.$$.dirty[0]&&(_.push(t),L||(L=!0,O.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function V(n,e,s,c,i,l,u=[-1]){const f=b;N(n);const a=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let d=!1;if(a.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return a.ctx&&i(a.ctx[t],a.ctx[t]=r)&&(!a.skip_bound&&a.bound[t]&&a.bound[t](r),d&&z(n,t)),e})):[],a.update(),d=!0,r(a.before_update),a.fragment=!!c&&c(a.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);a.fragment&&a.fragment.l(t),t.forEach(p)}else a.fragment&&a.fragment.c();e.intro&&G(n.$$.fragment),D(n,e.target,e.anchor,e.customElement),J()}N(f)}class K{$destroy(){I(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=t=>({visible:2&t,seen:4&t}),U=t=>({visible:t[1],seen:t[2]});function W(t){let n,e;const o=t[4].default,r=i(o,t,t[3],U);return{c(){n=g("div"),r&&r.c()},m(o,s){d(o,n,s),r&&r.m(n,null),t[5](n),e=!0},p(t,[n]){r&&r.p&&14&n&&u(r,o,t,t[3],n,Q,U)},i(t){e||(G(r,t),e=!0)},o(t){M(r,t),e=!1},d(e){e&&p(n),r&&r.d(e),t[5](null)}}}function X(t,n,e){let{$$slots:o={},$$scope:r}=n,s=null,c=!1,i=!1;return k((()=>{const t=new IntersectionObserver((t=>{e(1,c=t[0].isIntersecting),e(2,i=i||c)}));return t.observe(s),()=>t.unobserve(s)})),t.$$set=t=>{"$$scope"in t&&e(3,r=t.$$scope)},[s,c,i,r,o,function(t){S[t?"unshift":"push"]((()=>{s=t,e(0,s)}))}]}class Y extends K{constructor(t){super(),V(this,t,X,W,c,{})}}function Z(t){let e,o,r,s,c,i,l,u=JSON.stringify(t[0],null,3)+"";const f=[t[0].props];var $=t[0].c;function v(t){let e={};for(let t=0;t<f.length;t+=1)e=n(e,f[t]);return{props:e}}return $&&(e=new $(v())),{c(){e&&B(e.$$.fragment),o=m(),r=g("hr"),s=h("View.svelte debug:\n        "),c=g("pre"),i=h(u)},m(t,n){e&&D(e,t,n),d(t,o,n),d(t,r,n),d(t,s,n),d(t,c,n),a(c,i),l=!0},p(t,n){const r=1&n?function(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(f,[(s=t[0].props,"object"==typeof s&&null!==s?s:{})]):{};var s;if($!==($=t[0].c)){if(e){H();const t=e;M(t.$$.fragment,1,0,(()=>{I(t,1)})),q()}$?(e=new $(v()),B(e.$$.fragment),G(e.$$.fragment,1),D(e,o.parentNode,o)):e=null}else $&&e.$set(r);(!l||1&n)&&u!==(u=JSON.stringify(t[0],null,3)+"")&&w(i,u)},i(t){l||(e&&G(e.$$.fragment,t),l=!0)},o(t){e&&M(e.$$.fragment,t),l=!1},d(t){e&&I(e,t),t&&p(o),t&&p(r),t&&p(s),t&&p(c)}}}function tt(t){let n,e,o=(t[0].preload||t[2])&&Z(t);return{c(){o&&o.c(),n=v()},m(t,r){o&&o.m(t,r),d(t,n,r),e=!0},p(t,e){t[0].preload||t[2]?o?(o.p(t,e),5&e&&G(o,1)):(o=Z(t),o.c(),G(o,1),o.m(n.parentNode,n)):o&&(H(),M(o,1,1,(()=>{o=null})),q())},i(t){e||(G(o),e=!0)},o(t){M(o),e=!1},d(t){o&&o.d(t),t&&p(n)}}}function nt(t){let n,e,o,r;return e=new Y({props:{$$slots:{default:[tt,({seen:t})=>({2:t}),({seen:t})=>t?4:0]},$$scope:{ctx:t}}}),{c(){n=g("div"),B(e.$$.fragment),y(n,"class",o="view"+(t[1]?" sel":"")+" svelte-3r5o0l")},m(t,o){d(t,n,o),D(e,n,null),r=!0},p(t,[s]){const c={};13&s&&(c.$$scope={dirty:s,ctx:t}),e.$set(c),(!r||2&s&&o!==(o="view"+(t[1]?" sel":"")+" svelte-3r5o0l"))&&y(n,"class",o)},i(t){r||(G(e.$$.fragment,t),r=!0)},o(t){M(e.$$.fragment,t),r=!1},d(t){t&&p(n),I(e)}}}function et(t,n,e){let{conf:o}=n,{sel:r}=n;return t.$$set=t=>{"conf"in t&&e(0,o=t.conf),"sel"in t&&e(1,r=t.sel)},[o,r]}class ot extends K{constructor(t){super(),V(this,t,et,nt,c,{conf:0,sel:1})}}function rt(t,n,e){const o=t.slice();return o[3]=n[e],o[5]=e,o}function st(t,n,e){const o=t.slice();return o[3]=n[e],o[5]=e,o}function ct(t){let n,e,o,r,c,i,l;return{c(){n=g("span"),e=h("["),o=h(t[5]),r=h("]"),y(n,"class",c=f(t[5]==t[1]?"sel":"")+" svelte-1w4epd0")},m(c,u){var f,p,$,g;d(c,n,u),a(n,e),a(n,o),a(n,r),i||(p="click",$=function(){s(t[2](t[3],t[5]))&&t[2](t[3],t[5]).apply(this,arguments)},(f=n).addEventListener(p,$,g),l=()=>f.removeEventListener(p,$,g),i=!0)},p(e,o){t=e,2&o&&c!==(c=f(t[5]==t[1]?"sel":"")+" svelte-1w4epd0")&&y(n,"class",c)},d(t){t&&p(n),i=!1,l()}}}function it(t){let n,e;return n=new ot({props:{conf:t[3],sel:t[5]==t[1]}}),{c(){B(n.$$.fragment)},m(t,o){D(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.conf=t[3]),2&e&&(o.sel=t[5]==t[1]),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function lt(t){let n,e,o,r,s,c,i,l,u=t[0].title+"",f=t[0].views,x=[];for(let n=0;n<f.length;n+=1)x[n]=ct(st(t,f,n));let b=t[0].views,N=[];for(let n=0;n<b.length;n+=1)N[n]=it(rt(t,b,n));const k=t=>M(N[t],1,1,(()=>{N[t]=null}));return{c(){n=g("div"),e=g("div"),o=h(u),r=m(),s=g("div");for(let t=0;t<x.length;t+=1)x[t].c();c=m();for(let t=0;t<N.length;t+=1)N[t].c();i=v(),y(e,"id","t"),y(e,"class","svelte-1w4epd0"),y(s,"id","ico"),y(s,"class","svelte-1w4epd0"),y(n,"id","navbar"),y(n,"class","svelte-1w4epd0")},m(t,u){d(t,n,u),a(n,e),a(e,o),a(n,r),a(n,s);for(let t=0;t<x.length;t+=1)x[t].m(s,null);d(t,c,u);for(let n=0;n<N.length;n+=1)N[n].m(t,u);d(t,i,u),l=!0},p(t,[n]){if((!l||1&n)&&u!==(u=t[0].title+"")&&w(o,u),7&n){let e;for(f=t[0].views,e=0;e<f.length;e+=1){const o=st(t,f,e);x[e]?x[e].p(o,n):(x[e]=ct(o),x[e].c(),x[e].m(s,null))}for(;e<x.length;e+=1)x[e].d(1);x.length=f.length}if(3&n){let e;for(b=t[0].views,e=0;e<b.length;e+=1){const o=rt(t,b,e);N[e]?(N[e].p(o,n),G(N[e],1)):(N[e]=it(o),N[e].c(),G(N[e],1),N[e].m(i.parentNode,i))}for(H(),e=b.length;e<N.length;e+=1)k(e);q()}},i(t){if(!l){for(let t=0;t<b.length;t+=1)G(N[t]);l=!0}},o(t){N=N.filter(Boolean);for(let t=0;t<N.length;t+=1)M(N[t]);l=!1},d(t){t&&p(n),$(x,t),t&&p(c),$(N,t),t&&p(i)}}}function ut(t,n,e){let{config:o}=n,r=o.views.length-1;return window.addEventListener("keydown",(t=>{"Escape"==t.key&&document.body.classList.toggle("view"),"ArrowLeft"==t.key&&r>0&&e(1,r--,r),"ArrowRight"==t.key&&r<o.views.length-1&&e(1,r++,r)})),t.$$set=t=>{"config"in t&&e(0,o=t.config)},[o,r,(t,n)=>{document.body.classList.add("view"),e(1,r=n)}]}function ft(t,n,e){const o=t.slice();return o[3]=n[e],o}function at(t){let n,e,o,r=t[3].s+"";return{c(){n=g("p"),e=h(r),y(n,"class",o=f(t[3].L)+" svelte-jg10qd")},m(t,o){d(t,n,o),a(n,e)},p(t,s){1&s&&r!==(r=t[3].s+"")&&w(e,r),1&s&&o!==(o=f(t[3].L)+" svelte-jg10qd")&&y(n,"class",o)},d(t){t&&p(n)}}}function dt(n){let e,o,r,s=n[0],c=[];for(let t=0;t<s.length;t+=1)c[t]=at(ft(n,s,t));return{c(){e=g("h2"),e.textContent="CONSOLE",o=m(),r=g("pre");for(let t=0;t<c.length;t+=1)c[t].c()},m(t,n){d(t,e,n),d(t,o,n),d(t,r,n);for(let t=0;t<c.length;t+=1)c[t].m(r,null)},p(t,[n]){if(1&n){let e;for(s=t[0],e=0;e<s.length;e+=1){const o=ft(t,s,e);c[e]?c[e].p(o,n):(c[e]=at(o),c[e].c(),c[e].m(r,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=s.length}},i:t,o:t,d(t){t&&p(e),t&&p(o),t&&p(r),$(c,t)}}}function pt(t,n,e){let{logs:o=[]}=n;const r={};function s(t){e(1,r[t]=console[t],r),console[t]=function(){r[t].apply(console,arguments),o.push({L:t,s:(new Date).toLocaleTimeString()+":"+Array.from(arguments).map((t=>t.toString?t.toString():typeof t)).join(" ")}),e(0,o)},r.log("console.",t,"diverted")}return s("log"),s("error"),s("warn"),console.log("Console.svelte loaded"),t.$$set=t=>{"logs"in t&&e(0,o=t.logs)},[o,r]}function $t(n){let e,o,r,s,c,i,l;return{c(){e=g("main"),o=g("h4"),r=h("[FRAG:"),s=h(n[0]),c=h("]"),i=m(),l=new x(null)},m(t,u){d(t,e,u),a(e,o),a(o,r),a(o,s),a(o,c),a(e,i),l.m(n[1],e)},p(t,[n]){1&n&&w(s,t[0]),2&n&&l.p(t[1])},i:t,o:t,d(t){t&&p(e)}}}function gt(t,n,e){let{src:o}=n,r="Loading "+o;return fetch(o,{method:"GET"}).then((t=>{if(200==t.status)return t.text();throw t})).then((t=>{e(1,r=t),console.log("Fetched",o)})).catch((t=>{console.error(t),e(1,r="ERR:"+t.toString())})),t.$$set=t=>{"src"in t&&e(0,o=t.src)},[o,r]}class ht extends K{constructor(t){super(),V(this,t,gt,$t,c,{src:0})}}function mt(n){let e,o;return e=new ht({props:{src:"/frags/Privacy.htm"}}),{c(){B(e.$$.fragment)},m(t,n){D(e,t,n),o=!0},p:t,i(t){o||(G(e.$$.fragment,t),o=!0)},o(t){M(e.$$.fragment,t),o=!1},d(t){I(e,t)}}}function vt(t){return console.log("Privacy.svelte loaded"),[]}const yt=t=>({data:2&t,err:1&t}),wt=t=>({data:t[1],err:t[0]});function xt(t){let n;const e=t[5].default,o=i(e,t,t[4],wt);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,[n]){o&&o.p&&19&n&&u(o,e,t,t[4],n,yt,wt)},i(t){n||(G(o,t),n=!0)},o(t){M(o,t),n=!1},d(t){o&&o.d(t)}}}function bt(t,n,e){let o,{$$slots:r={},$$scope:s}=n,{url:c}=n,{post:i}=n,l={};void 0!==i&&"string"!=typeof i&&(i=JSON.stringify(i));return fetch(c,{method:i?"POST":"GET",headers:{"Content-Type":"application/json"}}).then((t=>{if(200==t.status)return t.json();throw`HTTP ${t.status} at ${c}`})).then((t=>e(1,l=t))).catch((t=>e(0,o=t.toString()))),t.$$set=t=>{"url"in t&&e(3,c=t.url),"post"in t&&e(2,i=t.post),"$$scope"in t&&e(4,s=t.$$scope)},[o,l,i,c,s,r]}class Nt extends K{constructor(t){super(),V(this,t,bt,xt,c,{url:3,post:2})}}function kt(t){let n,e;return n=new Nt({props:{url:"/contactConfig.json",$$slots:{default:[_t,({err:t,data:n})=>({2:t,3:n}),({err:t,data:n})=>(t?4:0)|(n?8:0)]},$$scope:{ctx:t}}}),{c(){B(n.$$.fragment)},m(t,o){D(n,t,o),e=!0},p(t,e){const o={};28&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(G(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){I(n,t)}}}function _t(t){let n,e,o,r,s=JSON.stringify(t[3])+"",c=t[2]+"";return{c(){n=h("Data:"),e=h(s),o=h("\n        Error:"),r=h(c)},m(t,s){d(t,n,s),d(t,e,s),d(t,o,s),d(t,r,s)},p(t,n){8&n&&s!==(s=JSON.stringify(t[3])+"")&&w(e,s),4&n&&c!==(c=t[2]+"")&&w(r,c)},d(t){t&&p(n),t&&p(e),t&&p(o),t&&p(r)}}}function St(t){let n,e,o=t[1]&&kt(t);return{c(){o&&o.c(),n=v()},m(t,r){o&&o.m(t,r),d(t,n,r),e=!0},p(t,e){t[1]?o?(o.p(t,e),2&e&&G(o,1)):(o=kt(t),o.c(),G(o,1),o.m(n.parentNode,n)):o&&(H(),M(o,1,1,(()=>{o=null})),q())},i(t){e||(G(o),e=!0)},o(t){M(o),e=!1},d(t){o&&o.d(t),t&&p(n)}}}function Ct(t){let n,e,o,r,s,c,i,l,u,f=JSON.stringify(t[0],null,3)+"";return l=new Y({props:{$$slots:{default:[St,({seen:t})=>({1:t}),({seen:t})=>t?2:0]},$$scope:{ctx:t}}}),{c(){n=g("h2"),n.textContent="CONTACT",e=h("\nconfig:\n"),o=g("pre"),r=h(f),s=m(),c=g("h3"),c.textContent="Fetch JSON config:",i=m(),B(l.$$.fragment)},m(t,f){d(t,n,f),d(t,e,f),d(t,o,f),a(o,r),d(t,s,f),d(t,c,f),d(t,i,f),D(l,t,f),u=!0},p(t,[n]){(!u||1&n)&&f!==(f=JSON.stringify(t[0],null,3)+"")&&w(r,f);const e={};18&n&&(e.$$scope={dirty:n,ctx:t}),l.$set(e)},i(t){u||(G(l.$$.fragment,t),u=!0)},o(t){M(l.$$.fragment,t),u=!1},d(t){t&&p(n),t&&p(e),t&&p(o),t&&p(s),t&&p(c),t&&p(i),I(l,t)}}}function Et(t,n,e){let{config:o}=n;return console.log("Contact.svelte loaded"),t.$$set=t=>{"config"in t&&e(0,o=t.config)},[o]}function Ot(n){let e;return{c(){e=g("h1"),e.textContent="404"},m(t,n){d(t,e,n)},p:t,i:t,o:t,d(t){t&&p(e)}}}class Lt extends K{constructor(t){super(),V(this,t,null,Ot,c,{})}}function Tt(t){let n,e,o;var r=t[0];return r&&(n=new r({})),{c(){n&&B(n.$$.fragment),e=v()},m(t,r){n&&D(n,t,r),d(t,e,r),o=!0},p(t,[o]){if(r!==(r=t[0])){if(n){H();const t=n;M(t.$$.fragment,1,0,(()=>{I(t,1)})),q()}r?(n=new r({}),B(n.$$.fragment),G(n.$$.fragment,1),D(n,e.parentNode,e)):n=null}},i(t){o||(n&&G(n.$$.fragment,t),o=!0)},o(t){n&&M(n.$$.fragment,t),o=!1},d(t){t&&p(e),n&&I(n,t)}}}function jt(t,n,e){let{src:o}=n,r=null;return k((async()=>{try{console.log("Hotload",o),e(0,r=(await import(o)).default)}catch(t){console.error(t),e(0,r=Lt)}})),t.$$set=t=>{"src"in t&&e(1,o=t.src)},[r,o]}class At extends K{constructor(t){super(),V(this,t,jt,Tt,c,{src:1})}}function Jt(t){let n;return{c(){n=h("Hotload")},m(t,e){d(t,n,e)},d(t){t&&p(n)}}}function Pt(t){let n,e,o,r;return o=new At({props:{src:"/Runtime.svelte",$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){n=h(t[0]),e=m(),B(o.$$.fragment)},m(t,s){d(t,n,s),d(t,e,s),D(o,t,s),r=!0},p(t,[e]){(!r||1&e)&&w(n,t[0]);const s={};2&e&&(s.$$scope={dirty:e,ctx:t}),o.$set(s)},i(t){r||(G(o.$$.fragment,t),r=!0)},o(t){M(o.$$.fragment,t),r=!1},d(t){t&&p(n),t&&p(e),I(o,t)}}}function Ft(t,n,e){let{links:o}=n;return console.log("Links.svelte loaded"),t.$$set=t=>{"links"in t&&e(0,o=t.links)},[o]}return new class extends K{constructor(t){super(),V(this,t,ut,lt,c,{config:0})}}({target:document.body,props:{config:{title:"TinySvelte",views:[{ico:"console.png",t:"Console",id:"console",c:class extends K{constructor(t){super(),V(this,t,pt,dt,c,{logs:0,ltrue:1})}get ltrue(){return this.$$.ctx[1]}},preload:1},{ico:"privacy.png",t:"Privacy",id:"privacy",c:class extends K{constructor(t){super(),V(this,t,vt,mt,c,{})}}},{ico:"contact.png",t:"Contact",id:"contact",c:class extends K{constructor(t){super(),V(this,t,Et,Ct,c,{config:0})}},props:{config:NavappConfig.contactForm}},{ico:"burger.png",t:"Navigation",id:"nav",c:class extends K{constructor(t){super(),V(this,t,Ft,Pt,c,{links:0})}},props:{links:NavappConfig.links}}]}}})}();
//# sourceMappingURL=bundle.js.map
