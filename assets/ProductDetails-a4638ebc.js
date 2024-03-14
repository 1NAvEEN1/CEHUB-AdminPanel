import{r as o,j as e}from"./react-fbb0bda4.js";import{V as K}from"./VerificationStepper-53d2075b.js";import{B as h,G as r,e as s,a3 as $,a5 as M,a6 as O,a2 as F,a7 as N,f as j,a9 as X,w as b,i as g,g as E,aa as Z,ab as ee,a8 as te,ac as _,ad as V,ae as H,af as re}from"./@mui-9f951d67.js";import{a as J}from"./axios-a342f982.js";import{a as se}from"./react-router-632ce17a.js";import"./@babel-ee410cf9.js";import"./@emotion-d230524c.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./stylis-79144faa.js";import"./react-is-e5978b8b.js";import"./clsx-0839fdbe.js";import"./react-transition-group-d691d793.js";import"./dom-helpers-9a525042.js";import"./react-dom-41b6b2e5.js";import"./scheduler-765c72db.js";import"./prop-types-028cde12.js";import"./dayjs-808adb56.js";import"./d3-shape-ec786559.js";import"./d3-path-41c4cb36.js";import"./@react-spring-ea22c872.js";import"./d3-scale-61379b3e.js";import"./internmap-7949acc8.js";import"./d3-array-ebe10e4a.js";import"./d3-format-ffdb8652.js";import"./d3-interpolate-a2909f51.js";import"./d3-color-6502c434.js";import"./d3-time-format-127c534b.js";import"./d3-time-45c91d1d.js";import"./@popperjs-f3391c26.js";import"./@remix-run-38dac3f6.js";const ne=async()=>{const u="/Product/GetProductCategories";return J.get(`https://supplierapi.cehub.lk/api${u}`).catch(d=>{console.log(d)})},ie=async u=>{const d=`/Product/GetProductSubCategories/${u}`;return J.get(`https://supplierapi.cehub.lk/api${d}`).catch(y=>{console.log(y)})},C="1px 5px 8px 5px rgba(0, 0, 0, 0.05)",S="-1px 1px 8px 5px rgba(255, 0, 0, 0.3)",v=({children:u,sx:d={},...y})=>e.jsx(h,{sx:{borderRadius:2,pt:1,pr:0,pb:1,...d},...y,children:u}),ae=({closeDrawer:u})=>{const d={},y={},W=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],w={productOrRaw:!0,productCategoryId:0,productSubCategoryId:0,name:"",description:"",price:0,supplyQuantity:0,unitType:0,monthlySupplyQuantity:0,monthlyMinimumQuantity:0,otherDetails:"",supplyFrequency:!0,jan:!1,feb:!1,mar:!1,apr:!1,may:!1,jun:!1,jul:!1,aug:!1,sep:!1,oct:!1,nov:!1,dec:!1},[n,m]=o.useState(w),[x,k]=o.useState(""),[D,Q]=o.useState([]),[p,I]=o.useState([]),[P,B]=o.useState(!1),[A,z]=o.useState(!1),G=async()=>{try{B(!0);const t=await ne();Q(t.data)}catch(t){console.error("Error fetching Categories:",t)}finally{B(!1)}};o.useEffect(()=>{G()},[]);const T=async()=>{try{z(!0);const t=await ie(n.productCategoryId);t.data.length==0?I([0]):I(t.data)}catch(t){console.error("Error fetching SubCategories:",t)}finally{z(!1)}};o.useEffect(()=>{n.productCategoryId!==0&&T()},[n.productCategoryId]);const a=(t,i,f=null)=>{k(""),m(f?c=>({...c,[t]:{...c[t],[f]:i}}):t==="supplyMonths"?c=>({...c,[i]:!c[i]}):t==="supplyFrequency"?c=>({...c,[t]:i,...i===!1&&{jan:!1,feb:!1,mar:!1,apr:!1,may:!1,jun:!1,jul:!1,aug:!1,sep:!1,oct:!1,nov:!1,dec:!1}}):c=>({...c,[t]:i,...t==="productCategoryId"&&{productSubCategoryId:0}}))},l=()=>{const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return e.jsx(r,{container:!0,spacing:2,maxWidth:350,children:t.map(i=>e.jsx(r,{item:!0,xs:3,display:"flex",justifyContent:"center",children:e.jsx(h,{bgcolor:n[i.toLowerCase()]?"#F47621":"#D5D8DC",onClick:()=>a("supplyMonths",i.toLowerCase()),sx:{borderRadius:2,width:60,height:40,"&:hover":{cursor:"pointer",border:"2px solid #F47621"}},display:"flex",justifyContent:"center",alignItems:"center",children:e.jsx(s,{textAlign:"center",children:i.toLowerCase()})})},i))})},R=()=>n.productCategoryId==0?(showAlertMessage({message:"Please select a product category !",type:"error"}),k("category"),0):n.productOrRaw&&p[0]!=0&&n.productSubCategoryId==0?(showAlertMessage({message:"Please select a product subcategory !",type:"error"}),k("subCategory"),0):!n.supplyFrequency&&W.every(t=>n[t]===!1)?(showAlertMessage({message:"Please select the month range !",type:"error"}),0):1,U=()=>{console.log(n);let t={...n};if(n.supplyFrequency&&W.forEach(f=>{t[f]=!0}),delete t[""],console.log(t),R()){const f=[...d.productDetails],c=[...y],q={category:D.find(L=>L.id===t.productCategoryId),subCategory:p.find(L=>L.id===t.productSubCategoryId)};store.getState().form.selectedProductIndex!==99?(f[store.getState().form.selectedProductIndex]=t,c[store.getState().form.selectedProductIndex]=q):(f.push(t),c.push(q)),m(w),u()}},Y=()=>{m(w),u()};return e.jsx(h,{children:e.jsxs(r,{container:!0,sx:{minHeight:"90svh",p:2},children:[e.jsx(s,{color:"#4D4D4D",fontWeight:500,fontSize:16,children:"Product or row martial?"}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx($,{"aria-labelledby":"demo-radio-buttons-group-label",value:n.productOrRaw.toString(),onChange:t=>(a("productOrRaw",t.target.value==="true"),t.target.value==="false"&&a("productSubCategoryId",0)),name:"radio-buttons-group",children:e.jsxs(r,{container:!0,spacing:5,mt:-3,ml:-2,children:[e.jsx(r,{item:!0,xs:4,children:e.jsxs(h,{maxWidth:250,display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{fontWeight:600,fontSize:16,children:"Product"})," ",e.jsx(M,{value:"true",control:e.jsx(O,{}),labelPlacement:"start"})]})}),e.jsx(r,{item:!0,xs:4,children:e.jsxs(h,{maxWidth:250,display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{fontWeight:600,fontSize:16,children:"Raw material"}),e.jsx(M,{value:"false",control:e.jsx(O,{}),labelPlacement:"start"})]})})]})}),e.jsxs(r,{container:!0,spacing:3,mt:1,children:[e.jsx(r,{item:!0,xs:12,md:6,lg:4,children:e.jsxs(v,{sx:{boxShadow:x==="category"?S:C},children:[e.jsx(s,{fontWeight:600,color:"primary",pl:2,children:"Product category"}),e.jsx(F,{fullWidth:!0,children:e.jsx(N,{value:D.find(t=>t.id===n.productCategoryId)||null,size:"small",options:D,getOptionLabel:t=>t.nameEnglish,onChange:(t,i)=>{a("productCategoryId",i?i.id:0),I([])},renderInput:t=>e.jsx(j,{...t,placeholder:"Select a product category",sx:{".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:40}}),loading:P})})]})})," ",n.productOrRaw&&p[0]!=0&&e.jsx(r,{item:!0,xs:12,md:6,lg:4,children:e.jsxs(v,{sx:{boxShadow:x==="subCategory"?S:C},children:[e.jsx(s,{fontWeight:600,color:"primary",pl:2,children:"Sub category"}),e.jsx(F,{fullWidth:!0,children:e.jsx(N,{value:p.find(t=>t.id===n.productSubCategoryId)||null,size:"small",options:p,getOptionLabel:t=>t.nameEnglish,onChange:(t,i)=>{a("productSubCategoryId",i?i.id:0)},renderInput:t=>e.jsx(j,{...t,placeholder:"Select a sub category",sx:{".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:3,height:40}}),disabled:n.productCategoryId===0,loading:A})})]})}),e.jsx(r,{item:!0,xs:12,md:6,lg:4,children:e.jsxs(v,{sx:{boxShadow:x==="name"?S:C,height:"100%"},children:[e.jsx(s,{color:"primary",pl:2,fontWeight:600,children:"Product name"}),e.jsx(j,{size:"small",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0}},placeholder:"Product name",fullWidth:!0,value:n.name,onChange:t=>a("name",t.target.value)})]})})]})]}),e.jsxs(r,{item:!0,xs:12,mt:5,children:[e.jsx(s,{color:"#4D4D4D",fontWeight:500,fontSize:16,mb:2,children:"Price range"}),e.jsx(r,{container:!0,children:e.jsxs(r,{item:!0,xs:12,display:"flex",gap:3,children:[e.jsxs(v,{sx:{boxShadow:x==="price"?S:C,maxWidth:200},children:[e.jsx(s,{color:"primary",pl:2,children:"Price (Rupees)"}),e.jsx(j,{size:"small",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},pl:2,pr:2},placeholder:"0000",type:"number",inputProps:{style:{fontWeight:"bold"}},value:n.price,onChange:t=>{const i=Math.max(0,t.target.value);a("price",i)}})]}),e.jsxs(v,{sx:{boxShadow:x==="unit"?S:C,width:160},children:[e.jsx(s,{color:"primary",pl:2,mb:0,children:"Quantity unit"}),e.jsx(F,{fullWidth:!0,children:e.jsxs(X,{sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},borderRadius:1},size:"small",value:n.unitType,onChange:t=>a("unitType",t.target.value),children:[e.jsx(b,{value:0,children:"Kilogram (kg)"}),e.jsx(b,{value:1,children:"Gram (g)"}),e.jsx(b,{value:2,children:"Milligram (mg)"}),e.jsx(b,{value:3,children:"Milliliter (ml)"}),e.jsx(b,{value:4,children:"Liter (l)"}),e.jsx(b,{value:5,children:"Packet"}),e.jsx(b,{value:6,children:"Unit"})]})})]})]})})]}),e.jsxs(r,{item:!0,xs:12,mt:5,children:[e.jsx(s,{color:"#4D4D4D",fontWeight:500,fontSize:16,mb:2,children:"Monthly Supply Quantity & MOQ"}),e.jsx(r,{container:!0,children:e.jsxs(r,{item:!0,xs:12,display:"flex",gap:3,children:[e.jsxs(v,{sx:{boxShadow:x==="price"?S:C,maxWidth:180},children:[e.jsx(s,{color:"primary",pl:2,children:"Quantity"}),e.jsx(j,{size:"small",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},pl:2,pr:2},placeholder:"00",type:"number",inputProps:{style:{fontWeight:"bold"}},value:n.supplyQuantity,onChange:t=>{const i=Math.max(0,t.target.value);a("supplyQuantity",i)}})]}),e.jsxs(v,{sx:{boxShadow:x==="unit"?S:C,width:180},children:[e.jsx(s,{color:"primary",pl:2,mb:0,children:"MOQ"}),e.jsx(j,{size:"small",sx:{boxShadow:"none",".MuiOutlinedInput-notchedOutline":{border:0},pl:2,pr:2},placeholder:"00",type:"number",inputProps:{style:{fontWeight:"bold"}},value:n.monthlySupplyQuantity,onChange:t=>{const i=Math.max(0,t.target.value);a("monthlySupplyQuantity",i)}})]})]})})]}),e.jsxs(r,{item:!0,xs:12,mt:3,children:[e.jsx(s,{color:"#4D4D4D",fontWeight:500,fontSize:16,mt:3,children:"Supply Frequency?"}),e.jsx(F,{fullWidth:!0,sx:{pl:2,pr:2,mb:-2},children:e.jsx($,{"aria-labelledby":"demo-radio-buttons-group-label",value:n.supplyFrequency.toString(),onChange:t=>(a("supplyFrequency",t.target.value==="true"),t.target.value==="true"&&a("supplyMonths",[])),name:"radio-buttons-group",children:e.jsxs(r,{container:!0,spacing:5,mt:-3,ml:-2,children:[e.jsx(r,{item:!0,xs:4,children:e.jsxs(h,{maxWidth:250,display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{fontWeight:600,fontSize:16,children:"Monthly"})," ",e.jsx(M,{value:"true",control:e.jsx(O,{}),labelPlacement:"start"})]})}),e.jsx(r,{item:!0,xs:4,children:e.jsxs(h,{maxWidth:250,display:"flex",alignItems:"center",justifyContent:"space-between",children:[e.jsx(s,{fontWeight:600,fontSize:16,children:"Custom"}),e.jsx(M,{value:"false",control:e.jsx(O,{}),labelPlacement:"start"})]})})]})})}),!n.supplyFrequency&&e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"#4D4D4D",fontWeight:500,fontSize:16,mt:3,mb:2,children:"Select a month range :"}),l()]})]}),e.jsxs(r,{item:!0,xs:12,mt:3,children:[e.jsx(s,{color:"#4D4D4D",fontWeight:500,fontSize:16,mt:3,children:"Other Product Details"}),e.jsx(s,{fontSize:"13px",mt:1,mb:1,color:"#4D4D4D",children:"(Any additional relevant details about the product, such as expiration details, packaging sizes, etc)"}),e.jsx(j,{fullWidth:!0,InputProps:{sx:{borderRadius:3}},multiline:!0,rows:7,value:n.description,onChange:t=>a("description",t.target.value)})]}),e.jsxs(r,{item:!0,xs:12,mt:3,display:"flex",justifyContent:"end",gap:2,children:[e.jsx(g,{size:"large",sx:{height:50,borderRadius:1,color:"primary.main",mt:2,width:170},variant:"outlined",onClick:()=>Y(),children:e.jsx(s,{textTransform:"capitalize",fontWeight:600,children:"Discard"})}),e.jsx(g,{variant:"contained",size:"large",sx:{height:50,borderRadius:1,color:"white",mt:2,width:170},onClick:()=>U(),children:e.jsx(s,{textTransform:"capitalize",fontWeight:600,children:"Save Product"})})]})]})})},Ae=()=>{const u=o.useRef(null);o.useRef(null);const d=se(),[y,W]=o.useState(!1),[w,n]=o.useState([{productCategoryId:0,productSubCategoryId:0,name:"string",description:"Grade A 1kg Rs.2,500 Grade B 1kg Rs.2,000 can supply 100kg per week. packaging can be done any size. we do not deliver. ",price:0,supplyQuantity:0,unitType:0,monthlySupplyQuantity:0,monthlyMinimumQuantity:0,otherDetails:"string"},{productCategoryId:0,productSubCategoryId:0,name:"string",description:"Grade A 1kg Rs.2,500 Grade B 1kg Rs.2,000 can supply 100kg per week. packaging can be done any size. we do not deliver. ",price:0,supplyQuantity:0,unitType:0,monthlySupplyQuantity:0,monthlyMinimumQuantity:0,otherDetails:"string"},{productCategoryId:0,productSubCategoryId:0,name:"string",description:"Grade A 1kg Rs.2,500 Grade B 1kg Rs.2,000 can supply 100kg per week. packaging can be done any size. we do not deliver. ",price:0,supplyQuantity:0,unitType:0,monthlySupplyQuantity:0,monthlyMinimumQuantity:0,otherDetails:"string"},{productCategoryId:0,productSubCategoryId:0,name:"string",description:"Grade A 1kg Rs.2,500 Grade B 1kg Rs.2,000 can supply 100kg per week. packaging can be done any size. we do not deliver. ",price:0,supplyQuantity:0,unitType:0,monthlySupplyQuantity:0,monthlyMinimumQuantity:0,otherDetails:"string"},{productCategoryId:0,productSubCategoryId:0,name:"string",description:"Grade A 1kg Rs.2,500 Grade B 1kg Rs.2,000 can supply 100kg per week. packaging can be done any size. we do not deliver. ",price:0,supplyQuantity:0,unitType:0,monthlySupplyQuantity:0,monthlyMinimumQuantity:0,otherDetails:"string"}]),m=()=>{d(-1)},x=()=>{d("./../../")},k=()=>{d("./../../")},D=()=>{d("./../OtherDetails")},[Q,p]=o.useState(!1),[I,P]=o.useState(!1),[B,A]=o.useState(0),z=l=>{p(!0)},G=()=>{a()},T=l=>{A(l),P(!0)},a=()=>{P(!1)};return e.jsxs(r,{container:!0,minHeight:"85svh",pr:2,children:[e.jsxs(r,{item:!0,xs:12,children:[e.jsx(K,{currentStep:2}),e.jsx(s,{variant:"h4",mt:2,children:"Basic Details"}),e.jsxs(r,{container:!0,children:[e.jsx(r,{item:!0,xs:12,mt:2,children:e.jsx(r,{container:!0,children:w.map((l,R)=>e.jsx(r,{item:!0,sx:12,md:6,lg:4,p:1,children:e.jsxs(r,{container:!0,sx:{boxShadow:"0px 3px 8px 4px rgba(0, 0, 0, 0.05)",borderRadius:1,p:3,bgcolor:"#FFFFFF",minHeight:250},children:[e.jsx(r,{item:!0,xs:9,children:l.productOrRaw?e.jsx(e.Fragment,{children:e.jsxs(s,{fontWeight:600,variant:"h6",children:["gf"," - sdf"]})}):e.jsx(e.Fragment,{children:e.jsxs(s,{fontWeight:600,variant:"h6",children:["fds"," - ","Raw Material"]})})}),e.jsxs(r,{item:!0,xs:3,display:"flex",justifyContent:"end",alignItems:"center",gap:3,children:[e.jsx(E,{size:"small",onClick:()=>T(R),children:e.jsx(Z,{fontSize:"medium"})}),e.jsx(E,{size:"small",onClick:()=>z(),children:e.jsx(ee,{fontSize:"small"})})]}),e.jsxs(r,{item:!0,xs:12,children:[e.jsx(s,{mt:l!=null&&l.description?2:0,fontWeight:500,fontSize:16,children:"Product Description"}),e.jsx(s,{mt:1,children:l==null?void 0:l.description})]})]})},R))})}),e.jsx(r,{item:!0,xs:12,display:"flex",justifyContent:"center",mt:4,children:e.jsx(g,{variant:"outlined",sx:{width:250,height:50},onClick:()=>p(!0),children:e.jsx(s,{fontWeight:600,fontSize:14,children:"Add Product"})})}),e.jsxs(r,{item:!0,xs:12,display:"flex",alignItems:"center",mt:2,children:[e.jsx(te,{checked:y,onChange:l=>W(l.target.checked),inputProps:{"aria-label":"controlled"}}),e.jsx(s,{children:"Product details are verified"})]})]})]}),e.jsx(r,{item:!0,xs:12,display:"flex",alignItems:"end",children:e.jsxs(r,{container:!0,spacing:2,mt:2,children:[e.jsx(r,{item:!0,xs:3,lg:2.4,children:e.jsx(g,{variant:"outlined",fullWidth:!0,onClick:m,children:e.jsx(s,{fontWeight:600,pt:1,pb:1,children:"Back"})})}),e.jsx(r,{item:!0,xs:0,sx:{display:{xs:"none",lg:"flex"}},lg:2.4}),e.jsx(r,{item:!0,xs:3,lg:2.4,children:e.jsx(g,{variant:"outlined",fullWidth:!0,onClick:x,children:e.jsx(s,{fontWeight:600,pt:1,pb:1,children:"Reject"})})}),e.jsx(r,{item:!0,xs:3,lg:2.4,children:e.jsx(g,{variant:"outlined",fullWidth:!0,onClick:k,children:e.jsx(s,{fontWeight:600,pt:1,pb:1,children:"Finish later"})})}),e.jsx(r,{item:!0,xs:3,lg:2.4,children:e.jsx(g,{variant:"contained",fullWidth:!0,onClick:D,children:e.jsx(s,{fontWeight:600,pt:1,pb:1,children:"Save & Continue"})})})]})}),e.jsxs(_,{open:I,onClose:()=>a(),"aria-labelledby":"add-product-modal",maxWidth:"xs",slotProps:{backdrop:{sx:{background:"rgba(0,0,0,0.7)"}}},children:[e.jsx(V,{children:e.jsx(s,{fontSize:16,fontWeight:600,children:"Are you sure to delete?"})}),e.jsx(H,{ref:u,children:e.jsxs(h,{display:"flex",justifyContent:"space-between",pt:2,pl:2,pr:2,children:[e.jsx(g,{variant:"contained",color:"secondary",size:"small",onClick:()=>a(),children:"No"}),e.jsx(g,{size:"small",variant:"contained",onClick:()=>G(),children:"Yes"})]})})]}),e.jsxs(_,{open:Q,onClose:()=>p(!1),"aria-labelledby":"add-product-modal",fullWidth:!0,maxWidth:"lg",PaperProps:{style:{backgroundColor:"#F9FAFB",padding:-5}},slotProps:{backdrop:{sx:{background:"rgba(0,0,0,0.5)"}}},children:[e.jsx(V,{children:e.jsx(h,{display:"flex",justifyContent:"end",mt:-3,mr:-3,children:e.jsx(E,{size:"small",onClick:()=>p(!1),children:e.jsx(re,{fontSize:"large"})})})}),e.jsx(H,{ref:u,children:e.jsx(h,{sx:{bgcolor:"#F9FAFB",mt:-2,mb:-2},children:e.jsx(ae,{closeDrawer:()=>p(!1)})})})]})]})};export{Ae as default};