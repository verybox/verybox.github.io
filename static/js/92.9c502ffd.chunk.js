"use strict";(self.webpackChunkverybox_tools=self.webpackChunkverybox_tools||[]).push([[92],{25723:function(e,t,s){s.d(t,{Z:function(){return u}});var n=s(72791),r=s(81499),a=s(13811),o=s(29823),i=s(32232),c=s(74142),l=s(80184);function d(e){return(0,l.jsx)(i.Z,{...e,direction:"right"})}function u(e){const t=(0,c.Z)(),[s,i]=n.useState([]),[u,h]=n.useState(!1),[p,f]=n.useState(void 0),[m,g]=n.useState(void 0);n.useEffect((()=>{g((()=>d)),s.length&&!p?(f({...s[0]}),i((e=>e.slice(1))),h(!0)):s.length&&p&&u&&h(!1)}),[s,p,u]);const w=(e,t)=>{"clickaway"!==t&&h(!1)};return n.useEffect((()=>{i((t=>[...t,{message:e.msg,key:(new Date).getTime()}]))}),[]),(0,l.jsx)("div",{style:{background:t.palette.secondary.main},children:(0,l.jsx)(r.Z,{open:u,autoHideDuration:4e3,onClose:w,TransitionComponent:m,TransitionProps:{onExited:()=>{f(void 0)}},message:p?p.message:void 0,action:(0,l.jsx)(n.Fragment,{children:(0,l.jsx)(a.Z,{"aria-label":"close",color:"inherit",sx:{p:.5},onClick:w,children:(0,l.jsx)(o.Z,{})})})},p?p.key:void 0)})}},72246:function(e,t,s){s.d(t,{Z:function(){return l}});s(72791);var n=s(76863),r=s(30294),a=s(73978),o=s(94162),i=s(80184);const c=(0,n.ZP)(r.Z)((e=>{let{theme:t}=e;return{"& .MuiBadge-badge":{backgroundColor:"#44b700",color:"#44b700",boxShadow:`0 0 0 2px ${t.palette.background.paper}`,"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}));(0,n.ZP)(a.Z)((e=>{let{theme:t}=e;return{width:22,height:22,border:`2px solid ${t.palette.background.paper}`}}));function l(){return(0,i.jsx)(o.Z,{direction:"row",spacing:2,children:(0,i.jsx)(c,{overlap:"circular",anchorOrigin:{vertical:"top",horizontal:"left"},variant:"dot"})})}},5951:function(e,t,s){s.d(t,{Z:function(){return h}});var n=s(72791),r=s(45953),a=s(75017),o=s(17205),i=s(57879),c=s(75377),l=s(25723),d=s(25091),u=s(80184);function h(e){const{t:t}=(0,i.$)(),[s,h]=(0,n.useState)(d.IB.RPC),[p,f]=(0,n.useState)({isOpen:!1,msg:""});return(0,u.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,u.jsx)(r.ZP,{item:!0,xs:12,sm:6,children:(0,u.jsx)(a.Z,{fullWidth:!0,id:"rpc",label:t("setRPC.node"),variant:"outlined",size:"small",value:s,onChange:e=>{h(e.target.value)}})}),(0,u.jsxs)(r.ZP,{item:!0,xs:12,sm:5,children:[(0,u.jsx)(o.Z,{variant:"contained",onClick:()=>{(0,c.Z)(s).then((n=>{0==n?(e.action.changeRPCAction({available:!1,rpc:s,msg:`${t("setRPC.connectRPCFail")}`}),f({isOpen:!0,msg:`${t("setRPC.connectRPCFail")}`})):(e.action.changeRPCAction({available:!0,rpc:s,msg:`${t("setRPC.connectRPCSuccess")} ${n} mm`}),f({isOpen:!0,msg:`${t("setRPC.connectRPCSuccess")} ${n} mm`}))}))},children:t("setRPC.confirm")}),(0,u.jsx)(o.Z,{variant:"outlined",onClick:()=>{h("")},disabled:""==s,style:{marginLeft:5},children:t("setRPC.clear")})]}),(0,u.jsx)(r.ZP,{item:!0,xs:12,style:{display:p.isOpen?" ":"none"},children:(0,u.jsx)(l.Z,{msg:p.msg})},p.msg)]})}},17223:function(e,t,s){s.d(t,{e:function(){return a}});var n=s(25091);const r=s(74569).default;async function a(e,t){const s=n.qr;try{const e=await r.get(s,{params:{address:t}}).then((function(e){return e.data.result})).catch((function(e){}));JSON.parse(e);return e}catch(a){return 0}}},75377:function(e,t,s){s.d(t,{Z:function(){return r}});const n=s(55813);function r(e){const t=new n(new n.providers.HttpProvider(e)),s=Date.now();return t.eth.getChainId().then((e=>Date.now()-s)).catch((e=>!1))}},48189:function(e){e.exports=e=>{const t=e=>{let t=[];const s=e.length;let n=0,r=10,a=0;for(t[0]=e.slice(0,10),n+=10,r=64,a++;n<s;)t[a]=e.slice(n,n+64),n+=64,a++;return t},s=e=>{if(e.length<64)e="0".repeat(64-e.length)+e;if(e.length>64)e=e.slice(0,63);return e},n=(e,n)=>{for(let r=0;r<n.length;r++)switch(n[r].action){case"transferEth":if(n[r].address==e.from.toLowerCase())return{action:"transferEth"};break;case"recieveEth":if(n[r].address==e.to.toLowerCase())return{action:"recieveEth"};break;case"transferToken":if(n[r].address==e.from.toLowerCase()&&n[r].oppositeAddress==e.to.toLowerCase()&&e.input){if(t(e.input)[0]="0xa9059cbb")return{action:"transferToken"}}break;case"recieveToken":if(n[r].oppositeAddress==e.to.toLowerCase()&&e.input){const a=t(e.input);if(a[0]=a[1].toLowerCase()==s(n[r].address.slice(2)))return{action:"recieveToken"}}break;case"transferNFT":if(n[r].address==e.from.toLowerCase()&&n[r].oppositeAddress==e.to.toLowerCase()&&e.input){const a=t(e.input);if(a[0]=a[1].toLowerCase()==s(n[r].address.slice(2)))return{action:"transferNFT"}}break;case"recieveNFT":n[r].oppositeAddress,e.to.toLowerCase();break;case"interactToContract":if(n[r].address==e.from.toLowerCase()&&n[r].oppositeAddress==e.to.toLowerCase())return{action:"interactToContract"};break;case"beingInteracted":if(n[r].address==e.to.toLowerCase())return{action:"beingInteracted"};break;case"noSelected":if(n[r].address==e.from.toLowerCase()||n[r].address==e.to.toLowerCase())return{action:"noSelected"};if(e.input){if(t(e.input).map((e=>e.toLowerCase())).includes(s(n[r].address.slice(2))))return{action:"noSelected"}}break;default:return!1}};return{checkLastBlock:async t=>{const s=t.map((e=>e.toLowerCase()));let n=await e.eth.getBlock("latest",!0);if(n&&n.transactions)for(let r of n.transactions){let t=await e.eth.getTransaction(r);t.from&&s.includes(t.from.toLowerCase())}return 0},checkBlocks:async(t,s,n)=>{const r=n.map((e=>e.toLowerCase()));for(let a=t;a<s;a++){let t=await e.eth.getBlock(a);if(t&&t.transactions)for(let s of t.transactions){let t=await e.eth.getTransaction(s);r.includes(t.from.toLowerCase())}}},getActionsFromLastBlock:async(t,s)=>{const n=t.map((e=>e.toLowerCase())),r=s.map((e=>e.toLowerCase().slice(0,10)));let a=[],o=await e.eth.getBlock("latest",!0);if(o&&o.transactions)for(let e of o.transactions)e.to&&n.includes(e.to.toLowerCase())&&(0==r.length||r.includes(e.input.slice(0,10)))&&a.push(e);return a},getAddressActionsFromLastBlock:async t=>{let s=[],r=[];t.map((t=>{e.utils.isAddress(t.address)&&s.push(t.address),e.utils.isAddress(t.oppositeAddress)&&r.push(t.oppositeAddress)}));let a=[],o=await e.eth.getBlock("latest",!0);if(o&&o.transactions)for(let e of o.transactions)if(e.to&&(s.includes(e.to.toLowerCase())||s.includes(e.from.toLowerCase())||r.includes(e.to.toLowerCase())||r.includes(e.from.toLowerCase()))){const s=n(e,t);if(s){let t={...e,action:s.action};a.push(t)}}return a}}}},16092:function(e,t,s){s.r(t),s.d(t,{default:function(){return N}});var n=s(72791),r=s(45953),a=s(17205),o=s(13811),i=s(66648),c=s(5951),l=s(25723),d=s(87122),u=s(57879),h=s(25091),p=s(23735),f=s(91923),m=s(74142),g=s(72246),w=s(35702),x=s(75017),C=s(81898),v=s(40508),Z=s(65145),b=s(5397),j=s(17223),k=s(28776),P=s(80184);function y(e){const{t:t}=(0,u.$)(),{chain:s,chainId:o}=((0,m.Z)(),h.IB),[i,c]=(0,n.useState)(1),[l,d]=(0,n.useState)([]),p=e=>{let t=[];e.forEach(((e,s)=>{t.push((0,P.jsx)(w.Z,{value:e.abiSignature,children:e.name},s))})),d(t)};return n.useEffect((()=>{c(e.index)}),[e]),(0,P.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,P.jsx)(r.ZP,{item:!0,xs:6,children:(0,P.jsx)(x.Z,{fullWidth:!0,id:"T_"+i,label:t("watchContract.contractAddress")+"( * )",variant:"outlined",size:"small",value:e.contractAddress,onChange:async t=>{const n=t.target.value;if(e.web3.utils.isAddress(n)){const t=await(0,j.e)(s,n);if(t){const s=(0,k.QM)(e.web3,t,!0);p(s)}}e.paramChange(t)}})}),(0,P.jsx)(r.ZP,{item:!0,xs:3,children:(0,P.jsxs)(C.Z,{fullWidth:!0,children:[(0,P.jsx)(v.Z,{id:"param_label"+i,size:"small",children:t("watchContract.method")}),(0,P.jsxs)(Z.Z,{id:"param_select_"+i,name:"S_"+i,label:t("watchContract.method"),labelId:"param_label"+i,size:"small",value:e.selected,onChange:t=>{e.paramSelectChange(t)},children:[(0,P.jsx)(w.Z,{value:0,children:t("watchContract.noSelected")}),l]})]})}),(0,P.jsx)(r.ZP,{item:!0,xs:1,children:(0,P.jsx)(a.Z,{id:i,variant:"outlined",startIcon:(0,P.jsx)(b.Z,{}),onClick:t=>{e.deleteParam(t)},children:t("watchContract.delParam")})})]})}var A=s(25102);const S=s(55813),L=s(48189),R=(e,t,s)=>e.length>t+s?`${e.substring(0,t)}...${e.substring(e.length-s)}`:e;let T=!1;const $=s(81264);let B=null,I=0;var N=function(){const{t:e,i18n:t}=(0,u.$)(),s=(0,m.Z)(),{CHAIN:w,CHAINID:x}=h.IB,[C,v]=(0,n.useState)(h.IB.RPC),[Z,b]=(0,n.useState)(new S(new S.providers.HttpProvider(C))),[j,k]=(0,n.useState)({isOpen:!1,msg:""}),[N,E]=(0,n.useState)([{contractAddress:"",method:"0",selected:0}]),[O,M]=(0,n.useState)(!1),[z,D]=(0,n.useState)({type:"",msg:null}),[F,_]=(0,n.useState)(!1),[H,W]=(0,n.useState)(0);(0,n.useEffect)((()=>(T=!1,()=>{clearInterval(B)})),[]);let V=null;const q=()=>{J(),V=setInterval(J,3e3),B=V},J=async()=>{let e=[],t=[];N.map((s=>{Z.utils.isAddress(s.contractAddress)&&e.push(s.contractAddress),""!=s.method&&"0"!=s.method&&t.push(s.method)}));const{getActionsFromLastBlock:s}=L(Z),n=await Z.eth.getBlockNumber();W(n),I<n&&(I=n,s(e,t).then((e=>{e.length>0&&(e.map((e=>{ce(e)})),Q())})))},Q=()=>{new Audio($).play()},[G,K]=(0,n.useState)({}),U=()=>{const t=X();var s,n;return s="watchAddr",n=!t,K((e=>({...e,[s]:n}))),!!t||(k({isOpen:!0,msg:`${e("watchContract.pleaseSetTheWatchAddress")} ( Time: ${Date.now()} )`}),!1)},X=()=>Z.utils.isAddress(N[0].contractAddress),Y=e=>{let t=e.target.name.slice(2),s=e.target.value;N[t].method=s,N[t].selected=s,E(N),ne()},ee=e=>{let t=e.target.id.slice(2),s=e.target.value.trim().toLowerCase();N[t].contractAddress=s,E(N),ne()},[te,se]=(0,n.useState)([]),ne=()=>{let e=[];N.forEach(((t,s)=>{e.push((0,P.jsx)(r.ZP,{item:!0,xs:12,children:(0,P.jsx)(y,{index:s,selected:N[s].selected,method:N[s].type,contractAddress:N[s].value,paramSelectChange:Y,paramChange:ee,deleteParam:re,web3:Z})},s))})),se(e)},re=e=>{N.splice(e.target.id,1),E(N),ne()};(0,n.useEffect)((()=>{ne()}),[]);const[ae,oe]=(0,n.useState)([]),ie=[{field:"id",headerName:e("watchContract.id"),width:20},{field:"address",headerName:e("watchContract.contractAddress"),width:200},{field:"from",headerName:e("watchContract.from"),width:140},{field:"hash",headerName:e("watchContract.hash"),width:200},{field:"method",headerName:e("watchContract.method"),width:200}],ce=async t=>{try{let e,s;for(let n=0;n<N.length;n++)if(N[n].contractAddress.toLowerCase()==t.to.toLowerCase()){e=n+1,s=N[n].selected?N[n].selected:"No Selected";break}oe((n=>[...n,{id:n.length,address:e+" :: "+R(t.to,6,6),from:R(t.from,6,6),hash:R(t.hash,6,16),method:s}]))}catch(s){A.log("error ==> ",s)}k({isOpen:!0,msg:`${e("watchContract.foundNewTx")} ${t.hash}`})},[le,de]=(0,n.useState)(!0);return(0,P.jsx)(p.Z,{title:e("watchContract.title"),secondary:(0,P.jsxs)(r.ZP,{item:!0,xs:6,style:{textAlign:"right",verticalAlign:"middle",paddingTop:6,paddingBottom:6},children:[F&&(0,P.jsx)(g.Z,{}),(0,P.jsx)(a.Z,{variant:"contained",onClick:()=>{if(U()){if(T=!T,_(T),!T)return clearInterval(B),void(B=null);q()}},color:"secondary",sx:{borderRadius:10},children:e(F?"followMint.startRunning":"followMint.start")}),(0,P.jsx)(o.Z,{"aria-label":"settings",onClick:()=>{de(!le)},title:"click to open/close setting",children:(0,P.jsx)(d.Z,{})})]}),children:(0,P.jsxs)(r.ZP,{container:!0,spacing:f.dv,children:[(0,P.jsx)(r.ZP,{item:!0,xs:12,style:{display:le?"":"none"},children:(0,P.jsxs)(r.ZP,{container:!0,spacing:2,children:[(0,P.jsx)(r.ZP,{item:!0,xs:12,children:(0,P.jsx)(r.ZP,{container:!0,spacing:2,children:(0,P.jsx)(r.ZP,{item:!0,xs:12,children:(0,P.jsx)(c.Z,{action:{changeRPCAction:e=>{e.available&&(b(new S(new S.providers.HttpProvider(e.rpc))),T&&(T=!1,_(T)))}},data:{rpc:C}})})})}),(0,P.jsx)(r.ZP,{item:!0,xs:12,children:(0,P.jsx)(r.ZP,{container:!0,spacing:2,children:(0,P.jsxs)(r.ZP,{item:!0,xs:12,children:[e("watchContract.contractAddress"),(0,P.jsx)(a.Z,{sx:{ml:2},variant:"outlined",onClick:()=>{N.push({contractAddress:"",method:"",selected:"0"}),E(N),ne()},children:e("watchContract.add")})]})})}),te]})}),(0,P.jsx)(r.ZP,{item:!0,xs:12,style:{display:j.isOpen?" ":"none"},children:(0,P.jsx)(l.Z,{msg:j.msg})},j.msg),(0,P.jsx)(r.ZP,{item:!0,xs:12,style:{marginTop:2,height:300,width:"100%"},children:(0,P.jsx)(i._,{rows:ae,columns:ie,style:{marginTop:10,borderRadius:10,border:"1px solid",borderColor:s.palette.secondary.main}})})]})})}},87122:function(e,t,s){var n=s(64836);t.Z=void 0;var r=n(s(45649)),a=s(80184),o=(0,r.default)((0,a.jsx)("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");t.Z=o},5397:function(e,t,s){var n=s(40233),r=s(80184);t.Z=(0,n.Z)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},94162:function(e,t,s){var n=s(63366),r=s(87462),a=s(72791),o=s(51184),i=s(45682),c=s(78519),l=s(82466),d=s(76863),u=s(67254),h=s(80184);const p=["component","direction","spacing","divider","children"];function f(e,t){const s=a.Children.toArray(e).filter(Boolean);return s.reduce(((e,n,r)=>(e.push(n),r<s.length-1&&e.push(a.cloneElement(t,{key:`separator-${r}`})),e)),[])}const m=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((e=>{let{ownerState:t,theme:s}=e,n=(0,r.Z)({display:"flex",flexDirection:"column"},(0,o.k9)({theme:s},(0,o.P$)({values:t.direction,breakpoints:s.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,i.hB)(s),r=Object.keys(s.breakpoints.values).reduce(((e,s)=>(("object"===typeof t.spacing&&null!=t.spacing[s]||"object"===typeof t.direction&&null!=t.direction[s])&&(e[s]=!0),e)),{}),a=(0,o.P$)({values:t.direction,base:r}),c=(0,o.P$)({values:t.spacing,base:r});"object"===typeof a&&Object.keys(a).forEach(((e,t,s)=>{if(!a[e]){const n=t>0?a[s[t-1]]:"column";a[e]=n}}));const d=(s,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${r=n?a[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r]}`]:(0,i.NA)(e,s)}};var r};n=(0,l.Z)(n,(0,o.k9)({theme:s},c,d))}return n=(0,o.dt)(s.breakpoints,n),n})),g=a.forwardRef((function(e,t){const s=(0,u.Z)({props:e,name:"MuiStack"}),a=(0,c.Z)(s),{component:o="div",direction:i="column",spacing:l=0,divider:d,children:g}=a,w=(0,n.Z)(a,p),x={direction:i,spacing:l};return(0,h.jsx)(m,(0,r.Z)({as:o,ownerState:x,ref:t},w,{children:d?f(g,d):g}))}));t.Z=g},81264:function(e,t,s){e.exports=s.p+"static/media/beep.560257e0df7fbcb146ef.mp3"}}]);
//# sourceMappingURL=92.9c502ffd.chunk.js.map