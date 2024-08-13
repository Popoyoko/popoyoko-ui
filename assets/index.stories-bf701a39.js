import{a as m,j as n}from"./jsx-runtime-7c9a5671.js";import{p as r}from"./styled-components.browser.esm-b13dfa8b.js";import"./index-8a57d176.js";import"./_commonjsHelpers-725317a4.js";const c=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,f=r.label`
  font-family: Co Headline;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
`,t=({label:e,lang:i="fr",value:p,name:d,onChange:u})=>m(c,{children:[n(f,{children:e}),n(g,{lang:i,value:p,type:"date",name:d,onChange:u})]});try{t.displayName="InputDate",t.__docgenInfo={description:"",displayName:"InputDate",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},lang:{defaultValue:{value:"fr"},description:"",name:"lang",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"() => void"}}}}}catch{}const _={title:"Components/Inputs/Date",component:t,argTypes:{label:{control:"text"}}},a={render:e=>n(t,{...e}),args:{label:"label",value:"aaaa-mm-jj"}};var l,o,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <InputDate {...args} />,
  args: {
    label: "label",
    value: "aaaa-mm-jj"
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const I=["Input_Date"];export{a as Input_Date,I as __namedExportsOrder,_ as default};
