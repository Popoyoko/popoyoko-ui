import{j as e,a as p}from"./jsx-runtime-29545a09.js";import{u as s}from"./styled-components.browser.esm-fc854ee4.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const a=""+new URL("download-b5f1ae62.svg",import.meta.url).href,c=s.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  background: #f7f7f8;
  border: 2px dashed #171673;
  border-radius: 2px;
`,u=s.input`
  display: none;
`,r=({label:o,icon:t})=>e("form",{children:p(c,{htmlFor:"file-input",children:[t==="left"&&e("img",{src:a,alt:"download"}),o,t==="right"&&e("img",{src:a,alt:"download"}),e(u,{type:"file",name:"file",id:"file-input"})]})});try{r.displayName="InputDownload",r.__docgenInfo={description:"",displayName:"InputDownload",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}}}}}catch{}const b={title:"Components/Inputs/Download",component:r,argTypes:{label:{control:"text"},icon:{options:["left","right"],control:{type:"radio"}}}},n={render:o=>e(r,{...o}),args:{icon:"right",label:"label"}};var l,d,i;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <InputDownload {...args} />,
  args: {
    icon: "right",
    label: "label"
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const x=["Input_Download"];export{n as Input_Download,x as __namedExportsOrder,b as default};
