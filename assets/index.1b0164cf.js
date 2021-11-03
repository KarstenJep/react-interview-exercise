var F=Object.defineProperty,_=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var w=(r,e,a)=>e in r?F(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,m=(r,e)=>{for(var a in e||(e={}))y.call(e,a)&&w(r,a,e[a]);if(h)for(var a of h(e))S.call(e,a)&&w(r,a,e[a]);return r},x=(r,e)=>_(r,N(e));var E=(r,e)=>{var a={};for(var i in r)y.call(r,i)&&e.indexOf(i)<0&&(a[i]=r[i]);if(r!=null&&h)for(var i of h(r))e.indexOf(i)<0&&S.call(r,i)&&(a[i]=r[i]);return a};import{u as P,j as t,B as g,e as j,a as l,F as D,R as u,C as I,S as k,H as A,T as B,O as U,L as b,D as $,b as M,c as O}from"./vendor.8190456e.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};G();var H="/react-interview-exercise/assets/header_logo.1094da8d.png";const T={baseStyle:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},variants:{rounded:{padding:8,borderRadius:"40px",boxShadow:"xl",border:"2px solid"},smooth:{padding:6,borderRadius:"base",boxShadow:"md"}},defaultProps:{variant:"smooth"}},K=o=>{var s=o,{variant:r,children:e,borderColor:a}=s,i=E(s,["variant","children","borderColor"]);const n=P("Card",{variant:r});return t(g,x(m({className:"cs-card",__css:n,borderColor:a},i),{children:e}))},q={baseStyle:{fontWeight:"bold",borderRadius:"25px",_hover:{bg:"black"}},sizes:{sm:{fontSize:"sm",px:4,py:3},md:{fontSize:"md",px:6,py:4}},variants:{outline:{border:"2px solid"},ghost:{border:"0px solid"},solid:{color:"white"}},defaultProps:{size:"md",variant:"outline"}},z={baseStyle:{bg:"white"}};var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Button:q,Input:z});const V={brand:{green:"#42E794",darkGreen:"#1E7B75",red:"#FF4658",orange:"#FF6105",lightBlue:"#2ab8ff",darkBlue:"#1467FF",blue:"#2AB8FF",purple:"#630CB2",yellow:"#fff95e"},blue:{500:"#2ab8ff",600:"#1467FF"},yellow:{100:"#fff95e"},red:{100:"#ff4658"},pink:{100:"#e748b9"}},f=j({colors:V,components:m({Card:T},W)});const L=({children:r,color:e=f.colors.brand.blue,size:a=["50%","50%"],globSizes:i=[[40,80],[60,50],[20,80]],globPositions:o=[[20,10],[10,20],[20,15]],top:s,left:n,right:d,bottom:C,opacity:R=1,speed:c,radius:p,rotate:v})=>l(D,{children:[l("div",{className:"blob",style:{top:s,left:n,right:d,bottom:C,width:a[0],height:a[1],opacity:R,transform:v?`rotate(${v}deg)`:void 0},children:[t("div",{className:"glob",style:{backgroundColor:e,width:i[0][0]+"%",height:i[0][1]+"%",top:o[0][0]+"%",left:o[0][1]+"%",animation:c?`move ${c*1200}ms infinite alternate ease-in-out`:void 0,borderRadius:p}}),t("div",{className:"glob1",style:{backgroundColor:e,width:i[1][0]+"%",height:i[1][1]+"%",top:o[1][0]+"%",left:o[1][1]+"%",animation:c?`move ${c*1e3}ms infinite alternate ease-in-out`:void 0,borderRadius:p}}),t("div",{className:"glob2",style:{backgroundColor:e,width:i[2][0]+"%",height:i[2][1]+"%",top:o[2][0]+"%",left:o[2][1]+"%",animation:c?`move ${c*800}ms infinite alternate ease-in-out`:void 0,borderRadius:p}})]}),t("svg",{className:"glob-svg",xmlns:"http://www.w3.org/2000/svg",version:"1.1",children:t("defs",{children:l("filter",{id:"goo",children:[t("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12",result:"blur"}),t("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),t("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),t("svg",{className:"glob-svg",viewBox:"0 0 400 400",children:t("defs",{children:t("filter",{id:"duotone-filter-post-one",children:t("feColorMatrix",{type:"matrix",values:"0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"})})})})]}),J=({children:r})=>l(D,{children:[l(g,{overflow:"hidden",className:"globParent",position:"absolute",width:"100vw",height:"100%",minHeight:"100vh",children:[t(L,{size:["60%","60%"],speed:30,globSizes:[[60,65],[70,80],[30,75]],left:"0%",top:"10%",opacity:.5,color:f.colors.brand.green}),t(L,{size:["600px","600px"],left:"-50px",top:"-20px",color:f.colors.brand.green})]}),l(g,{className:"cs-header",position:"absolute",top:"0",right:"0",left:"0",width:"100vw",height:"80px",children:[t("a",{href:"https://characterstrong.com",children:t("img",{className:"header-img",src:H,alt:"CharacterStrong Logo"})}),r]})]}),Q=async r=>{let e=`https://nces.ed.gov/opengis/rest/services/K12_School_Locations/EDGE_GEOCODE_PUBLICLEA_1516/MapServer/0/query?where=UPPER(NAME) LIKE UPPER('%${r}%')&outFields=*&outSR=4326&f=json`,a=[],i=await(await fetch(e)).json();return a=[...i.features?i.features.map(o=>o.attributes):[]],a},X=async(r,e)=>{let a=`https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Private_School_Locations_Current/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${r}%')${e?`%20AND%20LEAID%20%3D%20'${e}'`:""}&outFields=*&outSR=4326&f=json`,i=`https://services1.arcgis.com/Ua5sjt3LWTPigjyD/arcgis/rest/services/Public_School_Location_201819/FeatureServer/0/query?where=UPPER(NAME) LIKE UPPER('%${r}%')${e?`%20AND%20LEAID%20%3D%20'${e}'`:""}&outFields=*&outSR=4326&f=json`,o=[],s=await(await fetch(a)).json(),n=await(await fetch(i)).json();return o=[...s.features?s.features.map(d=>d.attributes):[],...n.features?n.features.map(d=>d.attributes):[]],o},Y=()=>(u.useState(!1),u.useState([]),u.useState([]),(async()=>{const r=await Q("Peninsula School District");console.log("District example",r);const e=await X("k",r[1].LEAID);console.log("School Example",e)})(),t(I,{padding:"100px",height:"90vh",children:t(k,{initialScale:.9,in:!0,children:l(K,{variant:"rounded",borderColor:"blue",children:[t(A,{children:"School Data Finder"}),l(B,{children:["How would you utilize React.useEffect with the searchSchoolDistricts and searchSchools functions? ",t("br",{}),"Using ",t("a",{href:"https://chakra-ui.com/docs/principles",target:"_blank",children:"Chakra-UI"})," or your favorite UI toolkit, build an interface that allows the user to: ",t("br",{}),l(U,{children:[t(b,{children:"Search for a district"}),t(b,{children:"Search for a school within the district (or bypass district filter)"}),t(b,{children:"View all returned data in an organized way"})]}),t($,{margin:4}),"Check the console for example of returned data. ",t("b",{children:"Happy coding!"})]})]})})}));function Z(){return l("div",{className:"App",children:[t(J,{}),t(Y,{})]})}M.render(t(u.StrictMode,{children:t(O,{theme:f,children:t(Z,{})})}),document.getElementById("root"));