import{j as e,r as n}from"./react-fbb0bda4.js";import{d as J}from"./dayjs-808adb56.js";import{D as N,C as G,S as O,a as Q,P as Y}from"./ProvinceFilter-0bd67c1e.js";import{B as r,e as o,g as v,H as P,J as w,v as B,E as D,s as $,L as z,K as E,G as s,P as K,N as U,w as L}from"./@mui-676850b8.js";import"./@babel-ee410cf9.js";import"./@emotion-d230524c.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./stylis-79144faa.js";import"./react-is-e5978b8b.js";import"./clsx-0839fdbe.js";import"./react-transition-group-d691d793.js";import"./dom-helpers-9a525042.js";import"./react-dom-41b6b2e5.js";import"./scheduler-765c72db.js";import"./prop-types-028cde12.js";import"./d3-shape-ec786559.js";import"./d3-path-41c4cb36.js";import"./@react-spring-ea22c872.js";import"./d3-scale-61379b3e.js";import"./internmap-7949acc8.js";import"./d3-array-ebe10e4a.js";import"./d3-format-ffdb8652.js";import"./d3-interpolate-a2909f51.js";import"./d3-color-6502c434.js";import"./d3-time-format-127c534b.js";import"./d3-time-45c91d1d.js";import"./@popperjs-f3391c26.js";function j({title:t,count:c}){const a=l=>typeof l=="string"&&l.includes("%")?l:l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return e.jsxs(r,{width:"100%",height:100,border:"1px solid #EFF0F6",borderRadius:3,p:2,children:[e.jsx(o,{color:"#000000B3",fontWeight:600,children:t}),e.jsx(o,{variant:"h3",fontWeight:600,children:a(c)})]})}const _=({data:t})=>{const[c,a]=n.useState(null),l=!!c,u=d=>{a(d.currentTarget)},x=()=>{a(null)};return e.jsxs(r,{width:"100%",height:265,border:"1px solid #EFF0F6",borderRadius:3,p:2,children:[e.jsxs(r,{display:"flex",alignItems:"center",justifyContent:"space-between",mt:-1,children:[e.jsx(r,{children:e.jsx(o,{color:"#000000B3",fontWeight:600,children:"Supplier Acquisition"})}),e.jsxs(r,{sx:{display:"inline"},fontWeight:600,children:["All"," ",e.jsx(v,{onClick:u,children:l?e.jsx(P,{}):e.jsx(w,{})})]}),e.jsx(B,{anchorEl:c,open:l,onClose:x,children:e.jsx(r,{width:100,height:100,display:"flex",alignItems:"center",justifyContent:"center",children:"All"})})]}),e.jsx(D,{})]})},q=$(z)(({theme:t})=>({height:10,borderRadius:5,[`&.${E.colorPrimary}`]:{backgroundColor:t.palette.grey[t.palette.mode==="light"?200:800]},[`& .${E.bar}`]:{borderRadius:5,backgroundColor:(t.palette.mode==="light","#F47621")}})),b=({data:t})=>(console.log(t),e.jsxs(s,{container:!0,children:[e.jsxs(s,{item:!0,xs:10,xl:11,pt:1,pr:1,children:[e.jsx(q,{variant:"determinate",value:t.percentage}),e.jsx(o,{ml:.5,mt:.5,color:"#000000B3",fontWeight:500,children:t.status})]}),e.jsxs(s,{item:!0,xs:2,xl:1,children:[e.jsx(o,{textAlign:"end",variant:"h5",fontWeight:600,children:t.percentage+"%"}),e.jsx(o,{textAlign:"end",color:"#000000B3",mt:-.5,children:t.count})]})]})),V=({data:t})=>{const[c,a]=n.useState(null),l=!!c,u=d=>{a(d.currentTarget)},x=()=>{a(null)};return e.jsxs(r,{width:"100%",height:265,border:"1px solid #EFF0F6",borderRadius:3,p:2,children:[e.jsxs(r,{display:"flex",alignItems:"center",justifyContent:"space-between",mt:-1,children:[e.jsx(r,{children:e.jsx(o,{color:"#000000B3",fontWeight:600,children:"Selection status"})}),e.jsxs(r,{sx:{display:"inline"},children:["All"," ",e.jsx(v,{onClick:u,children:l?e.jsx(P,{}):e.jsx(w,{})})]}),e.jsx(B,{anchorEl:c,open:l,onClose:x,children:e.jsx(r,{width:100,height:100,display:"flex",alignItems:"center",justifyContent:"center",children:"All"})})]}),e.jsx(D,{}),e.jsxs(s,{container:!0,height:"100%",pt:3,pb:2,children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(b,{data:t[0]})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(b,{data:t[1]})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(b,{data:t[2]})})]})]})},X=t=>typeof t=="string"&&(t!=null&&t.includes("%"))?t:t==null?void 0:t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),Z=({data:t})=>e.jsx(s,{container:!0,children:e.jsxs(s,{item:!0,xs:12,display:"flex",alignItems:"center",justifyContent:"start",gap:1,children:[e.jsx(r,{sx:{bgcolor:t==null?void 0:t.color,height:10,minWidth:18,borderRadius:1}}),e.jsx(o,{fontSize:12,fontWeight:700,children:(t==null?void 0:t.value)+"%"}),e.jsx(o,{fontSize:12,color:"#000000B3",fontWeight:500,children:t==null?void 0:t.name})]})}),F=({data:t})=>{var c;return e.jsxs(r,{width:"100%",minHeight:265,border:"1px solid #EFF0F6",borderRadius:3,p:2,children:[e.jsx(o,{color:"#000000B3",fontWeight:600,children:t==null?void 0:t.title}),e.jsx(o,{variant:"h3",fontWeight:600,children:X(t==null?void 0:t.count)}),e.jsxs(s,{container:!0,children:[e.jsx(s,{item:!0,xs:6,display:"flex",alignItems:"center",sx:{mt:{xs:-4,lg:-3,xl:-2}},children:e.jsx(s,{container:!0,spacing:1,children:(c=t==null?void 0:t.percentages)==null?void 0:c.map(a=>e.jsx(s,{item:!0,xs:12,children:e.jsx(Z,{data:a})}))})}),e.jsx(s,{item:!0,xs:6,children:e.jsx(r,{display:"flex",width:"100%",mt:-5,ml:4,children:e.jsx(K,{width:300,height:200,series:[{data:t==null?void 0:t.percentages,innerRadius:40,outerRadius:100,paddingAngle:2,cornerRadius:8,startAngle:0}],sx:{[`& .${U.root}`]:{fill:"white",fontWeight:"bold"}}})})})]})]})},g=({data:t,title:c})=>{const[a,l]=n.useState(null),[u,x]=n.useState("Highest"),d=!!a,C=i=>{l(i.currentTarget)},f=()=>{l(null)};let y=((i,h)=>{const m=[...i];return m.sort((S,p)=>h==="Highest"?p.count-S.count:h==="Lowest"?S.count-p.count:0),m})(t,u);return e.jsxs(r,{width:"100%",minHeight:265,border:"1px solid #EFF0F6",borderRadius:3,p:2,children:[e.jsxs(r,{display:"flex",alignItems:"center",justifyContent:"space-between",mt:-1,mr:-1,children:[e.jsx(r,{children:e.jsx(o,{color:"#000000B3",fontWeight:600,children:c})}),e.jsxs(r,{sx:{display:"inline"},fontWeight:500,color:"primary.main",children:[u+" ",e.jsx(v,{onClick:C,children:d?e.jsx(P,{}):e.jsx(w,{})})]}),e.jsxs(B,{anchorEl:a,open:d,onClose:f,children:[e.jsx(L,{onClick:()=>x("Highest"),children:e.jsx(o,{color:u=="Highest"?"#F47621":"black",children:"Highest"})}),e.jsx(L,{onClick:()=>x("Lowest"),children:e.jsx(o,{color:u=="Lowest"?"#F47621":"black",children:"Lowest"})})]})]}),e.jsx(D,{}),e.jsx(s,{container:!0,spacing:1,mt:1,children:y.map((i,h)=>e.jsxs(s,{item:!0,xs:12,display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(o,{color:"#000000B3",fontWeight:500,children:i==null?void 0:i.name}),e.jsx(o,{fontWeight:600,children:i==null?void 0:i.count})]},h))})]})},He=()=>{const t=J().format("YYYY-MM-DD"),[c,a]=n.useState(t),[l,u]=n.useState("All"),[x,d]=n.useState("All"),[C,f]=n.useState("All"),[A,y]=n.useState("All"),[i,h]=n.useState({totalSupplier:1750,product:1e3,rawMaterial:750,joinCount:1545,joinPercentage:"95%"}),[m,S]=n.useState(),[p,ee]=n.useState([{status:"Qualified",percentage:20,count:350},{status:"Processing",percentage:70,count:1225},{status:"Reject",percentage:10,count:175}]),[R,te]=n.useState({title:"Registered businesses",count:580,percentages:[{id:0,value:40,name:"Registered",color:"#F47621"},{id:1,value:60,name:"Unregistered",color:"#F4762133"}]}),[W,se]=n.useState({title:"Private Limited Companies",count:495,percentages:[{id:0,value:70,name:"Company",color:"#F47621"},{id:1,value:10,name:"Partnerships",color:"#F4762180"},{id:2,value:20,name:"Solo",color:"#F4762133"}]}),[k,ne]=n.useState({title:"Quality certificate available",count:358,percentages:[{id:0,value:40,name:"Available",color:"#F47621"},{id:1,value:60,name:"Not Available",color:"#F4762133"}]}),[H,re]=n.useState([{name:"Western",count:175},{name:"Central",count:125},{name:"Southern",count:115},{name:"North Western",count:95},{name:"Sabaragamuwa",count:91},{name:"Eastern",count:87},{name:"Uva",count:65},{name:"North Central",count:54},{name:"Northern",count:23}]),[I,ie]=n.useState([{name:"Tea",count:175},{name:"Rubber",count:125},{name:"Coconut",count:115},{name:"Spices",count:95},{name:"Herbal products",count:91},{name:"Food, Feed & Beverage",count:87},{name:"Electrical and Electronics",count:65},{name:"Garments and Textiles",count:54},{name:"Gems and Jewellery",count:23},{name:"Other",count:10}]),[T,oe]=n.useState([{name:"Dehydrated foods",count:50},{name:"Processed vegetables, fruits",count:20},{name:"Fruit juice",count:10},{name:"Processed foods",count:5},{name:"Cereals",count:2},{name:"Other",count:1}]),[M,le]=n.useState([{name:"Coconut water",count:50},{name:"King coconut water",count:20},{name:"Coconut oil",count:10},{name:"Coconut milk ",count:5},{name:"Coconut Butter",count:2},{name:"Coconut cream",count:2},{name:"Coconut flour",count:2},{name:"Coconut Jam",count:1},{name:"Coconut Chips",count:1},{name:"Other",count:1}]);return e.jsxs(s,{container:!0,spacing:2,width:"100%",children:[e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(N,{date:c,setDate:a,today:t})}),e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(G,{category:l,setCategory:u})}),e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(O,{subCategory:x,setSubCategory:d})}),e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(Q,{status:C,setStatus:f})}),e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(Y,{province:A,setProvince:y})}),e.jsx(s,{item:!0,xs:12}),e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(j,{count:i.totalSupplier,title:"Total suppliers"})}),e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(j,{count:i.product,title:"Products"})}),e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(j,{count:i.rawMaterial,title:"Raw materials"})}),e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(j,{count:i.joinCount,title:"Join with CEHub"})}),e.jsx(s,{item:!0,xs:2.4,display:"flex",justifyContent:"center",children:e.jsx(j,{count:i.joinPercentage,title:"Join with CEHub %"})}),e.jsx(s,{item:!0,xs:12}),e.jsx(s,{item:!0,xs:7.2,display:"flex",justifyContent:"center",children:e.jsx(_,{data:m})}),e.jsx(s,{item:!0,xs:4.8,display:"flex",justifyContent:"center",children:e.jsx(V,{data:p})}),e.jsx(s,{item:!0,xs:4,display:"flex",justifyContent:"center",children:e.jsx(F,{data:R})}),e.jsx(s,{item:!0,xs:4,display:"flex",justifyContent:"center",children:e.jsx(F,{data:W})}),e.jsx(s,{item:!0,xs:4,display:"flex",justifyContent:"center",children:e.jsx(F,{data:k})}),e.jsx(s,{item:!0,xs:4,children:e.jsx(g,{data:H,title:"Province"})}),e.jsx(s,{item:!0,xs:4,children:e.jsx(g,{data:I,title:"Product Categories"})}),e.jsxs(s,{item:!0,xs:4,children:[e.jsx(g,{data:T,title:"Food, Feed & Beverage"}),e.jsx(r,{mt:2}),e.jsx(g,{data:M,title:"Coconut"})]})]})};export{He as default};