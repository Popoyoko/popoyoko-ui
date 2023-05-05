import{j as e,a as l}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const o=({label:t,typeSvg:n,srcIcon:a,onClick:i})=>n==="none"?e("button",{className:"buttonSecondary",children:t}):n==="left"?l("button",{className:"buttonSecondary",children:[e("img",{src:a}),t]}):n==="right"?l("button",{className:"buttonSecondary",children:[t,e("img",{src:a})]}):n==="only"?e("button",{className:"buttonSecondary",children:e("img",{src:a})}):e("button",{className:"buttonSecondary"});try{o.displayName="ButtonSecondary",o.__docgenInfo={description:"",displayName:"ButtonSecondary",props:{typeSvg:{defaultValue:null,description:"",name:"typeSvg",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"right"'},{value:'"only"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},srcIcon:{defaultValue:null,description:"",name:"srcIcon",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}const y={title:"Design System/Buttons/Button Secondary",component:o,argTypes:{label:{control:"text"},typeSvg:{options:["none","left","right","only"],control:{type:"radio"}}}},r={render:t=>e(o,{...t}),args:{typeSvg:"none",label:"label"}};var s,c,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <ButtonSecondary {...args} />,
  args: {
    typeSvg: "none",
    label: "label"
    // onClick:'',
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const g=["Button_Secondary"];export{r as Button_Secondary,g as __namedExportsOrder,y as default};
//# sourceMappingURL=ButtonSecondary.stories-f3d108b0.js.map
