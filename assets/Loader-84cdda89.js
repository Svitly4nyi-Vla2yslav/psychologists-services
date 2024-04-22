import{u as n,R as h,F as q,r as f,l as D,m as g,n as W,j as t,o as H,p as A,q as y,E as k,B as K,_ as N,g as G,h as V,M as J,s as Q,t as X,v as O}from"./index-1727fcfd.js";const nt=e=>e.psychologists.items,it=e=>e.psychologists.isLoading,rt=e=>e.psychologists.error,Z=e=>e.favorites.items,at=e=>e.favorites.isLoading,ot=e=>e.favorites.error,U=n.ul`
 display: flex;
 mask-type: 28px;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 /* min-width: 320px;
 max-width: 1184px; */
 gap: 48px;
 
 @media screen and (min-width: 768px) {
   margin-top: 53px;

 }
`,ee=n.li`
  /* width: 100%; */
 width: 280px;
  padding: 15px;
  display: flex;
flex-wrap: wrap;
border-radius: 24px;
background: #fff;


@media screen and (min-width: 768px) {
  gap: 48px;
width: 100%;
}


@media screen and (min-width: 1400px) {
  align-items: flex-start;
  margin-bottom: 53px;
  flex-wrap: nowrap;
  width: 1184px;
  padding: 24px;
}
`;var P={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},T=h.createContext&&h.createContext(P),te=["attr","size","title"];function ne(e,i){if(e==null)return{};var r=ie(e,i),a,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],!(i.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ie(e,i){if(e==null)return{};var r={},a=Object.keys(e),o,l;for(l=0;l<a.length;l++)o=a[l],!(i.indexOf(o)>=0)&&(r[o]=e[o]);return r}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(this,arguments)}function z(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function w(e){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?z(Object(r),!0).forEach(function(a){re(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function re(e,i,r){return i=ae(i),i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function ae(e){var i=oe(e,"string");return typeof i=="symbol"?i:String(i)}function oe(e,i){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,i||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function I(e){return e&&e.map((i,r)=>h.createElement(i.tag,w({key:r},i.attr),I(i.child)))}function se(e){return i=>h.createElement(le,v({attr:w({},e.attr)},i),I(e.child))}function le(e){var i=r=>{var{attr:a,size:o,title:l}=e,p=ne(e,te),x=o||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),h.createElement("svg",v({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,p,{className:c,style:w(w({color:e.color||r.color},r.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),l&&h.createElement("title",null,l),e.children)};return T!==void 0?h.createElement(T.Consumer,null,r=>i(r)):i(P)}function L(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(e)}const de=n.div`
  margin: 0 auto;
  border: 3px solid ${({theme:e})=>e.orange};
  position: relative;
  border-radius: 20%;
  padding: 10px;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    background: #38cd3e;
    right: 13px;
    top: 10px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    min-height: 120px;
    padding: 0;
  }
`,F=n.img`
  border-radius: 20%;
`;n.div`
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-radius: 50%;
  position: absolute;
`;const ce=n.div`
  width: 100%;

`,pe=n.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
margin-top: 20px;

  
@media screen and (min-width: 768px) {
  flex-direction: row;
}

  @media screen and (min-width: 1140px) {
  margin-top: 0;


}
`,xe=n.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
  text-align: center;
`,he=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  @media screen and (min-width: 1140px) {
    gap: 16px;
  
}
`,fe=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,$=n.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  padding-right: 4px;
 
  
  @media screen and (min-width: 768px) {

    padding-right: 16px;
    border-right: 1px solid rgba(18, 20, 23, 0.2);
  
  &:last-child {
    border-right: none;
    padding-right: 0;
  }
  
  &:nth-child(4) {
    border-right: none;
    padding-right: 0;
  }
  
}
`,ue=n.span`
  color: #38cd3e;
`,me=n.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  
  @media screen and (min-width: 1140px) {
    margin-left: 48px;
  
}
`,ge=n(L)`
  fill: none;
  width: 26px;
  height: 26px;
  transition: fill scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.1;
  }
  &:focus {
    fill: #3470ff;
    color: #3470ff;
  }
`,be=n(L)`
  fill: ${({theme:e})=>e.primaryYellow};
  color: ${({theme:e})=>e.primaryYellow};
  width: 26px;
  height: 26px;
  transition: fill scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.1;
  }
  &:focus {
    color: white;
    fill: none;
  }
`,je=n.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  margin-top: 20px;
  
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    text-align: start;
  }
`,ve=n.ul`
  margin-top: 32px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;
`,b=n.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  height: 40px;
  border-radius: 24px;
padding: 8px 16px;
background: #f3f3f3;
// width: 100%;
`,j=n.span`
  color: #8a8a89;
`;n.ul`
  display: flex;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;const we=n.div`
  // display: flex;
`,ye=n.p`
font-weight: 400;
font-size: 16px;

// line-height: 20px; 
line-height: 1.25;
color: rgba(25, 26, 21, 0.5);
`,ke=n.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  background: transparent;
  margin-top: 16px;

  &:hover {
    scale: 1.1;
   color:  ${({theme:e})=>e.primaryYellow}
  }
`,$e=n.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
`,Oe=n.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`,Se=n.img`
  border-radius: 50%;
`,Ce=n.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,Te=n.div`
  display: flex;
  flex-direction: column;
`,ze=n.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Ee=n.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  border: 1px solid rgba(18, 20, 23, 0.2);
  border-radius: 35px;
  padding: 8px 12px;
  height: 100%;
   &:hover {
    background: ${({theme:e})=>e.primaryLightYellow};
  }
`,Ne=n.div`
  display: flex;
  margin-top: 2px;
  gap: 8px;
`,Pe=n.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,Ie=n.button`
  font-weight: 500;
  font-size: 16px;
  // line-height: 156%;
  border-radius: 30px;
 padding: 14px 32px;
  width: 227px;
height: 48px;
  color: ${({theme:e})=>e.orange};
  background: ${({theme:e})=>e.primaryYellow};
  margin-top: 32px;

   &:hover {
    color: ${({theme:e})=>e.orange};
    background: ${({theme:e})=>e.lightYellow};
  }
`,E=n.img`
`;n.img`
`;const Le="/assets/star-84ec46ae.svg",Fe="/assets/face-53b4e4e1.png",Be=n.div`
`,Me=n.h2`
font-weight: 500;
font-size: 40px;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 20px;
`,Re=n.p`
font-weight: 400;
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 20px;
`,_e=n.div`
  display: flex;
  gap: 14px;
 align-items: center;
`,Ye=n.p`
font-weight: 500;
font-size: 12px;
line-height: 1.33;
color: #8a8a89;
`,qe=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,De=n.p`
font-weight: 500;
font-size: 16px;
line-height: 1.5;
`,We=n.h3`
font-weight: 500;
font-size: 24px;
line-height: 1.33;
margin-top: 40px;
`;n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 22px;
`;n.label`
  display: flex;
  gap: 8px;
  color: #000;
  font-size: 16px;
  align-items: center;
`;n(q)`
  position: relative;
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #8a8a89;
  border-radius: 50%;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-radius: 50%;
  }

  &:checked {
      border-color: ${({theme:e})=>e.primaryYellow};
    &::before {
      background-color: ${({theme:e})=>e.primaryYellow};
    }
  }
  @keyframes borderChange {
    from {
        border: 2px solid #8a8a89;;
    }
    to {
        border-color: ${({theme:e})=>e.primaryYellow};
    }
  }
`;const He=({psychologist:e,close:i})=>{const[r,a]=f.useState(!1),[o,l]=f.useState(!1),[p,x]=f.useState(!1),c=D().shape({fullname:g().min(2,"Too Short!").max(20,"Too Long!").required("Required"),email:g().email("Invalid email").required("Required"),time:g().required(),phoneNuber:W().min(8,"Too Short!").required("Required"),comment:g().required()}),m=()=>{N.success("Сompleted successfully!"),i()};return t.jsxs(Be,{children:[t.jsx(Me,{children:"Make an appointment with a psychologists"}),t.jsx(Re,{children:"You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy."}),t.jsxs(_e,{children:[t.jsx(F,{src:e.avatar_url,loading:"lazy",alt:"avatar",width:"44",height:"44"}),t.jsxs(qe,{children:[t.jsx(Ye,{children:"Your psychologists"}),t.jsxs(De,{children:[e.name," ",e.surname]})]})]}),t.jsx(We,{}),t.jsx(H,{initialValues:{fullname:"",email:"",phoneNuber:"",time:"",comment:""},onSubmit:m,validationSchema:c,children:({})=>t.jsxs(A,{children:[t.jsx(y,{name:"fullname",placeholder:r?"":"Full Name",onFocus:()=>a(!0)}),t.jsx(k,{name:"fullname",component:"div"}),t.jsx(y,{type:"email",name:"email",placeholder:o?"":"Email",onFocus:()=>l(!0)}),t.jsx(k,{name:"email",component:"div"}),t.jsx(y,{type:"tel",name:"phoneNuber",placeholder:p?"":"Phone number",onFocus:()=>x(!0)}),t.jsx(k,{name:"phoneNuber",component:"div"}),t.jsx(K,{type:"submit",children:"Send"})]})})]})},Ae=({psychologist:e,authUser:i})=>{const[r,a]=f.useState(!1),[o,l]=f.useState(null),[p,x]=f.useState(null),c=G(),m=V(Z),S=()=>{a(s=>!s)},B=s=>{x(s),S()},M=()=>{a(!1)},R=s=>{l(u=>u===s?null:s)},_=s=>o===s?"Hide more":"Read More",C=m&&m.some(s=>s&&s.id===e.id),Y=()=>{i?c(C?X({userId:i.uid,psychologistId:e.id}):Q({userId:i.uid,psychologist:e})):N("You need to log in at first!",{icon:"❗"})};return t.jsxs(t.Fragment,{children:[t.jsx(de,{children:t.jsx(F,{src:e.avatar_url,loading:"lazy",alt:"avatar",width:"96",height:"96"})}),t.jsxs(ce,{children:[t.jsxs(pe,{children:[t.jsx(xe,{children:"Psychologist"}),t.jsxs(he,{children:[t.jsx($,{}),t.jsx($,{children:t.jsxs(fe,{children:[" ",t.jsx(E,{src:Le,alt:"⭐"})," Rating: ",e.rating]})}),t.jsxs($,{children:["Price / 1 hour: ",t.jsxs(ue,{children:[e.price_per_hour,"$"]})]}),t.jsxs("li",{children:[" ",t.jsx(me,{type:"button",onClick:Y,children:C&&i?t.jsx(be,{}):t.jsx(ge,{})})]})]})]}),t.jsxs(je,{children:[" ",e.name," ",e.surname," "]}),t.jsxs(ve,{children:[t.jsx(b,{children:t.jsxs(we,{children:[t.jsx(j,{children:"Experience:  "}),e.experience]})}),t.jsxs(b,{children:[t.jsx(j,{children:"License:"})," ",e.license]}),t.jsxs(b,{children:[t.jsx(j,{children:"Specialisation:"})," ",e.specialization]}),t.jsxs(b,{children:[t.jsx(j,{children:"Initial_consultation:"})," ",e.initial_consultation]}),t.jsxs(ye,{children:[e.about," "]})]}),o===e.id&&t.jsxs("div",{children:[t.jsx($e,{children:e.experience}),t.jsx(Oe,{children:e.reviews?e.reviews.map((s,u)=>t.jsxs("li",{children:[t.jsxs(Ce,{children:[t.jsx(Se,{src:Fe,alt:"avatar",width:"44",height:"44",loading:"lazy"}),t.jsxs(Te,{children:[t.jsx("p",{children:s.reviewer}),t.jsxs(Ne,{children:[t.jsx(E,{}),t.jsxs("p",{children:[" ",s.rating," ⭐"]})]})]})]}),t.jsx(Pe,{children:s.comment})]},u)):t.jsx("li",{children:"There are no reviews yet"})})]}),t.jsxs(ke,{onClick:()=>R(e.id),children:[" ",_(e.id)]}),t.jsx(ze,{children:e.levels?e.levels.map((s,u)=>t.jsx(Ee,{children:t.jsx("p",{children:s})},u)):t.jsx("li",{})}),o===e.id&&t.jsx(Ie,{type:"button",onClick:()=>B(e),children:"Make an appointment"})]}),r&&p&&t.jsx(J,{toggleModal:S,children:t.jsx(He,{psychologist:p,close:M})})]})},st=({authUser:e,psychologists:i})=>t.jsx(U,{children:i&&Array.isArray(i)&&i.map(r=>t.jsx(ee,{children:r&&t.jsx(Ae,{authUser:e,psychologist:r})},r==null?void 0:r.id))}),Ke="#4fa94d",Ge={"aria-busy":!0,role:"progressbar"},Ve=n.div`
  display: ${e=>e.$visible?"flex":"none"};
`,Je="http://www.w3.org/2000/svg",d=242.776657104492,Qe=1.6,Xe=O`
12.5% {
  stroke-dasharray: ${d*.14}px, ${d}px;
  stroke-dashoffset: -${d*.11}px;
}
43.75% {
  stroke-dasharray: ${d*.35}px, ${d}px;
  stroke-dashoffset: -${d*.35}px;
}
100% {
  stroke-dasharray: ${d*.01}px, ${d}px;
  stroke-dashoffset: -${d*.99}px;
}
`;n.path`
  stroke-dasharray: ${d*.01}px, ${d};
  stroke-dashoffset: 0;
  animation: ${Xe} ${Qe}s linear infinite;
`;const Ze=({height:e=80,width:i=80,radius:r=6,color:a=Ke,ariaLabel:o="rings-loading",wrapperStyle:l,wrapperClass:p,visible:x=!0})=>t.jsx(Ve,{style:l,$visible:x,className:p,"data-testid":"rings-loading","aria-label":o,...Ge,children:t.jsx("svg",{width:i,height:e,viewBox:"0 0 45 45",xmlns:Je,stroke:a,"data-testid":"rings-svg",children:t.jsxs("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[t.jsxs("circle",{cx:"22",cy:"22",r,strokeOpacity:"0",children:[t.jsx("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"22",cy:"22",r,strokeOpacity:"0",children:[t.jsx("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeOpacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeWidth",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsx("circle",{cx:"22",cy:"22",r:Number(r)+2,children:t.jsx("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})}),Ue=O`
to {
   transform: rotate(360deg);
 }
`;n.svg`
  animation: ${Ue} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;n.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const et=O`
to {
   stroke-dashoffset: 136;
 }
`;n.polygon`
  stroke-dasharray: 17;
  animation: ${et} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;n.svg`
  transform-origin: 50% 65%;
`;const lt=()=>t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"300px"},children:t.jsx(Ze,{visible:!0,height:"150",width:"150",color:"#F4C550",ariaLabel:"rings-loading",wrapperStyle:{},wrapperClass:""})});export{st as C,lt as M,it as a,rt as b,Z as c,at as d,ot as e,nt as s};
