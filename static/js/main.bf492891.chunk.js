(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,n,t){e.exports={Main:"Main_Main__3dOQ_",Dropzone:"Main_Dropzone__1vN5c"}},47:function(e,n,t){e.exports={App:"App_App__2mUJM"}},50:function(e,n,t){e.exports=t(70)},70:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),a=t(39),i=t.n(a),c=t(24),s=t(73),l=t(11),u=t(7),p=t(5),d=t(42),f=t(43),h=t(44),m=t(45),b=t.n(m),v=t(46),g=Object(u.d)(v.createHistory)({basename:"/file.stream.app"}),O=Object(p.combineReducers)({routing:l.routerReducer}),w=function(){var e=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(n){return}}(),n=Object(h.createLogger)(),t=Object(l.routerMiddleware)(g),o=Object(p.createStore)(O,e,Object(d.composeWithDevTools)(Object(p.applyMiddleware)(f.a,n,t)));return o.subscribe(b()(function(){!function(e){try{var n=JSON.stringify(e);localStorage.setItem("state",n)}catch(t){}}({})},1e3)),o},j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var E=t(47),S=t.n(E),_=function(e){var n=e.children;return r.a.createElement("div",{id:"App",className:S.a.App},n)},k=t(19),D=t(20),A=t(26),M=t(22),C=t(25),N=function(e,n){return function(t){t(I()),console.log("Accepted files:",e),console.log("Rejected files:",n),t(R())}},I=function(){return{type:"START_FILES_PROCESSING_TYPE"}},R=function(){return{type:"FINISH_FILES_PROCESSING_TYPE"}},W=t(21),F=t(49),T=t(35),P=t.n(T),J=function(e){function n(e,t){var o;return Object(k.a)(this,n),(o=Object(A.a)(this,Object(M.a)(n).call(this,e,t))).handleOnDrop=o.handleOnDrop.bind(Object(W.a)(o)),o}return Object(C.a)(n,e),Object(D.a)(n,[{key:"handleOnDrop",value:function(e,n){(0,this.props.onDropFiles)(e,n)}},{key:"render",value:function(){return r.a.createElement("div",{id:"Main",className:P.a.Main},r.a.createElement(F.a,{onDrop:this.handleOnDrop,className:P.a.Dropzone},"Drop file's here"))}}]),n}(o.Component),L=function(e){function n(){return Object(k.a)(this,n),Object(A.a)(this,Object(M.a)(n).apply(this,arguments))}return Object(C.a)(n,e),Object(D.a)(n,[{key:"getMainComponent",value:function(){var e=this.props.onDropFiles;return r.a.createElement(J,{onDropFiles:e})}},{key:"render",value:function(){return r.a.createElement("div",{id:"MainContainer"},this.getMainComponent())}}]),n}(o.Component);var x=Object(c.b)(function(e){return{}},function(e){return Object(p.bindActionCreators)({onDropFiles:N},e)})(L),U=r.a.createElement("div",null,r.a.createElement(u.b,{path:"/",component:_},r.a.createElement(u.a,{to:"/main"}),r.a.createElement(u.b,{path:"/main",component:x}),r.a.createElement(u.b,{path:"*",component:x}))),z=w(),H=Object(l.syncHistoryWithStore)(g,z);!function(e){if("serviceWorker"in navigator){if(new URL("/file.stream.app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/file.stream.app","/service-worker.js");j?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(n,e)})}}();var B=r.a.createElement(c.a,{store:z},r.a.createElement(s.a,null,r.a.createElement(u.c,{history:H},U)));i.a.render(B,document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.bf492891.chunk.js.map