import{s as j,n as y,c as x,d as K,u as O,g as R,e as D}from"../chunks/scheduler.b0c1c2c3.js";import{S as L,i as M,g as p,h as d,j as $,f as c,k as m,a as v,x as w,y as g,r as C,s as T,u as H,c as I,v as A,d as b,t as k,w as N}from"../chunks/index.ceb00f88.js";import{p as q}from"../chunks/stores.ce62f060.js";const U=!0,se=Object.freeze(Object.defineProperty({__proto__:null,prerender:U},Symbol.toStringTag,{value:"Module"}));function V(r){let e,n='<a href="/en" class="svelte-1mjjlyi">In English</a>';return{c(){e=p("li"),e.innerHTML=n,this.h()},l(t){e=d(t,"LI",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-yobcrg"&&(e.innerHTML=n),this.h()},h(){m(e,"class","main-nav__item svelte-1mjjlyi")},m(t,s){v(t,e,s)},d(t){t&&c(e)}}}function z(r){let e,n='<a href="/" class="svelte-1mjjlyi">Suomeksi</a>';return{c(){e=p("li"),e.innerHTML=n,this.h()},l(t){e=d(t,"LI",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-tu1t5k"&&(e.innerHTML=n),this.h()},h(){m(e,"class","main-nav__item svelte-1mjjlyi")},m(t,s){v(t,e,s)},d(t){t&&c(e)}}}function W(r){let e,n,t,s;function o(u,_){return _&1&&(s=null),s==null&&(s=!!u[0].url.pathname.startsWith("/en")),s?z:V}let i=o(r,-1),a=i(r);return{c(){e=p("div"),n=p("nav"),t=p("ul"),a.c(),this.h()},l(u){e=d(u,"DIV",{class:!0});var _=$(e);n=d(_,"NAV",{class:!0,id:!0,"aria-label":!0});var f=$(n);t=d(f,"UL",{class:!0});var l=$(t);a.l(l),l.forEach(c),f.forEach(c),_.forEach(c),this.h()},h(){m(t,"class","main-nav__list svelte-1mjjlyi"),m(n,"class","main-nav svelte-1mjjlyi"),m(n,"id","main-nav"),m(n,"aria-label","Main Navigation"),m(e,"class","nav-wrapper svelte-1mjjlyi")},m(u,_){v(u,e,_),w(e,n),w(n,t),a.m(t,null)},p(u,[_]){i!==(i=o(u,_))&&(a.d(1),a=i(u),a&&(a.c(),a.m(t,null)))},i:y,o:y,d(u){u&&c(e),a.d()}}}function F(r,e,n){let t;return x(r,q,s=>n(0,t=s)),[t]}class J extends L{constructor(e){super(),M(this,e,F,W,j,{})}}function P(r){let e,n=`kohtuus piste org, jonka tekijä on <a href="https://kohtuus.org" rel="cc:attributionURL">Kohtuus ry</a>, on lisensoitu
			<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fi">Creative Commons Nimeä-EiKaupallinen-JaaSamoin 4.0 Kansainvälinen -käyttöluvalla.</a>.`;return{c(){e=p("small"),e.innerHTML=n},l(t){e=d(t,"SMALL",{"data-svelte-h":!0}),g(e)!=="svelte-1pw1syr"&&(e.innerHTML=n)},m(t,s){v(t,e,s)},d(t){t&&c(e)}}}function B(r){let e,n=`kohtuus dot org by <a href="https://kohtuus.org" rel="cc:attributionURL">Kohtuus ry</a>
			is licensed under a
			<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.`;return{c(){e=p("small"),e.innerHTML=n},l(t){e=d(t,"SMALL",{"data-svelte-h":!0}),g(e)!=="svelte-uh9koj"&&(e.innerHTML=n)},m(t,s){v(t,e,s)},d(t){t&&c(e)}}}function G(r){let e,n;function t(i,a){return a&1&&(n=null),n==null&&(n=!!i[0].url.pathname.startsWith("/en")),n?B:P}let s=t(r,-1),o=s(r);return{c(){e=p("div"),o.c(),this.h()},l(i){e=d(i,"DIV",{id:!0,class:!0});var a=$(e);o.l(a),a.forEach(c),this.h()},h(){m(e,"id","siteinfo"),m(e,"class","svelte-16xn9u2")},m(i,a){v(i,e,a),o.m(e,null)},p(i,[a]){s!==(s=t(i,a))&&(o.d(1),o=s(i),o&&(o.c(),o.m(e,null)))},i:y,o:y,d(i){i&&c(e),o.d()}}}function Q(r,e,n){let t;return x(r,q,s=>n(0,t=s)),[t]}class X extends L{constructor(e){super(),M(this,e,Q,G,j,{})}}function Y(r){let e,n,t,s,o,i,a,u;n=new J({});const _=r[1].default,f=K(_,r,r[0],null);return a=new X({}),{c(){e=p("header"),C(n.$$.fragment),t=T(),s=p("main"),f&&f.c(),o=T(),i=p("footer"),C(a.$$.fragment),this.h()},l(l){e=d(l,"HEADER",{class:!0});var h=$(e);H(n.$$.fragment,h),h.forEach(c),t=I(l),s=d(l,"MAIN",{class:!0});var E=$(s);f&&f.l(E),E.forEach(c),o=I(l),i=d(l,"FOOTER",{class:!0});var S=$(i);H(a.$$.fragment,S),S.forEach(c),this.h()},h(){m(e,"class","svelte-k7qw4o"),m(s,"class","svelte-k7qw4o"),m(i,"class","svelte-k7qw4o")},m(l,h){v(l,e,h),A(n,e,null),v(l,t,h),v(l,s,h),f&&f.m(s,null),v(l,o,h),v(l,i,h),A(a,i,null),u=!0},p(l,[h]){f&&f.p&&(!u||h&1)&&O(f,_,l,l[0],u?D(_,l[0],h,null):R(l[0]),null)},i(l){u||(b(n.$$.fragment,l),b(f,l),b(a.$$.fragment,l),u=!0)},o(l){k(n.$$.fragment,l),k(f,l),k(a.$$.fragment,l),u=!1},d(l){l&&(c(e),c(t),c(s),c(o),c(i)),N(n),f&&f.d(l),N(a)}}}function Z(r,e,n){let{$$slots:t={},$$scope:s}=e;return r.$$set=o=>{"$$scope"in o&&n(0,s=o.$$scope)},[s,t]}class le extends L{constructor(e){super(),M(this,e,Z,Y,j,{})}}export{le as component,se as universal};
