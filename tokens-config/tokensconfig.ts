const BrandName = "Popoyoko";

const WebColorTokenDarkPromise = import(`../build-tokens/web/Color${BrandName}Dark.ts`);
const WebColorTokenLightPromise = import(`../build-tokens/web/Color${BrandName}Light.ts`);
const WebComponentTokenPromise = import(`../build-tokens/web/Component${BrandName}.ts`);
const WebSizesTokenPromise = import(`../build-tokens/web/Sizes${BrandName}.ts`);


export const WebColorTokenDark = () => WebColorTokenDarkPromise;
export const WebColorTokenLight = () => WebColorTokenLightPromise;
export const WebComponentToken = () => WebComponentTokenPromise;
export const WebSizesToken = () => WebSizesTokenPromise;
