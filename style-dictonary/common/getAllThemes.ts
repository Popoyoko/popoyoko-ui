import { readdir } from "fs/promises";

const getAllThemes = async (basePath) => {
  const brands = await readdir(`${basePath}/Semantics`);

  return await Promise.all(
    brands.map(async (brand) => {
      const modeFiles = async () => {
        return (await readdir(`${basePath}/Semantics/${brand}`))
          .filter((mode) => {
            return mode.split(".")[0] !== "Core";
          })
          .map((mode) => {
            const curentMode = mode.split(".")[0];

            return curentMode;
          });
      };

      return {
        name: brand,
        modes: await modeFiles(),
      };
    }),
  );
};

export default getAllThemes;
