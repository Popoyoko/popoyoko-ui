import webColorsTs from "./webColorsTs";
import webSizesTs from "./webSizesTs";
import webComponentsTs from "./webComponentsTs";
import FigmaSizes from "./FigmaSizesJson";
import FigmaComponents from "./FigmaComponentsJson";

const initializeCustomFormats = () => {
    webColorsTs(),
    webSizesTs(),
    webComponentsTs(),
    FigmaSizes();
    FigmaComponents();
};

export default initializeCustomFormats;
