import{a as m,j as n}from"./jsx-runtime-c9381026.js";import{r as f}from"./index-8b3efc3f.js";import{d as t}from"./styled-components.browser.esm-47302786.js";import"./_commonjsHelpers-de833af9.js";const g=t.div`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 16px;
`,b=t.input`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #0f082b;
  background: #f7f7f8;

  &:hover {
    background: #f7f7f8;
  }

  &:checked:before {
    display: block;
  }
`,h=t.label`
  color: #1b1a23;
  font-family: Co Headline;R
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  word-break: break-word;
  text-align: start;
`,r=({label:e,name:i,value:p,checked:c,onChange:u})=>{const o=f.useId();return m(g,{children:[n(b,{type:"radio",id:o,onChange:u,checked:c,name:i,value:p}),n(h,{htmlFor:o,children:e})]})};try{r.displayName="InputRadio",r.__docgenInfo={description:"",displayName:"InputRadio",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}}}}}catch{}const k={title:"Components/Inputs/Radio component",component:r,argTypes:{label:{control:"text"}}},a={render:e=>n(r,{...e}),args:{label:"label"}};var l,d,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <InputRadio {...args} />,
  args: {
    label: "label"
  }
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const C=["InputSelectorComponent"];export{a as InputSelectorComponent,C as __namedExportsOrder,k as default};
