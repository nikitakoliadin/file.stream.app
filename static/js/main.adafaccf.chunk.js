(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,n,t){e.exports={Main:"Main_Main__22WzM",Dropzone:"Main_Dropzone__2bibF"}},48:function(e,n,t){e.exports={App:"App_App__tzqGW"}},52:function(e,n,t){e.exports={Preloader:"Preloader_Preloader__PcQp7"}},54:function(e,n,t){e.exports=t(74)},74:function(e,n,t){"use strict";t.r(n);var o=t(1),r=t.n(o),a=t(40),i=t.n(a),c=t(24),l=t(77),s=t(11),u=t(7),p=t(5),d=t(43),f=t(44),h=t(45),m=t(46),v=t.n(m),b=t(47),g=Object(u.d)(b.createHistory)({basename:"/file.stream.app"}),E=t(36),O={showPreloader:!1},w=Object(p.combineReducers)({routing:s.routerReducer,preloader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"START_PRELOADER_TYPE":case"FINISH_PRELOADER_TYPE":return Object(E.a)({},e,{showPreloader:n.payload});default:return e}}}),y=function(){var e=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(n){return}}(),n=Object(h.createLogger)(),t=Object(s.routerMiddleware)(g),o=Object(p.createStore)(w,e,Object(d.composeWithDevTools)(Object(p.applyMiddleware)(f.a,n,t)));return o.subscribe(v()(function(){!function(e){try{var n=JSON.stringify(e);localStorage.setItem("state",n)}catch(t){}}({})},1e3)),o},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var P=t(48),S=t.n(P),A=function(e){var n=e.children;return r.a.createElement("div",{id:"App",className:S.a.App},n)},R=t(19),D=t(20),k=t(25),T=t(22),C=t(26),I=function(e,n){return function(t){t({type:"START_PRELOADER_TYPE",payload:!0}),t(N()),console.log("Accepted files:",e),console.log("Rejected files:",n),t(M()),t({type:"FINISH_PRELOADER_TYPE",payload:!1})}},N=function(){return{type:"START_FILES_PROCESSING_TYPE"}},M=function(){return{type:"FINISH_FILES_PROCESSING_TYPE"}},W=t(21),F=t(53),L=t(35),z=t.n(L),Y=function(e){function n(e,t){var o;return Object(R.a)(this,n),(o=Object(k.a)(this,Object(T.a)(n).call(this,e,t))).handleOnDrop=o.handleOnDrop.bind(Object(W.a)(o)),o}return Object(C.a)(n,e),Object(D.a)(n,[{key:"handleOnDrop",value:function(e,n){(0,this.props.onDropFiles)(e,n)}},{key:"render",value:function(){return r.a.createElement("div",{id:"Main",className:z.a.Main},r.a.createElement(F.a,{onDrop:this.handleOnDrop,className:z.a.Dropzone},"Drop file's here"))}}]),n}(o.Component),x=t(50),H=t(52),J=t.n(H),G=["#aaffaa","#008800","#ffaa00","#ff0000"],U=function(){return r.a.createElement("div",{id:"Preloader",className:J.a.Preloader},r.a.createElement(x.a,{size:48,color1:G[0],color2:G[1],color3:G[2],color4:G[3]}))},B=function(e){function n(){return Object(R.a)(this,n),Object(k.a)(this,Object(T.a)(n).apply(this,arguments))}return Object(C.a)(n,e),Object(D.a)(n,[{key:"getMainComponent",value:function(){var e=this.props.onDropFiles;return r.a.createElement(Y,{onDropFiles:e})}},{key:"getPreloaderComponent",value:function(){if(this.props.preloader.showPreloader)return r.a.createElement(U,null)}},{key:"render",value:function(){return r.a.createElement("div",{id:"MainContainer"},this.getMainComponent(),this.getPreloaderComponent())}}]),n}(o.Component);var q=Object(c.b)(function(e){return{preloader:e.preloader}},function(e){return Object(p.bindActionCreators)({onDropFiles:I},e)})(B),Q=r.a.createElement("div",null,r.a.createElement(u.b,{path:"/",component:A},r.a.createElement(u.a,{to:"/main"}),r.a.createElement(u.b,{path:"/main",component:q}),r.a.createElement(u.b,{path:"*",component:q}))),$=y(),K=Object(s.syncHistoryWithStore)(g,$);!function(e){if("serviceWorker"in navigator){if(new URL("/file.stream.app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/file.stream.app","/service-worker.js");_?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):j(n,e)})}}();var V=r.a.createElement(c.a,{store:$},r.a.createElement(l.a,null,r.a.createElement(u.c,{history:K},Q)));i.a.render(V,document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.adafaccf.chunk.js.map