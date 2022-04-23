import{i as D,g as R,d as q,m as N,H as U,n as G,o as V,s as K,a as Q,G as X,S as L,b as T,c as H,e as B,f,h as _,j as u,k as b,l as g,p as v,t as $,q as Y,r as E,u as I,v as A,w as S,x as j,y as C,z as J,A as M,B as Z,C as O,D as ee}from"./vendor.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}};te();const se={apiKey:"AIzaSyCTCkl_X3RDPqY_RSDypsthQCPjS9F-T-8",authDomain:"fundtrace.firebaseapp.com",projectId:"fundtrace"};D(se);const z=R(),re=o=>V(z,o),ae=()=>Q(z,new X),ne=()=>K(z),F=q();N(F).catch(o=>console.log(o.code==="failed-precondition"?"Multiple Tabs Open":"Cant Cache ",o));const oe=(o,e)=>U(G(F,o),e);function P(o){let e,r;return{c(){e=B("svg"),r=B("path"),f(r,"fill-rule","evenodd"),f(r,"d","M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"),f(r,"clip-rule","evenodd"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"class","h-5 w-5 mr-2 animate-spin"),f(e,"viewBox","0 0 20 20"),f(e,"fill","currentColor")},m(a,s){_(a,e,s),u(e,r)},d(a){a&&b(e)}}}function le(o){let e,r,a,s,n,t=o[1]&&P();return{c(){e=g("button"),t&&t.c(),r=v(),a=$(o[0]),f(e,"class","rounded-full bg-fade uppercase px-6 py-2 border border-primary font-bold flex items-center")},m(d,p){_(d,e,p),t&&t.m(e,null),u(e,r),u(e,a),s||(n=Y(e,"click",o[3]),s=!0)},p(d,[p]){d[1]?t||(t=P(),t.c(),t.m(e,r)):t&&(t.d(1),t=null),p&1&&E(a,d[0])},i:I,o:I,d(d){d&&b(e),t&&t.d(),s=!1,n()}}}function ie(o,e,r){let a="Checking Status...",s=!0,n;re(p=>{n=p,r(0,a=n?"Sign Out":"Sign In"),r(1,s=!1)});const t=()=>{s||(n?ne():ae(),r(1,s=!0))};return[a,s,t,()=>t()]}class ce extends L{constructor(e){super();T(this,e,ie,le,H,{})}}function ue(o,e,r){const a=o.slice();return a[2]=e[r],a}function fe(o){let e,r;return{c(){e=g("a"),e.innerHTML=`<img alt="Built With" src="${o[2][1]}" class="w-full"/> 
            `,f(e,"href",r=o[2][0]),f(e,"class","duration-500 m-1 hover:scale-105 hover:shadow-xl border border-.5 border-fade p-2 rounded")},m(a,s){_(a,e,s)},d(a){a&&b(e)}}}function W(o){let e,r,a=o[0][0].name+"",s;return{c(){e=g("div"),r=$("Firestore Data: "),s=$(a),f(e,"class","flex")},m(n,t){_(n,e,t),u(e,r),u(e,s)},p(n,t){t&1&&a!==(a=n[0][0].name+"")&&E(s,a)},d(n){n&&b(e)}}}function de(o){let e,r,a,s,n,t,d,p,w,m,h,k=[["https://svelte.dev/","/svelte.png"],["https://vitejs.dev/","https://vitejs.dev/logo.svg"],["https://tailwindcss.com/","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"],["https://firebase.google.com/docs/hosting","https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png"]],i=[];for(let l=0;l<4;l+=1)i[l]=fe(ue(o,k,l));let c=o[0].length>0&&W(o);return m=new ce({}),{c(){e=g("div"),r=g("h1"),r.textContent="Progressive Web App",a=v(),s=g("div");for(let l=0;l<4;l+=1)i[l].c();n=v(),c&&c.c(),t=v(),d=g("p"),d.innerHTML=`Built with <strong><a href="https://svelte.dev/" target="_blank" class="svelte-1csj24t">Svelte!</a></strong> for cybernetically enhanced web apps.
        A shake of <strong><a href="https://vitejs.dev/" target="_blank" class="svelte-1csj24t">Vite!</a></strong> for just in time testing.
        <strong><a href="https://tailwindcss.com/" target="_blank" class="svelte-1csj24t">Tailwind!</a></strong> Speedy UI builder.
        And <strong><a href="https://firebase.google.com/docs/hosting" class="svelte-1csj24t">Firebase!</a></strong> your no backend no hassle baby partner.`,p=v(),w=g("div"),A(m.$$.fragment),f(s,"class","grid grid-cols-4 justify-around"),f(d,"class","svelte-1csj24t"),f(w,"class","mx-auto"),f(e,"class","flex flex-col max-w-lg shadow shadow-xl bg-white rounded m-4 p-4 space-y-4")},m(l,y){_(l,e,y),u(e,r),u(e,a),u(e,s);for(let x=0;x<4;x+=1)i[x].m(s,null);u(e,n),c&&c.m(e,null),u(e,t),u(e,d),u(e,p),u(e,w),S(m,w,null),h=!0},p(l,[y]){l[0].length>0?c?c.p(l,y):(c=W(l),c.c(),c.m(e,t)):c&&(c.d(1),c=null)},i(l){h||(j(m.$$.fragment,l),h=!0)},o(l){C(m.$$.fragment,l),h=!1},d(l){l&&b(e),J(i,l),c&&c.d(),M(m)}}}function pe(o,e,r){let{params:a}=e,s=[];return oe("groups",n=>{r(0,s=[]),n.forEach(t=>s.push(t.data()))}),o.$$set=n=>{"params"in n&&r(1,a=n.params)},o.$$.update=()=>{o.$$.dirty&2&&a&&console.log("Received Params URL",a)},[s,a]}class he extends L{constructor(e){super();T(this,e,pe,de,H,{params:1})}}function ge(o){let e,r,a,s,n,t,d,p,w,m;var h=o[0];function k(i){return{props:{params:i[1]}}}return h&&(t=new h(k(o))),{c(){e=v(),r=g("main"),a=g("nav"),a.innerHTML=`<h1 class="font-bold text-xl">PWA</h1> 
    <div><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg></div>`,s=v(),n=g("section"),t&&A(t.$$.fragment),d=v(),p=g("footer"),p.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:text-primary hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> 

    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg> 

    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:text-primary hover:cursor-pointer" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>`,w=v(),document.title="PWA - Dev Lucem",f(a,"class","flex justify-between bg-primary px-4 py-2 shadow-lg"),f(n,"class","flex flex-col items-center flex-1 overflow-auto container m-auto"),f(p,"class","flex justify-around py-4 bg-white shadow shadow-4xl"),f(r,"class","flex flex-col h-screen w-screen bg-fade relative")},m(i,c){_(i,e,c),_(i,r,c),u(r,a),u(r,s),u(r,n),t&&S(t,n,null),u(r,d),u(r,p),u(r,w),m=!0},p(i,[c]){const l={};if(c&2&&(l.params=i[1]),h!==(h=i[0])){if(t){ee();const y=t;C(y.$$.fragment,1,0,()=>{M(y,1)}),Z()}h?(t=new h(k(i)),A(t.$$.fragment),j(t.$$.fragment,1),S(t,n,null)):t=null}else h&&t.$set(l)},i(i){m||(t&&j(t.$$.fragment,i),m=!0)},o(i){t&&C(t.$$.fragment,i),m=!1},d(i){i&&b(e),i&&b(r),t&&M(t)}}}let me=!1;function ve(o,e,r){"serviceWorker"in navigator&&navigator.serviceWorker.register("/serviceWorker.js").then(()=>console.log("Service worker registered!")).catch(t=>console.error("Failed to register service worker",t));let a,s;return[["**",he]].forEach(t=>O(t[0],d=>{r(1,s=d.params),r(0,a=t[1])})),O.start(),[a,s,()=>me.postMessage({action:"skipWaiting"})]}class we extends L{constructor(e){super();T(this,e,ve,ge,H,{})}}new we({target:document.getElementById("app")});