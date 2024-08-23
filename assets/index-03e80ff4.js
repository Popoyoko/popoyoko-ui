import{j as o}from"./jsx-runtime-c9381026.js";import{p as i}from"./styled-components.browser.esm-37cbacf2.js";const u=i.button`
  /* Styles communs pour tous les boutons */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  width: 100%; 

  /* Styles pour le bouton primary */
  &.primary {
    background-color: #228C53;
    color: #eeebff;
    border: none;
    border-radius: 2px;
    font-family: serif;

    &:hover {
      background-color: #228C53;
      color: #d9ccff;
    }

    &:active {
      background-color: #228C53;
      color: #f5f6ff;
    }

    &:disabled {
      background-color: #170F354D;
      color: #170F354D;
    }
  }

  /* Styles pour le bouton secondary */
  &.secondary {
    background: #f8f8f8;
    border: 2px solid #1B6042;
    border-radius: 2px;
    color: #191CB1;

    &:hover {
      background: #ffffff;
      border: 2px solid #1B6042;
      color: #1B6042;
    }

    &:active {
      background: #e4e4e4;
      border: 2px solid #1B6042;
      color: #1B6042;
    }

    &:disabled {
      border-radius: 2px;
      border: 2px dashed rgba(0, 35, 252, 0.11);
      background: #170F354D;
    }
  }

  /* Styles pour le bouton tertiary */
  &.tertiary {
    background: #f8f8f8;
    border-radius: 2px;
    color: #1b6042;
    border: 2px #f8f8f8;

    &:hover {
      background: #ffffff;
      color: #228c53;
    }

    &:active {
      background: #e4e4e4;
      color: #153f33;
    }

    &:disabled {
      background: rgba(119, 119, 119, 0.11);
      border: 2px dashed #140B2533;
      color: rgba(33, 193, 103, 0.11);
    }
  }
`,r=({variant:e="primary",children:t,action:d=()=>console.log("Button as been clicked"),value:n=void 0,type:l=void 0,disabled:a=!1})=>o(u,{className:`${e} ${a?"disabled":""}`,onClick:a?void 0:d,type:l,value:n,disabled:a,children:t});r.Primary=e=>o(r,{variant:"primary",...e});r.Secondary=e=>o(r,{variant:"secondary",...e});r.Tertiary=e=>o(r,{variant:"tertiary",...e});try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},action:{defaultValue:{value:'() => console.log("Button as been clicked")'},description:"",name:"action",required:!1,type:{name:"() => void"}},value:{defaultValue:{value:"undefined"},description:"",name:"value",required:!1,type:{name:"string"}},type:{defaultValue:{value:"undefined"},description:"",name:"type",required:!1,type:{name:'"button"'}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{r as B};
