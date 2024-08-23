import{j as n,a as s}from"./jsx-runtime-c9381026.js";import{B as t}from"./index-03e80ff4.js";import{I as d,a as c}from"./index-1632e479.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-37cbacf2.js";import"./upload-4292f190.js";const x={title:"Components/Button",component:t,argTypes:{variant:{control:{type:"select"}},type:{control:{type:"select"}},label:{control:"text",if:{arg:"iconPosition",neq:"only"}},icon:{options:Object.keys(d),control:{type:"select"}},iconPosition:{options:["before","after","only"],control:{type:"radio"},if:{arg:"icon",eq:void 0}}}},r=m=>{const{variant:o,icon:e,iconPosition:f,label:i,action:a,children:v}=m;if(e)switch(f){case"before":return s(t,{variant:o,action:a,children:[n(c,{icon:e}),i]});case"after":return s(t,{variant:o,action:a,children:[i,n(c,{icon:e})]});case"only":return n(t,{variant:o,action:a,children:n(c,{icon:e})});default:return n(t,{variant:o,action:a,children:i})}else return n(t,{variant:o,action:a,children:i})};r.args={variant:"primary",label:"Label",icon:void 0,iconPosition:"before"};var l,u,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`(props: CustomButtonProps) => {
  const {
    variant,
    icon,
    iconPosition,
    label,
    action,
    children
  } = props;
  if (!icon) {
    return <Button variant={variant} action={action}>
                {label}
            </Button>;
  } else {
    switch (iconPosition) {
      case "before":
        return <Button variant={variant} action={action}>
                        <Icon icon={icon} />{label}
                    </Button>;
      case "after":
        return <Button variant={variant} action={action}>
                        {label}<Icon icon={icon} />
                    </Button>;
      case "only":
        return <Button variant={variant} action={action}>
                        <Icon icon={icon} />
                    </Button>;
      default:
        return <Button variant={variant} action={action}>{label}</Button>;
    }
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const j=["Default"];export{r as Default,j as __namedExportsOrder,x as default};
