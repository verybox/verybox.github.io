"use strict";(self.webpackChunkverybox_tools=self.webpackChunkverybox_tools||[]).push([[233],{75377:function(t,e,n){n.d(e,{Z:function(){return r}});const s=n(55813);function r(t){const e=new s(new s.providers.HttpProvider(t)),n=Date.now();return e.eth.getChainId().then((t=>Date.now()-n)).catch((t=>!1))}},45233:function(t,e,n){n.r(e);var s=n(72791),r=n(57879),o=n(45953),i=n(75017),c=n(17205),a=n(4565),d=n(81872),l=n(23735),h=n(75377),p=n(74142),x=n(80184);e.default=function(){const{t:t}=(0,r.$)(),e=(0,p.Z)(),n=["https://geth.mytokenpocket.vip","https://rpc.ankr.com/eth","https://mainnet-eth.compound.finance","https://api.mycryptoapi.com/eth","https://cloudflare-eth.com","https://api.mycryptoapi.com/eth","https://rpc.flashbots.net/","https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7","https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79"],[m,u]=(0,s.useState)([]),[j,f]=(0,s.useState)(["Mytokenpocket's http node","Ankr's http node","Compound's http node","Mycryptoapi's http node","Cloudflare-eth's http node","MyCrypto's http node","Flashbots's http node","Nodereal's http node","Pocket Network's http node"]),k=e=>{let n=[];for(let s=0;s<e.length;s++)n.push((0,x.jsxs)(o.ZP,{container:!0,sx:{my:1},children:[(0,x.jsx)(o.ZP,{item:!0,xs:12,sm:6,sx:{my:1},children:(0,x.jsx)(i.Z,{fullWidth:!0,id:`dd_${s}`,variant:"outlined",size:"small",value:e[s],helperText:j[s]})},`d_${s}`),(0,x.jsx)(o.ZP,{item:!0,xs:3,sx:{my:1},children:(0,x.jsx)(c.Z,{sx:{mx:1,borderRadius:30},id:`dddd_${s}`,variant:"outlined",size:"large",value:e[s],onClick:y,children:t("rpcNodes.txtCheckButton")})},`ddd_${s}`)]},`d_${s}`));u(n)},y=t=>{const e=t.target.id.replace("dddd_","");Z(e,t.target.value)},Z=(t,n)=>{f((e=>{let n=[...e];return n[t]=(0,x.jsx)("span",{children:"checking..."}),n})),(0,h.Z)(n).then((n=>{f((s=>{let r=[...s];return r[t]=0==n?(0,x.jsx)("span",{style:{color:e.palette.error.dark},children:"Connect fail"}):(0,x.jsx)("span",{style:{color:n>1e3?e.palette.orange.dark:e.palette.success.dark},children:`Response\uff1a${n} mm`}),r}))}))};return(0,s.useEffect)((()=>{k(n)}),[]),(0,s.useEffect)((()=>{k(n)}),[j]),(0,x.jsxs)(l.Z,{title:t("rpcNodes.title"),secondary:(0,x.jsx)(o.ZP,{item:!0,xs:6,style:{textAlign:"right",verticalAlign:"middle",paddingTop:6,paddingBottom:6},children:(0,x.jsx)(c.Z,{sx:{mx:1,borderRadius:10},variant:"outlined",size:"small",onClick:()=>{for(let t=0;t<n.length;t++)Z(t,n[t])},children:t("rpcNodes.txtCheckAllButton")})}),children:[(0,x.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,x.jsx)(o.ZP,{item:!0,xs:12,children:(0,x.jsx)(o.ZP,{container:!0,spacing:2,children:(0,x.jsx)(o.ZP,{item:!0,children:t("rpcNodes.txt1")})})}),(0,x.jsx)(o.ZP,{item:!0,xs:12,children:(0,x.jsx)(o.ZP,{item:!0,xs:12,children:m})})]}),(0,x.jsx)(d.Z,{sx:{mt:2,mb:3}}),(0,x.jsx)(o.ZP,{container:!0,spacing:2,children:(0,x.jsx)(o.ZP,{item:!0,xs:12,children:(0,x.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,x.jsx)(o.ZP,{item:!0,children:(0,x.jsxs)(a.Z,{variant:"h5",gutterBottom:!0,children:[t("rpcNodes.txt2"),"  ",(0,x.jsx)("a",{href:"https://infura.io/",target:"_blank",style:{textDecoration:"none",color:e.palette.secondary.dark},children:"https://infura.io/"})]})}),(0,x.jsx)(o.ZP,{item:!0,children:t("rpcNodes.txt3")}),(0,x.jsx)(o.ZP,{item:!0,children:(0,x.jsx)(a.Z,{variant:"h5",gutterBottom:!0,children:(0,x.jsx)("a",{href:"https://www.alchemy.com/",target:"_blank",style:{textDecoration:"none",color:e.palette.secondary.dark},children:"https://www.alchemy.com/"})})})]})})})]})}}}]);
//# sourceMappingURL=233.112274b5.chunk.js.map