import{u as i,R as h,F as W,r as u,l as H,m as y,n as A,j as t,o as K,p as G,E as j,q as k,B as V,_ as P,g as J,h as Q,M as X,s as Z,t as U,v as E}from"./index-95bdb0d9.js";const rt=e=>e.psychologists.items,at=e=>e.psychologists.isLoading,ot=e=>e.psychologists.error,ee=e=>e.favorites.items,st=e=>e.favorites.isLoading,lt=e=>e.favorites.error,te=i.ul`
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
`,ne=i.li`
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
`;var B={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},T=h.createContext&&h.createContext(B),ie=["attr","size","title"];function re(e,n){if(e==null)return{};var r=ae(e,n),a,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ae(e,n){if(e==null)return{};var r={},a=Object.keys(e),o,l;for(l=0;l<a.length;l++)o=a[l],!(n.indexOf(o)>=0)&&(r[o]=e[o]);return r}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},v.apply(this,arguments)}function z(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,a)}return r}function w(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?z(Object(r),!0).forEach(function(a){oe(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function oe(e,n,r){return n=se(n),n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function se(e){var n=le(e,"string");return typeof n=="symbol"?n:String(n)}function le(e,n){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var a=r.call(e,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function I(e){return e&&e.map((n,r)=>h.createElement(n.tag,w({key:r},n.attr),I(n.child)))}function de(e){return n=>h.createElement(ce,v({attr:w({},e.attr)},n),I(e.child))}function ce(e){var n=r=>{var{attr:a,size:o,title:l}=e,p=re(e,ie),x=o||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),h.createElement("svg",v({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,a,p,{className:c,style:w(w({color:e.color||r.color},r.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),l&&h.createElement("title",null,l),e.children)};return T!==void 0?h.createElement(T.Consumer,null,r=>n(r)):n(B)}function F(e){return de({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(e)}const pe=i.div`
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
`,R=i.img`
  border-radius: 20%;
`;i.div`
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-radius: 50%;
  position: absolute;
`;const xe=i.div`
  width: 100%;

`,he=i.div`
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
`,ue=i.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
  text-align: center;
`,me=i.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  @media screen and (min-width: 1140px) {
    gap: 16px;
  
}
`,fe=i.div`
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
`,ge=i.span`
  color: #38cd3e;
`,be=i.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  
  @media screen and (min-width: 1140px) {
    margin-left: 48px;
  
}
`,je=i(F)`
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
`,ve=i(F)`
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
`,we=i.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  margin-top: 20px;
  
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    text-align: start;
  }
`,ye=i.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,C=i.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,O=i.span`
  color: #8a8a89;
`;i.ul`
  display: flex;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;const ke=i.div`
  display: flex;
`,$e=i.button`
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
`,Ce=i.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
`,Oe=i.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`,Ee=i.img`
  border-radius: 50%;
`,Se=i.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,Le=i.div`
  display: flex;
  flex-direction: column;
`,Te=i.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  gap: 8px;
`,ze=i.li`
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
`,Pe=i.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,Be=i.button`
  font-weight: 700;
  font-size: 18px;
  // line-height: 156%;
  border-radius: 12px;
  // padding: 16px 48px;
  width: 232px;
  height: 60px;
  background: ${({theme:e})=>e.primaryYellow};
  margin-top: 32px;

  &:hover {
    background: ${({theme:e})=>e.primaryLightYellow};
  }
`,N=i.img`
`;i.img`
`;const Ie="/assets/star-84ec46ae.svg",Fe="/assets/face-53b4e4e1.png",Re=i.div`
`,Me=i.h2`
font-weight: 500;
font-size: 40px;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 20px;
`,_e=i.p`
font-weight: 400;
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 20px;
`,Ye=i.div`
  display: flex;
  gap: 14px;
 align-items: center;
`,De=i.p`
font-weight: 500;
font-size: 12px;
line-height: 1.33;
color: #8a8a89;
`,qe=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,We=i.p`
font-weight: 500;
font-size: 16px;
line-height: 1.5;
`,He=i.h3`
font-weight: 500;
font-size: 24px;
line-height: 1.33;
margin-top: 40px;
`,Ae=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 22px;
`,f=i.label`
  display: flex;
  gap: 8px;
  color: #000;
  font-size: 16px;
  align-items: center;
`,g=i(W)`
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
`,Ke=({psychologist:e,close:n})=>{const[r,a]=u.useState(!1),[o,l]=u.useState(!1),[p,x]=u.useState(!1),c=H().shape({picked:y().required("Please select a reason for learning English"),fullname:y().min(2,"Too Short!").max(20,"Too Long!").required("Required"),email:y().email("Invalid email").required("Required"),phoneNuber:A().min(8,"Too Short!").required("Required")}),b=()=>{P.success("Сompleted successfully!"),n()};return t.jsxs(Re,{children:[t.jsx(Me,{children:"Book trial lesson"}),t.jsx(_e,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),t.jsxs(Ye,{children:[t.jsx(R,{src:e.avatar_url,loading:"lazy",alt:"avatar",width:"44",height:"44"}),t.jsxs(qe,{children:[t.jsx(De,{children:"Your psychologist"}),t.jsxs(We,{children:[e.name," ",e.surname]})]})]}),t.jsx(He,{children:"What is your main reason for learning English?"}),t.jsx(K,{initialValues:{picked:"",fullname:"",email:"",phoneNuber:""},onSubmit:b,validationSchema:c,children:({})=>t.jsxs(G,{children:[t.jsxs(Ae,{role:"group","aria-labelledby":"my-radio-group",children:[t.jsxs(f,{children:[t.jsx(g,{type:"radio",name:"picked",value:"Career and business"}),"Career and business"]}),t.jsxs(f,{children:[t.jsx(g,{type:"radio",name:"picked",value:"Lesson for kids"}),"Lesson for kids"]}),t.jsxs(f,{children:[t.jsx(g,{type:"radio",name:"picked",value:"Living abroadwo"}),"Living abroad"]}),t.jsxs(f,{children:[t.jsx(g,{type:"radio",name:"picked",value:"Exams and coursework"}),"Exams and coursework"]}),t.jsxs(f,{children:[t.jsx(g,{type:"radio",name:"picked",value:"Culture, travel or hobby"}),"Culture, travel or hobby"]}),t.jsx(j,{name:"picked",component:"div"})]}),t.jsx(k,{name:"fullname",placeholder:r?"":"Full Name",onFocus:()=>a(!0)}),t.jsx(j,{name:"fullname",component:"div"}),t.jsx(k,{type:"email",name:"email",placeholder:o?"":"Email",onFocus:()=>l(!0)}),t.jsx(j,{name:"email",component:"div"}),t.jsx(k,{type:"tel",name:"phoneNuber",placeholder:p?"":"Phone number",onFocus:()=>x(!0)}),t.jsx(j,{name:"phoneNuber",component:"div"}),t.jsx(V,{type:"submit",children:"Book"})]})})]})},Ge=({psychologist:e,authUser:n})=>{const[r,a]=u.useState(!1),[o,l]=u.useState(null),[p,x]=u.useState(null),c=J(),b=Q(ee),S=()=>{a(s=>!s)},M=s=>{x(s),S()},_=()=>{a(!1)},Y=s=>{l(m=>m===s?null:s)},D=s=>o===s?"Hide more":"Read More",L=b&&b.some(s=>s&&s.id===e.id),q=()=>{n?c(L?U({userId:n.uid,psychologistId:e.id}):Z({userId:n.uid,psychologist:e})):P("You need to log in at first!",{icon:"❗"})};return t.jsxs(t.Fragment,{children:[t.jsx(pe,{children:t.jsx(R,{src:e.avatar_url,loading:"lazy",alt:"avatar",width:"96",height:"96"})}),t.jsxs(xe,{children:[t.jsxs(he,{children:[t.jsx(ue,{children:"Psychologist"}),t.jsxs(me,{children:[t.jsx($,{}),t.jsx($,{children:t.jsxs(fe,{children:[" ",t.jsx(N,{src:Ie,alt:"⭐"})," Rating: ",e.rating]})}),t.jsxs($,{children:["Price / 1 hour: ",t.jsxs(ge,{children:[e.price_per_hour,"$"]})]}),t.jsxs("li",{children:[" ",t.jsx(be,{type:"button",onClick:q,children:L&&n?t.jsx(ve,{}):t.jsx(je,{})})]})]})]}),t.jsxs(we,{children:[" ",e.name," ",e.surname," "]}),t.jsxs(ye,{children:[t.jsx(C,{children:t.jsx(ke,{children:t.jsxs(O,{children:["Experience: ",e.experience," "]})})}),t.jsxs(C,{children:[t.jsx(O,{children:"Lesson info:"})," ",e.lesson_info]}),t.jsxs(C,{children:[t.jsx(O,{children:"Conditions:"})," ",e.conditions]})]}),o===e.id&&t.jsxs("div",{children:[t.jsx(Ce,{children:e.experience}),t.jsx(Oe,{children:e.reviews?e.reviews.map((s,m)=>t.jsxs("li",{children:[t.jsxs(Se,{children:[t.jsx(Ee,{src:Fe,alt:"avatar",width:"44",height:"44",loading:"lazy"}),t.jsxs(Le,{children:[t.jsx("p",{children:s.reviewer_name}),t.jsxs(Ne,{children:[t.jsx(N,{}),t.jsxs("p",{children:[" ",s.reviewer_rating," ⭐"]})]})]})]}),t.jsx(Pe,{children:s.comment})]},m)):t.jsx("li",{children:"There are no reviews yet"})})]}),t.jsxs($e,{onClick:()=>Y(e.id),children:[" ",D(e.id)]}),t.jsx(Te,{children:e.levels?e.levels.map((s,m)=>t.jsx(ze,{children:t.jsx("p",{children:s})},m)):t.jsx("li",{children:"No levels"})}),o===e.id&&t.jsx(Be,{type:"button",onClick:()=>M(e),children:"Book trial lesson"})]}),r&&p&&t.jsx(X,{toggleModal:S,children:t.jsx(Ke,{psychologist:p,close:_})})]})},dt=({authUser:e,psychologists:n})=>t.jsx(te,{children:n&&Array.isArray(n)&&n.map(r=>t.jsx(ne,{children:r&&t.jsx(Ge,{authUser:e,psychologist:r})},r==null?void 0:r.id))}),Ve="#4fa94d",Je={"aria-busy":!0,role:"progressbar"},Qe=i.div`
  display: ${e=>e.$visible?"flex":"none"};
`,Xe="http://www.w3.org/2000/svg",d=242.776657104492,Ze=1.6,Ue=E`
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
`;i.path`
  stroke-dasharray: ${d*.01}px, ${d};
  stroke-dashoffset: 0;
  animation: ${Ue} ${Ze}s linear infinite;
`;const et=({height:e=80,width:n=80,radius:r=6,color:a=Ve,ariaLabel:o="rings-loading",wrapperStyle:l,wrapperClass:p,visible:x=!0})=>t.jsx(Qe,{style:l,$visible:x,className:p,"data-testid":"rings-loading","aria-label":o,...Je,children:t.jsx("svg",{width:n,height:e,viewBox:"0 0 45 45",xmlns:Xe,stroke:a,"data-testid":"rings-svg",children:t.jsxs("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[t.jsxs("circle",{cx:"22",cy:"22",r,strokeOpacity:"0",children:[t.jsx("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"22",cy:"22",r,strokeOpacity:"0",children:[t.jsx("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeOpacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeWidth",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsx("circle",{cx:"22",cy:"22",r:Number(r)+2,children:t.jsx("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})}),tt=E`
to {
   transform: rotate(360deg);
 }
`;i.svg`
  animation: ${tt} 0.75s steps(12, end) infinite;
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
`;const nt=E`
to {
   stroke-dashoffset: 136;
 }
`;i.polygon`
  stroke-dasharray: 17;
  animation: ${nt} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;i.svg`
  transform-origin: 50% 65%;
`;const ct=()=>t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"300px"},children:t.jsx(et,{visible:!0,height:"150",width:"150",color:"#F4C550",ariaLabel:"rings-loading",wrapperStyle:{},wrapperClass:""})});export{dt as C,ct as M,at as a,ot as b,ee as c,st as d,lt as e,rt as s};
