import{a as c,j as t}from"./jsx-runtime-c9381026.js";import{p as l}from"./styled-components.browser.esm-37cbacf2.js";import{a as m}from"./index-1632e479.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./upload-4292f190.js";const u=l.form`
display: flex;
padding: 12px;
justify-content: space-between;
align-items: flex-start;
gap: 4px;

border-radius: 4px;
border: 2px solid #0F082B;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
width: 100%;
`,h=l.input`
color: #0F082B;
font-family: Co Headline;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;

border: none;
width: 100%;
outline: none;
`,a=({placeholder:e,onChange:d,onSubmit:n})=>c(u,{onSubmit:o=>{o.preventDefault(),n&&n(o)},children:[t(h,{type:"search",placeholder:e,onChange:d}),t(m.Search,{})]});try{a.displayName="InputSearch",a.__docgenInfo={description:"",displayName:"InputSearch",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"(event: FormEvent<HTMLFormElement>) => void"}}}}}catch{}const I={title:"Components/Inputs/Search",component:a,argTypes:{placeholder:{control:"text"}}},r={render:e=>t(a,{...e}),args:{placeholder:"Hypnose, massages, magnétiseur..."}};var p,s,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <InputSearch {...args} />,
  args: {
    placeholder: "Hypnose, massages, magnétiseur..."
  }
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const w=["primary"];export{w as __namedExportsOrder,I as default,r as primary};
