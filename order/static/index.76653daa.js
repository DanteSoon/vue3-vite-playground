import{r as f,o as h,c as g,a as w,b as v,F as y,d as P,e as b,f as j,g as a,l as E,h as x,T as c,i as L,B as _}from"./vendor.1aaf9d7d.js";(function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0})}function o(t){if(t.ep)return;t.ep=!0;const r=function(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}(t);fetch(t.href,r)}})();var C=(e,o)=>{for(const[t,r]of o)e[t]=r;return e},M=C({},[["render",function(e,o){const t=f("router-view");return h(),g(y,null,[w(` <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> `),v(t)],2112)}]]);const d={},I=[{name:"index",path:"/",component:()=>{return e=()=>import("./Index.b25b2042.js"),o=["static/Index.b25b2042.js","static/Index.66b2f7dd.css","static/vendor.1aaf9d7d.js","static/vendor.6d4252c6.css"],o&&o.length!==0?Promise.all(o.map(t=>{if((t=`https://rpdtoss.caizidao.com.cn/fuse/czd2.0/${t}`)in d)return;d[t]=!0;const r=t.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const s=document.createElement("link");return s.rel=r?"stylesheet":"modulepreload",r||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),r?new Promise((m,p)=>{s.addEventListener("load",m),s.addEventListener("error",p)}):void 0})).then(()=>e()):e();var e,o}}],u=P({history:b("/order/"),routes:I});u.beforeEach((e,o,t)=>{t()});const k=j({state:()=>({count:0}),mutations:{increment(e,o){conlog(o),e.count++}},actions:{doIncrement(e,o){conlog(o),e.commit("increment","test")}},modules:{testModule:{namespaced:!0,state:()=>({count:0}),mutations:{increment(e){e.count++}},getters:{doubleCount:e=>2*e.count}}}});let l={};a.interceptors.request.use(e=>{let o={};if(e.data=e.data?e.data:{},e.method==="post"){l.showMessage=!!E.exports.isUndefined(e.showMessage)||!!e.showMessage,e.headers["Content-Type"]=e.application?"application/x-www-form-urlencoded;charset=utf-8":"application/json;charset=utf-8";const t=e.headers["Content-Type"];return t&&t.includes("application/x-www-form-urlencoded")&&(e.data=x.stringify(e.data)),e}return e.url=url,e.headers=o,e},e=>(conlog(e,-1),Promise.reject(e))),a.interceptors.response.use(e=>(l.showMessage&&e.data.code!==200&&e.data.code!==11001&&e.data.message&&(conlog(e.data.message,-1),c(e.data.message)),e),e=>(e.response&&e.response.status!==200&&(conlog("\u670D\u52A1\u5F00\u5C0F\u5DEE~~~",-1),c.fail("\u670D\u52A1\u5F00\u5C0F\u5DEE~~~")),Promise.reject(e)));const T={post:(e,o,t)=>a.post(e,o,t).then(r=>r.data.code===200?Promise.resolve(r.data):(r.data.code,Promise.reject(r.data))).catch(r=>{}),get:(e,o)=>a.get(e,o).then(t=>t.data.code===0||t.data.code===200?Promise.resolve(t.data.content):(t.data.code,Promise.reject(t.data))).catch(t=>{})};window.projectAxios=T;const i=L(M);i.use(_),i.use(u),i.use(k),i.mount("#app");export{C as _};
