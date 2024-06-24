import { tokenPath } from './tokensconfig';

export function loadTokens(token: string) {
  const tokens = {
    Colors: {
      Dark: require(`${tokenPath}/web/Color${token}Dark.ts`),
      Light: require(`${tokenPath}/web/Color${token}Light.ts`),
    },
    Sizes: require(`${tokenPath}/web/Sizes${token}.ts`),
    Components: require(`${tokenPath}/web/Component${token}.ts`),
  };
  return tokens;
}