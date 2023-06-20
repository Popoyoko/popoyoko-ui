import React from "react";
import L1H1 from "./L1H1";
import L2H3 from "./L2H3";

interface RatioProps {
    children?: React.ReactNode;
}

interface RatioComponent extends React.FC<RatioProps> {
    L1H1: typeof L1H1;
    L2H3: typeof L2H3;
}

const Ratio: RatioComponent = ({ children }) => {
  return <div>{children}</div>;
};

Ratio.L1H1 = L1H1;
Ratio.L2H3 = L2H3;

export default Ratio;
