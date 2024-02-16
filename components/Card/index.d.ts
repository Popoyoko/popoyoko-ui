import React from "react";
declare const Card: {
    ({ children }: {
        children: any;
    }): React.DetailedReactHTMLElement<null, HTMLElement>;
    Default: ({ media, title, mention, subTitle, price, }: import("./Default").DefaultProps) => React.JSX.Element;
    Media: ({ media, }: {
        media?: string;
    }) => React.JSX.Element;
};
export default Card;
