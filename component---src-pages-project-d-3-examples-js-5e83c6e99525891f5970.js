(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{167:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(0),i=n.n(o),l=n(819),c=n.n(l),s=n(340),u=n.n(s),p=(n(184),n(186)),d=n.n(p),m=n(473),f=n(284),h=(n(241),n(65)),g=n(63),b=n(33),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(e){var t=void 0===e?this.props:e,n=t.title,r=t.type,a=t.description;d()(this.props,"data.site.siteMetadata.title");return this.props.page===g.a.index&&null===this.props.sandbox&&(this.props.dispatchPageState(g.a[r]),this.props.dispatchPostState(n)),i.a.createElement(f.a,{location:this.props.location},i.a.createElement(u.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:a}],title:n}),i.a.createElement(m.a,null,i.a.createElement("div",{style:{margin:"20px 0"}},this.props.children)))},t}(i.a.Component),E=Object(h.b)(function(e){return{page:e.page,post:e.post}},function(e){return{dispatchPageState:function(t){return e(Object(b.c)(t))},dispatchPostState:function(t){return e(Object(b.d)(t))}}})(y),v=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement(E,{title:"d3 Example",description:"Weather Graph Using D3",type:"project"},i.a.createElement("h3",{style:{textAlign:"center"}},"Warning: In Development"),i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("a",{target:"_blank",href:"https://github.com/redstubble/reactjs-d3-weather"},"https://github.com/redstubble/reactjs-d3-weather")),i.a.createElement(c.a,null))},t}(o.Component);t.default=v},184:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(178),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(32);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(192),p=n.n(u);n.d(t,"PageRenderer",function(){return p.a});var d=n(48);n.d(t,"parsePath",function(){return d.a});var m=a.a.createContext({}),f=function(e){return a.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},187:function(e,t){e.exports={red:"#4f2323",blue:"#4472b9",orange:"#e18728"}},192:function(e,t,n){var r;e.exports=(r=n(216))&&r.default||r},216:function(e,t,n){"use strict";n.r(t);n(31);var r=n(0),a=n.n(r),o=n(1),i=n.n(o),l=n(67),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},241:function(e,t,n){"use strict";var r=n(311),a=n.n(r),o=n(312),i=n.n(o),l=new a.a(i.a);l.rhythm,l.scale},262:function(e,t,n){},284:function(e,t,n){"use strict";var r=n(10),a=n.n(r),o=n(0),i=n.n(o),l=n(196),c=function(){return i.a.createElement("h1",{style:{textAlign:"center"},className:"redstubble-logo"},i.a.createElement("a",{href:"/"},"RE",i.a.createElement("span",null,"D"),"STUBBLE"))},s=n(345),u=n(187),p={textDecoration:"none",color:"inherit"},d=Object(l.default)(function(e){return i.a.createElement(s.FaGithub,e)}).withConfig({displayName:"headerIconLinks__StyledFaGithub",componentId:"vnkzhx-0"})(["transition:0.4s;margin:0 30px;&:hover{transition:0.7s;fill:",";}"],u.red),m=Object(l.default)(function(e){return i.a.createElement(s.FaMedium,e)}).withConfig({displayName:"headerIconLinks__StyledFaMedium",componentId:"vnkzhx-1"})(["transition:0.4s;margin:0 30px;&:hover{transition:0.7s;fill:",";}"],u.blue),f=function(){return i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("a",{style:p,href:"https://github.com/redstubble",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(d,{size:50})),i.a.createElement("a",{style:p,href:"https://medium.com/@redstubble",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(m,{size:50})))},h=(n(262),function(){return i.a.createElement("div",{style:{backgroundImage:"linear-gradient(#87cefa, rgb(208, 240, 255))"},className:["header-banner","clouds"].join(" ")},i.a.createElement("div",{className:["cloud","one"].join(" "),"data-speed":"35000"}),i.a.createElement("div",{className:["cloud","two"].join(" "),"data-speed":"45000","data-delay":"15000"})," ",i.a.createElement(c,null),i.a.createElement(f,null),i.a.createElement("div",{className:["cloud","three"].join(" "),"data-speed":"40000"}),i.a.createElement("div",{className:["cloud","four"].join(" "),"data-speed":"38000","data-delay":"20000"}))}),g=function(e){var t=(void 0===e?(void 0).props:e).children;return i.a.createElement("div",{style:{backgroundImage:"linear-gradient(rgb(208, 240, 255), #fff)"}},t)},b=(n(31),n(65)),y=(n(93),n(68),n(346),n(66),n(375)),E=n(473),v=n(36),k=n(363),w=n(348),x=n.n(w),j=n(184),C=n(63),P=n(33),I=Object(l.default)(v.a).withConfig({displayName:"headerNavItem__CustomIcon",componentId:"fy082u-0"})(["background-color:'#fff';border-bottom-left-radius:3.5rem;border-top-left-radius:3.5rem;"]),S=Object(l.default)(k.a).withConfig({displayName:"headerNavItem__ButtonFront",componentId:"fy082u-1"})(["&&&{border-radius:inherit;border-radius:3.5rem;color:#fff;background-color:",";&:hover{background-color:",";color:#fff;}}"],function(e){return e.colorprop},function(e){return e.colorprop}),N=Object(l.default)(S).withConfig({displayName:"headerNavItem__ButtonBack",componentId:"fy082u-2"})(["&&&{border-radius:inherit;border-width:3px;border-style:solid;border-color:",";color:",";background-color:#fff;&:hover{color:",";background-color:#fff;}}"],function(e){return e.colorprop},function(e){return e.colorprop},function(e){return e.colorprop}),_=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(e){var t=this,n=void 0===e?this.props:e,r=n.post,a=n.type,o=n.title,l=n.color;return r?i.a.createElement(N,{colorprop:l,size:"large",onClick:function(){t.props.dispatchPostState(null),t.props.post||t.props.dispatchPageState(C.a.index),"/"!==window.location.pathname&&Object(j.navigate)("/")},labelPosition:"left",icon:!0},o,i.a.createElement(I,{style:{backgroundColor:"#fff"},name:"left arrow"})):i.a.createElement(x.a,{isFlipped:this.props.page===this.props.type},i.a.createElement(S,{colorprop:l,key:"front",size:"large",onClick:function(){t.props.dispatchPostState(null),t.props.dispatchPageState(a)}},o),i.a.createElement(N,{colorprop:l,key:"back",size:"large",onClick:function(){t.props.post||t.props.dispatchPageState(C.a.index),t.props.dispatchPostState(null)}},o))},t}(i.a.Component),O=Object(b.b)(function(e){return{page:e.page,post:e.post}},function(e){return{dispatchPageState:function(t){return e(Object(P.c)(t))},dispatchPostState:function(t){return e(Object(P.d)(t))}}})(_),L=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).renderItems=function(e){return Object.entries(e).map(function(e){var t=e[1];return i.a.createElement(y.a.Column,{key:""+t.title,mobile:16,tablet:5,computer:4,textAlign:"center",style:{height:"5rem"}},i.a.createElement(O,{type:C.a[""+t.pageType],color:""+t.color,title:""+t.title}))})},t}return a()(t,e),t.prototype.render=function(e){var t=(void 0===e?this.props:e).items;return i.a.createElement(E.a,{style:{padding:"20px"}},i.a.createElement(y.a,{centered:!0},this.renderItems(t)),i.a.createElement("div",{style:{display:"table",clear:"both"}}))},t}(o.Component),R=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={index:{Projects:{title:"Projects",color:u.red,pageType:C.a.projects},Experience:{title:"Experience",color:u.blue,pageType:C.a.experiences},Resume:{title:"Resume",color:u.orange,pageType:C.a.resume}},post:{Post:{color:u.blue}}},t.getNavItems=function(e,n){return t.props.post?Object.assign({},t.state.post,{Post:Object.assign({},t.state.post.Post,{title:t.props.post,pageType:t.props.page})}):t.state.index},t}return a()(t,e),t.prototype.render=function(){var e=this.getNavItems(this.props.page,this.props.post);return i.a.createElement(L,{items:e})},t}(o.Component),T=Object(b.b)(function(e){return{page:e.page,post:e.post}},null)(R),A=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(h,null),i.a.createElement(g,null,i.a.createElement(T,null)))},t}(o.Component),q=(n(178),n(52)),z=Object(l.default)(q.a).withConfig({displayName:"footer__CustomLabel",componentId:"sc-1kiiktv-0"})(["color:#fff !important;border-radius:15px !important;"]),G=Object(l.default)(z).withConfig({displayName:"footer__RedLabel",componentId:"sc-1kiiktv-1"})(["background-color:"," !important;"],u.red),B=Object(l.default)(z).withConfig({displayName:"footer__BlueLabel",componentId:"sc-1kiiktv-2"})(["background-color:"," !important;"],u.blue),F=Object(l.default)(z).withConfig({displayName:"footer__OrangeLabel",componentId:"sc-1kiiktv-3"})(["background-color:"," !important;"],u.orange),Q=function(){return i.a.createElement(E.a,{id:"pdf-container"},i.a.createElement(y.a,{centered:!0},i.a.createElement(y.a.Column,{mobile:16,tablet:8,computer:8,textAlign:"center"},i.a.createElement(q.a.Group,null,i.a.createElement(G,null,"JS"),i.a.createElement(G,null,"C#"),i.a.createElement(G,null,"PHP"),i.a.createElement(G,null,"SQL"),i.a.createElement(G,null,"MYSQL"))),i.a.createElement(y.a.Column,{mobile:16,tablet:8,computer:8,textAlign:"center"},i.a.createElement(q.a.Group,null,i.a.createElement(F,null,"React"),i.a.createElement(F,null,"React Native"),i.a.createElement(F,null,"Silverstripe"),i.a.createElement(F,null,"ASP.NET"),i.a.createElement(F,null,"Linux"))),i.a.createElement(B,{size:"large",content:"john [at] redstubble [dot] com",icon:"mail"})))},D=l.default.div.withConfig({displayName:"layout__LineBreak",componentId:"sc-1xvv2zr-0"})(["width:100%;border-top-width:2px;border-top-style:solid;border-top-color:",";transform:skew(1.5deg,-1.5deg);"],u.orange),M=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return i.a.createElement("div",{style:{marginBottom:"20px"}},i.a.createElement(A,null),i.a.createElement("div",{style:{margin:"15px 0"}},i.a.createElement(D,null),t,i.a.createElement(D,{style:{borderTopColor:u.blue,transform:"skew(-1.5deg, 1.5deg)"}})),i.a.createElement(Q,null))},t}(i.a.Component);t.a=M}}]);
//# sourceMappingURL=component---src-pages-project-d-3-examples-js-5e83c6e99525891f5970.js.map