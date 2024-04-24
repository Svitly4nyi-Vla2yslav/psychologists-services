import{u as i,g as c,h as s,r as d,k as l,j as t,c as p}from"./index-5aa5194e.js";import{c as x,d as g,e as f,M as m,C as v}from"./Loader-6846361b.js";const h=i.div`
padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f899;
  padding-bottom: 50px;
`,F=i.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 1;
  margin-top: 40px;
  text-align: center;
  padding-bottom: 50px;
  color: #ae0707;
`,y=({authUser:e})=>{const o=c(),a=s(x),n=s(g),r=s(f);return d.useEffect(()=>{e&&e.uid&&o(l(e.uid))},[o,e]),t.jsxs(h,{children:[n&&!r&&t.jsx(m,{}),a.length>0?t.jsx(v,{psychologists:a,authUser:e}):t.jsxs(t.Fragment,{children:[t.jsx(p,{}),t.jsx(F,{children:"Favorite psychologists haven't been selected yet 😒"})]})]})};export{y as default};
