import{j as r,a as i}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const t=({label:e,typeSvg:a,srcIcon:l,onClick:c})=>{if(a==="none")return r("button",{className:"primary",children:e});if(a==="left")return i("button",{className:"primary",children:[r("img",{src:l}),e]});if(a==="right")return i("button",{className:"primary",children:[e,r("img",{src:l})]});if(a==="only")return r("button",{className:"primary",children:r("img",{src:l})})};try{t.displayName="Primary",t.__docgenInfo={description:"",displayName:"Primary",props:{typeSvg:{defaultValue:null,description:"",name:"typeSvg",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"none"'},{value:'"only"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},srcIcon:{defaultValue:null,description:"",name:"srcIcon",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}const y={title:"Components/Buttons/Primary",component:t,argTypes:{label:{control:"text"},typeSvg:{options:["none","left","right","only"],control:{type:"radio"}}}},n={render:e=>r(t,{...e}),args:{typeSvg:"none",label:"label"}};var o,s,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Primary {...args} />,
  args: {
    typeSvg: "none",
    label: "label"
  }
}`,...(m=(s=n.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const g=["primary"];export{g as __namedExportsOrder,y as default,n as primary};
//# sourceMappingURL=Primary.stories-3c02548e.js.map
