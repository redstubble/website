(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{151:function(e,t,a){"use strict";a.r(t),a(83);var n=a(311),r=a(0),c=a.n(r),i=a(174),o=a(180),l=a.n(o),s=a(57),d=a(458),u=a(805),p=a(227);t.default=function(){return c.a.createElement(i.StaticQuery,{query:"3377166164",render:function(e){var t=e.allMarkdownRemark.edges.map(function(e){var t=e.node,a=l()(t,"frontmatter.title")||t.fields.slug;return c.a.createElement(d.a.Column,{mobile:16,tablet:8,computer:5,textAlign:"center",key:t.fields.slug},c.a.createElement(p.a,{ButtonTitle:a,ImgSrc:t.frontmatter.linkImage.publicURL,PageLink:t.fields.slug,type:s.a.projects}))});return c.a.createElement(u.a,{style:{margin:"20px 0"}},c.a.createElement(d.a,{centered:!0},t))},data:n})}},163:function(e,t,a){"use strict";var n=a(41);t.__esModule=!0,t.withPrefix=h,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(279)),c=n(a(159)),i=n(a(13)),o=n(a(55)),l=n(a(54)),s=n(a(3)),d=n(a(0)),u=a(16),p=a(174);function h(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:s.default.string,activeStyle:s.default.object},m=function(e){function t(t){var a;a=e.call(this)||this,(0,l.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,c.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0);var r=t.location;return a.state={IOSupported:n,location:r},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,o=t.onClick,l=t.onMouseEnter,s=t.location,f=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state"]),b=h(a);return d.default.createElement(u.Link,(0,c.default)({to:b,state:f,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){if(o&&o(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var a=(0,p.parsePath)(b),n=a.pathname,r=a.hash;if(n===s.pathname||!n){var c=r?document.getElementById(r.substr(1)):null;null!==c?c.scrollIntoView():window.scrollTo(0,0)}g(b,{state:f})}return!0}},m))},t}(d.default.Component);m.propTypes=(0,c.default)({},f,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired});var b,v=(b=m,function(e){return d.default.createElement(u.Location,null,function(t){var a=t.location;return d.default.createElement(b,(0,c.default)({location:a},e))})});t.default=v;var g=function(e,t){window.___navigate(e,t)};t.navigate=g;var j=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(e)};t.push=j,t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(e)},t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),j(e)}},174:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=a(163),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(38);a.d(t,"waitForRouteChange",function(){return s.c});var d=a(183),u=a.n(d);a.d(t,"PageRenderer",function(){return u.a});var p=a(39);a.d(t,"parsePath",function(){return p.a});var h=r.a.createContext({}),f=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},183:function(e,t,a){var n;e.exports=(n=a(208))&&n.default||n},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),o=a(43),l=a(1),s=function(e){var t=e.location,a=l.default.getResourcesForPathname(t.pathname);return r.a.createElement(o.a,{location:t,pageResources:a})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},227:function(e,t,a){"use strict";var n=a(13),r=a.n(n),c=a(0),i=a.n(c),o=a(159),l=a.n(o),s=a(164),d=a.n(s),u=a(165),p=a.n(u),h=a(168),f=a.n(h),m=a(166),b=a.n(m),v=a(169),g=a.n(v),j=a(55),O=a.n(j),y=a(54),w=a.n(y),N=a(161),E=a.n(N),P=(a(3),a(205)),k=a(356),x=a(357),A=a(160),C=a(798),R=(a(171),a(375));function S(e){var t=e.children,a=e.className,n=e.content,r=e.textAlign,c=E()(Object(P.d)(r),"description",a),o=Object(k.a)(S,e),s=Object(x.a)(S,e);return i.a.createElement(s,l()({},o,{className:c}),A.a.isNil(t)?n:t)}S.handledProps=["as","children","className","content","textAlign"],S.propTypes={};var T=S;function _(e){var t=e.children,a=e.className,n=e.content,r=e.textAlign,c=E()(Object(P.d)(r),"header",a),o=Object(k.a)(_,e),s=Object(x.a)(_,e);return i.a.createElement(s,l()({},o,{className:c}),A.a.isNil(t)?n:t)}_.handledProps=["as","children","className","content","textAlign"],_.propTypes={};var G=_;function I(e){var t=e.children,a=e.className,n=e.content,r=e.textAlign,c=E()(Object(P.d)(r),"meta",a),o=Object(k.a)(I,e),s=Object(x.a)(I,e);return i.a.createElement(s,l()({},o,{className:c}),A.a.isNil(t)?n:t)}I.handledProps=["as","children","className","content","textAlign"],I.propTypes={};var M=I;function q(e){var t=e.children,a=e.className,n=e.content,r=e.description,c=e.extra,o=e.header,s=e.meta,d=e.textAlign,u=E()(Object(P.a)(c,"extra"),Object(P.d)(d),"content",a),p=Object(k.a)(q,e),h=Object(x.a)(q,e);return A.a.isNil(t)?A.a.isNil(n)?i.a.createElement(h,l()({},p,{className:u}),Object(R.c)(G,function(e){return{content:e}},o,{autoGenerateKey:!1}),Object(R.c)(M,function(e){return{content:e}},s,{autoGenerateKey:!1}),Object(R.c)(T,function(e){return{content:e}},r,{autoGenerateKey:!1})):i.a.createElement(h,l()({},p,{className:u}),n):i.a.createElement(h,l()({},p,{className:u}),t)}q.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],q.propTypes={};var L=q,K=a(220),D=a.n(K);function U(e){var t=e.centered,a=e.children,n=e.className,r=e.content,c=e.doubling,o=e.items,s=e.itemsPerRow,d=e.stackable,u=e.textAlign,p=E()("ui",Object(P.a)(t,"centered"),Object(P.a)(c,"doubling"),Object(P.a)(d,"stackable"),Object(P.d)(u),Object(P.g)(s),"cards",n),h=Object(k.a)(U,e),f=Object(x.a)(U,e);if(!A.a.isNil(a))return i.a.createElement(f,l()({},h,{className:p}),a);if(!A.a.isNil(r))return i.a.createElement(f,l()({},h,{className:p}),r);var m=D()(o,function(e){var t=e.key||[e.header,e.description].join("-");return i.a.createElement(B,l()({key:t},e))});return i.a.createElement(f,l()({},h,{className:p}),m)}U.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],U.propTypes={};var H=U,B=function(e){function t(){var e,a;d()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=f()(this,(e=b()(t)).call.apply(e,[this].concat(r))),w()(O()(O()(a)),"handleClick",function(e){var t=a.props.onClick;t&&t(e,a.props)}),a}return g()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,a=e.centered,n=e.children,r=e.className,c=e.color,o=e.content,s=e.description,d=e.extra,u=e.fluid,p=e.header,h=e.href,f=e.image,m=e.link,b=e.meta,v=e.onClick,g=e.raised,j=E()("ui",c,Object(P.a)(a,"centered"),Object(P.a)(u,"fluid"),Object(P.a)(m,"link"),Object(P.a)(g,"raised"),"card",r),O=Object(k.a)(t,this.props),y=Object(x.a)(t,this.props,function(){if(v)return"a"});return A.a.isNil(n)?A.a.isNil(o)?i.a.createElement(y,l()({},O,{className:j,href:h,onClick:this.handleClick}),C.a.create(f,{autoGenerateKey:!1}),(s||p||b)&&i.a.createElement(L,{description:s,header:p,meta:b}),d&&i.a.createElement(L,{extra:!0},d)):i.a.createElement(y,l()({},O,{className:j,href:h,onClick:this.handleClick}),o):i.a.createElement(y,l()({},O,{className:j,href:h,onClick:this.handleClick}),n)}}]),t}(c.Component);w()(B,"Content",L),w()(B,"Description",T),w()(B,"Group",H),w()(B,"Header",G),w()(B,"Meta",M),w()(B,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),B.propTypes={};var Q=a(808),z=a(809),F=a(58),V=a(174),W=a(27),J=(a(57),a(37),a(391)),X=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={show:!1},t.showImage=function(){t.setState({show:!0})},t}return r()(t,e),t.prototype.render=function(){return this.props.size,i.a.createElement("div",null,i.a.createElement(Q.a.Dimmable,{blurring:!0,dimmed:!this.state.show},i.a.createElement(Q.a,{active:!this.state.show},i.a.createElement(J.a,null)),i.a.createElement(C.a,Object.assign({onLoad:this.showImage},this.props))))},t}(i.a.Component),Y=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={hover:!1},t.setHover=function(e){return t.setState({hover:e})},t}return r()(t,e),t.prototype.render=function(e){var t=this,a=void 0===e?this.props:e,n=(a.Type,a.PageLink),r=a.ButtonTitle,c=a.ImgSrc;return i.a.createElement(B,{style:{width:"100%"}},i.a.createElement(Q.a.Dimmable,{onMouseEnter:function(){return t.setHover(!0)},onMouseLeave:function(){return t.setHover(!1)},onClick:function(){return t.setHover(!t.state.hover)},blurring:!0,dimmed:this.state.hover},i.a.createElement(Q.a,{active:this.state.hover},i.a.createElement(z.a,{inverted:!0,content:r,onClick:function(){Object(V.navigate)(n),t.props.dispatchPostState(r)}})),i.a.createElement(X,{centered:!0,style:{height:"180px",padding:"20px",objectFit:"contain"},src:c})))},t}(c.Component);t.a=Object(F.b)(null,function(e){return{dispatchPageState:function(t){return e(Object(W.c)(t))},dispatchPostState:function(t){return e(Object(W.d)(t))}}})(Y)},279:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},311:function(e){e.exports={data:{site:{siteMetadata:{title:"Redstubble",description:"Website"}},allMarkdownRemark:{edges:[{node:{excerpt:"View:  Glen Oroua Website Glen Oroua School wanted a website with a focus on being easy to navigate and access information provided by the…",fields:{slug:"/project/glen-oroua-school/"},frontmatter:{date:"06 May, 2015",title:"Glen Oroua Website",linkImage:{absolutePath:"/home/john/code/react/website/src/pages/project/glen-oroua-school/GlenOroua.png",relativePath:"project/glen-oroua-school/GlenOroua.png",publicURL:"/static/GlenOroua-1dc1b6b395fadd27084c814558d5ca5f.png"}}}},{node:{excerpt:"View:  PSA Mobile App A member app was developed to allow PSA Members to access membership information. Technologies React, React Native…",fields:{slug:"/project/psa-app/"},frontmatter:{date:"06 May, 2015",title:"PSA Mobile App",linkImage:{absolutePath:"/home/john/code/react/website/src/pages/project/psa-app/PSA.png",relativePath:"project/psa-app/PSA.png",publicURL:"/static/PSA-5361e4c166075389e3a5b3f6b95c2fa4.png"}}}}]}}}},391:function(e,t,a){"use strict";var n=a(159),r=a.n(n),c=a(161),i=a.n(c),o=(a(3),a(0)),l=a.n(o),s=a(205),d=a(356),u=a(357),p=a(160);function h(e){var t=e.active,a=e.children,n=e.className,c=e.content,o=e.disabled,f=e.indeterminate,m=e.inline,b=e.inverted,v=e.size,g=i()("ui",v,Object(s.a)(t,"active"),Object(s.a)(o,"disabled"),Object(s.a)(f,"indeterminate"),Object(s.a)(b,"inverted"),Object(s.a)(a||c,"text"),Object(s.b)(m,"inline"),"loader",n),j=Object(d.a)(h,e),O=Object(u.a)(h,e);return l.a.createElement(O,r()({},j,{className:g}),p.a.isNil(a)?c:a)}h.handledProps=["active","as","children","className","content","disabled","indeterminate","inline","inverted","size"],h.propTypes={},t.a=h},458:function(e,t,a){"use strict";a(198);var n=a(159),r=a.n(n),c=a(161),i=a.n(c),o=(a(3),a(0)),l=a.n(o),s=a(205),d=a(356),u=a(357),p=a(375);function h(e){var t=e.children,a=e.className,n=e.computer,c=e.color,o=e.floated,p=e.largeScreen,f=e.mobile,m=e.only,b=e.stretched,v=e.tablet,g=e.textAlign,j=e.verticalAlign,O=e.widescreen,y=e.width,w=i()(c,Object(s.a)(b,"stretched"),Object(s.c)(m,"only"),Object(s.d)(g),Object(s.e)(o,"floated"),Object(s.f)(j),Object(s.g)(n,"wide computer"),Object(s.g)(p,"wide large screen"),Object(s.g)(f,"wide mobile"),Object(s.g)(v,"wide tablet"),Object(s.g)(O,"wide widescreen"),Object(s.g)(y,"wide"),"column",a),N=Object(d.a)(h,e),E=Object(u.a)(h,e);return l.a.createElement(E,r()({},N,{className:w}),t)}h.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],h.propTypes={},h.create=Object(p.d)(h,function(e){return{children:e}});var f=h;function m(e){var t=e.centered,a=e.children,n=e.className,c=e.color,o=e.columns,p=e.divided,h=e.only,f=e.reversed,b=e.stretched,v=e.textAlign,g=e.verticalAlign,j=i()(c,Object(s.a)(t,"centered"),Object(s.a)(p,"divided"),Object(s.a)(b,"stretched"),Object(s.c)(h,"only"),Object(s.c)(f,"reversed"),Object(s.d)(v),Object(s.f)(g),Object(s.g)(o,"column",!0),"row",n),O=Object(d.a)(m,e),y=Object(u.a)(m,e);return l.a.createElement(y,r()({},O,{className:j}),a)}m.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],m.propTypes={};var b=m;function v(e){var t=e.celled,a=e.centered,n=e.children,c=e.className,o=e.columns,p=e.container,h=e.divided,f=e.doubling,m=e.inverted,b=e.padded,g=e.relaxed,j=e.reversed,O=e.stackable,y=e.stretched,w=e.textAlign,N=e.verticalAlign,E=i()("ui",Object(s.a)(a,"centered"),Object(s.a)(p,"container"),Object(s.a)(f,"doubling"),Object(s.a)(m,"inverted"),Object(s.a)(O,"stackable"),Object(s.a)(y,"stretched"),Object(s.b)(t,"celled"),Object(s.b)(h,"divided"),Object(s.b)(b,"padded"),Object(s.b)(g,"relaxed"),Object(s.c)(j,"reversed"),Object(s.d)(w),Object(s.f)(N),Object(s.g)(o,"column",!0),"grid",c),P=Object(d.a)(v,e),k=Object(u.a)(v,e);return l.a.createElement(k,r()({},P,{className:E}),n)}v.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],v.Column=f,v.Row=b,v.propTypes={},t.a=v}}]);
//# sourceMappingURL=component---src-pages-projects-js-f7ba206422f51226376e.js.map