(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"72c8e8c1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"94870893"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2395:function(e,t,n){},2916:function(e,t,n){},"4dad":function(e,t,n){},"57ae":function(e,t,n){"use strict";var r=n("4dad"),o=n.n(r);o.a},"79eb":function(e,t,n){"use strict";var r=n("2916"),o=n.n(r);o.a},"7c55":function(e,t,n){"use strict";var r=n("2395"),o=n.n(r);o.a},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"@/assets/projects/projects.css",type:"text/css"}}),n("Header"),n("div",{staticClass:"main"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1),n("Footer")],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"nav-bar"},[n("router-link",{attrs:{to:"/"}},[e._v("About me")]),n("router-link",{attrs:{to:"/game-projects"}},[e._v("Games")]),n("router-link",{attrs:{to:"/app-projects"}},[e._v("Apps")]),n("router-link",{attrs:{to:"/resume"}},[e._v("Resume")]),n("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1)])},c=[],i=r["a"].extend({name:"Header"}),s=i,l=(n("79eb"),n("2877")),p=Object(l["a"])(s,u,c,!1,null,"2c02eee3",null),f=p.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"right"},[e._v("Reach me at "),n("a",{attrs:{href:"mailto:chriscswe@gmail.com"}},[e._v("chriscswe@gmail.com")]),e._v(" or "),n("router-link",{attrs:{to:"/contact"}},[e._v("through here")])],1)])},m=[],h=r["a"].extend({name:"Footer"}),v=h,b=(n("57ae"),Object(l["a"])(v,d,m,!1,null,"2169e628",null)),g=b.exports,y=function(){function e(){}return e.preloadImages=function(t){t.forEach((function(t){e.preloadImage(t)}))},e.preloadImage=function(e){var t=new Image;t.src=e},e}(),j=y,_=r["a"].extend({name:"App",components:{Header:f,Footer:g}});j.preloadImages(["img/projects/project-1-icon.png","img/projects/project-2-icon.png","img/projects/project-3-icon.png"]);var w=_,k=(n("7c55"),Object(l["a"])(w,o,a,!1,null,null,null)),O=k.exports,x=n("8c4f");r["a"].use(x["a"]);var C=[{path:"/",name:"Root",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/resume",name:"Resume",component:function(){return n.e("about").then(n.bind(null,"1ba2"))}},{path:"/game-projects",name:"Game Projects",component:function(){return n.e("about").then(n.bind(null,"4d97"))}},{path:"/app-projects",name:"App Projects",component:function(){return n.e("about").then(n.bind(null,"5ea9"))}},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/404",name:"NotFound",component:function(){return n.e("about").then(n.bind(null,"8cdb"))}},{path:"*",redirect:"/404"}],E=new x["a"]({routes:C}),P=E;r["a"].config.productionTip=!1,new r["a"]({router:P,render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.efff77cc.js.map