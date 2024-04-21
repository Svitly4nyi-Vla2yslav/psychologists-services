import{u as n,R as h,F as A,r as g,l as K,m as k,n as G,j as t,o as V,p as J,E as j,q as $,B as Q,_ as P,g as X,h as Z,M as U,s as ee,t as te,v as L}from"./index-425fd8f0.js";const ot=e=>e.psychologists.items,at=e=>e.psychologists.isLoading,lt=e=>e.psychologists.error,ie=e=>e.favorites.items,dt=e=>e.favorites.isLoading,ct=e=>e.favorites.error,ne=n.ul`
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
`,re=n.li`
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
`;var I={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},T=h.createContext&&h.createContext(I),se=["attr","size","title"];function oe(e,i){if(e==null)return{};var r=ae(e,i),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)s=l[o],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function ae(e,i){if(e==null)return{};var r={},s=Object.keys(e),o,l;for(l=0;l<s.length;l++)o=s[l],!(i.indexOf(o)>=0)&&(r[o]=e[o]);return r}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},v.apply(this,arguments)}function N(e,i){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,s)}return r}function w(e){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?N(Object(r),!0).forEach(function(s){le(e,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})}return e}function le(e,i,r){return i=de(i),i in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r,e}function de(e){var i=ce(e,"string");return typeof i=="symbol"?i:String(i)}function ce(e,i){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var s=r.call(e,i||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(e)}function F(e){return e&&e.map((i,r)=>h.createElement(i.tag,w({key:r},i.attr),F(i.child)))}function pe(e){return i=>h.createElement(xe,v({attr:w({},e.attr)},i),F(e.child))}function xe(e){var i=r=>{var{attr:s,size:o,title:l}=e,p=oe(e,se),x=o||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),h.createElement("svg",v({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,p,{className:c,style:w(w({color:e.color||r.color},r.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),l&&h.createElement("title",null,l),e.children)};return T!==void 0?h.createElement(T.Consumer,null,r=>i(r)):i(I)}function R(e){return pe({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(e)}const he=n.div`
  margin: 0 auto;
  border: 3px solid ${({theme:e})=>e.lightYellow};
  position: relative;
  border-radius: 50%;
  padding: 10px;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
    position: absolute;
    background: #38cd3e;
    right: 23px;
    top: 19px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    min-height: 120px;
    padding: 0;
  }
`,M=n.img`
  border-radius: 50%;
`;n.div`
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-radius: 50%;
  position: absolute;
`;const ue=n.div`
  width: 100%;

`,ge=n.div`
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
`,me=n.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #8a8a89;
  text-align: center;
`,fe=n.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  @media screen and (min-width: 1140px) {
    gap: 16px;
  
}
`,z=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,y=n.li`
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
`,be=n.span`
  color: #38cd3e;
`,je=n.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  
  @media screen and (min-width: 1140px) {
    margin-left: 48px;
  
}
`,ye=n(R)`
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
`,ve=n(R)`
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
`,we=n.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  text-align: center;
  margin-top: 20px;
  
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    text-align: start;
  }
`,ke=n.ul`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,C=n.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,O=n.span`
  color: #8a8a89;
`,$e=n.ul`
  display: flex;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`,Ce=n.div`
  display: flex;
`,Oe=n.button`
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
`,Le=n.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
`,Se=n.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`,Ee=n.img`
  border-radius: 50%;
`,Te=n.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,Ne=n.div`
  display: flex;
  flex-direction: column;
`,ze=n.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  gap: 8px;
`,Be=n.li`
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
`,Pe=n.div`
  display: flex;
  margin-top: 2px;
  gap: 8px;
`,Ie=n.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`,Fe=n.button`
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
`,B=n.img`
`;n.img`
`;const Re="/assets/star-84ec46ae.svg",Me="/assets/face-53b4e4e1.png",_e=n.div`
`,Ye=n.h2`
font-weight: 500;
font-size: 40px;
line-height: 1.2;
letter-spacing: -0.02em;
margin-bottom: 20px;
`,De=n.p`
font-weight: 400;
font-size: 16px;
line-height: 1.37;
color: rgba(18, 20, 23, 0.8);
margin-bottom: 20px;
`,qe=n.div`
  display: flex;
  gap: 14px;
 align-items: center;
`,We=n.p`
font-weight: 500;
font-size: 12px;
line-height: 1.33;
color: #8a8a89;
`,He=n.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Ae=n.p`
font-weight: 500;
font-size: 16px;
line-height: 1.5;
`,Ke=n.h3`
font-weight: 500;
font-size: 24px;
line-height: 1.33;
margin-top: 40px;
`,Ge=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 22px;
`,m=n.label`
  display: flex;
  gap: 8px;
  color: #000;
  font-size: 16px;
  align-items: center;
`,f=n(A)`
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
`,Ve=({teacher:e,close:i})=>{const[r,s]=g.useState(!1),[o,l]=g.useState(!1),[p,x]=g.useState(!1),c=K().shape({picked:k().required("Please select a reason for learning English"),fullname:k().min(2,"Too Short!").max(20,"Too Long!").required("Required"),email:k().email("Invalid email").required("Required"),phoneNuber:G().min(8,"Too Short!").required("Required")}),b=()=>{P.success("Сompleted successfully!"),i()};return t.jsxs(_e,{children:[t.jsx(Ye,{children:"Book trial lesson"}),t.jsx(De,{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),t.jsxs(qe,{children:[t.jsx(M,{src:e.avatar_url,loading:"lazy",alt:"avatar",width:"44",height:"44"}),t.jsxs(He,{children:[t.jsx(We,{children:"Your teacher"}),t.jsxs(Ae,{children:[e.name," ",e.surname]})]})]}),t.jsx(Ke,{children:"What is your main reason for learning English?"}),t.jsx(V,{initialValues:{picked:"",fullname:"",email:"",phoneNuber:""},onSubmit:b,validationSchema:c,children:({})=>t.jsxs(J,{children:[t.jsxs(Ge,{role:"group","aria-labelledby":"my-radio-group",children:[t.jsxs(m,{children:[t.jsx(f,{type:"radio",name:"picked",value:"Career and business"}),"Career and business"]}),t.jsxs(m,{children:[t.jsx(f,{type:"radio",name:"picked",value:"Lesson for kids"}),"Lesson for kids"]}),t.jsxs(m,{children:[t.jsx(f,{type:"radio",name:"picked",value:"Living abroadwo"}),"Living abroad"]}),t.jsxs(m,{children:[t.jsx(f,{type:"radio",name:"picked",value:"Exams and coursework"}),"Exams and coursework"]}),t.jsxs(m,{children:[t.jsx(f,{type:"radio",name:"picked",value:"Culture, travel or hobby"}),"Culture, travel or hobby"]}),t.jsx(j,{name:"picked",component:"div"})]}),t.jsx($,{name:"fullname",placeholder:r?"":"Full Name",onFocus:()=>s(!0)}),t.jsx(j,{name:"fullname",component:"div"}),t.jsx($,{type:"email",name:"email",placeholder:o?"":"Email",onFocus:()=>l(!0)}),t.jsx(j,{name:"email",component:"div"}),t.jsx($,{type:"tel",name:"phoneNuber",placeholder:p?"":"Phone number",onFocus:()=>x(!0)}),t.jsx(j,{name:"phoneNuber",component:"div"}),t.jsx(Q,{type:"submit",children:"Book"})]})})]})},Je=({teacher:e,authUser:i})=>{const[r,s]=g.useState(!1),[o,l]=g.useState(null),[p,x]=g.useState(null),c=X(),b=Z(ie),S=()=>{s(a=>!a)},_=a=>{x(a),S()},Y=()=>{s(!1)},D=a=>{l(u=>u===a?null:a)},q=a=>o===a?"Hide more":"Read More",E=b&&b.some(a=>a&&a.id===e.id),W=()=>{i?c(E?te({userId:i.uid,teacherId:e.id}):ee({userId:i.uid,teacher:e})):P("You need to log in at first!",{icon:"❗"})};return t.jsxs(t.Fragment,{children:[t.jsx(he,{children:t.jsx(M,{src:e.avatar_url,loading:"lazy",alt:"avatar",width:"96",height:"96"})}),t.jsxs(ue,{children:[t.jsxs(ge,{children:[t.jsx(me,{children:"Languages"}),t.jsxs(fe,{children:[t.jsx(y,{children:t.jsxs(z,{children:[" ","Lessons online"]})}),t.jsxs(y,{children:["Lessons done: ",e.lessons_done]}),t.jsx(y,{children:t.jsxs(z,{children:[" ",t.jsx(B,{src:Re,alt:"⭐"})," Rating: ",e.rating]})}),t.jsxs(y,{children:["Price / 1 hour: ",t.jsxs(be,{children:[e.price_per_hour,"$"]})]}),t.jsxs("li",{children:[" ",t.jsx(je,{type:"button",onClick:W,children:E&&i?t.jsx(ve,{}):t.jsx(ye,{})})]})]})]}),t.jsxs(we,{children:[" ",e.name," ",e.surname," "]}),t.jsxs(ke,{children:[t.jsx(C,{children:t.jsxs(Ce,{children:[t.jsx(O,{children:"Speaks:  "}),t.jsx($e,{children:e.languages?e.languages.map((a,u,H)=>t.jsxs(h.Fragment,{children:[t.jsx("li",{children:a}),u<H.length-1&&t.jsx("span",{children:",  "})]},a)):t.jsx("li",{children:"No languages available"})})]})}),t.jsxs(C,{children:[t.jsx(O,{children:"Lesson info:"})," ",e.lesson_info]}),t.jsxs(C,{children:[t.jsx(O,{children:"Conditions:"})," ",e.conditions]})]}),o===e.id&&t.jsxs("div",{children:[t.jsx(Le,{children:e.experience}),t.jsx(Se,{children:e.reviews?e.reviews.map((a,u)=>t.jsxs("li",{children:[t.jsxs(Te,{children:[t.jsx(Ee,{src:Me,alt:"avatar",width:"44",height:"44",loading:"lazy"}),t.jsxs(Ne,{children:[t.jsx("p",{children:a.reviewer_name}),t.jsxs(Pe,{children:[t.jsx(B,{}),t.jsxs("p",{children:[" ",a.reviewer_rating," ⭐"]})]})]})]}),t.jsx(Ie,{children:a.comment})]},u)):t.jsx("li",{children:"There are no reviews yet"})})]}),t.jsxs(Oe,{onClick:()=>D(e.id),children:[" ",q(e.id)]}),t.jsx(ze,{children:e.levels?e.levels.map((a,u)=>t.jsx(Be,{children:t.jsx("p",{children:a})},u)):t.jsx("li",{children:"No levels"})}),o===e.id&&t.jsx(Fe,{type:"button",onClick:()=>_(e),children:"Book trial lesson"})]}),r&&p&&t.jsx(U,{toggleModal:S,children:t.jsx(Ve,{teacher:p,close:Y})})]})},pt=({authUser:e,psychologists:i})=>t.jsx(ne,{children:i&&Array.isArray(i)&&i.map(r=>t.jsx(re,{children:r&&t.jsx(Je,{authUser:e,teacher:r})},r==null?void 0:r.id))}),Qe="#4fa94d",Xe={"aria-busy":!0,role:"progressbar"},Ze=n.div`
  display: ${e=>e.$visible?"flex":"none"};
`,Ue="http://www.w3.org/2000/svg",d=242.776657104492,et=1.6,tt=L`
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
  animation: ${tt} ${et}s linear infinite;
`;const it=({height:e=80,width:i=80,radius:r=6,color:s=Qe,ariaLabel:o="rings-loading",wrapperStyle:l,wrapperClass:p,visible:x=!0})=>t.jsx(Ze,{style:l,$visible:x,className:p,"data-testid":"rings-loading","aria-label":o,...Xe,children:t.jsx("svg",{width:i,height:e,viewBox:"0 0 45 45",xmlns:Ue,stroke:s,"data-testid":"rings-svg",children:t.jsxs("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2",children:[t.jsxs("circle",{cx:"22",cy:"22",r,strokeOpacity:"0",children:[t.jsx("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"22",cy:"22",r,strokeOpacity:"0",children:[t.jsx("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeOpacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeWidth",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),t.jsx("circle",{cx:"22",cy:"22",r:Number(r)+2,children:t.jsx("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})}),nt=L`
to {
   transform: rotate(360deg);
 }
`;n.svg`
  animation: ${nt} 0.75s steps(12, end) infinite;
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
`;const rt=L`
to {
   stroke-dashoffset: 136;
 }
`;n.polygon`
  stroke-dasharray: 17;
  animation: ${rt} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;n.svg`
  transform-origin: 50% 65%;
`;const xt=()=>t.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:"300px"},children:t.jsx(it,{visible:!0,height:"150",width:"150",color:"#F4C550",ariaLabel:"rings-loading",wrapperStyle:{},wrapperClass:""})});export{pt as C,xt as M,at as a,lt as b,ie as c,dt as d,ct as e,ot as s};
