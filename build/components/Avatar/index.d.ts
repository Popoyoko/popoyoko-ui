import React from "react";
declare const Avatar: {
    ({ children }: {
        children: any;
    }): React.DetailedReactHTMLElement<null, HTMLElement>;
    Small: ({ showbadge, background }: import("./Small").SmallProps) => React.JSX.Element;
    Cover: ({ showedit, background }: import("./Cover").CoverProps) => React.JSX.Element;
};
export default Avatar;
