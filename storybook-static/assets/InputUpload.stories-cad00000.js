import{a as t,F as u,j as o}from"./jsx-runtime-670450c2.js";import{r as g}from"./index-f1f749bf.js";import{u as m}from"./upload-4292f190.js";import"./_commonjsHelpers-042e6b4d.js";const a=({onChange:e,label:i})=>{const l=g.useRef(null);return t(u,{children:[o("input",{type:"file",accept:".jpg,.png,.pdf",style:{display:"none"},ref:l,onChange:r=>{const c=r.target.files&&r.target.files[0];e(c)}}),t("button",{onClick:()=>{l.current&&l.current.click()},children:[i,o("img",{src:m,alt:"upload"})]})]})};try{a.displayName="InputUpload",a.__docgenInfo={description:"",displayName:"InputUpload",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(file: File) => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const F={title:"Components/Inputs/Upload",component:a,argTypes:{label:{control:"text"}}},n={render:e=>o(a,{...e}),args:{label:"label",onChange:e=>{console.log("File uploaded:",e)}}};var s,p,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <InputUpload {...args} />,
  args: {
    label: 'label',
    onChange: file => {
      console.log('File uploaded:', file);
    }
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const I=["upload"];export{I as __namedExportsOrder,F as default,n as upload};
//# sourceMappingURL=InputUpload.stories-cad00000.js.map
