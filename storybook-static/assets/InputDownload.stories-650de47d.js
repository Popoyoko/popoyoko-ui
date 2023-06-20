import{j as e,a}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const l=""+new URL("download-b5f1ae62.svg",import.meta.url).href;const t=({label:n,icon:r})=>{if(r==="left")return e("form",{children:a("label",{for:"file-input",class:"downloadbtn",children:[n,e("img",{src:l,alt:"download"}),e("input",{type:"file",name:"file",id:"file-input"})]})});if(r==="right")return e("form",{children:a("label",{for:"file-input",class:"downloadbtn",children:[e("img",{src:l,alt:"download"}),n,e("input",{type:"file",name:"file",id:"file-input"})]})})};try{t.displayName="InputDownload",t.__docgenInfo={description:"",displayName:"InputDownload",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}}}}}catch{}const m={title:"Components/Inputs/Download",component:t,argTypes:{label:{control:"text"},icon:{options:["left","right"],control:{type:"radio"}}}},o={render:n=>e(t,{...n}),args:{icon:"right",label:"label"}};var i,d,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <InputDownload {...args} />,
  args: {
    icon: "right",
    label: "label"
  }
}`,...(s=(d=o.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const f=["Input_Download"];export{o as Input_Download,f as __namedExportsOrder,m as default};
//# sourceMappingURL=InputDownload.stories-650de47d.js.map
