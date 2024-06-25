import { tokenPath } from './tokensconfig';

export const loadTokens = async () => {
  const tokenModules = await Promise.all([
    import(`Color${tokenPath}Dark.ts`),
    import(`Color${tokenPath}Light.ts`),
    import(`Component${tokenPath}.ts`),
    import(`Sizes${tokenPath}.ts`)
  ]);
  return {
    colorDark: tokenModules[0].default,
    colorLight: tokenModules[1].default,
    component: tokenModules[2].default,
    sizes: tokenModules[3].default
  };
};