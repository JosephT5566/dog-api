(this["webpackJsonpdog-api"]=this["webpackJsonpdog-api"]||[]).push([[0],{147:function(e,t,a){e.exports=a(328)},328:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(0),c=a.n(r),i=a(34),l=a.n(i),s=a(29),u=a(4),o=c.a.createContext(),m=o,d=function(){var e=c.a.useContext(m),t=e.delayState,a=e.setDelayState;return c.a.createElement("div",{className:"ui secondary pointing menu"},c.a.createElement(s.b,{to:"/dog-api/list",className:"item"},"Dog Api"),c.a.createElement("button",{className:!0===t?"ui button red":"ui button green",onClick:function(){a(!t)}},!0===t?"Normal":"Delay"),c.a.createElement("div",{className:"right menu"},c.a.createElement(s.b,{to:"/dog-api/list",className:"item"},"Breeds list"),c.a.createElement(s.b,{to:"/dog-api/random",className:"item"},"Random image")))},v=a(13),f=a.n(v),b=a(23),p=a(49),g=a(75),E=a(126),h=a.n(E),y=a(333),N=a(332),j=function(e){var t=e.breed,a=e.setBreed,i=e.subBreedsList,l=Object(r.useState)(null),s=Object(n.a)(l,2),u=s[0],o=s[1];return Object(r.useEffect)((function(){u&&a("".concat(t,"/").concat(u))}),[u,a,t]),i.map((function(e,t){return c.a.createElement("div",{key:t,style:{padding:"3px 0",marginLeft:"8%",cursor:"pointer"},onClick:function(){return o(e)}},c.a.createElement("i",{className:"ui icon caret right"}),e)}))},O=function(e){var t=e.breedsList,a=e.searchKey,i=e.setBreed,l=Object(r.useState)(t),s=Object(n.a)(l,2),u=s[0],o=s[1],m=Object(r.useState)(null),d=Object(n.a)(m,2),v=d[0],f=d[1],b=Object(r.useState)(),E=Object(n.a)(b,2),O=E[0],x=E[1];Object(r.useEffect)((function(){var e=Object.keys(t).filter((function(e){return e.toLowerCase().indexOf(a.toLowerCase())>-1})).reduce((function(e,a){return Object(g.a)(Object(g.a)({},e),{},Object(p.a)({},a,t[a]))}),{});o(e)}),[a,t]),Object(r.useEffect)((function(){v&&i("".concat(v))}),[v,i]);return h.a.isEmpty(u)?c.a.createElement("div",{className:"ui placeholder"},c.a.createElement("div",{className:"very long line"}),c.a.createElement("div",{className:"very long line"}),c.a.createElement("div",{className:"very long line"}),c.a.createElement("div",{className:"very long line"}),c.a.createElement("div",{className:"very long line"}),c.a.createElement("div",{className:"very long line"}),c.a.createElement("div",{className:"very long line"}),c.a.createElement("div",{className:"very long line"}),c.a.createElement("div",{className:"very long line"}),c.a.createElement("div",{className:"very long line"})):c.a.createElement(N.a,null,Object.keys(u).map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement(N.a.Title,{active:O===t,index:t,onClick:function(t,a){f(e),function(e){var t=e.index;x(O===t?-1:t)}(a)},style:{padding:"3px 0"}},function(e,t){return c.a.createElement("div",{style:{display:"inline-flex"}},c.a.createElement("div",{style:function(e){return e?{}:{visibility:"hidden"}}(t)},c.a.createElement(y.a,{name:"dropdown"})),c.a.createElement("div",null,e))}(e,u[e].length>0)),c.a.createElement(N.a.Content,{active:O===t,style:{padding:"0px"}},c.a.createElement(j,{breed:e,subBreedsList:u[e],setBreed:i})))})))},x=a(136),k=a.n(x);function w(e){return new Promise((function(t){setTimeout(t,e)}))}var S=function(e){var t=e.breed,a=Object(r.useState)([]),i=Object(n.a)(a,2),l=i[0],s=i[1],u=Object(r.useState)(!0),o=Object(n.a)(u,2),d=o[0],v=o[1],p=Object(r.useRef)(!0),g=Object(r.useContext)(m).delayState;Object(r.useEffect)((function(){return function(){p.current=!1}}),[]),Object(r.useEffect)((function(){var e="",a=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!g){e.next=3;break}return e.next=3,w(3e3);case 3:return e.prev=3,e.next=6,fetch(t,{});case 6:return e.next=8,e.sent.json();case 8:a=e.sent,n=a.message,(Array.isArray(n)?n:[n]).map((function(e){return E(e),e})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}();switch(t){case"":break;case"RANDOM":e="https://dog.ceo/api/breeds/image/random";break;default:e="https://dog.ceo/api/breed/".concat(t,"/images")}a(e)}),[t,g]);var E=function(e){var t=new Image;t.addEventListener("load",(function(){p.current&&s((function(a){return a.concat({src:e,thumbnail:e,thumbnailWidth:t.naturalWidth,thumbnailHeight:t.naturalHeight})}))})),t.src=e},h=function(){!0===p.current&&(p.current=!1,v(!1))};return 0===l.length?c.a.createElement("div",{className:"ui grid"},c.a.createElement("div",{className:"four column row"},c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"ui placeholder"},c.a.createElement("div",{className:" square image"}))),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"ui placeholder"},c.a.createElement("div",{className:" square image"}))),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"ui placeholder"},c.a.createElement("div",{className:" square image"}))),c.a.createElement("div",{className:"column"},c.a.createElement("div",{className:"ui placeholder"},c.a.createElement("div",{className:" square image"}))))):c.a.createElement("div",{className:"gallery"},c.a.createElement(k.a,{images:l,enableLightbox:!1,enableImageSelection:!1,margin:4}),c.a.createElement("button",{className:"circular ui icon red huge button",style:!0===d?{position:"absolute",bottom:"30px",right:"30px"}:{display:"none"},onClick:h},c.a.createElement("i",{className:"icon stop"})))},C=a(50),L=a.n(C),R=L.a.create({baseURL:"https://dog.ceo/api/breeds/"});L.a.create({baseURL:"https://dog.ceo/api/breed/"}),L.a.create({baseURL:"https://dog.ceo/api/breeds/image/random"});var B=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],i=t[1],l=Object(r.useState)(""),s=Object(n.a)(l,2),u=s[0],o=s[1],d=Object(r.useState)({}),v=Object(n.a)(d,2),p=v[0],g=v[1],E=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){return e.current=!1}}),[]),Object(r.useRef)((function(t){e.current&&t&&t()})).current}(),h=Object(r.useContext)(m).delayState;return Object(r.useEffect)((function(){function e(){return(e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=3;break}return e.next=3,w(3e3);case 3:return e.next=5,R.get("/list/all");case 5:t=e.sent,E((function(){g(t.data.message),o("RANDOM")}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){g({}),o("")}}),[h,E]),c.a.createElement("div",{className:"ui equal height grid",style:{height:"inherit"}},c.a.createElement("div",{className:"four wide column",style:{height:"inherit"}},c.a.createElement("div",{className:"ui search",style:{height:"10%"}},c.a.createElement("input",{className:"prompt",type:"text",placeholder:"Search...",value:a,style:{width:"95%"},onChange:function(e){i(e.target.value)}})),c.a.createElement("div",{style:{height:"90%",overflow:"auto"}},c.a.createElement(O,{breedsList:p,searchKey:a,setBreed:o}))),c.a.createElement("div",{className:"twelve wide column",style:{height:"inherit"}},c.a.createElement("div",{style:{overflow:"auto",height:"100%"}},c.a.createElement(S,{key:u,breed:u}))))},D=function(e){var t=e.imageUrl;return""===t?c.a.createElement("div",{className:"ui placeholder",style:{margin:"0 auto"}},c.a.createElement("div",{className:"rectangular image"})):c.a.createElement("div",null,c.a.createElement("img",{className:"ui medium centered rounded image",src:t,alt:t}))},q=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],i=t[1],l=Object(r.useState)("idle"),s=Object(n.a)(l,2),u=s[0],o=s[1],d=Object(r.useContext)(m).delayState,v="https://dog.ceo/api/breeds/image/random";Object(r.useEffect)((function(){(function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("idle"===u){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,o("loading"),!d){e.next=7;break}return e.next=7,w(3e3);case 7:return e.next=9,fetch(v);case 9:return t=e.sent,e.next=12,t.json();case 12:a=e.sent,n=a.message,i(n),o("ready"),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),alert(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(b.a)(f.a.mark((function e(){var t,a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("loading"!==u){e.next=2;break}return e.abrupt("return");case 2:if(i(""),e.prev=3,o("loading"),!d){e.next=8;break}return e.next=8,w(3e3);case 8:return e.next=10,fetch(v);case 10:return t=e.sent,e.next=13,t.json();case 13:a=e.sent,n=a.message,i(n),o("ready"),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),alert(e.t0);case 22:case"end":return e.stop()}}),e,null,[[3,19]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("h1",{className:"ui header"},"Get Random Image"),c.a.createElement("button",{className:"ui orange button",onClick:p},"Get Image"),c.a.createElement(D,{imageUrl:a}))},A=function(){return c.a.createElement("div",{className:"ui container"},c.a.createElement(s.a,null,c.a.createElement("div",null,c.a.createElement("div",{className:"header",style:{height:"10vh"}},c.a.createElement(d,null)),c.a.createElement("div",{className:"content",style:{height:"90vh"}},c.a.createElement(u.a,{path:"/dog-api",to:"/dog-api/list"}),c.a.createElement(u.b,{path:"/dog-api/list",exact:!0,component:B}),c.a.createElement(u.b,{path:"/dog-api/random",exact:!0,component:q})))))},I=m.Provider,U=function(){var e=c.a.useState(!1),t=Object(n.a)(e,2),a=t[0],r=t[1];return c.a.createElement(I,{value:{delayState:a,setDelayState:r}},c.a.createElement(A,null))};l.a.render(c.a.createElement(U,null),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.cf05f79f.chunk.js.map