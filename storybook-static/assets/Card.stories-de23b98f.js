import{a as t,j as e}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const r=({background:a,backgroundColor:p,label:i,mention:g,subTitle:b,price:y,...f})=>t("div",{className:"card",children:[e("div",{className:(i?"media":"simple")==="simple"?"card":"card media",style:{background:a},...f}),i&&e("div",{className:"card-section",style:{backgroundColor:p},children:t("div",{className:"card-group",children:[e("p",{children:g}),t("div",{className:"card-information",children:[t("div",{className:"card-title",children:[e("p",{children:i}),e("p",{children:b})]}),y]})]})})]});try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},mention:{defaultValue:null,description:"",name:"mention",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!1,type:{name:"number"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"simple"'},{value:'"media"'}]}}}}}catch{}const k={title:"Design System/Card",component:r,argTypes:{variant:{control:"select",table:{category:"Variant",subcategory:"Style"}},background:{control:"color",table:{category:"Backgrounds"}},backgroundColor:{control:"color",table:{category:"Backgrounds"}},label:{table:{category:"Text",subcategory:"Title contents"}},mention:{table:{category:"Text",subcategory:"Mention contents"}},subTitle:{table:{category:"Text",subcategory:"Subtitle contents"}},price:{table:{category:"Text",subcategory:"Price contents"}}},args:{background:"#bbbbbb"}},n={render:a=>e(r,{...a}),args:{variant:"simple"}},s={render:a=>e(r,{...a}),args:{variant:"media",label:"Title",mention:"Mention",subTitle:"SubTitle",price:246}};var l,o,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Card {...args} />,
  args: {
    variant: "simple"
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,u,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Card {...args} />,
  args: {
    variant: "media",
    label: "Title",
    mention: "Mention",
    subTitle: "SubTitle",
    price: 246
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const x=["simple","media"];export{x as __namedExportsOrder,k as default,s as media,n as simple};
//# sourceMappingURL=Card.stories-de23b98f.js.map
