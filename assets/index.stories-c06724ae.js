import{a as d,j as o}from"./jsx-runtime-29545a09.js";import{u as r}from"./styled-components.browser.esm-fc854ee4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const c=r.div`
  position: relative;
  width: 48px;
  height: 48px;
`,m=r.img`
  height: 100%;
  border-radius: 50%;
`,g=r.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 12px;
  height: 12px;
  background: #2018b0;
  border-radius: 50%;
`,a=({showbadge:e=!0,background:l="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",onClick:p})=>d(c,{onClick:p,children:[o(m,{src:l}),e&&o(g,{})]});try{a.displayName="Small",a.__docgenInfo={description:"",displayName:"Small",props:{showbadge:{defaultValue:{value:"true"},description:"",name:"showbadge",required:!1,type:{name:"boolean"}},background:{defaultValue:{value:"`https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg`"},description:"",name:"background",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}const _={title:"Components/Avatar/Small",component:a,argTypes:{showbadge:{control:"boolean",table:{category:"Variant"}},background:{control:"file",table:{category:"Background"}}},args:{background:"#808080",showbadge:!0}},t={render:e=>o(a,{...e}),args:{}};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Small {...args} />,
  args: {}
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const k=["small"];export{k as __namedExportsOrder,_ as default,t as small};
