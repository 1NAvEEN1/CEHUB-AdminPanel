import{j as i}from"./react-7cd8a114.js";import{G as t,B as o,e as l,ai as x}from"./@mui-2f009dca.js";const c=({currentStep:s})=>{const r=({title:n,step:e})=>i.jsxs(t,{container:!0,bgcolor:s===e?"#F4762133":"white",borderRadius:1,height:64,children:[i.jsx(t,{item:!0,xs:3,display:"flex",justifyContent:"center",alignItems:"center",children:i.jsxs(o,{sx:{width:40,height:40,bgcolor:s>e?"#2FB60D":"white",borderRadius:"50%",border:s===e?"1px solid #F47621":s>e?"1px solid #2FB60D":"1px solid #B2C0D1",display:"flex",justifyContent:"center",alignItems:"center"},children:[i.jsx(l,{fontSize:32,fontWeight:500,color:s===e?"#F47621":"#B2C0D1",display:s>e?"none":"block",children:e}),i.jsx(l,{color:"white",display:s>e?"block":"none",pt:.5,children:i.jsx(x,{fontSize:"large"})})]})}),i.jsx(t,{item:!0,xs:9,display:"flex",alignItems:"center",children:i.jsxs(o,{color:s===e?"#F47621":"#B2C0D1",children:[i.jsx(l,{fontWeight:500,children:"Step "+e}),i.jsx(l,{fontWeight:700,children:n})]})})]});return i.jsx("div",{children:i.jsxs(t,{container:!0,spacing:2,children:[i.jsx(t,{item:!0,xs:4,children:i.jsx(r,{title:"Basic Details",step:1})}),i.jsx(t,{item:!0,xs:4,children:i.jsx(r,{title:"Product Details",step:2})}),i.jsx(t,{item:!0,xs:4,children:i.jsx(r,{title:"Other Details",step:3})})]})})};export{c as V};