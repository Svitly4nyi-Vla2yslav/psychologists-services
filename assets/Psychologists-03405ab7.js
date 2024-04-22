import{u as c,g,h as t,r as a,i as x,k as f,j as s}from"./index-1727fcfd.js";import{s as u,a as m,b,M as j,C as T}from"./Loader-84cdda89.js";const y=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`,L=c.button`
  font-weight: 500;
font-size: 16px;
line-height: 156%;
border-radius: 30px;
padding: 14px 48px;
width: 176px;
height: 48px;
 color: ${({theme:e})=>e.orange};
  background: ${({theme:e})=>e.primaryYellow};
margin-bottom: 32px;
margin-top: 32px;

&:hover {
 color: ${({theme:e})=>e.orange};
    background: ${({theme:e})=>e.lightYellow};
}
`,v=({authUser:e})=>{const o=g(),r=t(u),n=t(m),l=t(b),[i,d]=a.useState(3),h=()=>{d(p=>p+3)};return a.useEffect(()=>{o(x()),e&&e.uid&&o(f(e.uid))},[o,e]),s.jsxs(y,{children:[n&&!l&&s.jsx(j,{}),s.jsx(T,{authUser:e,psychologists:r.slice(0,i)}),r.length>i&&s.jsx(L,{onClick:h,children:"Load More"})]})};export{v as default};
