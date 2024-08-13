import{a as o,j as n}from"./jsx-runtime-7c9a5671.js";import{p as a}from"./styled-components.browser.esm-b13dfa8b.js";import{a as p}from"./index-438848e6.js";import"./index-8a57d176.js";import"./_commonjsHelpers-725317a4.js";import"./upload-4292f190.js";const d=a.div`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`,m=a.h2`
  margin: 0;
  color: #000;

  font-family: Co Headline;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`,f=a.div`
  display: flex;
  padding: 32px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border: 2px dashed #32568f;
`,g=a.p`
  margin: 0;
  font-family: "Co Headline";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #32568f;
`,r=({title:e,label:c})=>o(d,{children:[n(m,{children:e}),o(f,{children:[n(p.Upload,{}),n(g,{children:c})]})]});try{r.displayName="Section",r.__docgenInfo={description:"",displayName:"Section",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const b={title:"Components/Section",component:r,args:{title:"Section name",label:"Swap me"}},t={render:e=>n(r,{...e})};var i,l,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Section {...args} />
  // args: {
  //   label: "Exemple of really long texte that can be fit there",
  // },
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const j=["Primary"];export{t as Primary,j as __namedExportsOrder,b as default};
