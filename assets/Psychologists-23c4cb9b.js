import{u as c,e as x,f as o,r as i,g as f,h as g,j as s}from"./index-55ef9438.js";import{s as u,a as m,b,M as j,C as L}from"./Loader-fdfc6468.js";const T=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`,y=c.button`
  font-weight: 700;
font-size: 18px;
line-height: 156%;
border-radius: 12px;
padding: 16px 48px;
width: 232px;
height: 60px;
background: ${({theme:e})=>e.primaryYellow};
margin-bottom: 32px;
margin-top: 32px;

&:hover {
  background: ${({theme:e})=>e.primaryLightYellow};
}
`,v=({authUser:e})=>{const t=x(),r=o(u),n=o(m),d=o(b),[a,l]=i.useState(4),h=()=>{l(p=>p+4)};return i.useEffect(()=>{t(f()),e&&e.uid&&t(g(e.uid))},[t,e]),s.jsxs(T,{children:[n&&!d&&s.jsx(j,{}),s.jsx(L,{authUser:e,teachers:r.slice(0,a)}),r.length>a&&s.jsx(y,{onClick:h,children:"Load More"})]})};export{v as default};
