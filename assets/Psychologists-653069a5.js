import{u as n,g as p,h as e,r,i as x,k as f,j as o}from"./index-646c3408.js";import{s as u,a as y,b as m,M as b,C as j}from"./Loader-c0bff545.js";const P=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f878;
`,L=n.button`
  font-weight: 500;
font-size: 16px;
line-height: 156%;
border-radius: 30px;
padding: 14px 48px;
width: 176px;
height: 48px;
 color: ${({theme:s})=>s.orange};
  background: ${({theme:s})=>s.primaryYellow};
margin-bottom: 32px;
margin-top: 32px;

&:hover {
 color: ${({theme:s})=>s.orange};
    background: ${({theme:s})=>s.lightYellow};
}
`,v=({authUser:s})=>{const t=p(),i=e(u),a=e(y),l=e(m),[c,g]=r.useState(3),d=()=>{g(h=>h+3)};return r.useEffect(()=>{t(x()),s&&s.uid&&t(f(s.uid))},[t,s]),o.jsxs(P,{children:[a&&!l&&o.jsx(b,{}),o.jsx(j,{authUser:s,psychologists:i.slice(0,c)}),i.length>c&&o.jsx(L,{onClick:d,children:"Load More"})]})};export{v as default};
