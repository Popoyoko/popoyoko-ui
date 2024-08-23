import{a as m,j as a}from"./jsx-runtime-c9381026.js";import{p as r}from"./styled-components.browser.esm-37cbacf2.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const f=r.div`
display: flex;
min-width: 0;
flex-direction: column;
align-items: flex-start;
gap: 8px;
`,x=r.label`
font-family: Co Headline;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
min-width: 0;
`,g=r.input`
display: flex;
padding: 12px;
justify-content: center;
align-items: flex-start;
gap: 4px;
align-self: stretch;

border-radius: 4px;
border: 2px solid #0F082B;
background: #F7F7F8;

color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
`,n=({label:e,placeholder:p,type:s="text",name:d,value:c,onChange:u})=>m(f,{children:[a(x,{children:e}),a(g,{type:s,placeholder:p,name:d,value:c,onChange:u})]});try{n.displayName="InputText",n.__docgenInfo={description:"",displayName:"InputText",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"() => void"}}}}}catch{}const T={title:"Components/Inputs/Text",component:n,argTypes:{placeholder:{control:"text"}}},t={render:e=>a(n,{...e}),args:{placeholder:"placeholder"}};var l,o,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <InputText {...args} />,
  args: {
    placeholder: "placeholder"
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const b=["Input_Text"];export{t as Input_Text,b as __namedExportsOrder,T as default};
