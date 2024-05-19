import{r as s,j as e}from"./react-7cd8a114.js";import{V as ee}from"./VerificationStepper-e74fe812.js";import{a as te,b as ie,G as se}from"./LocationService-2b5bf323.js";import{a as re}from"./react-router-93a78639.js";import{G as i,e as r,a4 as p,a5 as ae,a6 as n,a7 as b,a8 as v,a9 as S,f as o,aa as ne,i as h}from"./@mui-2f009dca.js";import"./@babel-09274262.js";import"./axios-a342f982.js";import"./@remix-run-38dac3f6.js";import"./@emotion-b893c0c3.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./stylis-79144faa.js";import"./react-is-e5978b8b.js";import"./clsx-0839fdbe.js";import"./react-transition-group-d014d9ae.js";import"./dom-helpers-9a525042.js";import"./react-dom-b2d74875.js";import"./scheduler-765c72db.js";import"./prop-types-aa93df86.js";import"./dayjs-775325e1.js";import"./d3-shape-ec786559.js";import"./d3-path-41c4cb36.js";import"./@react-spring-8b1f164b.js";import"./d3-scale-61379b3e.js";import"./internmap-7949acc8.js";import"./d3-array-ebe10e4a.js";import"./d3-format-ffdb8652.js";import"./d3-interpolate-a2909f51.js";import"./d3-color-6502c434.js";import"./d3-time-format-127c534b.js";import"./d3-time-45c91d1d.js";import"./@popperjs-f3391c26.js";const l="1px 5px 8px 5px rgba(0, 0, 0, 0.05)",Me=()=>{const u=re(),[P,w]=s.useState("en"),[c,L]=s.useState(1),[d,E]=s.useState(7),[y,I]=s.useState(1949),[k,D]=s.useState("Kasun Pathmaperuma"),[z,N]=s.useState("0771978590"),[O,B]=s.useState("0770256987"),[G,T]=s.useState("kasunkalhara01@gmail.com"),[F,M]=s.useState("No:333/55, St Anthony mawatha, Kerawalapitiya"),[A,q]=s.useState("https://www.google.com/maps?authuser=0"),[U,V]=s.useState(!1),[x,_]=s.useState([]),[m,K]=s.useState(!0),H=async()=>{try{const t=await te();_(t.data)}catch(t){console.error("Error fetching provinces:",t)}finally{K(!1)}};s.useEffect(()=>{H()},[]);const[g,C]=s.useState([]),[oe,W]=s.useState(!1),J=async()=>{W(!0);try{const t=await ie(c);C(t.data)}catch(t){console.error("Error fetching districts:",t)}finally{W(!1)}};s.useEffect(()=>{!c==0&&J()},[c]);const[j,f]=s.useState([]),[le,R]=s.useState(!1),Q=async()=>{R(!0);try{const t=await se(d);f(t.data)}catch(t){console.error("Error fetching Cities:",t)}finally{R(!1)}};s.useEffect(()=>{!d==0&&Q()},[d]);const X=()=>{u(-1)},Y=()=>{u(-1)},Z=()=>{u(-1)},$=()=>{u("./../ProductDetails")};return e.jsxs(i,{container:!0,minHeight:"85svh",pr:2,children:[e.jsxs(i,{item:!0,xs:12,children:[e.jsx(ee,{currentStep:1}),e.jsx(r,{variant:"h4",mt:2,children:"Basic Details"}),e.jsx(r,{color:"#4D4D4D",fontWeight:500,fontSize:16,mt:3,children:"Please select language"}),e.jsx(p,{fullWidth:!0,sx:{pl:2,pr:2,mt:1},children:e.jsx(ae,{"aria-labelledby":"demo-radio-buttons-group-label",value:P,name:"radio-buttons-group",onChange:t=>w(t.target.value),children:e.jsxs(i,{container:!0,spacing:15,children:[e.jsx(i,{item:!0,xs:4,children:e.jsxs(n,{display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:450,children:[e.jsx(r,{fontWeight:600,fontSize:18,children:"English"}),e.jsx(b,{value:"en",control:e.jsx(v,{}),labelPlacement:"start"})]})}),e.jsx(i,{item:!0,xs:4,children:e.jsxs(n,{display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:450,children:[e.jsx(r,{fontWeight:600,fontSize:18,children:"Sinhala"}),e.jsx(b,{value:"si",control:e.jsx(v,{}),labelPlacement:"start"})]})}),e.jsx(i,{item:!0,xs:4,children:e.jsxs(n,{display:"flex",justifyContent:"space-between",alignItems:"center",maxWidth:450,children:[e.jsx(r,{fontWeight:600,fontSize:18,children:"Tamil"}),e.jsx(b,{value:"ta",control:e.jsx(v,{}),labelPlacement:"start"})]})})]})})}),e.jsx(r,{color:"#4D4D4D",fontWeight:500,fontSize:16,mt:4,children:"Contact details"}),e.jsxs(i,{container:!0,spacing:3,mt:-1,children:[e.jsx(i,{item:!0,xs:4,children:e.jsxs(n,{sx:{boxShadow:l,borderRadius:2,pt:1,pr:2,pb:1},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"Province"}),e.jsx(p,{fullWidth:!0,children:e.jsx(S,{size:"small",value:x.find(t=>t.id===c)||null,options:x,getOptionLabel:t=>t.provinceEnglish,onChange:(t,a)=>{f([]),C([]),L(a?a.id:0)},renderInput:t=>e.jsx(o,{...t,placeholder:x.length==0&&c!=0?"Loading...":"Select a province",sx:{".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:40,ml:1,mr:-1}}),isOptionEqualToValue:(t,a)=>t.id===a.id,loading:m})})]})}),e.jsx(i,{item:!0,xs:4,children:e.jsxs(n,{sx:{boxShadow:l,borderRadius:2,pt:1,pr:2,pb:1},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"District"}),e.jsx(p,{fullWidth:!0,children:e.jsx(S,{size:"small",value:g.find(t=>t.id===d)||null,options:g,getOptionLabel:t=>t.districtEnglish,onChange:(t,a)=>{f([]),E(a?a.id:0)},renderInput:t=>e.jsx(o,{...t,placeholder:g.length==0&&d!=0?"Loading...":"Select a district",sx:{".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:40,ml:1,mr:-1}}),isOptionEqualToValue:(t,a)=>t.id===a.id,loading:m})})]})}),e.jsx(i,{item:!0,xs:4,children:e.jsxs(n,{sx:{boxShadow:l,borderRadius:2,pt:1,pr:2,pb:1},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"City"}),e.jsx(p,{fullWidth:!0,children:e.jsx(S,{size:"small",value:j.find(t=>t.id===y)||null,options:j,getOptionLabel:t=>t.cityEnglish,onChange:(t,a)=>{I(a?a.id:0)},renderInput:t=>e.jsx(o,{...t,placeholder:j.length==0&&y!=0?"Loading...":"Select a city",sx:{".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:40,ml:1,mr:-1}}),isOptionEqualToValue:(t,a)=>t.id===a.id,loading:m})})]})}),e.jsx(i,{item:!0,xs:3.5,children:e.jsxs(n,{sx:{boxShadow:l,borderRadius:2,pt:1,pr:2,pb:2},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"Name"}),e.jsx(o,{fullWidth:!0,InputProps:{sx:{borderRadius:1}},sx:{pl:2,mt:1},size:"small",placeholder:"Name",value:k,onChange:t=>D(t.target.value)})]})}),e.jsx(i,{item:!0,xs:2.5,children:e.jsxs(n,{sx:{boxShadow:l,borderRadius:2,pt:1,pr:2,pb:2},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"Primary contact"}),e.jsx(o,{fullWidth:!0,InputProps:{sx:{borderRadius:1}},sx:{pl:2,mt:1},size:"small",placeholder:"Name",value:z,onChange:t=>N(t.target.value)})]})}),e.jsx(i,{item:!0,xs:2.5,children:e.jsxs(n,{sx:{boxShadow:l,borderRadius:2,pt:1,pr:2,pb:2},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"Secondary contact"}),e.jsx(o,{fullWidth:!0,InputProps:{sx:{borderRadius:1}},sx:{pl:2,mt:1},size:"small",placeholder:"Name",value:O,onChange:t=>B(t.target.value)})]})}),e.jsx(i,{item:!0,xs:3.5,children:e.jsxs(n,{sx:{boxShadow:l,borderRadius:2,pt:1,pr:2,pb:2},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"Email"}),e.jsx(o,{fullWidth:!0,InputProps:{sx:{borderRadius:1}},sx:{pl:2,mt:1},size:"small",placeholder:"Name",value:G,onChange:t=>T(t.target.value)})]})}),e.jsx(i,{item:!0,xs:8,children:e.jsxs(n,{sx:{boxShadow:l,borderRadius:2,pt:1,pr:2,pb:2},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"Address"}),e.jsx(o,{fullWidth:!0,InputProps:{sx:{borderRadius:1}},sx:{pl:2,mt:1},size:"small",placeholder:"Name",value:F,onChange:t=>M(t.target.value)})]})}),e.jsx(i,{item:!0,xs:4,children:e.jsxs(n,{sx:{boxShadow:l,borderRadius:2,pt:1,pr:2,pb:2},children:[e.jsx(r,{variant:"b1",fontWeight:600,color:"primary",pl:2,children:"Google map URL"}),e.jsx(o,{fullWidth:!0,InputProps:{sx:{borderRadius:1}},sx:{pl:2,mt:1},size:"small",placeholder:"Name",value:A,onChange:t=>q(t.target.value)})]})}),e.jsxs(i,{item:!0,xs:12,display:"flex",alignItems:"center",children:[e.jsx(ne,{checked:U,onChange:t=>V(t.target.checked),inputProps:{"aria-label":"controlled"}}),e.jsx(r,{children:"Basic details are verified"})]})]})]}),e.jsx(i,{item:!0,xs:12,display:"flex",alignItems:"end",children:e.jsxs(i,{container:!0,spacing:2,mt:2,children:[e.jsx(i,{item:!0,xs:3,lg:2.4,children:e.jsx(h,{variant:"outlined",fullWidth:!0,onClick:X,children:e.jsx(r,{fontWeight:600,pt:1,pb:1,children:"Back"})})}),e.jsx(i,{item:!0,xs:0,sx:{display:{xs:"none",lg:"flex"}},lg:2.4}),e.jsx(i,{item:!0,xs:3,lg:2.4,children:e.jsx(h,{variant:"outlined",fullWidth:!0,onClick:Y,children:e.jsx(r,{fontWeight:600,pt:1,pb:1,children:"Reject"})})}),e.jsx(i,{item:!0,xs:3,lg:2.4,children:e.jsx(h,{variant:"outlined",fullWidth:!0,onClick:Z,children:e.jsx(r,{fontWeight:600,pt:1,pb:1,children:"Finish later"})})}),e.jsx(i,{item:!0,xs:3,lg:2.4,children:e.jsx(h,{variant:"contained",fullWidth:!0,onClick:$,children:e.jsx(r,{fontWeight:600,pt:1,pb:1,children:"Save & Continue"})})})]})})]})};export{Me as default};