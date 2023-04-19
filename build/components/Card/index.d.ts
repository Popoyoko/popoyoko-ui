import "./index.css";
import React from "react";
declare const Card: ({ background, label, mention, subTitle, price, ...props }: {
    [x: string]: any;
    background: any;
    label: any;
    mention: any;
    subTitle: any;
    price: any;
}) => React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export default Card;
