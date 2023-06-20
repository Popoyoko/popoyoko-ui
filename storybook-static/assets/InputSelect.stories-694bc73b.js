import{a,j as n}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const r=({label:e,href:c,options:p,anchorElement:i})=>a("div",{className:"select",children:[n("button",{className:"selectbtn",children:e}),a("div",{className:"select-content",children:[i,p.map((m,u)=>n("a",{href:c,children:m},u))]})]});try{r.displayName="InputSelect",r.__docgenInfo={description:"",displayName:"InputSelect",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}},anchorElement:{defaultValue:null,description:"",name:"anchorElement",required:!0,type:{name:"Element"}}}}}catch{}const _={title:"Components/Inputs/Select",component:r,argTypes:{label:{control:"text"},href:{control:"text"},options:{control:"array"},anchorElement:{control:"object"}}},t={render:e=>n(r,{...e}),args:{label:"label",href:"#",options:["Option 1","Option 2","Option 3"],anchorElement:n("a",{href:"#",children:"Custom Anchor Element"})}};var o,l,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <InputSelect {...args} />,
  args: {
    label: "label",
    href: "#",
    options: ["Option 1", "Option 2", "Option 3"],
    anchorElement: <a href="#">Custom Anchor Element</a>
  }
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const g=["Input_Select"];export{t as Input_Select,g as __namedExportsOrder,_ as default};
//# sourceMappingURL=InputSelect.stories-694bc73b.js.map
