import{u as i,e as c,f as s,r as d,h as l,j as e,c as p}from"./index-55ef9438.js";import{c as x,d as f,e as g,M as m,C as v}from"./Loader-fdfc6468.js";const h=i.div`
padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  padding-bottom: 50px;
`,F=i.p`
  font-weight: 500;
  font-size: 40px;
  line-height: 1;
  margin-top: 40px;
  text-align: center;
  padding-bottom: 50px;
  color: #ae0707;
`,b=({authUser:t})=>{const a=c(),o=s(x),n=s(f),r=s(g);return d.useEffect(()=>{t&&t.uid&&a(l(t.uid))},[a,t]),e.jsxs(h,{children:[n&&!r&&e.jsx(m,{}),o.length>0?e.jsx(v,{teachers:o,authUser:t}):e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsx(F,{children:"Favorite teachers haven't been selected yet 😒"})]})]})};export{b as default};
