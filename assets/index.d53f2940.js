var re=Object.defineProperty,ne=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var I=(o,i,c)=>i in o?re(o,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[i]=c,D=(o,i)=>{for(var c in i||(i={}))P.call(i,c)&&I(o,c,i[c]);if(E)for(var c of E(i))T.call(i,c)&&I(o,c,i[c]);return o},N=(o,i)=>ne(o,te(i));var F=(o,i)=>{var c={};for(var a in o)P.call(o,a)&&i.indexOf(a)<0&&(c[a]=o[a]);if(o!=null&&E)for(var a of E(o))i.indexOf(a)<0&&T.call(o,a)&&(c[a]=o[a]);return c};import{u as ie,j as e,B as x,e as le,a as r,F as g,R as u,r as R,S as B,T as m,I as M,b as _,c as w,d as O,f as v,g as j,D as b,L as k,P as $,h as U,i as G,k as H,l as Y,m as q,n as W,o as K,C as L,p as Q,q as Z,s as z,t as J,v as d,w as n,x as oe,H as V,y as X,z as ce,A as ae}from"./vendor.76cafca8.js";const de=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const s of h.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerpolicy&&(h.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?h.credentials="include":l.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(l){if(l.ep)return;l.ep=!0;const h=c(l);fetch(l.href,h)}};de();var he="/react-interview-exercise/assets/header_logo.1094da8d.png";const se={baseStyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},variants:{rounded:{padding:8,borderRadius:"40px",boxShadow:"xl",border:"2px solid"},smooth:{padding:6,borderRadius:"base",boxShadow:"md"}},defaultProps:{variant:"smooth"}},ue=l=>{var h=l,{variant:o,children:i,borderColor:c}=h,a=F(h,["variant","children","borderColor"]);const s=ie("Card",{variant:o});return e(x,N(D({className:"cs-card",__css:s,borderColor:c},a),{children:i}))},Se={baseStyle:{fontWeight:"bold",borderRadius:"25px",_hover:{bg:"black"}},sizes:{sm:{fontSize:"sm",px:4,py:3},md:{fontSize:"md",px:6,py:4}},variants:{outline:{border:"2px solid"},ghost:{border:"0px solid"},solid:{color:"white"}},defaultProps:{size:"md",variant:"outline"}},pe={baseStyle:{bg:"white"}};var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Button:Se,Input:pe});const me={brand:{green:"#42E794",darkGreen:"#1E7B75",red:"#FF4658",orange:"#FF6105",lightBlue:"#2ab8ff",darkBlue:"#1467FF",blue:"#2AB8FF",purple:"#630CB2",yellow:"#fff95e"},blue:{500:"#2ab8ff",600:"#1467FF"},yellow:{100:"#fff95e"},red:{100:"#ff4658"},pink:{100:"#e748b9"}},A=le({colors:me,components:D({Card:se},ge)});const ee=({children:o,color:i=A.colors.brand.blue,size:c=["50%","50%"],globSizes:a=[[40,80],[60,50],[20,80]],globPositions:l=[[20,10],[10,20],[20,15]],top:h,left:s,right:S,bottom:C,opacity:y=1,speed:p,radius:f,rotate:t})=>r(g,{children:[r("div",{className:"blob",style:{top:h,left:s,right:S,bottom:C,width:c[0],height:c[1],opacity:y,transform:t?`rotate(${t}deg)`:void 0},children:[e("div",{className:"glob",style:{backgroundColor:i,width:a[0][0]+"%",height:a[0][1]+"%",top:l[0][0]+"%",left:l[0][1]+"%",animation:p?`move ${p*1200}ms infinite alternate ease-in-out`:void 0,borderRadius:f}}),e("div",{className:"glob1",style:{backgroundColor:i,width:a[1][0]+"%",height:a[1][1]+"%",top:l[1][0]+"%",left:l[1][1]+"%",animation:p?`move ${p*1e3}ms infinite alternate ease-in-out`:void 0,borderRadius:f}}),e("div",{className:"glob2",style:{backgroundColor:i,width:a[2][0]+"%",height:a[2][1]+"%",top:l[2][0]+"%",left:l[2][1]+"%",animation:p?`move ${p*800}ms infinite alternate ease-in-out`:void 0,borderRadius:f}})]}),e("svg",{className:"glob-svg",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:e("defs",{children:r("filter",{id:"goo",children:[e("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12",result:"blur"}),e("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),e("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),e("svg",{className:"glob-svg",viewBox:"0 0 400 400",children:e("defs",{children:e("filter",{id:"duotone-filter-post-one",children:e("feColorMatrix",{type:"matrix",values:"0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"})})})})]}),fe=({children:o})=>r(g,{children:[r(x,{overflow:"hidden",className:"globParent",position:"absolute",width:"100vw",height:"100%",minHeight:"100vh",children:[e(ee,{size:["60%","60%"],speed:30,globSizes:[[60,65],[70,80],[30,75]],left:"0%",top:"10%",opacity:.5,color:A.colors.brand.green}),e(ee,{size:["600px","600px"],left:"-50px",top:"-20px",color:A.colors.brand.green})]}),r(x,{className:"cs-header",position:"absolute",top:"0",right:"0",left:"0",width:"100vw",height:"80px",children:[e("a",{href:"https://characterstrong.com",children:e("img",{className:"header-img",src:he,alt:"CharacterStrong Logo"})}),o]})]});var be="/react-interview-exercise/assets/logo192.55c7501b.png";const ve=async o=>{let i=`https://nces.ed.gov/opengis/rest/services/K12_School_Locations/EDGE_GEOCODE_PUBLICLEA_1516/MapServer/0/query?where=UPPER(NAME) LIKE UPPER('%${o}%')&outFields=*&outSR=4326&f=json`,c=[],a=await(await fetch(i)).json();return c=[...a.features?a.features.map(l=>l.attributes):[]],c},Ce=async(o,i)=>{let c=`https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Private_School_Locations_Current/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${o}%')${i?`%20AND%20LEAID%20%3D%20'${i}'`:""}&outFields=*&outSR=4326&f=json`,a=`https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Public_School_Location_201819/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${o}%')${i?`%20AND%20LEAID%20%3D%20'${i}'`:""}&outFields=*&outSR=4326&f=json`,l=[],h=await(await fetch(c)).json(),s=await(await fetch(a)).json();return l=[...h.features?h.features.map(S=>S.attributes):[],...s.features?s.features.map(S=>S.attributes):[]],l},ye=()=>{const[o,i]=u.useState(!1),[c,a]=u.useState(!1),[l,h]=u.useState([]),[s,S]=u.useState(""),[C,y]=u.useState("");u.useRef();const p=t=>{t.preventDefault(),a(!0),i(!0),f()},f=async()=>{const t=await ve(s);console.log("District(s):",t),h(t),y(s),i(!1),S("")};return R.exports.useEffect(()=>{f()},[]),r(g,{children:[e("form",{onSubmit:p,children:r(B,{spacing:3,children:[r(m,{textAlign:"center",children:["Enter a ",e("b",{children:"District"})]}),r(M,{children:[e(_,{pointerEvents:"none",children:e(w,{color:"blue.500"})}),e(O,{borderRadius:"20",boxShadow:"base",placeholder:"District",value:s,isRequired:!0,onChange:t=>S(t.target.value)})]}),e(v,{colorScheme:"blue",boxShadow:"md",variant:"solid",type:"submit",isFullWidth:!0,children:"Search"}),e(m,{textAlign:"center",children:o?e(j,{}):r(m,{textAlign:"center",children:[l.length," Districts"]})})]})}),e(b,{margin:3}),c?r(g,{children:[e(m,{children:e("b",{children:r("u",{children:['"',C,'" - ',l.length]})})}),l.length<60?l.map(t=>e(k,{spacing:3,children:r($,{children:[e(U,{children:r(G,{cursor:"pointer",_hover:{fontWeight:"900",color:"blue.700"},children:[e(H,{as:w,color:"blue.500"})," ",t.NAME," - ",t.LCITY,", ",t.LSTATE]},t.OBJECTID)}),e(Y,{children:r(q,{children:[e(W,{}),e(K,{children:e(L,{children:e("b",{children:t.NAME})})}),e(Q,{}),e(Z,{children:e(z,{variant:"simple",children:r(J,{children:[r(d,{children:[e(n,{children:"Address"}),e(n,{children:t.LSTREE})]}),r(d,{children:[e(n,{children:"City"}),e(n,{children:t.LCITY})]}),r(d,{children:[e(n,{children:"State"}),e(n,{children:t.LSTATE})]}),r(d,{children:[e(n,{children:"Zip"}),e(n,{children:t.LZIP})]}),r(d,{children:[e(n,{children:"County"}),e(n,{children:t.NMCNTY15})]}),r(d,{children:[e(n,{children:"CBSA15"}),e(n,{children:t.CBSA15})]}),r(d,{children:[e(n,{children:"CBSATYPE15"}),e(n,{children:t.CBSATYPE15})]}),r(d,{children:[e(n,{children:"CD15"}),e(n,{children:t.CD15})]}),r(d,{children:[e(n,{children:"CSA15"}),e(n,{children:t.CSA15})]}),r(d,{children:[e(n,{children:"LEAID"}),e(n,{children:t.LEAID})]}),r(d,{children:[e(n,{children:"NECTA15"}),e(n,{children:t.NECTA15})]}),r(d,{children:[e(n,{children:"NMCBSA15"}),e(n,{children:t.NMCBSA15})]}),r(d,{children:[e(n,{children:"NMCSA15"}),e(n,{children:t.NMCSA15})]}),r(d,{children:[e(n,{children:"NMNECTA15"}),e(n,{children:t.NMNECTA15})]}),r(d,{children:[e(n,{children:"OPSTFIPS"}),e(n,{children:t.OPSTFIPS})]}),r(d,{children:[e(n,{children:"SLDL15"}),e(n,{children:t.SLDL15})]}),r(d,{children:[e(n,{children:"SLDU15"}),e(n,{children:t.SLDU15})]}),r(d,{children:[e(n,{children:"STFIP15"}),e(n,{children:t.STFIP15})]})]})})})]})})]})})):e(m,{children:"Too many results. Please narrow your search!"})]}):e(g,{})]})},Ee=()=>{const[o,i]=u.useState(!1),[c,a]=u.useState(!1),[l,h]=u.useState([]),[s,S]=u.useState(""),[C,y]=u.useState(""),p=t=>{t.preventDefault(),a(!0),i(!0),f()},f=async()=>{const t=await Ce(s);console.log("School:",t),h(t),y(s),i(!1),S("")};return R.exports.useEffect(()=>{f()},[]),r(g,{children:[e("form",{onSubmit:p,children:r(B,{spacing:3,children:[r(m,{textAlign:"center",children:["Enter a ",e("b",{children:"School"})]}),r(M,{children:[e(_,{children:e(w,{color:"yellow.500"})}),e(O,{focusBorderColor:"yellow.500",borderRadius:"20",boxShadow:"base",placeholder:"School",value:s,isRequired:!0,onChange:t=>S(t.target.value)})]}),e(v,{colorScheme:"yellow",boxShadow:"md",variant:"solid",type:"submit",children:"Search"}),e(m,{textAlign:"center",children:o?e(j,{}):r(m,{children:[l.length," Schools"]})})]})}),e(b,{margin:3}),c?r(g,{children:[e(m,{children:e("b",{children:r("u",{children:['"',C,'" - ',l.length]})})}),l.length<60?l.map(t=>e(k,{spacing:3,children:r($,{children:[e(U,{children:r(G,{cursor:"pointer",_hover:{fontWeight:"900",color:"yellow.700"},children:[e(H,{as:w,color:"yellow.500"})," ",t.NAME," - ",t.CITY,", ",t.STATE]},t.FID)}),e(Y,{children:r(q,{children:[e(W,{}),e(K,{children:e(L,{children:e("b",{children:t.NAME})})}),e(Q,{}),e(Z,{children:e(z,{variant:"simple",children:r(J,{children:[r(d,{children:[e(n,{children:"Address"}),e(n,{children:t.STREET})]}),r(d,{children:[e(n,{children:"City"}),e(n,{children:t.CITY})]}),r(d,{children:[e(n,{children:"State"}),e(n,{children:t.STATE})]}),r(d,{children:[e(n,{children:"Zip"}),e(n,{children:t.ZIP})]}),r(d,{children:[e(n,{children:"County"}),e(n,{children:t.NMCNTY})]}),r(d,{children:[e(n,{children:"FID"}),e(n,{children:t.FID})]}),r(d,{children:[e(n,{children:"LEAID"}),e(n,{children:t.LEAID})]}),r(d,{children:[e(n,{children:"LOCALE"}),e(n,{children:t.LOCALE})]}),r(d,{children:[e(n,{children:"NCESSCH"}),e(n,{children:t.NCESSCH})]}),r(d,{children:[e(n,{children:"OPSTFIPS"}),e(n,{children:t.OPSTFIPS})]}),r(d,{children:[e(n,{children:"OPSTFIPS"}),e(n,{children:t.OPSTFIPS})]})]})})})]})})]})})):e(m,{children:"Too many results. Please narrow your search!"})]}):e(g,{})]})},we=()=>{const[o,i]=u.useState(!1);return r(L,{padding:"100px",children:[" ",e(oe,{initialScale:.9,in:!0,children:r(ue,{variant:"rounded",borderColor:"blue.300",children:[o?r(g,{children:[e(V,{color:"yellow.800",children:"School Data Finder"}),e(b,{margin:3}),r(X,{spacing:2,children:[e(v,{colorScheme:"blue",boxShadow:"md",variant:"ghost",onClick:()=>i(!1),children:"Districts"}),e(v,{colorScheme:"yellow",boxShadow:"md",variant:"solid",onClick:()=>i(!0),children:"Schools"})]}),e(b,{margin:3}),e(Ee,{})]}):r(g,{children:[e(V,{color:"blue.700",children:"District Data Finder"}),e(b,{margin:3}),r(X,{spacing:2,children:[e(v,{colorScheme:"blue",boxShadow:"md",variant:"solid",onClick:()=>i(!1),children:"Districts"}),e(v,{colorScheme:"yellow",boxShadow:"md",variant:"ghost",onClick:()=>i(!0),children:"Schools"})]}),e(b,{margin:3}),e(ye,{})]}),e(b,{margin:3}),e("img",{width:"80vh",src:be,alt:"CharacterStrong Logo"})]})})]})};function Ae(){return r("div",{className:"App",children:[e(fe,{}),e(we,{})]})}ce.render(e(u.StrictMode,{children:e(ae,{theme:A,children:e(Ae,{})})}),document.getElementById("root"));
