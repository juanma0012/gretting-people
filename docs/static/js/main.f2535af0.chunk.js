(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,n,t){e.exports=t(37)},31:function(e,n,t){},32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(13),i=t.n(a),c=t(3),u=t(2),l=t(15),s=(t(31),t(16)),g=t(17),p=t(20),f=t(18),v=t(21),m={english:function(e){return e.map(function(e){return"Hello, nice to meet you ".concat(e,", welcome!")})},spanish:function(e){return e.map(function(e){return"Hola, mucho gusto ".concat(e,", bienvenido!")})},french:function(e){return e.map(function(e){return"Bonjour, ravi de vous rencontrer ".concat(e,", bienvenue!")})},portuguese:function(e){return e.map(function(e){return"Ol\xe1, prazer em conhec\xea-lo ".concat(e,", seja bem-vindo!")})},italian:function(e){return e.map(function(e){return"Ciao, piacere di conoscerti ".concat(e,", benvenuto!")})}},d=function(e,n){return{type:"greetingList/SET_GREETINGS",greetings:m[n](e)}},h=(t(32),Object(u.b)(null,function(e){return{onSetPeople:function(n){return e((t=n,function(e,n){var o=t.split("\n").filter(function(e){return""!==e.trim()});e({type:"peopleForm/SET_PEOPLE",people:o});var r=n().languageDropdown.language;e(d(o,r))}));var t}}})(function(e){var n=e.onSetPeople;return r.a.createElement("div",{className:"PeopleForm"},r.a.createElement("textarea",{value:void 0,onChange:function(e){n(e.target.value)}}))})),E=(t(33),Object(u.b)(null,function(e){return{onSetLanguage:function(n){return e((t=n,function(e,n){e({type:"languageDropdown/SET_LANGUAGE",language:t});var o=n().peopleForm.people;e(d(o,t))}));var t}}})(function(e){var n=e.onSetLanguage,t=["english","spanish","french","portuguese","italian"].map(function(e,n){return r.a.createElement("option",{value:e,key:n},e.charAt(0).toUpperCase()+e.slice(1))});return r.a.createElement("div",{className:"LanguageDropdown"},r.a.createElement("select",{value:void 0,onChange:function(e){n(e.target.value)}},t))})),b=function(e){var n=e.text;return r.a.createElement("li",{className:"Greeting"},n)},w=(t(34),Object(u.b)(function(e){return{greetings:e.greetingList.greetings}})(function(e){var n=e.greetings.map(function(e,n){return r.a.createElement(b,{key:n,text:e})});return r.a.createElement("div",{className:"GreetingList"},r.a.createElement("ul",null,n))})),j=(t(35),function(e){function n(){return Object(s.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(v.a)(n,e),Object(g.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Greeting people"),r.a.createElement("br",null),r.a.createElement(h,null),r.a.createElement("br",null),r.a.createElement(E,null),r.a.createElement("br",null),r.a.createElement(w,null))}}]),n}(o.Component)),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var S=t(1),L=t(5),k=t(19),A=function(e,n){return Object(k.a)({},e,n)},G=Object(L.resolveEach)({people:[]},Object(S.a)({},"peopleForm/SET_PEOPLE",function(e,n){return A(e,{people:n.people})})),N=Object(L.resolveEach)({language:"english"},Object(S.a)({},"languageDropdown/SET_LANGUAGE",function(e,n){return A(e,{language:n.language})})),T=Object(L.resolveEach)({greetings:[]},Object(S.a)({},"greetingList/SET_GREETINGS",function(e,n){return A(e,{greetings:n.greetings})})),P=Object(c.c)({peopleForm:G,languageDropdown:N,greetingList:T}),C=Object(c.d)(P,Object(c.a)(l.a));i.a.render(r.a.createElement(u.a,{store:C},r.a.createElement(j,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/gretting-people",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/gretting-people","/service-worker.js");O?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(n,e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.f2535af0.chunk.js.map