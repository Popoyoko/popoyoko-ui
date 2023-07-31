// fichier de déclaration de modules TypeScript (.d.ts) qui permet de définir manuellement les types pour la bibliothèque react-svg

declare module "react-svg" {
    import { SVGProps } from "react";
  
    interface ReactSVGProps extends SVGProps<SVGSVGElement> {
      src: string;
    }
  
    const ReactSVG: React.FC<ReactSVGProps>;
  
    export default ReactSVG;
  }
  