(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{161:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),o=n(0),i=n.n(o),c=n(459),u=n(32),s=n(470),l=n(374),f=n(362),m=n(30),h=n(378),d=n.n(h),p={textDecoration:"none",color:"inherit"},g=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={numPages:null,pageNumber:1},t.onDocumentLoadSuccess=function(e){var n=e.numPages;t.setState({numPages:n})},t}a()(t,e);var r=t.prototype;return r.componentDidMount=function(){if("undefined"!=typeof window)try{var e=n(472),t=n(524);this.document=t.Document,this.page=e.Page}catch(e){}this.setState({elWidth:document.getElementById("pdf-container").clientWidth})},r.render=function(){var e=this,t=this.state,n=t.pageNumber,r=t.numPages;if(void 0===this.page||void 0===this.document||!this.state.elWidth)return i.a.createElement(c.a,{active:!0},i.a.createElement(u.a,{content:"Loading"}));var a=this.page,o=this.document;return i.a.createElement(s.a,{id:"pdf-container"},i.a.createElement(l.a,{centered:!0,style:{margin:"15px 0"}},i.a.createElement(o,{file:d.a,loading:i.a.createElement(c.a,{active:!0},i.a.createElement(u.a,{content:"Loading"})),onLoadSuccess:this.onDocumentLoadSuccess},i.a.createElement(a,{width:this.state.elWidth,pageNumber:n})),n," of ",r),i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement(f.a,{onClick:function(){n>1&&e.setState({pageNumber:n-1})},labelPosition:"left",icon:!0},"Last",i.a.createElement(m.a,{name:"left arrow"})),i.a.createElement(f.a,{onClick:function(){n<r&&e.setState({pageNumber:n+1})},icon:!0,labelPosition:"right"},"Next",i.a.createElement(m.a,{name:"right arrow"}))),i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("a",{style:p,href:d.a,download:"resume.pdf"},i.a.createElement(f.a,{icon:!0},i.a.createElement(m.a,{name:"download"})))),i.a.createElement("div",{style:{height:"10px"}}))},t}(o.Component);t.default=g},196:function(e,t){var n,r,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,s=[],l=!1,f=-1;function m(){l&&u&&(l=!1,u.length?s=u.concat(s):f=-1,s.length&&h())}function h(){if(!l){var e=c(m);l=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||l||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},346:function(e,t,n){var r=n(51),a=n(50),o=n(94).f;e.exports=function(e){return function(t){for(var n,i=a(t),c=r(i),u=c.length,s=0,l=[];u>s;)o.call(i,n=c[s++])&&l.push(e?[n,i[n]]:i[n]);return l}}},378:function(e,t,n){e.exports=n.p+"static/resume-d686034b95144ad401fe2656e4a36c3e.pdf"},477:function(e,t){},478:function(e,t){},486:function(e,t){},487:function(e,t){},488:function(e,t){},517:function(e,t){},518:function(e,t){},519:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-resume-js-63923c615c4056ef9233.js.map