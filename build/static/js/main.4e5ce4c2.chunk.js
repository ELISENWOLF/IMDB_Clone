(this["webpackJsonpmovie-series-app"]=this["webpackJsonpmovie-series-app"]||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(13),r=a.n(s),i=(a(106),a(69)),o=a(15),l=(a(107),a(108),a(2)),d=function(){return Object(l.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"header",children:"IMDB"})},u=a(9),j=a(207),b=a(210),p=a(212),f=a(92),O=a.n(f),h=a(91),m=a.n(h),v=a(64),g=a.n(v),x=a(90),_=a.n(x),y=Object(j.a)({root:{width:"100%",position:"fixed",bottom:0,backgroundColor:"rgb(49, 49, 49)",zIndex:100}});function w(){var e=y(),t=c.a.useState(0),a=Object(u.a)(t,2),s=a[0],r=a[1],i=Object(o.f)();return Object(n.useEffect)((function(){0===s?i.push("/"):1===s?i.push("/movies"):2===s?i.push("/series"):3===s&&i.push("/search")}),[s,i]),Object(l.jsxs)(b.a,{value:s,onChange:function(e,t){r(t)},showLabels:!0,className:e.root,children:[Object(l.jsx)(p.a,{style:{color:"white"},label:"Trending",icon:Object(l.jsx)(_.a,{})}),Object(l.jsx)(p.a,{style:{color:"white"},label:"Movies",icon:Object(l.jsx)(m.a,{})}),Object(l.jsx)(p.a,{style:{color:"white"},label:"TV Series",icon:Object(l.jsx)(O.a,{})}),Object(l.jsx)(p.a,{style:{color:"white"},label:"Search",icon:Object(l.jsx)(g.a,{})})]})}var S=a(20),k=a(14),N=a.n(k),C=a(21),P=a.n(C),T=a(72),M=a(223),B=function(e){var t=e.selectedGenres,a=e.setSelectedGenres,c=e.genres,s=e.setGenres,r=e.type,i=e.setPage,o=function(){var e=Object(S.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/genre/".concat(r,"/list?api_key=").concat("cf31393df7dcf4bffacfe5213e751b57","&language=en-US"));case 2:t=e.sent,a=t.data,s(a.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return o(),function(){s({})}}),[]),Object(l.jsxs)("div",{style:{padding:"6px 0"},children:[t.map((function(e){return Object(l.jsx)(M.a,{style:{margin:2},label:e.name,color:"primary",clickable:!0,size:"small",onDelete:function(){return function(e){a(t.filter((function(t){return t.id!==e.id}))),s([].concat(Object(T.a)(c),[e])),i(1)}(e)}},e.id)})),c.map((function(e){return Object(l.jsx)(M.a,{style:{margin:2},label:e.name,clickable:!0,size:"small",onClick:function(){return function(e){a([].concat(Object(T.a)(t),[e])),s(c.filter((function(t){return t.id!==e.id}))),i(1)}(e)}},e.id)}))]})},E=a(215),G="https://image.tmdb.org/t/p/w300",I="https://image.tmdb.org/t/p/w500",D="https://www.movienewz.com/img/films/poster-holder.jpg",U=(a(135),a(222)),z=a(213),F=a(174),V=(a(136),a(214)),J=a(94),L=a.n(J),q=a(93),A=a.n(q),R=(a(169),a(170),function(e){return e.preventDefault()}),W=function(e){var t=e.id,a=e.media_type,c=Object(n.useState)([]),s=Object(u.a)(c,2),r=s[0],i=s[1],o=r.map((function(e){return Object(l.jsxs)("div",{className:"carouselItem",children:[Object(l.jsx)("img",{src:e.profile_path?"".concat(G,"/").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:R,className:"carouselItem__img"}),Object(l.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})})),d=function(){var e=Object(S.a)(N.a.mark((function e(){var n,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(t,"/credits?api_key=").concat("cf31393df7dcf4bffacfe5213e751b57","&language=en-US"));case 2:n=e.sent,c=n.data,i(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),Object(l.jsx)(A.a,{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:o,autoPlay:!0})},H=Object(j.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}}));function K(e){var t=e.children,a=e.media_type,c=e.id,s=H(),r=Object(n.useState)(!1),i=Object(u.a)(r,2),o=i[0],d=i[1],j=Object(n.useState)(),b=Object(u.a)(j,2),p=b[0],f=b[1],O=Object(n.useState)(),h=Object(u.a)(O,2),m=h[0],v=h[1],g=function(){var e=Object(S.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"?api_key=").concat("cf31393df7dcf4bffacfe5213e751b57","&language=en-US"));case 2:t=e.sent,n=t.data,f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(S.a)(N.a.mark((function e(){var t,n,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/".concat(a,"/").concat(c,"/videos?api_key=").concat("cf31393df7dcf4bffacfe5213e751b57","&language=en-US"));case 2:n=e.sent,s=n.data,v(null===(t=s.results[0])||void 0===t?void 0:t.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g(),x()}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"media",style:{cursor:"pointer"},color:"inherit",onClick:function(){d(!0)},children:t}),Object(l.jsx)(U.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:s.modal,open:o,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:z.a,BackdropProps:{timeout:500},children:Object(l.jsx)(F.a,{in:o,children:p&&Object(l.jsx)("div",{className:s.paper,children:Object(l.jsxs)("div",{className:"ContentModal",children:[Object(l.jsx)("img",{src:p.poster_path?"".concat(I,"/").concat(p.poster_path):D,alt:p.name||p.title,className:"ContentModal__portrait"}),Object(l.jsx)("img",{src:p.backdrop_path?"".concat(I,"/").concat(p.backdrop_path):"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:p.name||p.title,className:"ContentModal__landscape"}),Object(l.jsxs)("div",{className:"ContentModal__about",children:[Object(l.jsxs)("span",{className:"ContentModal__title",children:[p.name||p.title," (",(p.first_air_date||p.release_date||"-----").substring(0,4),")"]}),p.tagline&&Object(l.jsx)("i",{className:"tagline",children:p.tagline}),Object(l.jsx)("span",{className:"ContentModal__description",children:p.overview}),Object(l.jsx)("div",{children:Object(l.jsx)(W,{id:c,media_type:a})}),Object(l.jsx)(V.a,{variant:"contained",startIcon:Object(l.jsx)(L.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(m),children:"Watch the Trailer"})]})]})})})})]})}var Q=function(e){var t=e.id,a=e.poster,n=e.title,c=e.date,s=e.media_type,r=e.vote_average;return Object(l.jsxs)(K,{media_type:s,id:t,children:[Object(l.jsx)(E.a,{badgeContent:r,color:r>6?"primary":"secondary"}),Object(l.jsx)("img",{className:"poster",src:a?"".concat(G).concat(a):D,alt:n}),Object(l.jsx)("b",{className:"title",children:n}),Object(l.jsxs)("span",{className:"subTitle",children:["tv"===s?"TV Series":"Movie",Object(l.jsx)("span",{className:"subTitle",children:c})]})]})},X=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},Y=a(221),Z=a(95),$=a(216),ee=Object(Z.a)({palette:{type:"dark"}});function te(e){var t=e.setPage,a=e.numOfPages,n=void 0===a?10:a;return Object(l.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(l.jsx)($.a,{theme:ee,children:Object(l.jsx)(Y.a,{onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},count:n,color:"secondary",hideNextButton:!0,hidePrevButton:!0})})})}var ae=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(u.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(1),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),O=Object(u.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)(),g=Object(u.a)(v,2),x=g[0],_=g[1],y=X(i),w=function(){var e=Object(S.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("cf31393df7dcf4bffacfe5213e751b57","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(b,"&with_genres=").concat(y));case 2:t=e.sent,a=t.data,m(a.results),_(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),w()}),[y,b]),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pageTitle",children:"Discover Movies"}),Object(l.jsx)(B,{type:"movie",selectedGenres:i,setSelectedGenres:o,genres:a,setGenres:c,setPage:p}),Object(l.jsx)("div",{className:"trending",children:h&&h.map((function(e){return Object(l.jsx)(Q,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average},e.id)}))}),x>1&&Object(l.jsx)(te,{setPage:p,numOfPages:x})]})},ne=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(u.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(1),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),O=Object(u.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)(),g=Object(u.a)(v,2),x=g[0],_=g[1],y=X(i),w=function(){var e=Object(S.a)(N.a.mark((function e(){var t,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/discover/tv?api_key=".concat("cf31393df7dcf4bffacfe5213e751b57","&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(b,"&with_genres=").concat(y));case 2:t=e.sent,a=t.data,m(a.results),_(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),w()}),[y,b]),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pageTitle",children:"Discover Series"}),Object(l.jsx)(B,{type:"tv",selectedGenres:i,setSelectedGenres:o,genres:a,setGenres:c,setPage:p}),Object(l.jsx)("div",{className:"trending",children:h&&h.map((function(e){return Object(l.jsx)(Q,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),x>1&&Object(l.jsx)(te,{setPage:p,numOfPages:x})]})},ce=(a(171),function(){var e=Object(n.useState)(1),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(u.a)(s,2),i=r[0],o=r[1],d=function(){var e=Object(S.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("cf31393df7dcf4bffacfe5213e751b57","&page=").concat(a));case 2:t=e.sent,n=t.data,o(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),d()}),[a]),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"pageTitle",children:"Trending Today"}),Object(l.jsx)("div",{className:"trending",children:i&&i.map((function(e){return Object(l.jsx)(Q,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(l.jsx)(te,{setPage:c})]})}),se=a(219),re=a(220),ie=a(217),oe=(a(172),function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(u.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(1),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(n.useState)([]),O=Object(u.a)(f,2),h=O[0],m=O[1],v=Object(n.useState)(),x=Object(u.a)(v,2),_=x[0],y=x[1],w=Object(Z.a)({palette:{type:"dark",primary:{main:"#fff"}}}),k=function(){var e=Object(S.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("cf31393df7dcf4bffacfe5213e751b57","&language=en-US&query=").concat(i,"&page=").concat(b,"&include_adult=false"));case 3:t=e.sent,n=t.data,m(n.results),y(n.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),k()}),[a,b]),Object(l.jsxs)("div",{children:[Object(l.jsxs)($.a,{theme:w,children:[Object(l.jsxs)("div",{className:"search",children:[Object(l.jsx)(se.a,{style:{flex:1},className:"searchBox",label:"Search",variant:"filled",onChange:function(e){return o(e.target.value)}}),Object(l.jsx)(V.a,{onClick:k,variant:"contained",style:{marginLeft:10},children:Object(l.jsx)(g.a,{fontSize:"large"})})]}),Object(l.jsxs)(re.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),p(1)},style:{paddingBottom:5},"aria-label":"disabled tabs example",children:[Object(l.jsx)(ie.a,{style:{width:"50%"},label:"Search Movies"}),Object(l.jsx)(ie.a,{style:{width:"50%"},label:"Search TV Series"})]})]}),Object(l.jsxs)("div",{className:"trending",children:[h&&h.map((function(e){return Object(l.jsx)(Q,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.id)})),i&&!h&&(a?Object(l.jsx)("h2",{children:"No Series Found"}):Object(l.jsx)("h2",{children:"No Movies Found"}))]}),_>1&&Object(l.jsx)(te,{setPage:p,numOfPages:_})]})}),le=a(218);var de=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(d,{}),Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(le.a,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/",component:ce,exact:!0}),Object(l.jsx)(o.a,{path:"/movies",component:ae}),Object(l.jsx)(o.a,{path:"/series",component:ne}),Object(l.jsx)(o.a,{path:"/search",component:oe})]})})}),Object(l.jsx)(w,{})]})};r.a.render(Object(l.jsx)(de,{}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.4e5ce4c2.chunk.js.map