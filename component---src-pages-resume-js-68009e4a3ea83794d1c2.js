(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{219:function(e,t,n){"use strict";n.r(t);var a=n(11),o=n.n(a),c=n(0),i=n.n(c),r=n(756),l=n(361),s=n(755),u=n(758),m=n(757),d=n(427),f=n(293),p=n.n(f),h={textDecoration:"none",color:"inherit"},g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={numPages:null,pageNumber:1},t.onDocumentLoadSuccess=function(e){var n=e.numPages;t.setState({numPages:n})},t}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){if("undefined"!=typeof window)try{var e=n(362),t=n(414);this.document=t.Document,this.page=e.Page}catch(e){console.error(e)}this.setState({elWidth:document.getElementById("pdf-container").clientWidth})},a.render=function(){var e=this,t=this.state,n=t.pageNumber,a=t.numPages;if(void 0===this.page||void 0===this.document||!this.state.elWidth)return i.a.createElement(r.a,{active:!0},i.a.createElement(l.a,{content:"Loading"}));var o=this.page,c=this.document;return i.a.createElement(s.a,{id:"pdf-container"},i.a.createElement(u.a,{centered:!0,style:{margin:"15px 0"}},i.a.createElement(c,{file:p.a,loading:i.a.createElement(r.a,{active:!0},i.a.createElement(l.a,{content:"Loading"})),onLoadSuccess:this.onDocumentLoadSuccess},i.a.createElement(o,{width:this.state.elWidth,pageNumber:n})),n," of ",a),i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement(m.a,{onClick:function(){n>1&&e.setState({pageNumber:n-1})},labelPosition:"left",icon:!0},"Last",i.a.createElement(d.a,{name:"left arrow"})),i.a.createElement(m.a,{onClick:function(){n<a&&e.setState({pageNumber:n+1})},icon:!0,labelPosition:"right"},"Next",i.a.createElement(d.a,{name:"right arrow"}))),i.a.createElement("p",{style:{textAlign:"center"}},i.a.createElement("a",{style:h,href:p.a,download:"resume.pdf"},i.a.createElement(m.a,{icon:!0},i.a.createElement(d.a,{name:"download"})))),i.a.createElement("div",{style:{height:"10px"}}))},t}(c.Component);t.default=g},293:function(e,t,n){e.exports=n.p+"static/resume-4f1c3140032a7a081110f459b9c98e38.pdf"},367:function(e,t){},368:function(e,t){},376:function(e,t){},377:function(e,t){},378:function(e,t){},407:function(e,t){},408:function(e,t){},409:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-resume-js-68009e4a3ea83794d1c2.js.map