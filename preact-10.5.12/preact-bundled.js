const Preact=(e=>{var t,n,_,o,r,l,i={},u=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n){var _,o,r,l=arguments,i={};for(r in t)"key"==r?_=t[r]:"ref"==r?o=t[r]:i[r]=t[r];if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(l[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return h(e,i,_,o,null)}function h(e,n,_,o,r){var l={type:e,props:n,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++t.__v:r};return null!=t.vnode&&t.vnode(l),l}function p(e){return e.children}function d(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function y(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!g.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||o)(g)}function g(){for(var e;g.__r=_.length;)e=_.sort((function(e,t){return e.__v.__b-t.__v.__b})),_=[],e.some((function(e){var t,n,_,o,r,l;e.__d&&(r=(o=(t=e).__v).__e,(l=t.__P)&&(n=[],(_=s({},o)).__v=o.__v+1,S(l,o,_,t.__n,void 0!==l.ownerSVGElement,null!=o.__h?[r]:null,n,null==r?v(o):r,o.__h),H(n,o),o.__e!=r&&m(o)))}))}function b(t,n,_,o,r,l,c,s,a,f){var d,m,y,g,b,C,E,x=o&&o.__k||u,P=x.length;for(_.__k=[],d=0;d<n.length;d++)if(null!=(g=_.__k[d]=null==(g=n[d])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g?h(null,g,null,null,g):Array.isArray(g)?h(p,{children:g},null,null,null):g.__b>0?h(g.type,g.props,g.key,null,g.__v):g)){if(g.__=_,g.__b=_.__b+1,null===(y=x[d])||y&&g.key==y.key&&g.type===y.type)x[d]=void 0;else for(m=0;m<P;m++){if((y=x[m])&&g.key==y.key&&g.type===y.type){x[m]=void 0;break}y=null}S(t,g,y=y||i,r,l,c,s,a,f),b=g.__e,(m=g.ref)&&y.ref!=m&&(E||(E=[]),y.ref&&E.push(y.ref,null,g),E.push(m,g.__c||b,g)),null!=b?(null==C&&(C=b),"function"==typeof g.type&&null!=g.__k&&g.__k===y.__k?g.__d=a=k(g,a,t):a=e(t,g,y,x,b,a),f||"option"!==_.type?"function"==typeof _.type&&(_.__d=a):t.value=""):a&&y.__e==a&&a.parentNode!=t&&(a=v(y))}for(_.__e=C,d=P;d--;)null!=x[d]&&("function"==typeof _.type&&null!=x[d].__e&&x[d].__e==_.__d&&(_.__d=v(o,d+1)),T(x[d],x[d]));if(E)for(d=0;d<E.length;d++)A(E[d],E[++d],E[++d])}function k(t,n,_){var o,r;for(o=0;o<t.__k.length;o++)(r=t.__k[o])&&(r.__=t,n="function"==typeof r.type?k(r,n,_):e(_,r,r,t.__k,r.__e,n));return n}function e(e,t,n,_,o,r){var l,i,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),l=null;else{for(i=r,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==o)break e;e.insertBefore(o,r),l=r}return void 0!==l?l:o.nextSibling}function C(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||c.test(t)?n:n+"px"}function E(e,t,n,_,o){var r;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||C(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||C(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?P:x,r):e.removeEventListener(t,r?P:x,r);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function x(e){this.l[e.type+!1](t.event?t.event(e):e)}function P(e){this.l[e.type+!0](t.event?t.event(e):e)}function S(e,n,_,o,r,l,i,u,c){var a,f,h,v,m,y,g,k,C,E,x,P=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(c=_.__h,u=n.__e=_.__e,n.__h=null,l=[u]),(a=t.__b)&&a(n);try{e:if("function"==typeof P){if(k=n.props,C=(a=P.contextType)&&o[a.__c],E=a?C?C.props.value:a.__:o,_.__c?g=(f=n.__c=_.__c).__=f.__E:("prototype"in P&&P.prototype.render?n.__c=f=new P(k,E):(n.__c=f=new d(k,E),f.constructor=P,f.render=U),C&&C.sub(f),f.props=k,f.state||(f.state={}),f.context=E,f.__n=o,h=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=P.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=s({},f.__s)),s(f.__s,P.getDerivedStateFromProps(k,f.__s))),v=f.props,m=f.state,h)null==P.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,E),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,E)||n.__v===_.__v){f.props=k,f.state=f.__s,n.__v!==_.__v&&(f.__d=!1),f.__v=n,n.__e=_.__e,n.__k=_.__k,f.__h.length&&i.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,E),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,m,y)}))}f.context=E,f.props=k,f.state=f.__s,(a=t.__r)&&a(n),f.__d=!1,f.__v=n,f.__P=e,a=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=s(s({},o),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(v,m)),x=null!=a&&a.type===p&&null==a.key?a.props.children:a,b(e,Array.isArray(x)?x:[x],n,_,o,r,l,i,u,c),f.base=n.__e,n.__h=null,f.__h.length&&i.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==l&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=w(_.__e,n,_,o,r,l,i,c);(a=t.diffed)&&a(n)}catch(e){n.__v=null,(c||null!=l)&&(n.__e=u,n.__h=!!c,l[l.indexOf(u)]=null),t.__e(e,n,_)}}function H(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function w(e,t,n,_,o,r,l,c){var s,f,h,p,d=n.props,v=t.props,m=t.type,y=0;if("svg"===m&&(o=!0),null!=r)for(;y<r.length;y++)if((s=r[y])&&(s===e||(m?s.localName==m:3==s.nodeType))){e=s,r[y]=null;break}if(null==e){if(null===m)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),r=null,c=!1}if(null===m)d===v||c&&e.data===v||(e.data=v);else{if(r=r&&u.slice.call(e.childNodes),f=(d=n.props||i).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!c){if(null!=r)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(h||f)&&(h&&(f&&h.__html==f.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(function(e,t,n,_,o){var r;for(r in n)"children"===r||"key"===r||r in t||E(e,r,null,n[r],_);for(r in t)o&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||E(e,r,t[r],n[r],_)}(e,v,d,o,c),h)t.__k=[];else if(y=t.props.children,b(e,Array.isArray(y)?y:[y],t,n,_,o&&"foreignObject"!==m,r,l,e.firstChild,c),null!=r)for(y=r.length;y--;)null!=r[y]&&a(r[y]);c||("value"in v&&void 0!==(y=v.value)&&(y!==e.value||"progress"===m&&!y)&&E(e,"value",y,d.value,!1),"checked"in v&&void 0!==(y=v.checked)&&y!==e.checked&&E(e,"checked",y,d.checked,!1))}return e}function A(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function T(e,n,_){var o,r,l;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||A(o,null,n)),_||"function"==typeof e.type||(_=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&T(o[l],n,_);null!=r&&a(r)}function U(e,t,n){return this.constructor(e,n)}function L(e,n,_){var o,r,l;t.__&&t.__(e,n),r=(o="function"==typeof _)?null:_&&_.__k||n.__k,l=[],S(n,e=(!o&&_||n).__k=f(p,null,[e]),r||i,i,void 0!==n.ownerSVGElement,!o&&_?[_]:r?null:n.firstChild?u.slice.call(n.childNodes):null,l,!o&&_?_:r?r.__e:n.firstChild,o),H(l,e)}return t={__e:function(e,t){for(var n,_,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e},__v:0},n=function(e){return null!=e&&void 0===e.constructor},d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},n),this.props)),e&&s(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),y(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},d.prototype.render=p,_=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,l=0,{render:L,hydrate:function e(t,n){L(t,n,e)},createElement:f,h:f,Fragment:p,createRef:function(){return{current:null}},isValidElement:n,Component:d,cloneElement:function(e,t,n){var _,o,r,l=arguments,i=s({},e.props);for(r in t)"key"==r?_=t[r]:"ref"==r?o=t[r]:i[r]=t[r];if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(l[r]);return null!=n&&(i.children=n),h(e.type,i,_||e.key,o||e.ref,null)},createContext:function(e,t){var n={__c:t="__cC"+l++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,_;return this.getChildContext||(n=[],(_={})[t]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(y)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n},toChildArray:function e(t,n){return n=n||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){e(t,n)})):n.push(t)),n},options:t}})(),{options:options,h:h,cloneElement:cloneElement,render:render,hydrate:hydrate}=Preact;function register(e,t,n,_){function o(){const t=Reflect.construct(HTMLElement,[],o);return t._vdomComponent=e,t._root=_&&_.shadow?t.attachShadow({mode:"open"}):t,t}return o.prototype=Object.create(HTMLElement.prototype),o.prototype.constructor=o,o.prototype.connectedCallback=connectedCallback,o.prototype.attributeChangedCallback=attributeChangedCallback,o.prototype.disconnectedCallback=disconnectedCallback,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),o.observedAttributes=n,n.forEach(e=>{Object.defineProperty(o.prototype,e,{get(){return this._vdom.props[e]},set(t){this._vdom?this.attributeChangedCallback(e,null,t):(this._props||(this._props={}),this._props[e]=t,this.connectedCallback());const n=typeof t;null!=t&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(e,t)}})}),customElements.define(t||e.tagName||e.displayName||e.name,o)}function ContextProvider(e){this.getChildContext=()=>e.context;const{context:t,children:n,..._}=e;return cloneElement(n,_)}function connectedCallback(){const e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e);const t=e.detail.context;this._vdom=h(ContextProvider,{...this._props,context:t},toVdom(this,this._vdomComponent)),(this.hasAttribute("hydrate")?hydrate:render)(this._vdom,this._root)}function toCamelCase(e){return e.replace(/-(\w)/g,(e,t)=>t?t.toUpperCase():"")}function attributeChangedCallback(e,t,n){if(!this._vdom)return;n=null==n?void 0:n;const _={};_[e]=n,_[toCamelCase(e)]=n,this._vdom=cloneElement(this._vdom,_),render(this._vdom,this._root)}function disconnectedCallback(){render(this._vdom=null,this._root)}function Slot(e,t){return h("slot",{...e,ref:e=>{e?(this.ref=e,this._listener||(this._listener=e=>{e.stopPropagation(),e.detail.context=t},e.addEventListener("_preact",this._listener))):this.ref.removeEventListener("_preact",this._listener)}})}function toVdom(e,t){if(3===e.nodeType)return e.data;if(1!==e.nodeType)return null;let n=[],_={},o=0,r=e.attributes,l=e.childNodes;for(o=r.length;o--;)"slot"!==r[o].name&&(_[r[o].name]=r[o].value,_[toCamelCase(r[o].name)]=r[o].value);for(o=l.length;o--;){const e=toVdom(l[o],null),t=l[o].slot;t?_[t]=h(Slot,{name:t},e):n[o]=e}const i=t?h(Slot,null,n):n;return h(t||e.nodeName.toLowerCase(),_,i)}(()=>{var e=function(t,n,_,o){var r;n[0]=0;for(var l=1;l<n.length;l++){var i=n[l++],u=n[l]?(n[0]|=i?1:2,_[n[l++]]):n[++l];3===i?o[0]=u:4===i?o[1]=Object.assign(o[1]||{},u):5===i?(o[1]=o[1]||{})[n[++l]]=u:6===i?o[1][n[++l]]+=u+"":i?(r=t.apply(u,e(t,u,_,["",null])),o.push(r),u[0]?n[0]|=2:(n[l-2]=0,n[l]=r)):o.push(u)}return o},t=new Map;Preact.html=function(n){var _=t.get(this);return _||(_=new Map,t.set(this,_)),(_=e(this,_.get(n)||(_.set(n,_=function(e){for(var t,n,_=1,o="",r="",l=[0],i=function(e){1===_&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,o):3===_&&(e||o)?(l.push(3,e,o),_=2):2===_&&"..."===o&&e?l.push(4,e,0):2===_&&o&&!e?l.push(5,0,!0,o):_>=5&&((o||!e&&5===_)&&(l.push(_,0,o,n),_=6),e&&(l.push(_,e,0,n),_=6)),o=""},u=0;u<e.length;u++){u&&(1===_&&i(),i(u));for(var c=0;c<e[u].length;c++)t=e[u][c],1===_?"<"===t?(i(),l=[l],_=3):o+=t:4===_?"--"===o&&">"===t?(_=1,o=""):o=t+o[0]:r?t===r?r="":o+=t:'"'===t||"'"===t?r=t:">"===t?(i(),_=1):_&&("="===t?(_=5,n=o,o=""):"/"===t&&(_<5||">"===e[u][c+1])?(i(),3===_&&(l=l[0]),_=l,(l=l[0]).push(2,0,_),_=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(i(),_=2):o+=t),3===_&&"!--"===o&&(_=4,l=l[0])}return i(),l}(n)),_),arguments,[])).length>1?_:_[0]}.bind(Preact.h)})(),(e=>{const t=options;var n,_,o,r=0,l=[],i=t.__b,u=t.__r,c=t.diffed,s=t.__c,a=t.unmount;function f(e,n){t.__h&&t.__h(_,e,r||n),r=0;var o=_.__H||(_.__H={__:[],__h:[]});return e>=o.__.length&&o.__.push({}),o.__[e]}function h(e){return r=1,function(e,t,o){var r=f(n++,2);return r.t=e,r.__c||(r.__=[o?o(t):y(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=_),r.__}(y,e)}function e(){l.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(d),e.__H.__h.forEach(v),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}})),l=[]}t.__b=function(e){_=null,i&&i(e)},t.__r=function(e){u&&u(e),n=0;var t=(_=e.__c).__H;t&&(t.__h.forEach(d),t.__h.forEach(v),t.__h=[])},t.diffed=function(n){c&&c(n);var r=n.__c;r&&r.__H&&r.__H.__h.length&&(1!==l.push(r)&&o===t.requestAnimationFrame||((o=t.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(_),p&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);p&&(t=requestAnimationFrame(n))})(e)),_=void 0},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(d),e.__h=e.__h.filter((function(e){return!e.__||v(e)}))}catch(_){n.some((function(e){e.__h&&(e.__h=[])})),n=[],t.__e(_,e.__v)}})),s&&s(e,n)},t.unmount=function(e){a&&a(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(d)}catch(e){t.__e(e,n.__v)}};var p="function"==typeof requestAnimationFrame;function d(e){var t=_;"function"==typeof e.__c&&e.__c(),_=t}function v(e){var t=_;e.__c=e.__(),_=t}function m(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function y(e,t){return"function"==typeof t?t(e):t}Preact.useState=h,Preact.useEffect=function(e,o){var r=f(n++,3);!t.__s&&m(r.__H,o)&&(r.__=e,r.__H=o,_.__H.__h.push(r))}})(),Preact.register=register;export default Preact;console.log("preact-bundled.js loaded");