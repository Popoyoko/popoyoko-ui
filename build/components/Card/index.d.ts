import React from "react";
declare const Card: {
    ({ children }: {
        children: any;
    }): React.DetailedReactHTMLElement<null, HTMLElement>;
    Default: ({ label, mention, subTitle, price, }: import("./Default").DefaultProps) => React.JSX.Element;
    Media: () => React.JSX.Element;
};
export default Card;
