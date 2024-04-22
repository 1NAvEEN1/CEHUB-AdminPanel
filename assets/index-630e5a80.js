import{r as m,j as e,e as V}from"./react-fbb0bda4.js";import{u as R,j as f,B as p,G as o,g as h,k as L,l as O,m as P,n as $,o as D,e as u,p as F,q as T,r as N,A as C,t as S,v,w as I,x as k,y as H,z as g,D as Q,E as _,s as y,F as W,C as Y,H as X,J as G}from"./@mui-9ea6b346.js";import{a as b,b as K,O as Z}from"./react-router-632ce17a.js";import"./@babel-ee410cf9.js";import"./@emotion-d230524c.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./stylis-79144faa.js";import"./react-is-e5978b8b.js";import"./clsx-0839fdbe.js";import"./react-transition-group-d691d793.js";import"./dom-helpers-9a525042.js";import"./react-dom-41b6b2e5.js";import"./scheduler-765c72db.js";import"./prop-types-028cde12.js";import"./dayjs-808adb56.js";import"./d3-shape-ec786559.js";import"./d3-path-41c4cb36.js";import"./@react-spring-ea22c872.js";import"./d3-scale-61379b3e.js";import"./internmap-7949acc8.js";import"./d3-array-ebe10e4a.js";import"./d3-format-ffdb8652.js";import"./d3-interpolate-a2909f51.js";import"./d3-color-6502c434.js";import"./d3-time-format-127c534b.js";import"./d3-time-45c91d1d.js";import"./@popperjs-f3391c26.js";import"./@remix-run-38dac3f6.js";function A(s,r,c,l){const t=R(),d=f(t.breakpoints.up(r)),a=f(t.breakpoints.down(r)),i=f(t.breakpoints.between(c,l)),n=f(t.breakpoints.only(r));return s==="up"?d:s==="down"?a:s==="between"?i:s==="only"?n:null}const U="/CEHUB-AdminPanel/assets/NavigationLogo-4948522a.png",B=[{name:"Overview",path:"Dashboard/Overview",access:"admin",icon:e.jsx(O,{})},{name:"Suppliers",path:"Suppliers",access:"admin",icon:e.jsx(P,{})},{name:"Verification",path:"Verification/Process",access:"admin",icon:e.jsx($,{})},{name:"Settings",path:"Settings",access:"admin",icon:e.jsx(D,{})}],J=({currentUrl:s,handleDrawerClose:r})=>{const c=b(),[l,t]=m.useState(B[0].path),d=i=>{t(i),c(`./${i}`)};m.useEffect(()=>{const n=s.split("/")[1];t(n)},[s]);const a=({data:i})=>{let n=i.path.split("/")[0];return e.jsxs(o,{container:!0,onClick:()=>d(i.path),sx:{cursor:"pointer",borderRadius:1,bgcolor:l==n?"rgba(244, 118, 33, 0.1)":"inherit",maxWidth:170,p:1},children:[e.jsx(o,{item:!0,xs:3,display:"flex",justifyContent:"center",alignItems:"center",children:V.cloneElement(i.icon,{color:l==n?"primary":"inherit"})}),e.jsx(o,{item:!0,xs:9,display:"flex",alignItems:"center",children:e.jsx(u,{variant:"body1",color:l==n?"#F47621":"inherit",pl:1,children:i.name})})]})};return e.jsxs(p,{sx:{mt:3,height:"100%",bgcolor:"white"},children:[e.jsxs(o,{container:!0,spacing:3,children:[e.jsx(o,{item:!0,xs:12,display:"flex",justifyContent:"center",mb:3,mt:1,children:e.jsx(p,{component:"img",alt:"Image",src:U})}),B.map((i,n)=>e.jsx(o,{item:!0,xs:12,display:"flex",justifyContent:"center",children:e.jsx(a,{data:i})},n))]}),e.jsx(p,{display:{xs:"flex",lg:"none"},justifyContent:"center",mt:15,children:e.jsx(h,{sx:{boxShadow:2,bgcolor:"#E8E8E8"},onClick:r,size:"small",children:e.jsx(L,{fontSize:"medium"})})})]})},q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEXSURBVHgB7ZfvDYIwEMUfTsAGsoFuIBvoBo7ACI7gCMYNcAJGgA3ACXCD806I9INC/6XRpL/kpQltmtc2vT6ASCQSifw2CSwhopSbgpWzMlbHKkVJktwREjaTsVr6jHzfIBQLZlRTKSxYwZwdhiOaQ/oLhIBXXpEeLSyw2aFMc1ywI3tojutggY2hUnNcgxDI7WH1GrdsjVBInaHvV1/MhqtDiimpRxdWrezKOejORCL/gHYe4tsjj+oBZk+CVPWG89EVvhgLYUVu1N7KgQczb1NwhSc5kl/cMhJNVdgXixlp6bW3yjRzkGW0VSc4kTv9OI+fBdL0kLZkhrER4/8ynjznZs/aYoizmdLdjZJwdsNQg3QT5osnik7C5FPrXfwAAAAASUVORK5CYII=",ee=({currentUrl:s})=>{const c=[{name:"Overview",path:"/Dashboard/Overview"},{name:"Map",path:"/Dashboard/Map"}],l=[{name:"Process (205)",path:"/Verification/Process"},{name:"Verified",path:"/Verification/Verified"},{name:"Rejected",path:"/Verification/Rejected"}],t=b(),[d,a]=m.useState([]),i=x=>{t(`.${x}`)};m.useEffect(()=>{s.split("/")[1]=="Dashboard"?a(c):s.split("/")[1]=="Verification"?a(l):a([])},[s]);const n=({page:x})=>e.jsx(o,{item:!0,sx:{bgcolor:s.split("/")[2]===x.path.split("/")[2]?"white":"transparent",color:s.split("/")[2]===x.path.split("/")[2]?"#F47621":"inherit",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:1,p:1,pl:{lg:2,xs:1},pr:{lg:2,xs:1},":hover":{color:"#F47621",cursor:"pointer"}},onClick:()=>i(x.path),children:e.jsx(u,{children:x.name})});return e.jsx(o,{container:!0,gap:2,sx:{bgcolor:"#F5F5F7",borderRadius:1,p:1,display:d.length==0?"none":"flex"},children:d.map((x,w)=>e.jsx(n,{page:x},w))})},se=({setOpen:s,open:r,currentUrl:c})=>{const l=b(),[t,d]=m.useState(null),[a,i]=m.useState(q),n={name:"Kasun",userType:"Admin Account"},x=z=>{d(z.currentTarget)},w=()=>{d(null)},M=()=>{console.log("Profile")},E=()=>{l("/CEHUB-AdminPanel")};return e.jsxs(F,{children:[e.jsxs(o,{container:!0,mt:1,mb:1,children:[e.jsxs(o,{item:!0,lg:2,md:2.5,xs:12,display:"flex",alignItems:"center",justifyContent:{xs:"space-between",md:"start"},children:[e.jsx(h,{color:"inherit","aria-label":"open drawer",onClick:()=>s(!r),edge:"start",size:"small",sx:{ml:{md:-3,xs:0}},children:r?e.jsx(T,{fontSize:"large"}):e.jsx(N,{fontSize:"large"})}),e.jsx(u,{variant:"h4",textAlign:"center",children:c.split("/")[1]}),e.jsx(h,{size:"small",onClick:x,sx:{display:{md:"none",xs:"flex"}},children:e.jsx(C,{sx:{width:30,height:30,bgcolor:"#F47621"},src:a})})]}),e.jsx(o,{item:!0,lg:5,md:5,xs:12,display:"flex",alignItems:"center",justifyContent:"center",minHeight:{md:53},children:e.jsx(p,{children:e.jsx(ee,{currentUrl:c})})}),e.jsxs(o,{item:!0,lg:5,md:4.5,xs:0,display:{xs:"none",md:"flex"},alignItems:"center",justifyContent:"end",children:[e.jsxs(o,{container:!0,width:120,mr:5,display:{xs:"none",md:"flex"},children:[e.jsx(o,{item:!0,xs:4,children:e.jsx(h,{size:"small",children:e.jsx(S,{})})}),e.jsx(o,{item:!0,xs:4,children:e.jsx(h,{size:"small",children:e.jsx(v,{})})}),e.jsx(o,{item:!0,xs:4,children:e.jsx(h,{size:"small",children:e.jsx(I,{color:"error",variant:"dot",overlap:"circular",sx:{"& .MuiBadge-badge":{fontSize:3,height:8,width:5}},children:e.jsx(k,{})})})})]}),e.jsx(h,{size:"small",onClick:x,children:e.jsx(C,{sx:{width:30,height:30,bgcolor:"#F47621"},src:a})}),e.jsxs(p,{display:{xs:"none",md:"inline"},ml:1,children:[e.jsx(u,{fontWeight:600,children:n==null?void 0:n.name}),e.jsx(u,{fontSize:12,mt:-.5,children:n==null?void 0:n.userType})]})]})]}),e.jsxs(H,{anchorEl:t,open:!!t,onClose:w,children:[e.jsx(p,{pl:2,mb:2,mt:-2,children:e.jsxs(p,{display:{md:"none",xs:"inline"},ml:1,children:[e.jsx(u,{fontWeight:600,children:n==null?void 0:n.name}),e.jsx(u,{fontSize:12,mt:-.5,children:n==null?void 0:n.userType})]})}),e.jsxs(g,{sx:{display:{md:"none",xs:"block"}},children:[e.jsx(S,{color:"action",sx:{mr:1}}),"Download"]}),e.jsxs(g,{sx:{display:{md:"none",xs:"block"}},children:[e.jsx(v,{color:"action",sx:{mr:1}}),"Messages"]}),e.jsxs(g,{sx:{display:{md:"none",xs:"block"}},children:[e.jsx(I,{color:"error",variant:"dot",overlap:"circular",sx:{"& .MuiBadge-badge":{fontSize:3,height:8,width:5},mr:1},children:e.jsx(k,{color:"action",sx:{}})}),"Notifications"]}),e.jsxs(g,{onClick:M,children:[e.jsx(Q,{color:"action",sx:{mr:1}}),"My Profile"]}),e.jsxs(g,{onClick:E,children:[e.jsx(_,{color:"action",sx:{mr:1}}),"Log Out"]})]})]})},j=200,ne=y("main",{shouldForwardProp:s=>s!=="open"})(({theme:s,open:r})=>({flexGrow:1,padding:s.spacing(3),transition:s.transitions.create("margin",{easing:s.transitions.easing.sharp,duration:s.transitions.duration.leavingScreen}),marginLeft:A("up","lg")?`-${j}px`:0,...r&&{transition:s.transitions.create("margin",{easing:s.transitions.easing.easeOut,duration:s.transitions.duration.enteringScreen}),marginLeft:0}})),te=y(W,{shouldForwardProp:s=>s!=="open"})(({theme:s,open:r})=>({transition:s.transitions.create(["margin","width"],{easing:s.transitions.easing.sharp,duration:s.transitions.duration.leavingScreen}),...r&&{width:A("up","lg")?`calc(100% - ${j}px)`:"100%",marginLeft:`${j}px`,transition:s.transitions.create(["margin","width"],{easing:s.transitions.easing.easeOut,duration:s.transitions.duration.enteringScreen})}})),ie=y("div")(({theme:s})=>({display:"flex",alignItems:"center",padding:s.spacing(0,1),...s.mixins.toolbar,justifyContent:"flex-end"}));function Re(){const[s,r]=m.useState(A("up","lg")),c=()=>{r(!1)};b();const l=K(),[t,d]=m.useState("");return m.useEffect(()=>{const a=l.pathname,i=a.substring(a.indexOf("/",1));console.log("currentURL",a),d(i)},[l.pathname]),e.jsxs(p,{sx:{display:"flex"},children:[e.jsx(Y,{}),e.jsxs(te,{position:"fixed",open:s,sx:{backgroundColor:"white",color:"black",boxShadow:0,pr:{md:2,xs:0}},children:[e.jsx(se,{setOpen:r,open:s,currentUrl:t}),e.jsx(X,{})]}),e.jsx(G,{slotProps:{backdrop:{sx:{background:"rgba(0,0,0,0.4)"}}},sx:{width:j,"& .MuiDrawer-paper":{width:j,background:"transparent",border:"none",borderRadius:2,boxShadow:3}},variant:A("up","lg")?"persistent":"temporary",anchor:"left",open:s,onClose:c,children:e.jsx(p,{height:"100%",children:e.jsx(J,{currentUrl:t,handleDrawerClose:c})})}),e.jsxs(ne,{open:s,children:[e.jsx(ie,{}),e.jsx(p,{ml:{md:-1,xs:-2},mr:-3,pt:{md:0,xs:t.split("/")[1]=="Dashboard"||t.split("/")[1]=="Verification"?7:0},children:e.jsx(Z,{})})]})]})}export{Re as default};
