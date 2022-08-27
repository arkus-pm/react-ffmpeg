(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{189:function(e,t,a){e.exports=a(226)},191:function(e,t,a){},213:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(191),a(14)),l=a(21),i=a.n(l),c=a(31),s=a(63),u=a(7),d=a(132),f=(a(213),a(305)),m=a(298),p=a(307),v=a(288),h=a(236),g=a(314),b=a(313),w=a(309),E=(a(214),a(154)),y=a(300),j=a(295),O=a(151),x=a.n(O),P=a(239),k=a(152),S=a.n(k),N=a(153),C=a.n(N),F=function(e){var t=e.audio,a=Object(n.useRef)(),o=Object(n.useRef)({isPlaying:function(){return!1}}),l=Object(n.useState)(!1),i=Object(u.a)(l,2),c=i[0],s=i[1];return Object(n.useEffect)((function(){var e=x.a.create({container:a.current,fillParent:!1,height:50,width:200,barWidth:2,barHeight:2,cursorWidth:1});return e.loadBlob(t),e.on("ready",(function(){o.current=e,e.seekTo(1)})),function(){e.destroy()}}),[t]),r.a.createElement(f.a,{container:!0},r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"}},r.a.createElement(P.a,{onClick:function(){o.current.playPause(),s(o.current.isPlaying()),o.current.on("finish",(function(){s(o.current.isPlaying())}))},color:"primary"},c?r.a.createElement(S.a,null):r.a.createElement(C.a,null)),r.a.createElement("div",{style:{width:"100%"},ref:a})))},R=a(9);Object(R.a)("div")((function(e){var t=e.theme;return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%","& .ant-empty-img-1":{fill:"light"===t.palette.mode?"#aeb8c2":"#262626"},"& .ant-empty-img-2":{fill:"light"===t.palette.mode?"#f5f5f7":"#595959"},"& .ant-empty-img-3":{fill:"light"===t.palette.mode?"#dce0e6":"#434343"},"& .ant-empty-img-4":{fill:"light"===t.palette.mode?"#fff":"#1c1c1c"},"& .ant-empty-img-5":{fillOpacity:"light"===t.palette.mode?"0.8":"0.08",fill:"light"===t.palette.mode?"#f5f5f5":"#fff"}}}));var W=a(160),A=a.n(W),I=a(159),D=a.n(I),L=a(306),B=function(e){return n.createElement("div",{style:{padding:"0 2em 0 2em"}},n.createElement("div",{style:{float:"right",display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"}},n.createElement(E.a,null)," ",n.createElement(y.a,e)))};function M(e){var t=e.rows,a=e.progress,r=e.onSelectionModelChange,o=[{field:"id",headerName:"ID",flex:1,hide:!0},{headerName:"Parent Folder",sortable:!0,flex:1,valueGetter:function(e){return e.row.relativePath.split("/").slice(-2,-1)||""}},{field:"fileName",headerName:"FileName",sortable:!0,flex:1},{field:"relativePath",headerName:"Path",sortable:!0,flex:1,hide:!0},{field:"type",headerName:"Type",flex:1},{field:"duration",headerName:"Duration",flex:1,sortable:!0,type:"number",valueGetter:function(e){return e.row.metadata.duration},valueFormatter:function(e){return null==e.value?"loading...":"".concat(e.value.toFixed(2),"s")},renderCell:function(e){return null==e.row.metadata.duration?n.createElement(b.a,null):"".concat(e.row.metadata.duration.toFixed(2),"s")}},{field:"waveform",headerName:"Waveform",flex:1,sortable:!1,renderCell:function(e){return n.createElement(F,{audio:e.row.file})}},{field:"difference",headerName:"Difference",flex:1,valueGetter:function(e){var t,a,n;if(1==(null===(t=e.row.processed)||void 0===t?void 0:t.loaded))return(null===(a=e.row.processed)||void 0===a||null===(n=a.result)||void 0===n?void 0:n.metadata.duration)-e.row.metadata.duration},renderCell:function(e){var t,a,r=(null===(t=e.row.processed)||void 0===t||null===(a=t.result)||void 0===a?void 0:a.metadata.duration)-e.row.metadata.duration;if(r){var o=function(){return r>0?n.createElement(D.a,null):n.createElement(A.a,null)};return n.createElement(L.a,{sx:{paddingLeft:"10px"},icon:n.createElement(o,{style:{paddingLeft:"2px"}}),variant:"outlined",color:r>0?"error":"success",label:r.toFixed(2)+"s"})}}},{field:"processedDuration",headerName:"Pr. Duration",flex:1,sortable:!0,type:"number",valueGetter:function(e){var t,a;return(null===(t=e.row.processed)||void 0===t||null===(a=t.result)||void 0===a?void 0:a.metadata.duration)||null},valueFormatter:function(e){var t;if(null===(t=e.row)||void 0===t?void 0:t.processed)return null==e.value?"loading...":"".concat(e.value.toFixed(2),"s")},renderCell:function(e){var t;if(e.row.processed)return e.row.processed.loaded?"".concat(null===(t=e.row.processed)||void 0===t?void 0:t.result.metadata.duration.toFixed(2),"s"):e.row.processed.progress?n.createElement(b.a,{variant:"determinate",value:a}):n.createElement(b.a,null)}},{field:"processedFile",headerName:"Processed",flex:1,sortable:!1,renderCell:function(e){if(e.row.processed)return e.row.processed.loaded?n.createElement("div",null,n.createElement(F,{audio:e.row.processed.result.file})):e.row.processed.progress?n.createElement(b.a,{variant:"determinate",value:a}):n.createElement(b.a,null)}}];return n.createElement(w.a,{sx:{width:"100%"}},n.createElement(j.a,{components:{Toolbar:B},autoHeight:!0,rows:t,columns:o,pageSize:100,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0,onSelectionModelChange:r}))}var H=a(299),T=a(308),U=a(303),G=a(311),_=a(291);function q(e){var t=e.label,a=e.options,r=e.changeHandler;return n.createElement(G.a,null,n.createElement(_.a,{id:"demo-radio-buttons-group-label"},t),n.createElement(T.a,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:a[0].value,name:"radio-buttons-group",onChange:r,row:!0},a.map((function(e){var t=e.value,a=e.label;return n.createElement(U.a,{value:t,control:n.createElement(H.a,null),label:a})}))))}var J=a(133),z=a.n(J);var Q=function(){var e,t=Object(n.useState)(""),a=Object(u.a)(t,2),l=(a[0],a[1],Object(n.useState)(0)),b=Object(u.a)(l,2),w=b[0],E=b[1],y=Object(n.useState)(0),j=Object(u.a)(y,2),O=j[0],x=j[1],P=Object(n.useState)({rows:[]}),k=Object(u.a)(P,2),S=k[0],N=k[1],C=Object(n.useState)({rows:[]}),F=Object(u.a)(C,2),R=F[0],W=F[1];S&&!(null===(e=S.rows)||void 0===e?void 0:e.length)&&z.a.getItem("initial-data").then((function(e){e&&N(e)}));var A=function(e){e=J(Object(s.a)({},e)),N(e),z.a.setItem("initial-data",e)},I=function(e){!function(e){var t=_(e);N(t),console.log(t),Promise.all(t.rows.map((function(e){return e.metadata}))).then((function(e){e.forEach((function(e){t[e.fileId].metadata=e})),A(t),console.log("promise resolved",t)}))}(Array.from(e.target.files))},D=Object(n.useState)("Select file & click start"),L=Object(u.a)(D,2),B=(L[0],L[1],Object(d.createFFmpeg)({log:!1,logger:function(e){e.type,e.message}})),H=function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=Object(s.a)({},S),a=Object(s.a)({},R),n=0;n<a.rows.length;)t[a.rows[n].id].processed={loaded:!1,progress:0},n++;N(Object(s.a)({},t)),r=0;case 5:if(!(r<a.rows.length)){e.next=17;break}return t[a.rows[r].id].processed={loaded:!1,progress:!0},N(Object(s.a)({},t)),e.next=10,U(a.rows[r]);case 10:o=e.sent,t[a.rows[r].id].processed={result:o,loaded:!0},N(Object(s.a)({},t)),x((r+1)/a.rows.length*100),r++;case 15:e.next=5;break;case 17:x(0),A(Object(s.a)({},t));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=[],U=function(){var e=Object(c.a)(i.a.mark((function e(t){var a,n,r,l,c,u,f,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t,console.log("Loading ffmpeg-core.js"),B.isLoaded()){e.next=5;break}return e.next=5,B.load();case 5:return E(100*(n=0)),B.setProgress((function(e){var t=e.ratio;t>n&&(E(100*(n=t)),console.log(n))})),console.log("Start transcoding"),r=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!(t.length<=0)){var n=a+"/"+t.shift();T.includes(n)||(B.FS("mkdir",n),T.push(n),t.length>0&&e(t,n))}},l=a.relativePath.replace("/"+a.fileName,""),r(l.split("/")),e.t0=B,e.t1="/"+a.relativePath,e.next=16,Object(d.fetchFile)(a.file);case 16:return e.t2=e.sent,e.t0.FS.call(e.t0,"writeFile",e.t1,e.t2),c="-i ".concat(a.relativePath," ").concat(X," ").concat(ae," ").concat(le," ").concat(a.relativePath.replace(a.fileName,"processed_"+a.fileName)),e.next=21,B.run.apply(B,Object(o.a)(c.split(" ")));case 21:return e.next=23,B.FS("readFile",a.relativePath.replace(a.fileName,"processed_"+a.fileName));case 23:return u=e.sent,f=new File([u.buffer],"processed_"+a.fileName,{type:a.file.type,lastModified:a.file.lastModified,webkitRelativePath:a.relativePath.replace(a.fileName,"trimmed"+a.fileName)}),e.next=27,G(f,t.id);case 27:return m=e.sent,a=Object(s.a)({},a),e.abrupt("return",{file:f,metadata:m});case 30:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e,t){return new Promise((function(a,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){var e=new Audio(r.result);e.preload="metadata",e.onloadedmetadata=function(){a({data:r.result,duration:e.duration,fileId:t})}},r.onerror=function(e){return n(e)}}))},_=function(e){var t=function(e){return e.filter((function(e){if("."!==e.name[0]&&e instanceof Blob)return e})).map((function(e){return{file:e,id:e.webkitRelativePath,fileName:e.name,relativePath:e.webkitRelativePath,type:e.type,metadata:G(e,e.webkitRelativePath)}}))}(e),a={};return t.forEach((function(e){a[e.id]=e})),a.rows=Object.values(a),a},J=function(e){return delete e.rows,e.rows=Object.values(e),e},Q=function(){return r.a.createElement(f.a,{container:!0,justifyContent:"center",alignItems:"center",height:"100%"},r.a.createElement(m.a,{badgeContent:S.rows.length,color:"primary",max:9999},r.a.createElement(p.a,{variant:S.rows.length?"outlined":"contained",component:"label"},S.rows.length?"Reupload folder":"Upload folder",r.a.createElement(v.a,{style:{display:"none"},onChange:I,inputProps:{webkitdirectory:"true"},type:"file"}))),r.a.createElement(p.a,{onClick:H},"Encode Selected"))},V=Object(o.a)(Array(10).keys()).map((function(e){return{value:"-q:a ".concat(e),label:"-q:a ".concat(e)}})),$=Object(n.useState)(V[0].value),K=Object(u.a)($,2),X=K[0],Y=K[1],Z=[{value:"-af silenceremove=1:0:-50dB:0:0:-1:0:-50dB",label:"yes"},{value:"",label:"no"}],ee=Object(n.useState)(Z[0].value),te=Object(u.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(""),oe=Object(u.a)(re,2),le=oe[0],ie=oe[1];return r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{container:!0,direction:"column",alignItems:"center",spacing:2},r.a.createElement(f.a,{item:!0},r.a.createElement(q,{label:"Quality",options:V,changeHandler:function(e){Y(e.target.value)}})),r.a.createElement(f.a,{item:!0},r.a.createElement(q,{label:"Remove Silence",options:Z,changeHandler:function(e){ne(e.target.value)}})),r.a.createElement(f.a,{item:!0},r.a.createElement(h.a,{onChange:function(e){ie(e.target.value)},id:"standard-basic",label:"your custom input",variant:"standard"})),r.a.createElement(f.a,{item:!0},r.a.createElement(Q,null)),r.a.createElement(f.a,{item:!0,sx:{width:"100%"}},!!O&&r.a.createElement(g.a,{variant:"determinate",value:O}),r.a.createElement(M,{rows:S.rows,progress:w,onSelectionModelChange:function(e,t){console.log(e,t);var a={};e.forEach((function(e){a[e]=S[e]})),a.rows=Object.values(a),W(a)}}))))},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var K=a(161),X=document.getElementById("root");Object(K.createRoot)(X).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null))),function(e){if("serviceWorker"in navigator){if(new URL("/react-ffmpeg",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-ffmpeg","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(t,e)}))}}()}},[[189,1,2]]]);
//# sourceMappingURL=main.a618ce32.chunk.js.map