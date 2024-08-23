import{a as s,F as x,j as r}from"./jsx-runtime-c9381026.js";import{r as p}from"./index-8b3efc3f.js";import{p as h}from"./styled-components.browser.esm-37cbacf2.js";import{u as y}from"./upload-4292f190.js";import"./_commonjsHelpers-de833af9.js";const b=h.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;

  background: #f7f7f8;
  border: 2px dashed #171673;
  border-radius: 2px;
  width: 100%;
`,n=({label:e,name:u,acceptedExtensions:m=".jpg,.png,.pdf"})=>{const t=p.useRef(null),[l,f]=p.useState(null);return s(x,{children:[r("input",{type:"file",accept:m,style:{display:"none"},ref:t,onChange:o=>{const g=o.target.files&&o.target.files[0];f(g)}}),s(b,{onClick:()=>{t.current&&t.current.click()},name:u,children:[l?l.name:e,r("img",{src:y,alt:"upload"})]})]})};try{n.displayName="InputUpload",n.__docgenInfo={description:"",displayName:"InputUpload",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},acceptedExtensions:{defaultValue:{value:".jpg,.png,.pdf"},description:"",name:"acceptedExtensions",required:!1,type:{name:"string"}}}}}catch{}const E={title:"Components/Inputs/Upload",component:n,argTypes:{label:{control:"text"}}},a={render:e=>r(n,{...e}),args:{label:"label"}};var d,i,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <InputUpload {...args} />,
  args: {
    label: 'label'
    // onChange: (file) => {
    //     console.log('File uploaded:', file);
    //     },
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const q=["upload"];export{q as __namedExportsOrder,E as default,a as upload};
