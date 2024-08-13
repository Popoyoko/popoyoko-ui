import{a as f,j as l}from"./jsx-runtime-7c9a5671.js";import{p as r}from"./styled-components.browser.esm-b13dfa8b.js";import"./index-8a57d176.js";import"./_commonjsHelpers-725317a4.js";const g=r.div`
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,b=r.label`
  font-family: Co Headline;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,y=r.select`
  width: 100%;
  padding: 12px;
  background: #f7f7f8;
  border: 2px solid #0f082b;
  border-radius: 4px;
  font-family: "Co Headline";
  font-style: normal;
  font-size: 16px;
  color: #0f082b;
  outline: none;
`,a=({label:t,options:p,name:c,value:d,onChange:u})=>f(g,{children:[l(b,{children:t}),l(y,{value:d,onChange:u,name:c,children:p.map((e,m)=>l("option",{value:typeof e=="object"?e.value:e,children:typeof e=="object"?e.label:e},m))})]});try{a.displayName="InputSelect",a.__docgenInfo={description:"",displayName:"InputSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"(string | { label: string; value: string | number; })[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<HTMLSelectElement>) => void"}}}}}catch{}const v={title:"Components/Inputs/Select",component:a,argTypes:{label:{control:"text"},options:{control:"array"}}},n={render:t=>l(a,{...t}),args:{label:"label",options:["Option 1","Option 2","Option 3"]}};var o,i,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <InputSelect {...args} />,
  args: {
    label: "label",
    options: ["Option 1", "Option 2", "Option 3"]
  }
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const I=["Input_Select"];export{n as Input_Select,I as __namedExportsOrder,v as default};
