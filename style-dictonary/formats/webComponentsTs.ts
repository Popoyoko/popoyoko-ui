import StyleDictionary from "style-dictionary";

const webComponentsTs = () =>
  StyleDictionary.registerFormat({
    name: "web/components/ts",
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
            obj[key] = token.value;
          } else {
            processToken(token, obj[key]);
          }
        };

        dictionary.allTokens
          .filter((token) => token.path[0] === "Components")
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

export default webComponentsTs;
