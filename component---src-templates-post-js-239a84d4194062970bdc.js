(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,t,n){"use strict";var r=n(225),a=n.n(r),o=n(226),i=n.n(o),c=new a.a(i.a);c.rhythm,c.scale},210:function(e,t,n){},212:function(e,t,n){var r=n(33),a=n(31),o=n(143).f;e.exports=function(e){return function(t){for(var n,i=a(t),c=r(i),l=c.length,u=0,s=[];l>u;)o.call(i,n=c[u++])&&s.push(e?[n,i[n]]:i[n]);return s}}},254:function(e,t,n){"use strict";var r=n(11),a=n.n(r),o=n(0),i=n.n(o),c=n(78),l=function(){return i.a.createElement("h1",{style:{textAlign:"center"},className:"redstubble-logo"},i.a.createElement("a",{href:"#animation"},"RE",i.a.createElement("span",null,"D"),"STUBBLE"))},u=n(264),s=n(58),p={textDecoration:"none",color:"inherit"},d=Object(c.a)(function(e){return i.a.createElement(u.FaGithub,e)}).withConfig({displayName:"headerIconLinks__StyledFaGithub"})(["transition:0.4s;margin:0 30px;&:hover{transition:0.7s;fill:",";}"],s.red),f=Object(c.a)(function(e){return i.a.createElement(u.FaMedium,e)}).withConfig({displayName:"headerIconLinks__StyledFaMedium"})(["transition:0.4s;margin:0 30px;&:hover{transition:0.7s;fill:",";}"],s.blue),m=function(){return i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("a",{style:p,href:"https://github.com/redstubble",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(d,{size:50})),i.a.createElement("a",{style:p,href:"https://medium.com/@redstubble",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(f,{size:50})))},h=(n(210),function(){return i.a.createElement("div",{style:{backgroundImage:"linear-gradient(#87cefa, rgb(208, 240, 255))"},className:["header-banner","clouds"].join(" ")},i.a.createElement("div",{className:["cloud","one"].join(" "),"data-speed":"35000"}),i.a.createElement("div",{className:["cloud","two"].join(" "),"data-speed":"45000","data-delay":"15000"})," ",i.a.createElement(l,null),i.a.createElement(m,null),i.a.createElement("div",{className:["cloud","three"].join(" "),"data-speed":"40000"}),i.a.createElement("div",{className:["cloud","four"].join(" "),"data-speed":"38000","data-delay":"20000"}))}),g=function(e){var t=(void 0===e?(void 0).props:e).children;return i.a.createElement("div",{style:{backgroundImage:"linear-gradient(rgb(208, 240, 255), #fff)"}},t)},b=(n(30),n(38)),y=(n(40),n(125),n(265),n(39),n(758)),E=n(755),v=n(363),w=n(757),k=n(266),x=n.n(k),j=n(51),C=n(36),T=n(24),P=Object(c.a)(v.a).withConfig({displayName:"headerNavItem__CustomIcon"})(["background-color:'#fff'"]),S=Object(c.a)(w.a).withConfig({displayName:"headerNavItem__ButtonFront"})(["&&&{border-radius:3.5rem;color:#fff;background-color:",";&:hover{background-color:",";color:#fff;}}"],function(e){return e.colorprop},function(e){return e.colorprop}),_=Object(c.a)(S).withConfig({displayName:"headerNavItem__ButtonBack"})(["&&&{border-width:3px;border-style:solid;border-color:",";color:",";background-color:#fff;&:hover{color:",";background-color:#fff;}}"],function(e){return e.colorprop},function(e){return e.colorprop},function(e){return e.colorprop}),N=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(e){var t=this,n=void 0===e?this.props:e,r=n.post,a=n.type,o=n.title,c=n.color;return r?i.a.createElement(_,{colorprop:c,size:"large",onClick:function(){t.props.dispatchPostState(null),t.props.post||t.props.dispatchPageState(C.a.index),"/"!==window.location.pathname&&Object(j.navigate)("/")},labelPosition:"left",icon:!0},o,i.a.createElement(P,{style:{backgroundColor:"#fff"},name:"left arrow"})):i.a.createElement(x.a,{isFlipped:this.props.page===this.props.type},i.a.createElement(S,{colorprop:c,key:"front",size:"large",onClick:function(){t.props.dispatchPostState(null),t.props.dispatchPageState(a)}},o),i.a.createElement(_,{colorprop:c,key:"back",size:"large",onClick:function(){t.props.post||t.props.dispatchPageState(C.a.index),t.props.dispatchPostState(null)}},o))},t}(i.a.Component),O=Object(b.b)(function(e){return{page:e.page,post:e.post}},function(e){return{dispatchPageState:function(t){return e(Object(T.c)(t))},dispatchPostState:function(t){return e(Object(T.d)(t))}}})(N),L=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).renderItems=function(e){return Object.entries(e).map(function(e){var t=e[1];return i.a.createElement(y.a.Column,{key:""+t.title,mobile:16,tablet:5,computer:4,textAlign:"center",style:{height:"5rem"}},i.a.createElement(O,{type:C.a[""+t.pageType],color:""+t.color,title:""+t.title}))})},t}return a()(t,e),t.prototype.render=function(e){var t=(void 0===e?this.props:e).items;return i.a.createElement(E.a,{style:{padding:"20px"}},i.a.createElement(y.a,{centered:!0},this.renderItems(t)),i.a.createElement("div",{style:{display:"table",clear:"both"}}))},t}(o.Component),I=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={index:{Projects:{title:"Projects",color:s.red,pageType:C.a.projects},Experience:{title:"Experience",color:s.blue,pageType:C.a.experiences},Resume:{title:"Resume",color:s.orange,pageType:C.a.resume}},post:{Post:{color:s.blue}}},t.getNavItems=function(e,n){return t.props.post?Object.assign({},t.state.post,{Post:Object.assign({},t.state.post.Post,{title:t.props.post,pageType:t.props.page})}):t.state.index},t}return a()(t,e),t.prototype.render=function(){var e=this.getNavItems(this.props.page,this.props.post);return i.a.createElement(L,{items:e})},t}(o.Component),R=Object(b.b)(function(e){return{page:e.page,post:e.post}},null)(I),A=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(h,null),i.a.createElement(g,null,i.a.createElement(R,null)))},t}(o.Component),q=(n(45),n(362)),B=Object(c.a)(q.a).withConfig({displayName:"footer__CustomLabel"})(["color:#fff !important;border-radius:15px !important;"]),F=Object(c.a)(B).withConfig({displayName:"footer__RedLabel"})(["background-color:"," !important;"],s.red),G=Object(c.a)(B).withConfig({displayName:"footer__BlueLabel"})(["background-color:"," !important;"],s.blue),z=Object(c.a)(B).withConfig({displayName:"footer__OrangeLabel"})(["background-color:"," !important;"],s.orange),Q=function(){return i.a.createElement(E.a,{id:"pdf-container"},i.a.createElement(y.a,{centered:!0},i.a.createElement(y.a.Column,{mobile:16,tablet:8,computer:8,textAlign:"center"},i.a.createElement(q.a.Group,null,i.a.createElement(F,null,"JS"),i.a.createElement(F,null,"C#"),i.a.createElement(F,null,"PHP"),i.a.createElement(F,null,"SQL"),i.a.createElement(F,null,"MYSQL"))),i.a.createElement(y.a.Column,{mobile:16,tablet:8,computer:8,textAlign:"center"},i.a.createElement(q.a.Group,null,i.a.createElement(z,null,"React"),i.a.createElement(z,null,"React Native"),i.a.createElement(z,null,"Silverstripe"),i.a.createElement(z,null,"ASP.NET"),i.a.createElement(z,null,"Linux"))),i.a.createElement(G,{size:"large",content:"john [at] redstubble [dot] com",icon:"mail"})))},M=Object(c.a)("div").withConfig({displayName:"layout__LineBreak"})(["width:100%;border-top-width:2px;border-top-style:solid;border-top-color:",";transform:skew(1.5deg,-1.5deg);"],s.orange),J=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return i.a.createElement("div",{style:{marginBottom:"20px"}},i.a.createElement(A,null),i.a.createElement("div",{style:{margin:"15px 0"}},i.a.createElement(M,null),t,i.a.createElement(M,{style:{borderTopColor:s.blue,transform:"skew(-1.5deg, 1.5deg)"}})),i.a.createElement(Q,null))},t}(i.a.Component);t.a=J},424:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return b});var r=n(11),a=n.n(r),o=n(0),i=n.n(o),c=n(258),l=n.n(c),u=(n(51),n(84)),s=n.n(u),p=n(755),d=n(254),f=(n(161),n(38)),m=n(36),h=n(24),g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=s()(this.props,"data.site.siteMetadata.title"),n=e.excerpt;return this.props.page===m.a.index&&null===this.props.post&&(this.props.dispatchPageState(m.a[e.frontmatter.type]),this.props.dispatchPostState(e.frontmatter.title)),i.a.createElement(d.a,{location:this.props.location},i.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),i.a.createElement(p.a,null,i.a.createElement("div",{style:{margin:"20px 0"}},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))))},t}(i.a.Component);t.default=Object(f.b)(function(e){return{page:e.page,post:e.post}},function(e){return{dispatchPageState:function(t){return e(Object(h.c)(t))},dispatchPostState:function(t){return e(Object(h.d)(t))}}})(g);var b="3605557573"},51:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),o=n(2),i=n.n(o),c=n(45),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(28);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(62),p=n.n(s);n.d(t,"PageRenderer",function(){return p.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var f=a.a.createContext({}),m=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},57:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,u=[],s=!1,p=-1;function d(){s&&l&&(s=!1,l.length?u=l.concat(u):p=-1,u.length&&f())}function f(){if(!s){var e=c(d);s=!0;for(var t=u.length;t;){for(l=u,u=[];++p<t;)l&&l[p].run();p=-1,t=u.length}l=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||s||c(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=h,a.addListener=h,a.once=h,a.off=h,a.removeListener=h,a.removeAllListeners=h,a.emit=h,a.prependListener=h,a.prependOnceListener=h,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},58:function(e,t){e.exports={red:"#4f2323",blue:"#4472b9",orange:"#e18728"}},62:function(e,t,n){var r;e.exports=(r=n(83))&&r.default||r},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),i=n.n(o),c=n(117),l=n(1),u=function(e){var t=e.location,n=l.default.getResourcesForPathname(t.pathname);return a.a.createElement(c.a,{location:t,pageResources:n})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u}}]);
//# sourceMappingURL=component---src-templates-post-js-239a84d4194062970bdc.js.map