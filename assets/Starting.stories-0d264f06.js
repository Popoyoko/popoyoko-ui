import{M as l}from"./chunk-HLWAVYOI-fd9695c9.js";import{f as s,g as p,n as c}from"./figma-8d2f7f79.js";import{j as e,a as o,F as d}from"./jsx-runtime-29545a09.js";import{u as a}from"./index-a1cf9e47.js";import"./iframe-43a48d26.js";import"../sb-preview/runtime.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./react-18-236157c6.js";import"./index-8c3ac41d.js";import"./index-8fd8397b.js";import"./index-356e4a49.js";function r(i){const n=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",a:"a",h3:"h3",code:"code",pre:"pre",h4:"h4"},a(),i.components);return o(d,{children:[e(l,{title:"Starting"}),`
`,e("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }
  `}),`
`,e(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e(n.p,{children:"Developers: This guide will get you up and running with the Popoyoko Design System!"}),`
`,e(n.p,{children:"Designers: Please consult the Figma Design System for designer resources."}),`
`,o("a",{className:"link-item",href:"##",target:"_blank",children:[e("img",{src:s,alt:"figma"}),e("span",{children:o(n.p,{children:[e("strong",{children:"Figma"}),`
View the design`]})})]}),`
`,e(n.h2,{id:"installation",children:"Installation"}),`
`,o(n.p,{children:["To install ",e(n.strong,{children:"popoyoko-ui"}),", you can choose between installing the package directly with ",e(n.a,{href:"",children:e(n.strong,{children:"npm"})}),", or with ",e(n.a,{href:"https://github.com/Popoyoko/popoyoko-ui",target:"_blank",rel:"nofollow noopener noreferrer",children:e(n.strong,{children:"github"})})," (npm being the simplest, I recommend it)."]}),`
`,o("div",{className:"link-list",children:[o("a",{className:"link-item",href:"https://github.com/Popoyoko/popoyoko-ui",target:"_blank",children:[e("img",{src:p,alt:"github"}),e("span",{children:o(n.p,{children:[e("strong",{children:"Github"}),`
View the source and add issues`]})})]}),o("a",{className:"link-item",href:"##",target:"_blank",children:[e("img",{src:c,alt:"npm"}),e("span",{children:o(n.p,{children:[e("strong",{children:"Npm"}),`
Download package and use it`]})})]})]}),`
`,e(n.h3,{id:"use-in-a-react-project",children:"Use in a react project"}),`
`,e(n.p,{children:e(n.strong,{children:"To use Popoyoko UI Vite in your React project, follow these steps:"})}),`
`,e(n.p,{children:"Install the package using your package manager of choice (bun, npm or yarn):"}),`
`,e(n.h3,{id:"bun-add-githubpopoyokopopoyoko-uipackage",children:e(n.code,{children:"bun add github:Popoyoko/popoyoko-ui#package"})}),`
`,e(n.p,{children:"Now you can import the desired components from the library"}),`
`,e(n.p,{children:"For example :"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`import { Information } from "popoyoko-ui";
`})}),`
`,e(n.h2,{id:"how-does-it-work",children:"How does it work?"}),`
`,e(n.h4,{id:"this-reportory-is-using-bun-instead-of-npm",children:"This reportory is using bun instead of npm"}),`
`,o(n.p,{children:["🏴‍☠️ ",o(n.a,{href:"https://bun.sh/",target:"_blank",rel:"nofollow noopener noreferrer",children:["Install ",e(n.strong,{children:"BUN"})," here"]})]}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`bun run dev
`})}),`
`,e(n.p,{children:"Runs the vite application in development mode."}),`
`,e(n.p,{children:`The page will be reloaded if you make any changes.
You will also see all lint errors in the console.`}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`bun run build
`})}),`
`,e(n.p,{children:"Builds the application for production in the build folder."}),`
`,e(n.p,{children:`"tsc && vite build"
"tsc" compiles the TypeScript code into JavaScript.
"vite build" builds the application for production using the Vite tool.`}),`
`,e(n.p,{children:"Your library is ready to be exported to other applications!"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`bun run preview
`})}),`
`,e(n.p,{children:"Launch a local development server that allows to preview the application under development."}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`bun run storybook
`})}),`
`,e(n.p,{children:"Launch the Storybook environment, a development tool for designing and testing user interface components in isolation."}),`
`,e(n.p,{children:"port 6006 is used"}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`bun run build-storybook
`})}),`
`,e(n.p,{children:"Allows you to create a build of the user interface of the application or website, using Storybook as a compilation tool."}),`
`,e(n.pre,{children:e(n.code,{className:"language-bash",children:`bun run run watch
`})}),`
`,e(n.p,{children:`Launch a compilation process in "watch" mode that monitors the application's source files and automatically recompiles them as soon as there are changes.`}),`
`,e(n.p,{children:`"watch": "vite build --watch --mode development"
command launches the "vite build" command with two additional options: "--watch" and "--mode development".`}),`
`,e(n.p,{children:`The "--watch" option tells Vite to monitor the application's source files and to recompile automatically as soon as there are changes. The "--mode development" option tells Vite to compile the application in development mode.`})]})}function h(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e(n,{...i,children:e(r,{...i})}):r(i)}const m=()=>{throw new Error("Docs-only story")};m.parameters={docsOnly:!0};const t={title:"Starting",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:h};const S=["__page"];export{S as __namedExportsOrder,m as __page,t as default};
