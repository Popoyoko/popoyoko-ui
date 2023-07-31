declare module "react-svg" {
    import { SVGProps } from "react";
  
    interface ReactSVGProps extends SVGProps<SVGSVGElement> {
      src: string;
    }
  
    const ReactSVG: React.FC<ReactSVGProps>;
  
    export default ReactSVG;
  }
  