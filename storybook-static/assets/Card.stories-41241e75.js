import{a as r,j as s}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const a=({background:e,label:i,mention:p,subTitle:g,price:b,...y})=>r("div",{className:"card",children:[s("div",{className:(i?"media":"simple")==="simple"?"card":"card media",style:{background:e},...y}),i&&s("div",{className:"card-section",children:r("div",{className:"card-groud",children:[p,r("div",{className:"card-information",children:[r("div",{className:"card-title",children:[i,g]}),b]})]})})]});try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{mention:{defaultValue:null,description:"",name:"mention",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!1,type:{name:"number"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"simple"'},{value:'"media"'}]}}}}}catch{}const _={title:"Design System/Card",component:a,argTypes:{variant:{control:"select",table:{category:"Variant",subcategory:"Style"}},background:{control:"color",table:{category:"Colors",subcategory:"Button colors"}},mention:{control:{type:"text"},table:{category:"Text",subcategory:"Mention contents"}},label:{table:{category:"Text",subcategory:"Title contents"}},subTitle:{table:{category:"Text",subcategory:"Subtitle contents"}},price:{table:{category:"Text",subcategory:"Price contents"}}},args:{background:"url(https://imgs.search.brave.com/KUc_Sjgkt3SuouS7E-9zbhV2YGG7MFpPmcNklJmJYu0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ib25q/b3VybmF0dXJlLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9pbWFn/ZS1wYXlzYWdlLWdy/YXR1aXRlLWEtdGVs/ZWNoYXJnZXItNS5q/cGc)"}},t={render:e=>s(a,{...e}),args:{variant:"simple"}},n={render:e=>s(a,{...e}),args:{variant:"media",label:"Title",mention:"Mention",subTitle:"SubTitle",price:246}};var l,c,o;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Card {...args} />,
  args: {
    variant: "simple"
  }
}`,...(o=(c=t.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Card {...args} />,
  args: {
    variant: "media",
    label: "Title",
    mention: "Mention",
    subTitle: "SubTitle",
    price: 246
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const C=["simple","media"];export{C as __namedExportsOrder,_ as default,n as media,t as simple};
//# sourceMappingURL=Card.stories-41241e75.js.map
