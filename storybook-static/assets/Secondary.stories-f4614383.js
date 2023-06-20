import{j as e,a as s}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const t=({label:r,typeSvg:n,srcIcon:o,onClick:d})=>n==="none"?e("button",{className:"secondary",children:r}):n==="left"?s("button",{className:"secondary",children:[e("img",{src:o}),r]}):n==="right"?s("button",{className:"secondary",children:[r,e("img",{src:o})]}):n==="only"?e("button",{className:"secondary",children:e("img",{src:o})}):e("button",{className:"secondary"});try{t.displayName="Secondary",t.__docgenInfo={description:"",displayName:"Secondary",props:{typeSvg:{defaultValue:null,description:"",name:"typeSvg",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"none"'},{value:'"only"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},srcIcon:{defaultValue:null,description:"",name:"srcIcon",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}const y={title:"Components/Buttons/Secondary",component:t,argTypes:{label:{control:"text"},typeSvg:{options:["none","left","right","only"],control:{type:"radio"}}}},a={render:r=>e(t,{...r}),args:{typeSvg:"none",label:"label"}};var l,c,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Secondary {...args} />,
  args: {
    typeSvg: "none",
    label: "label"
    // onClick:'',
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const g=["secondary"];export{g as __namedExportsOrder,y as default,a as secondary};
//# sourceMappingURL=Secondary.stories-f4614383.js.map
