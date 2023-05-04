import{j as e,a as l}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const a=({label:n,typeSvg:t,srcIcon:o,onClick:u})=>t==="none"?e("button",{className:"buttonSecondary",children:n}):t==="left"?l("button",{className:"buttonSecondary",children:[e("img",{src:o}),n]}):t==="right"?l("button",{className:"buttonSecondary",children:[n,e("img",{src:o})]}):t==="only"?e("button",{className:"buttonSecondary",children:e("img",{src:o})}):e("button",{className:"buttonSecondary"});try{a.displayName="ButtonSecondary",a.__docgenInfo={description:"",displayName:"ButtonSecondary",props:{typeSvg:{defaultValue:null,description:"",name:"typeSvg",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"right"'},{value:'"only"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},srcIcon:{defaultValue:null,description:"",name:"srcIcon",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}const y={title:"Design System/Button Secondary",component:a,argTypes:{label:{control:"text"},typeSvg:{options:["none","left","right","only"],control:{type:"radio"}}}},r={render:n=>e(a,{...n}),args:{typeSvg:"none",label:"label"}};var s,c,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <ButtonSecondary {...args} />,
  args: {
    typeSvg: 'none',
    label: 'label'
    // onClick:'',
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const g=["Primary"];export{r as Primary,g as __namedExportsOrder,y as default};
//# sourceMappingURL=ButtonSecondary.stories-88515661.js.map
