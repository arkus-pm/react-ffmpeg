(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(43)},19:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(12),c=n.n(a),i=(n(19),n(1)),s=n.n(i),l=n(13),u=n(2),f=n(5);n(42);var d=function(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)({}),i=Object(u.a)(c,2),d=i[0],p=i[1],g=Object(o.useState)("Click Start to transcode"),v=Object(u.a)(g,2),h=v[0],m=v[1],w=Object(f.createFFmpeg)({log:!0}),b=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m("Loading ffmpeg-core.js"),e.next=3,w.load();case 3:return w.setProgress((function(e){var t=e.ratio;m(Math.floor(100*t)+"%")})),m("Start transcoding"),e.t0=w,e.t1=d.name,e.next=9,Object(f.fetchFile)(d);case 9:return e.t2=e.sent,e.t0.FS.call(e.t0,"writeFile",e.t1,e.t2),e.next=13,w.run("-i",d.name,"-c:v","libx264","test.mp4");case 13:return m("Complete transcoding"),e.next=16,w.FS("readFile","test.mp4");case 16:t=e.sent,a(URL.createObjectURL(new Blob([t.buffer],{type:"video/mp4"})));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("p",null),r.a.createElement("video",{src:n,controls:!0}),r.a.createElement("br",null),r.a.createElement("button",{onClick:b},"Start"),r.a.createElement("input",{onChange:function(e){p(e.target.files[0]),console.log(e.target.files[0])},type:"file"}),r.a.createElement("p",null,h))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-ffmpeg",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-ffmpeg","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(t,e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.f8e4e031.chunk.js.map