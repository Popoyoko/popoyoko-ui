import StyleDictionary from "style-dictionary";
import convertColors from "../common/convertColors";

const webColorsTs = () =>
  StyleDictionary.registerFormat({
    name: "web/colors/ts",
    formatter: ({ dictionary, file }) => {
      const encapsule = (tokens) => {
        return `export const ${
          file.destination.split(".")[0]
        } = ${tokens}`;
      };

      const filteredTokens = () => {
        let result = {};

        const processToken = (token, obj) => {
          const key = token.path.shift();

          if (!obj[key]) {
            obj[key] = {};
          }

          if (token.path.length === 0) {
            obj[key] = convertColors("web", token.value);
          } else {
            processToken(token, obj[key]);
          }
        };

        dictionary.allTokens
          .filter(
            (token) => token.type === "color" && token.path[0] === "Semantic"
          )
          .map((token) => {
            const tokenCopy = { ...token };
            tokenCopy.path.shift();
            return tokenCopy;
          })
          .forEach((token) => processToken(token, result));

        return JSON.stringify(result, null, 2);
      };
      return encapsule(filteredTokens());
    },
  });

export default webColorsTs;
