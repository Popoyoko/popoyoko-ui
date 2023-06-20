import{a as d,j as s}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const a=({placeholder:e,srcIcon:p})=>d("div",{children:[s("input",{type:"text",className:"placeholder",placeholder:e,onKeyDown:n=>{if(n.key==="Enter"){const l=n.target.value;console.log("Recherche: "+l)}}}),s("svg",{href:p,className:"vector"})]});try{a.displayName="InputSearch",a.__docgenInfo={description:"",displayName:"InputSearch",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},srcIcon:{defaultValue:null,description:"",name:"srcIcon",required:!0,type:{name:"string"}}}}}catch{}const g={title:"Components/Inputs/Search",component:a,argTypes:{placeholder:{control:"text"},srcIcon:{control:"text"}}},r={render:e=>s(a,{...e}),args:{placeholder:"Hypnose, massages, magnétiseur...",srcIcon:""}};var t,c,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <InputSearch {...args} />,
  args: {
    placeholder: "Hypnose, massages, magnétiseur...",
    srcIcon: ""
  }
}`,...(o=(c=r.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const y=["primary"];export{y as __namedExportsOrder,g as default,r as primary};
//# sourceMappingURL=InputSearch.stories-c5f7e75e.js.map
