(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{152:function(e,t,a){"use strict";a.r(t),a(85);var n=a(291),r=a(0),o=a.n(r),i=a(170),c=a(202),l=a.n(c),s=(a(225),a(59)),u=a(758),p=a(755),d=a(219);t.default=function(){return o.a.createElement(i.StaticQuery,{query:"1085314448",render:function(e){var t=e.allMarkdownRemark.edges.map(function(e){var t=e.node,a=l()(t,"frontmatter.title")||t.fields.slug;return o.a.createElement(u.a.Column,{mobile:16,tablet:8,computer:5,textAlign:"center",key:t.fields.slug},o.a.createElement(d.a,{ButtonTitle:a,ImgSrc:t.frontmatter.linkImage.publicURL,PageLink:t.fields.slug,type:s.a.experiences}),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))});return o.a.createElement(p.a,{style:{margin:"20px 0"}},o.a.createElement(u.a,{centered:!0},t))},data:n})}},153:function(e,t,a){"use strict";a.r(t),a(85);var n=a(292),r=a(0),o=a.n(r),i=a(170),c=a(202),l=a.n(c),s=a(59),u=a(758),p=a(755),d=a(219);t.default=function(){return o.a.createElement(i.StaticQuery,{query:"3377166164",render:function(e){var t=e.allMarkdownRemark.edges.map(function(e){var t=e.node,a=l()(t,"frontmatter.title")||t.fields.slug;return o.a.createElement(u.a.Column,{mobile:16,tablet:8,computer:5,textAlign:"center",key:t.fields.slug},o.a.createElement(d.a,{ButtonTitle:a,ImgSrc:t.frontmatter.linkImage.publicURL,PageLink:t.fields.slug,type:s.a.projects}),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))});return o.a.createElement(p.a,{style:{margin:"20px 0"}},o.a.createElement(u.a,{centered:!0},t))},data:n})}},154:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),o=a(0),i=a.n(o),c=a(756),l=a(361),s=a(755),u=a(758),p=a(757),d=a(427),m=a(293),h=a.n(m),f={textDecoration:"none",color:"inherit"},g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={numPages:null,pageNumber:1},t.onDocumentLoadSuccess=function(e){var a=e.numPages;t.setState({numPages:a})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){if("undefined"!=typeof window)try{var e=a(362),t=a(414);this.document=t.Document,this.page=e.Page}catch(e){console.error(e)}this.setState({elWidth:document.getElementById("pdf-container").clientWidth})},n.render=function(){var e=this,t=this.state,a=t.pageNumber,n=t.numPages;if(void 0===this.page||void 0===this.document||!this.state.elWidth)return i.a.createElement(c.a,{active:!0},i.a.createElement(l.a,{content:"Loading"}));var r=this.page,o=this.document;return i.a.createElement(s.a,{id:"pdf-container"},i.a.createElement(u.a,{centered:!0,style:{margin:"15px 0"}},i.a.createElement(o,{file:h.a,loading:i.a.createElement(c.a,{active:!0},i.a.createElement(l.a,{content:"Loading"})),onLoadSuccess:this.onDocumentLoadSuccess},i.a.createElement(r,{width:this.state.elWidth,pageNumber:a})),a," of ",n),i.a.createElement("p",null,i.a.createElement(p.a,{onClick:function(){a>1&&e.setState({pageNumber:a-1})},labelPosition:"left",icon:!0},"Last",i.a.createElement(d.a,{name:"left arrow"})),i.a.createElement(p.a,{onClick:function(){a<n&&e.setState({pageNumber:a+1})},icon:!0,labelPosition:"right"},"Next",i.a.createElement(d.a,{name:"right arrow"}))),i.a.createElement("p",null,i.a.createElement("a",{style:f,href:h.a,download:"resume.pdf"},i.a.createElement(p.a,{icon:!0},i.a.createElement(d.a,{name:"download"})))),i.a.createElement("div",{style:{height:"10px"}}))},t}(o.Component);t.default=g},159:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),o=a(0),i=a.n(o),c=(a(579),a(322)),l=a.n(c),s=(a(170),a(202)),u=a.n(s),p=a(318),d=a(60),m=a(153),h=a(154),f=a(152),g=a(59),b=(a(177),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).render=function(){return t.props.page&&t.getComponent()},t}return r()(t,e),t.prototype.getComponent=function(){return this.props.page===g.a.index?i.a.createElement("div",null):this.props.page===g.a.projects?i.a.createElement(m.default,null):this.props.page===g.a.experiences?i.a.createElement(f.default,null):this.props.page===g.a.resume?i.a.createElement(h.default,null):void 0},t}(i.a.Component)),y=Object(d.b)(function(e){return{page:e.page,post:e.post}},null)(b);a.d(t,"pageQuery",function(){return v});var E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u()(this,"props.data.site.siteMetadata.title"),t=u()(this,"props.data.site.siteMetadata.description");return i.a.createElement(p.a,{location:this.props.location},i.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),i.a.createElement(y,null))},t}(i.a.Component),v=(t.default=E,"3998338720")},170:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(164),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(39);a.d(t,"waitForRouteChange",function(){return s.c});var u=a(181),p=a.n(u);a.d(t,"PageRenderer",function(){return p.a});var d=a(40);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},177:function(e,t){e.exports={red:"#4f2323",blue:"#4472b9",orange:"#e18728"}},181:function(e,t,a){var n;e.exports=(n=a(201))&&n.default||n},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(45),l=a(3),s=function(e){var t=e.location,a=l.default.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:a})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},219:function(e,t,a){"use strict";var n=a(15),r=a.n(n),o=a(0),i=a.n(o),c=a(161),l=a.n(c),s=a(171),u=a.n(s),p=a(172),d=a.n(p),m=a(178),h=a.n(m),f=a(179),g=a.n(f),b=a(180),y=a.n(b),E=a(58),v=a.n(E),j=a(56),k=a.n(j),x=a(163),w=a.n(x),C=(a(1),a(2)),P=a(350),O=a(351),N=a(162),S=a(752),L=(a(168),a(355));function A(e){var t=e.children,a=e.className,n=e.content,r=e.textAlign,o=w()(Object(C.d)(r),"description",a),c=Object(P.a)(A,e),s=Object(O.a)(A,e);return i.a.createElement(s,l()({},c,{className:o}),N.a.isNil(t)?n:t)}A.handledProps=["as","children","className","content","textAlign"],A.propTypes={};var T=A;function R(e){var t=e.children,a=e.className,n=e.content,r=e.textAlign,o=w()(Object(C.d)(r),"header",a),c=Object(P.a)(R,e),s=Object(O.a)(R,e);return i.a.createElement(s,l()({},c,{className:o}),N.a.isNil(t)?n:t)}R.handledProps=["as","children","className","content","textAlign"],R.propTypes={};var M=R;function I(e){var t=e.children,a=e.className,n=e.content,r=e.textAlign,o=w()(Object(C.d)(r),"meta",a),c=Object(P.a)(I,e),s=Object(O.a)(I,e);return i.a.createElement(s,l()({},c,{className:o}),N.a.isNil(t)?n:t)}I.handledProps=["as","children","className","content","textAlign"],I.propTypes={};var _=I;function D(e){var t=e.children,a=e.className,n=e.content,r=e.description,o=e.extra,c=e.header,s=e.meta,u=e.textAlign,p=w()(Object(C.a)(o,"extra"),Object(C.d)(u),"content",a),d=Object(P.a)(D,e),m=Object(O.a)(D,e);return N.a.isNil(t)?N.a.isNil(n)?i.a.createElement(m,l()({},d,{className:p}),Object(L.a)(M,function(e){return{content:e}},c,{autoGenerateKey:!1}),Object(L.a)(_,function(e){return{content:e}},s,{autoGenerateKey:!1}),Object(L.a)(T,function(e){return{content:e}},r,{autoGenerateKey:!1})):i.a.createElement(m,l()({},d,{className:p}),n):i.a.createElement(m,l()({},d,{className:p}),t)}D.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],D.propTypes={};var G=D,H=a(250),q=a.n(H);function W(e){var t=e.centered,a=e.children,n=e.className,r=e.content,o=e.doubling,c=e.items,s=e.itemsPerRow,u=e.stackable,p=e.textAlign,d=w()("ui",Object(C.a)(t,"centered"),Object(C.a)(o,"doubling"),Object(C.a)(u,"stackable"),Object(C.d)(p),Object(C.g)(s),"cards",n),m=Object(P.a)(W,e),h=Object(O.a)(W,e);if(!N.a.isNil(a))return i.a.createElement(h,l()({},m,{className:d}),a);if(!N.a.isNil(r))return i.a.createElement(h,l()({},m,{className:d}),r);var f=q()(c,function(e){var t=e.key||[e.header,e.description].join("-");return i.a.createElement(B,l()({key:t},e))});return i.a.createElement(h,l()({},m,{className:d}),f)}W.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],W.propTypes={};var Q=W,B=function(e){function t(){var e,a;u()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=h()(this,(e=g()(t)).call.apply(e,[this].concat(r))),k()(v()(v()(a)),"handleClick",function(e){var t=a.props.onClick;t&&t(e,a.props)}),a}return y()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,a=e.centered,n=e.children,r=e.className,o=e.color,c=e.content,s=e.description,u=e.extra,p=e.fluid,d=e.header,m=e.href,h=e.image,f=e.link,g=e.meta,b=e.onClick,y=e.raised,E=w()("ui",o,Object(C.a)(a,"centered"),Object(C.a)(p,"fluid"),Object(C.a)(f,"link"),Object(C.a)(y,"raised"),"card",r),v=Object(P.a)(t,this.props),j=Object(O.a)(t,this.props,function(){if(b)return"a"});return N.a.isNil(n)?N.a.isNil(c)?i.a.createElement(j,l()({},v,{className:E,href:m,onClick:this.handleClick}),S.a.create(h,{autoGenerateKey:!1}),(s||d||g)&&i.a.createElement(G,{description:s,header:d,meta:g}),u&&i.a.createElement(G,{extra:!0},u)):i.a.createElement(j,l()({},v,{className:E,href:m,onClick:this.handleClick}),c):i.a.createElement(j,l()({},v,{className:E,href:m,onClick:this.handleClick}),n)}}]),t}(o.Component);k()(B,"Content",G),k()(B,"Description",T),k()(B,"Group",Q),k()(B,"Header",M),k()(B,"Meta",_),k()(B,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),B.propTypes={};var U=a(756),F=a(757),z=a(60),J=a(170),K=a(29),Y=(a(59),a(41),a(361)),V=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={show:!1},t.showImage=function(){t.setState({show:!0})},t}return r()(t,e),t.prototype.render=function(){return this.props.size,i.a.createElement("div",null,i.a.createElement(U.a.Dimmable,{blurring:!0,dimmed:!this.state.show},i.a.createElement(U.a,{active:!this.state.show},i.a.createElement(Y.a,null)),i.a.createElement(S.a,Object.assign({onLoad:this.showImage},this.props))))},t}(i.a.Component),X=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={hover:!1},t.setHover=function(e){return t.setState({hover:e})},t}return r()(t,e),t.prototype.render=function(e){var t=this,a=void 0===e?this.props:e,n=(a.Type,a.PageLink),r=a.ButtonTitle,o=a.ImgSrc;return i.a.createElement(B,{style:{width:"100%"}},i.a.createElement(U.a.Dimmable,{onMouseEnter:function(){return t.setHover(!0)},onMouseLeave:function(){return t.setHover(!1)},blurring:!0,dimmed:this.state.hover},i.a.createElement(U.a,{active:this.state.hover},i.a.createElement(F.a,{inverted:!0,content:r,onClick:function(){Object(J.navigate)(n),t.props.dispatchPostState(r)}})),i.a.createElement(V,{centered:!0,style:{height:"180px",padding:"20px",objectFit:"contain"},src:o})))},t}(o.Component);t.a=Object(z.b)(null,function(e){return{dispatchPageState:function(t){return e(Object(K.c)(t))},dispatchPostState:function(t){return e(Object(K.d)(t))}}})(X)},225:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(289),r=a.n(n),o=a(290),i=a.n(o),c=new r.a(i.a),l=c.rhythm;c.scale},274:function(e,t,a){},291:function(e){e.exports={data:{site:{siteMetadata:{title:"Redstubble",description:"Website"}},allMarkdownRemark:{edges:[{node:{excerpt:"Developing websites using PHP, Javascript and MySQL stack in Silverstripe CMSenvironment. Work included liaising with clients to…",fields:{slug:"/experience/core-tt/"},frontmatter:{date:null,title:"Core TT",linkImage:{absolutePath:"/home/john/code/react/website/src/pages/experience/core-tt/CoreLogo.png",relativePath:"experience/core-tt/CoreLogo.png",publicURL:"/static/CoreLogo-434b53c7380b03103616526bc192f2bf.png"}}}},{node:{excerpt:"Developing websites using PHP, Javascript and MySQL stack in Silverstripe CMSenvironment. Work included liaising with clients to…",fields:{slug:"/experience/hothouse/"},frontmatter:{date:null,title:"Hothouse",linkImage:{absolutePath:"/home/john/code/react/website/src/pages/experience/hothouse/HothouseLogo.jpg",relativePath:"experience/hothouse/HothouseLogo.jpg",publicURL:"/static/HothouseLogo-897785f37b6b3425fcf101a64d6b30f9.jpg"}}}},{node:{excerpt:"Developing websites using PHP, Javascript and MySQL stack in Silverstripe CMSenvironment. Work included liaising with clients to…",fields:{slug:"/experience/tasman-district-council/"},frontmatter:{date:null,title:"Tasman District Council",linkImage:{absolutePath:"/home/john/code/react/website/src/pages/experience/tasman-district-council/TasmanDC.jpg",relativePath:"experience/tasman-district-council/TasmanDC.jpg",publicURL:"/static/TasmanDC-026151815973cf245b61ca255b684e43.jpg"}}}}]}}}},292:function(e){e.exports={data:{site:{siteMetadata:{title:"Redstubble",description:"Website"}},allMarkdownRemark:{edges:[{node:{excerpt:"Wow! I love blogging so much already. Did you know that “despite its name, salted duck eggs can also be made from\nchicken eggs, though the…",fields:{slug:"/project/glen-oroua-school/"},frontmatter:{date:"06 May, 2015",title:"Glen Oroua Website",linkImage:{absolutePath:"/home/john/code/react/website/src/pages/project/glen-oroua-school/GlenOroua.png",relativePath:"project/glen-oroua-school/GlenOroua.png",publicURL:"/static/GlenOroua-1dc1b6b395fadd27084c814558d5ca5f.png"}}}},{node:{excerpt:"Built a react native app to allow PSA Members to view membership information, On deer horse aboard tritely yikes and much The Big Oxmox…",fields:{slug:"/project/psa-app/"},frontmatter:{date:"06 May, 2015",title:"PSA Mobile App",linkImage:{absolutePath:"/home/john/code/react/website/src/pages/project/psa-app/PSA.png",relativePath:"project/psa-app/PSA.png",publicURL:"/static/PSA-5361e4c166075389e3a5b3f6b95c2fa4.png"}}}}]}}}},293:function(e,t,a){e.exports=a.p+"static/resume-4f1c3140032a7a081110f459b9c98e38.pdf"},318:function(e,t,a){"use strict";var n=a(15),r=a.n(n),o=a(0),i=a.n(o),c=a(197),l=function(){return i.a.createElement("h1",{style:{textAlign:"center"},className:"redstubble-logo"},i.a.createElement("a",{href:"#animation"},"RE",i.a.createElement("span",null,"D"),"STUBBLE"))},s=a(328),u=a(177),p={textDecoration:"none",color:"inherit"},d=Object(c.a)(function(e){return i.a.createElement(s.FaGithub,e)}).withConfig({displayName:"headerIconLinks__StyledFaGithub"})(["transition:0.4s;margin:0 30px;&:hover{transition:0.7s;fill:",";}"],u.red),m=Object(c.a)(function(e){return i.a.createElement(s.FaMedium,e)}).withConfig({displayName:"headerIconLinks__StyledFaMedium"})(["transition:0.4s;margin:0 30px;&:hover{transition:0.7s;fill:",";}"],u.blue),h=function(){return i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("a",{style:p,href:"https://github.com/redstubble",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(d,{size:50})),i.a.createElement("a",{style:p,href:"https://medium.com/@redstubble",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(m,{size:50})))},f=(a(274),function(){return i.a.createElement("div",{style:{backgroundImage:"linear-gradient(#87cefa, rgb(208, 240, 255))"},className:["header-banner","clouds"].join(" ")},i.a.createElement("div",{className:["cloud","one"].join(" "),"data-speed":"35000"}),i.a.createElement("div",{className:["cloud","two"].join(" "),"data-speed":"45000","data-delay":"15000"})," ",i.a.createElement(l,null),i.a.createElement(h,null),i.a.createElement("div",{className:["cloud","three"].join(" "),"data-speed":"40000"}),i.a.createElement("div",{className:["cloud","four"].join(" "),"data-speed":"38000","data-delay":"20000"}))}),g=function(e){var t=(void 0===e?(void 0).props:e).children;return i.a.createElement("div",{style:{backgroundImage:"linear-gradient(rgb(208, 240, 255), #fff)"}},t)},b=(a(41),a(60)),y=(a(86),a(61),a(329),a(85),a(758)),E=a(755),v=a(757),j=a(330),k=a.n(j),x=a(170),w=a(59),C=a(29),P=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(e){var t=this,a=void 0===e?this.props:e,n=a.type,r=a.title,o=a.color;return n?i.a.createElement(k.a,{isFlipped:this.props.page===this.props.type},i.a.createElement(v.a,{key:"front",style:{borderRadius:"3.5rem",color:"white",backgroundColor:o},size:"large",onClick:function(){t.props.dispatchPostState(null),t.props.dispatchPageState(n),"/"!==window.location.pathname&&Object(x.navigate)("/")}},r),i.a.createElement(v.a,{key:"back",inverted:!0,style:{borderRadius:"3.5rem",color:o,backgroundColor:"white",borderWidth:"3px",borderStyle:"solid",borderColor:o},size:"large",onClick:function(){t.props.post||t.props.dispatchPageState(w.a.index),t.props.dispatchPostState(null),"/"!==window.location.pathname&&Object(x.navigate)("/")}},r)):i.a.createElement("div",null)},t}(i.a.Component),O=Object(b.b)(function(e){return{page:e.page,post:e.post}},function(e){return{dispatchPageState:function(t){return e(Object(C.c)(t))},dispatchPostState:function(t){return e(Object(C.d)(t))}}})(P),N=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).renderItems=function(e){return Object.entries(e).map(function(e){var t=e[1];return i.a.createElement(y.a.Column,{key:""+t.title,mobile:16,tablet:5,computer:4,textAlign:"center",style:{height:"5rem"}},i.a.createElement(O,{type:w.a[""+t.pageType],color:""+t.color,title:""+t.title}))})},t}return r()(t,e),t.prototype.render=function(e){var t=(void 0===e?this.props:e).items;return i.a.createElement(E.a,{style:{padding:"20px"}},i.a.createElement(y.a,{centered:!0},this.renderItems(t)),i.a.createElement("div",{style:{display:"table",clear:"both"}}))},t}(o.Component),S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={index:{Projects:{title:"Projects",color:u.red,pageType:"projects"},Experience:{title:"Experience",color:u.blue,pageType:"experiences"},Resume:{title:"Resume",color:u.orange,pageType:"resume"}},post:{Post:{color:u.blue}}},t.getNavItems=function(e,a){return t.props.post?Object.assign({},t.state.post,{Post:Object.assign({},t.state.post.Post,{title:t.props.post,pageType:t.props.page})}):t.state.index},t}return r()(t,e),t.prototype.render=function(){var e=this.getNavItems(this.props.page,this.props.post);return i.a.createElement(N,{items:e})},t}(o.Component),L=Object(b.b)(function(e){return{page:e.page,post:e.post}},null)(S),A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(f,null),i.a.createElement(g,null,i.a.createElement(L,null)))},t}(o.Component),T=(a(164),a(426)),R=Object(c.a)(T.a).withConfig({displayName:"footer__CustomLabel"})(["color:#fff !important;border-radius:15px !important;"]),M=Object(c.a)(R).withConfig({displayName:"footer__RedLabel"})(["background-color:"," !important;"],u.red),I=Object(c.a)(R).withConfig({displayName:"footer__BlueLabel"})(["background-color:"," !important;"],u.blue),_=Object(c.a)(R).withConfig({displayName:"footer__OrangeLabel"})(["background-color:"," !important;"],u.orange),D=function(){return i.a.createElement(E.a,{id:"pdf-container"},i.a.createElement(y.a,{centered:!0},i.a.createElement(y.a.Column,{mobile:16,tablet:8,computer:8,textAlign:"center",style:{height:"5rem"}},i.a.createElement(T.a.Group,null,i.a.createElement(M,null,"JS"),i.a.createElement(M,null,"C#"),i.a.createElement(M,null,"PHP"),i.a.createElement(M,null,"SQL"),i.a.createElement(M,{as:"a"},"MYSQL"))),i.a.createElement(y.a.Column,{mobile:16,tablet:8,computer:8,textAlign:"center",style:{height:"5rem"}},i.a.createElement(T.a.Group,null,i.a.createElement(_,{as:"a"},"React"),i.a.createElement(_,{as:"a"},"React Native"),i.a.createElement(_,{as:"a"},"Silverstripe"),i.a.createElement(_,{as:"a"},"ASP.NET"),i.a.createElement(_,{as:"a"},"Linux"))),i.a.createElement(I,{size:"large",content:"john [at] redstubble [dot] com",icon:"mail"})))},G=Object(c.a)("div").withConfig({displayName:"layout__LineBreak"})(["width:100%;border-top-width:2px;border-top-style:solid;border-top-color:",";transform:skew(1.5deg,-1.5deg);"],u.orange),H=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return i.a.createElement("div",null,i.a.createElement(A,null),i.a.createElement("div",{style:{margin:"15px 0"}},i.a.createElement(G,null),t,i.a.createElement(G,{style:{borderTopColor:u.blue,transform:"skew(-1.5deg, 1.5deg)"}})),i.a.createElement(D,null))},t}(i.a.Component);t.a=H},367:function(e,t){},368:function(e,t){},376:function(e,t){},377:function(e,t){},378:function(e,t){},407:function(e,t){},408:function(e,t){},409:function(e,t){},579:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-5855d7cbcc3013a45f12.js.map