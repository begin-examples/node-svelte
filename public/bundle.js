var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s;function c(t){s=t}function u(t){(function(){if(!s)throw new Error("Function called outside component initialization");return s})().$$.on_mount.push(t)}const i=[],f=[],l=[],d=[],$=Promise.resolve();let p=!1;function m(t){l.push(t)}function g(){const t=new Set;do{for(;i.length;){const t=i.shift();c(t),h(t.$$)}for(;f.length;)f.pop()();for(let e=0;e<l.length;e+=1){const n=l[e];t.has(n)||(n(),t.add(n))}l.length=0}while(i.length);for(;d.length;)d.pop()();p=!1}function h(t){t.fragment&&(t.update(t.dirty),o(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(m))}const y=new Set;function b(t,e){t.$$.dirty||(i.push(t),p||(p=!0,$.then(g)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function _(a,u,i,f,l,d){const $=s;c(a);const p=u.props||{},h=a.$$={fragment:null,ctx:null,props:d,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:n(),dirty:null};let _=!1;var x,v,w;h.ctx=i?i(a,p,(t,e)=>{h.ctx&&l(h.ctx[t],h.ctx[t]=e)&&(h.bound[t]&&h.bound[t](e),_&&b(a,t))}):p,h.update(),_=!0,o(h.before_update),h.fragment=f(h.ctx),u.target&&(u.hydrate?h.fragment.l((w=u.target,Array.from(w.childNodes))):h.fragment.c(),u.intro&&((x=a.$$.fragment)&&x.i&&(y.delete(x),x.i(v))),function(t,n,a){const{fragment:s,on_mount:c,on_destroy:u,after_update:i}=t.$$;s.m(n,a),m(()=>{const n=c.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]}),i.forEach(m)}(a,u.target,u.anchor),g()),c($)}class x{$destroy(){var e,n;n=1,(e=this).$$.fragment&&(o(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function v(e){var n,o;return{c(){var t,r,a,s,c;t="h1",n=document.createElement(t),r=e.message,o=document.createTextNode(r),a=n,s="class",null==(c="svelte-1ucbz36")?a.removeAttribute(s):a.setAttribute(s,c)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e),function(t,e){t.appendChild(e)}(n,o)},p(t,e){var n,r;t.message&&(n=o,r=""+(r=e.message),n.data!==r&&(n.data=r))},i:t,o:t,d(t){var e;t&&(e=n).parentNode.removeChild(e)}}}function w(t,e,n){let{message:o}=e;return u(async()=>{let t=await(await fetch("/api")).json();n("message",o=t.msg),console.log("MESSAGE: ",o)}),t.$set=(t=>{"message"in t&&n("message",o=t.message)}),{message:o}}return new class extends x{constructor(t){super(),_(this,t,w,v,a,["message"])}}({target:document.body,props:{message:"...loading"}})}();
//# sourceMappingURL=bundle.js.map
