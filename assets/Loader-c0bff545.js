import{u as i,R as h,F as D,r as m,l as q,m as b,n as W,j as t,o as H,p as A,q as u,E as j,B as K,_ as N,g as G,h as V,M as J,s as Q,t as X,v as C}from"./index-646c3408.js";const nt=e=>e.psychologists.items,rt=e=>e.psychologists.isLoading,at=e=>e.psychologists.error,Z=e=>e.favorites.items,ot=e=>e.favorites.isLoading,st=e=>e.favorites.error,U=i.ul`
 display: flex;
 mask-type: 28px;
 flex-direction: column;
 justify-content: center;
 align-items: center;
//   min-width: 320px;
//  max-width: 1184px; 
 gap: 48px;
 
 @media screen and (min-width: 768px) {
   margin-top: 53px;

 }
`,ee=i.li`
   width: 95%; 
//  width: 280px;
  padding: 15px;
  display: flex;
flex-wrap: wrap;
border-radius: 24px;
background: #fff;


@media screen and (min-width: 768px) {
  gap: 48px;
width: 95%;
}


@media screen and (min-width: 1400px) {
  align-items: flex-start;
  margin-bottom: 53px;
  flex-wrap: nowrap;
  width: 1184px;
  padding: 24px;
}
`;var I={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},S=h.createContext&&h.createContext(I),te=["attr","size","title"];function ie(e,n){if(e==null)return{};var r=ne(e,n),a,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ne(e,n){if(e==null)return{};var r={},a=Object.keys(e),o,l;for(l=0;l<a.length;l++)o=a[l],!(n.indexOf(o)>=0)&&(r[o]=e[o]);return r}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},y.apply(this,arguments)}function z(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function k(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?z(Object(r),!0).forEach(function(a){re(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function re(e,n,r){return n=ae(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function ae(e){var n=oe(e,"string");return typeof n=="symbol"?n:String(n)}function oe(e,n){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function L(e){return e&&e.map((n,r)=>h.createElement(n.tag,k({key:r},n.attr),L(n.child)))}function se(e){return n=>h.createElement(le,y({attr:k({},e.attr)},n),L(e.child))}function le(e){var n=r=>{var{attr:a,size:o,title:l}=e,p=ie(e,te),x=o||r.size||"1em",d;return r.className&&(d=r.className),e.className&&(d=(d?d+" ":"")+e.className),h.createElement("svg",y({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,p,{className:d,style:k(k({color:e.color||r.color},r.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),l&&h.createElement("title",null,l),e.children)};return S!==void 0?h.createElement(S.Consumer,null,r=>n(r)):n(I)}function T(e){return se({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(e)}const ce=i.div`
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
`,F=i.img`
  border-radius: 20%;
`;i.div`
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-radius: 50%;
  position: absolute;
`;const de=i.div`
  width: 100%;

`,pe=i.div`
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
`,xe=i.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
  text-align: center;
`,he=i.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  @media screen and (min-width: 1140px) {
    gap: 16px;
  
}
`,me=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,$=i.li`
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
`,fe=i.span`
  color: #38cd3e;
`,ue=i.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  
  @media screen and (min-width: 1140px) {
    margin-left: 48px;
  
}
`,ge=i(T)`
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
`,be=i(T)`
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
`,je=i.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  margin-top: 20px;
  
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    text-align: start;
  }
`,ve=i.ul`
  margin-top: 32px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;
`,v=i.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  height: 40px;
  border-radius: 24px;
padding: 8px 16px;
background: #f3f3f3;
// width: 100%;
height: 100%;
`,w=i.span`
  color: #8a8a89;
`;i.ul`
  display: flex;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;const we=i.div`
  // display: flex;
`,ye=i.p`
font-weight: 400;
font-size: 16px;

// line-height: 20px; 
line-height: 1.25;
color: rgba(25, 26, 21, 0.5);
`,ke=i.button`
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
`,$e=i.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
`,Ce=i.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`,Oe=i.img`
  border-radius: 50%;
`,Pe=i.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,Se=i.div`
  display: flex;
  flex-direction: column;
`,ze=i.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Ee=i.li`
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
`,Ne=i.div`
  display: flex;
  margin-top: 2px;
  gap: 8px;
`,Ie=i.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,Le=i.button`
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
`,E=i.img`
`;i.img`
`;const Te="/assets/star-84ec46ae.svg",Fe="/assets/face-53b4e4e1.png",Be=i.div`
`,Me=i.h2`
font-weight: 500;
font-size: 40px;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 20px;
`,Re=i.p`
font-weight: 400;
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 20px;
`,_e=i.div`
  display: flex;
  gap: 14px;
 align-items: center;
`,Ye=i.p`
font-weight: 500;
font-size: 12px;
line-height: 1.33;
color: #8a8a89;
`,De=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,qe=i.p`
font-weight: 500;
font-size: 16px;
line-height: 1.5;
`,We=i.h3`
font-weight: 500;
font-size: 24px;
line-height: 1.33;
margin-top: 40px;
`;i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 22px;
`;i.label`
  display: flex;
  gap: 8px;
  color: #000;
  font-size: 16px;
  align-items: center;
`;i(D)`
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
`;const He=i.div`
display: flex;
  gap: 8px;
`,Ae=({psychologist:e,close:n})=>{const[r,a]=m.useState(!1),[o,l]=m.useState(!1),[p,x]=m.useState(!1),d=q().shape({fullname:b().min(2,"Too Short!").max(20,"Too Long!").required("Required"),email:b().email("Invalid email").required("Required"),time:b().required(),phoneNuber:W().min(8,"Too Short!").required("Required"),comment:b()}),g=()=>{N.success("Сompleted successfully!"),n()};return t.jsxs(Be,{children:[t.jsx(Me,{children:"Make an appointment with a psychologists"}),t.jsx(Re,{children:"You are on the verge of changing your life for the better. Fill out the short form below to book your personal appointment with a professional psychologist. We guarantee confidentiality and respect for your privacy."}),t.jsxs(_e,{children:[t.jsx(F,{src:e.avatar_url,loading:"lazy",alt:"avatar",width:"44",height:"44"}),t.jsxs(De,{children:[t.jsx(Ye,{children:"Your psychologists"}),t.jsxs(qe,{children:[e.name," ",e.surname]})]})]}),t.jsx(We,{}),t.jsx(H,{initialValues:{fullname:"",email:"",phoneNuber:"",time:"00:00",comment:""},onSubmit:g,validationSchema:d,children:({})=>t.jsxs(A,{children:[t.jsx(u,{name:"fullname",placeholder:r?"":"Full Name",onFocus:()=>a(!0)}),t.jsx(j,{name:"fullname",component:"div"}),t.jsx(u,{type:"email",name:"email",placeholder:o?"":"Email",onFocus:()=>l(!0)}),t.jsx(j,{name:"email",component:"div"}),t.jsxs(He,{children:[t.jsx(u,{type:"tel",name:"phoneNuber",placeholder:p?"":"Phone number",onFocus:()=>x(!0)}),t.jsx(j,{name:"phoneNuber",component:"div"}),t.jsx(u,{name:"time",type:"time"})]}),t.jsx(u,{as:"textarea",id:"comment",type:"textarea",name:"comment",placeholder:"Comment",style:{height:"116px"}}),t.jsx(j,{name:"comment",component:"div"}),t.jsx(K,{type:"submit",children:"Send"})]})})]})},Ke=({psychologist:e,authUser:n})=>{const[r,a]=m.useState(!1),[o,l]=m.useState(null),[p,x]=m.useState(null),d=G(),g=V(Z),O=()=>{a(s=>!s)},B=s=>{x(s),O()},M=()=>{a(!1)},R=s=>{l(f=>f===s?null:s)},_=s=>o===s?"Hide more":"Read More",P=g&&g.some(s=>s&&s.id===e.id),Y=()=>{n?d(P?X({userId:n.uid,psychologistId:e.id}):Q({userId:n.uid,psychologist:e})):N("You need to log in at first!",{icon:"❗"})};return t.jsxs(t.Fragment,{children:[t.jsx(ce,{children:t.jsx(F,{src:e.avatar_url,loading:"lazy",alt:"avatar",width:"96",height:"96"})}),t.jsxs(de,{children:[t.jsxs(pe,{children:[t.jsx(xe,{children:"Psychologist"}),t.jsxs(he,{children:[t.jsx($,{}),t.jsx($,{children:t.jsxs(me,{children:[" ",t.jsx(E,{src:Te,alt:"⭐"})," Rating: ",e.rating]})}),t.jsxs($,{children:["Price / 1 hour: ",t.jsxs(fe,{children:[e.price_per_hour,"$"]})]}),t.jsxs("li",{children:[" ",t.jsx(ue,{type:"button",onClick:Y,children:P&&n?t.jsx(be,{}):t.jsx(ge,{})})]})]})]}),t.jsxs(je,{children:[" ",e.name," ",e.surname," "]}),t.jsxs(ve,{children:[t.jsx(v,{children:t.jsxs(we,{children:[t.jsx(w,{children:"Experience:  "}),e.experience]})}),t.jsxs(v,{children:[t.jsx(w,{children:"License:"})," ",e.license]}),t.jsxs(v,{children:[t.jsx(w,{children:"Specialisation:"})," ",e.specialization]}),t.jsxs(v,{children:[t.jsx(w,{children:"Initial_consultation:"})," ",e.initial_consultation]}),t.jsxs(ye,{children:[e.about," "]})]}),o===e.id&&t.jsxs("div",{children:[t.jsx($e,{children:e.experience}),t.jsx(Ce,{children:e.reviews?e.reviews.map((s,f)=>t.jsxs("li",{children:[t.jsxs(Pe,{children:[t.jsx(Oe,{src:Fe,alt:"avatar",width:"44",height:"44",loading:"lazy"}),t.jsxs(Se,{children:[t.jsx("p",{children:s.reviewer}),t.jsxs(Ne,{children:[t.jsx(E,{}),t.jsxs("p",{children:[" ",s.rating," ⭐"]})]})]})]}),t.jsx(Ie,{children:s.comment})]},f)):t.jsx("li",{children:"There are no reviews yet"})})]}),t.jsxs(ke,{onClick:()=>R(e.id),children:[" ",_(e.id)]}),t.jsx(ze,{children:e.levels?e.levels.map((s,f)=>t.jsx(Ee,{children:t.jsx("p",{children:s})},f)):t.jsx("li",{})}),o===e.id&&t.jsx(Le,{type:"button",onClick:()=>B(e),children:"Make an appointment"})]}),r&&p&&t.jsx(J,{toggleModal:O,children:t.jsx(Ae,{psychologist:p,close:M})})]})},lt=({authUser:e,psychologists:n})=>t.jsx(U,{children:n&&Array.isArray(n)&&n.map(r=>t.jsx(ee,{children:r&&t.jsx(Ke,{authUser:e,psychologist:r})},r==null?void 0:r.id))}),Ge="#4fa94d",Ve={"aria-busy":!0,role:"progressbar"},Je=i.div`
  display: ${e=>e.$visible?"flex":"none"};
`,Qe="http://www.w3.org/2000/svg",c=242.776657104492,Xe=1.6,Ze=C`
12.5% {
  stroke-dasharray: ${c*.14}px, ${c}px;
  stroke-dashoffset: -${c*.11}px;
}
43.75% {
  stroke-dasharray: ${c*.35}px, ${c}px;
  stroke-dashoffset: -${c*.35}px;
}
100% {
  stroke-dasharray: ${c*.01}px, ${c}px;
  stroke-dashoffset: -${c*.99}px;
}
`;i.path`
  stroke-dasharray: ${c*.01}px, ${c};
  stroke-dashoffset: 0;
  animation: ${Ze} ${Xe}s linear infinite;
`;const Ue=({height:e=80,width:n=80,radius:r=6,color:a=Ge,ariaLabel:o="rings-loading",wrapperStyle:l,wrapperClass:p,visible:x=!0})=>t.jsx(Je,{style:l,$visible:x,className:p,"data-testid":"rings-loading","aria-label":o,...Ve,children:t.jsx("svg",{width:n,height:e,viewBox:"0 0 45 45",xmlns:Qe,stroke:a,"data-testid":"rings-svg",children:t.jsxs("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[t.jsxs("circle",{cx:"22",cy:"22",r,strokeOpacity:"0",children:[t.jsx("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"22",cy:"22",r,strokeOpacity:"0",children:[t.jsx("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeOpacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeWidth",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsx("circle",{cx:"22",cy:"22",r:Number(r)+2,children:t.jsx("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})}),et=C`
to {
   transform: rotate(360deg);
 }
`;i.svg`
  animation: ${et} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;i.polyline`
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
`;const tt=C`
to {
   stroke-dashoffset: 136;
 }
`;i.polygon`
  stroke-dasharray: 17;
  animation: ${tt} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;i.svg`
  transform-origin: 50% 65%;
`;const ct=()=>t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"300px"},children:t.jsx(Ue,{visible:!0,height:"150",width:"150",color:"#F4C550",ariaLabel:"rings-loading",wrapperStyle:{},wrapperClass:""})});export{lt as C,ct as M,rt as a,at as b,Z as c,ot as d,st as e,nt as s};
