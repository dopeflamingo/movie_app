(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},62:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(14),n=s.n(c),r=(s(40),s(12)),i=s(3),o=(s(41),s(2));var l=function(e){return console.log(e),Object(o.jsxs)("div",{className:"about__container",children:[Object(o.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(o.jsx)("span",{children:"- George Orwell, 1984"})]})},j=s(19),u=s.n(j),m=s(32),d=s(13),b=s(33),h=s.n(b),O=s(87),x=(s(62),function(e){var t=e.title,s=e.year,a=e.summary,c=e.poster,n=e.genres;return Object(o.jsx)("div",{className:"movie",children:Object(o.jsxs)(r.b,{to:{pathname:"/movie-detail",state:{year:s,title:t,summary:a,poster:c,genres:n}},children:[Object(o.jsx)("img",{src:c,alt:t,title:t}),Object(o.jsxs)("div",{className:"movie__data",children:[Object(o.jsx)("h3",{className:"movie__title",children:t}),Object(o.jsx)("h5",{className:"movie__year",children:s}),Object(o.jsx)("ul",{className:"movie__genres",children:n.map((function(e,t){return Object(o.jsx)("li",{className:"movie__genres",children:e},t)}))}),Object(o.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]}),Object(o.jsx)(O.a,{variant:"contained",color:"inherit",children:"Click"})]})]})})}),p=(s(68),s(72),function(){var e=Object(m.a)(u.a.mark((function e(t,s){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=e.sent,console.log(a.data.data.movies),t(a.data.data.movies),s(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}()),v=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)([]),r=Object(d.a)(n,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){console.log("updated"),p(l,c)}),[]),Object(o.jsx)("section",{className:"container",children:s?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(o.jsx)("div",{className:"movies",children:i.map((function(e){return console.log(e),Object(o.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})};function f(e){console.log(e),Object(a.useEffect)((function(){var t=e.location,s=e.history;void 0===t.state&&s.push("/")}),[]);var t=e.location;return t.state?Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:t.state.poster}),Object(o.jsx)("h2",{children:t.state.title}),Object(o.jsx)("h3",{children:t.state.genres}),t.state.summary]}):null}s(73);var g=function(){return Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)(r.b,{to:"/",children:"Home"}),Object(o.jsx)(r.b,{to:"/about",children:"About"})]})};var _=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(i.a,{path:"/about",component:l}),Object(o.jsx)(i.a,{path:"/",exact:!0,component:v}),Object(o.jsx)(i.a,{path:"/movie-detail",exact:!0,component:f})]})};n.a.render(Object(o.jsx)(_,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.845a117d.chunk.js.map