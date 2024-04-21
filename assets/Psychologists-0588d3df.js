import{u as c,g as x,h as t,r as a,i as g,k as f,j as s}from"./index-425fd8f0.js";import{s as u,a as m,b,M as j,C as y}from"./Loader-7e31d0ac.js";const L=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`,T=c.button`
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
`,v=({authUser:e})=>{const o=x(),r=t(u),n=t(m),l=t(b),[i,d]=a.useState(4),p=()=>{d(h=>h+4)};return a.useEffect(()=>{o(g()),e&&e.uid&&o(f(e.uid))},[o,e]),s.jsxs(L,{children:[n&&!l&&s.jsx(j,{}),s.jsx(y,{authUser:e,psychologists:r.slice(0,i)}),r.length>i&&s.jsx(T,{onClick:p,children:"Load More"})]})};export{v as default};
