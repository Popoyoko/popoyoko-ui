const BrandName = "Popoyoko";

const FigmaComponentToken = import(`../build-tokens/Figma/Component${BrandName}.json`);
const FigmaSizesToken = import(`../build-tokens/Figma/Sizes${BrandName}.json`);
const WebColorTokenDark = import(`../build-tokens/web/Color${BrandName}Dark`);
const WebColorTokenLight = import(`../build-tokens/web/Color${BrandName}Light`);
const WebComponentToken = import(`../build-tokens/web/Component${BrandName}`);
const WebSizesToken = import(`../build-tokens/web/Sizes${BrandName}`);

export {
    FigmaComponentToken,
    FigmaSizesToken,
    WebColorTokenDark,
    WebColorTokenLight,
    WebComponentToken,
    WebSizesToken
};
