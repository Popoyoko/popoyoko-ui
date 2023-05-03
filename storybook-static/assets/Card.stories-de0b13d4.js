import{a as t,j as e}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const r=({background:a,backgroundColor:p,label:l,mention:g,subTitle:b,price:y,...v})=>t("div",{className:"card",children:[e("div",{className:(l?"media":"simple")==="simple"?"card":"card media",style:{background:a},...v}),l&&e("div",{className:"card-section",style:{backgroundColor:p},children:t("div",{className:"card-group",children:[e("p",{children:g}),t("div",{className:"card-information",children:[t("div",{className:"card-title",children:[e("p",{children:l}),e("p",{children:b})]}),y]})]})})]});try{r.displayName="Card",r.__docgenInfo={description:"",displayName:"Card",props:{mention:{defaultValue:null,description:"",name:"mention",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!1,type:{name:"number"}},background:{defaultValue:null,description:"",name:"background",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"simple"'},{value:'"media"'}]}}}}}catch{}const N={title:"Design System/Card",component:r,argTypes:{variant:{control:"select",table:{category:"Variant",subcategory:"Style"}},background:{control:"color",table:{category:"Backgrounds"}},backgroundColor:{control:"color",table:{category:"Backgrounds"}},mention:{control:{type:"text"},table:{category:"Text",subcategory:"Mention contents"}},label:{table:{category:"Text",subcategory:"Title contents"}},subTitle:{table:{category:"Text",subcategory:"Subtitle contents"}},price:{table:{category:"Text",subcategory:"Price contents"}}},args:{background:"url(https://imgs.search.brave.com/KUc_Sjgkt3SuouS7E-9zbhV2YGG7MFpPmcNklJmJYu0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ib25q/b3VybmF0dXJlLmZy/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9pbWFn/ZS1wYXlzYWdlLWdy/YXR1aXRlLWEtdGVs/ZWNoYXJnZXItNS5q/cGc)"}},n={render:a=>e(r,{...a}),args:{variant:"simple"}},s={render:a=>e(r,{...a}),args:{variant:"media",label:"Title",mention:"Mention",subTitle:"SubTitle",price:246}};var i,c,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Card {...args} />,
  args: {
    variant: "simple"
  }
}`,...(o=(c=n.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var d,u,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Card {...args} />,
  args: {
    variant: "media",
    label: "Title",
    mention: "Mention",
    subTitle: "SubTitle",
    price: 246
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const S=["simple","media"];export{S as __namedExportsOrder,N as default,s as media,n as simple};
//# sourceMappingURL=Card.stories-de0b13d4.js.map
