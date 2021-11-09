var O=Object.defineProperty,H=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var R=(o,r,n)=>r in o?O(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,E=(o,r)=>{for(var n in r||(r={}))C.call(r,n)&&R(o,n,r[n]);if(y)for(var n of y(r))L.call(r,n)&&R(o,n,r[n]);return o},F=(o,r)=>H(o,q(r));var N=(o,r)=>{var n={};for(var a in o)C.call(o,a)&&r.indexOf(a)<0&&(n[a]=o[a]);if(o!=null&&y)for(var a of y(o))r.indexOf(a)<0&&L.call(o,a)&&(n[a]=o[a]);return n};import{u as W,j as e,B as D,e as K,a as i,F as g,R as d,r as A,S as I,T as p,I as _,b as P,c as w,d as B,f as S,g as T,D as f,L as j,h as k,i as $,C as Q,k as z,H as M,l as U,m as Y,n as J}from"./vendor.0113b82b.js";const V=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(t){if(t.ep)return;t.ep=!0;const l=n(t);fetch(t.href,l)}};V();var X="/react-interview-exercise/assets/header_logo.1094da8d.png";const Z={baseStyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},variants:{rounded:{padding:8,borderRadius:"40px",boxShadow:"xl",border:"2px solid"},smooth:{padding:6,borderRadius:"base",boxShadow:"md"}},defaultProps:{variant:"smooth"}},ee=t=>{var l=t,{variant:o,children:r,borderColor:n}=l,a=N(l,["variant","children","borderColor"]);const c=W("Card",{variant:o});return e(D,F(E({className:"cs-card",__css:c,borderColor:n},a),{children:r}))},re={baseStyle:{fontWeight:"bold",borderRadius:"25px",_hover:{bg:"black"}},sizes:{sm:{fontSize:"sm",px:4,py:3},md:{fontSize:"md",px:6,py:4}},variants:{outline:{border:"2px solid"},ghost:{border:"0px solid"},solid:{color:"white"}},defaultProps:{size:"md",variant:"outline"}},te={baseStyle:{bg:"white"}};var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Button:re,Input:te});const ne={brand:{green:"#42E794",darkGreen:"#1E7B75",red:"#FF4658",orange:"#FF6105",lightBlue:"#2ab8ff",darkBlue:"#1467FF",blue:"#2AB8FF",purple:"#630CB2",yellow:"#fff95e"},blue:{500:"#2ab8ff",600:"#1467FF"},yellow:{100:"#fff95e"},red:{100:"#ff4658"},pink:{100:"#e748b9"}},x=K({colors:ne,components:E({Card:Z},oe)});const G=({children:o,color:r=x.colors.brand.blue,size:n=["50%","50%"],globSizes:a=[[40,80],[60,50],[20,80]],globPositions:t=[[20,10],[10,20],[20,15]],top:l,left:c,right:h,bottom:b,opacity:v=1,speed:u,radius:m,rotate:s})=>i(g,{children:[i("div",{className:"blob",style:{top:l,left:c,right:h,bottom:b,width:n[0],height:n[1],opacity:v,transform:s?`rotate(${s}deg)`:void 0},children:[e("div",{className:"glob",style:{backgroundColor:r,width:a[0][0]+"%",height:a[0][1]+"%",top:t[0][0]+"%",left:t[0][1]+"%",animation:u?`move ${u*1200}ms infinite alternate ease-in-out`:void 0,borderRadius:m}}),e("div",{className:"glob1",style:{backgroundColor:r,width:a[1][0]+"%",height:a[1][1]+"%",top:t[1][0]+"%",left:t[1][1]+"%",animation:u?`move ${u*1e3}ms infinite alternate ease-in-out`:void 0,borderRadius:m}}),e("div",{className:"glob2",style:{backgroundColor:r,width:a[2][0]+"%",height:a[2][1]+"%",top:t[2][0]+"%",left:t[2][1]+"%",animation:u?`move ${u*800}ms infinite alternate ease-in-out`:void 0,borderRadius:m}})]}),e("svg",{className:"glob-svg",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:e("defs",{children:i("filter",{id:"goo",children:[e("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12",result:"blur"}),e("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),e("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),e("svg",{className:"glob-svg",viewBox:"0 0 400 400",children:e("defs",{children:e("filter",{id:"duotone-filter-post-one",children:e("feColorMatrix",{type:"matrix",values:"0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"})})})})]}),ae=({children:o})=>i(g,{children:[i(D,{overflow:"hidden",className:"globParent",position:"absolute",width:"100vw",height:"100%",minHeight:"100vh",children:[e(G,{size:["60%","60%"],speed:30,globSizes:[[60,65],[70,80],[30,75]],left:"0%",top:"10%",opacity:.5,color:x.colors.brand.green}),e(G,{size:["600px","600px"],left:"-50px",top:"-20px",color:x.colors.brand.green})]}),i(D,{className:"cs-header",position:"absolute",top:"0",right:"0",left:"0",width:"100vw",height:"80px",children:[e("a",{href:"https://characterstrong.com",children:e("img",{className:"header-img",src:X,alt:"CharacterStrong Logo"})}),o]})]});var ie="/react-interview-exercise/assets/logo192.55c7501b.png";const se=async o=>{let r=`https://nces.ed.gov/opengis/rest/services/K12_School_Locations/EDGE_GEOCODE_PUBLICLEA_1516/MapServer/0/query?where=UPPER(NAME) LIKE UPPER('%${o}%')&outFields=*&outSR=4326&f=json`,n=[],a=await(await fetch(r)).json();return n=[...a.features?a.features.map(t=>t.attributes):[]],n},le=async(o,r)=>{let n=`https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Private_School_Locations_Current/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${o}%')${r?`%20AND%20LEAID%20%3D%20'${r}'`:""}&outFields=*&outSR=4326&f=json`,a=`https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Public_School_Location_201819/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${o}%')${r?`%20AND%20LEAID%20%3D%20'${r}'`:""}&outFields=*&outSR=4326&f=json`,t=[],l=await(await fetch(n)).json(),c=await(await fetch(a)).json();return t=[...l.features?l.features.map(h=>h.attributes):[],...c.features?c.features.map(h=>h.attributes):[]],t},ce=()=>{const[o,r]=d.useState(!1),[n,a]=d.useState(!1),[t,l]=d.useState([]),[c,h]=d.useState(""),[b,v]=d.useState(""),u=s=>{s.preventDefault(),a(!0),r(!0),m()},m=async()=>{const s=await se(c);console.log("District(s):",s),l(s),v(c),r(!1),h("")};return A.exports.useEffect(()=>{m()},[]),i(g,{children:[e("form",{onSubmit:u,children:i(I,{spacing:3,children:[i(p,{textAlign:"center",children:["Enter a ",e("b",{children:"District"})]}),i(_,{children:[e(P,{pointerEvents:"none",children:e(w,{color:"blue.500"})}),e(B,{borderRadius:"20",boxShadow:"base",placeholder:"District",value:c,isRequired:!0,onChange:s=>h(s.target.value)})]}),e(S,{colorScheme:"blue",boxShadow:"md",variant:"solid",type:"submit",isFullWidth:!0,children:"Search"}),e(p,{textAlign:"center",children:o?e(T,{}):i(p,{textAlign:"center",children:[t.length," Districts"]})})]})}),e(f,{margin:3}),n?i(g,{children:[e(p,{children:e("b",{children:i("u",{children:['"',b,'" - ',t.length]})})}),t.length<60?t.map(s=>e(j,{spacing:3,children:i(k,{cursor:"pointer",_hover:{fontWeight:"900",color:"blue.700"},children:[e($,{as:w,color:"blue.500"}),s.NAME," - ",s.LCITY,", ",s.LSTATE]},s.OBJECTID)})):e(p,{children:"Too many results. Please narrow your search!"})]}):e(g,{})]})},de=()=>{const[o,r]=d.useState(!1),[n,a]=d.useState(!1),[t,l]=d.useState([]),[c,h]=d.useState(""),[b,v]=d.useState(""),u=s=>{s.preventDefault(),a(!0),r(!0),m()},m=async()=>{const s=await le(c);console.log("School:",s),l(s),v(c),r(!1),h("")};return A.exports.useEffect(()=>{m()},[]),i(g,{children:[e("form",{onSubmit:u,children:i(I,{spacing:3,children:[i(p,{textAlign:"center",children:["Enter a ",e("b",{children:"School"})]}),i(_,{children:[e(P,{children:e(w,{color:"yellow.500"})}),e(B,{focusBorderColor:"yellow.500",borderRadius:"20",boxShadow:"base",placeholder:"School",value:c,isRequired:!0,onChange:s=>h(s.target.value)})]}),e(S,{colorScheme:"yellow",boxShadow:"md",variant:"solid",type:"submit",children:"Search"}),e(p,{textAlign:"center",children:o?e(T,{}):i(p,{children:[t.length," Schools"]})})]})}),e(f,{margin:3}),n?i(g,{children:[e(p,{children:e("b",{children:i("u",{children:['"',b,'" - ',t.length]})})}),t.length<60?t.map(s=>e(j,{spacing:3,children:i(k,{cursor:"pointer",_hover:{fontWeight:"900",color:"yellow.700"},children:[e($,{as:w,color:"yellow.500"}),s.NAME," - ",s.CITY,", ",s.STATE]},s.NCESSCH)})):e(p,{children:"Too many results. Please narrow your search!"})]}):e(g,{})]})},he=()=>{const[o,r]=d.useState(!1);return i(Q,{padding:"100px",children:[" ",e(z,{initialScale:.9,in:!0,children:i(ee,{variant:"rounded",borderColor:"blue.300",children:[o?i(g,{children:[e(M,{color:"yellow.800",children:"School Data Finder"}),e(f,{margin:3}),i(U,{spacing:2,children:[e(S,{colorScheme:"blue",boxShadow:"md",variant:"ghost",onClick:()=>r(!1),children:"Districts"}),e(S,{colorScheme:"yellow",boxShadow:"md",variant:"solid",onClick:()=>r(!0),children:"Schools"})]}),e(f,{margin:3}),e(de,{})]}):i(g,{children:[e(M,{color:"blue.700",children:"District Data Finder"}),e(f,{margin:3}),i(U,{spacing:2,children:[e(S,{colorScheme:"blue",boxShadow:"md",variant:"solid",onClick:()=>r(!1),children:"Districts"}),e(S,{colorScheme:"yellow",boxShadow:"md",variant:"ghost",onClick:()=>r(!0),children:"Schools"})]}),e(f,{margin:3}),e(ce,{})]}),e(f,{margin:3}),e("img",{width:"80vh",src:ie,alt:"CharacterStrong Logo"})]})})]})};function ue(){return i("div",{className:"App",children:[e(ae,{}),e(he,{})]})}Y.render(e(d.StrictMode,{children:e(J,{theme:x,children:e(ue,{})})}),document.getElementById("root"));
