import { cityArrayCopy } from "./bz_cityData.js"
import { cityHTML } from "./bz_cityTemplateHTML.js";

export const addCity = () => {

    const contentElement = document.querySelector(".citiesJs");
    const cityInfo = cityArrayCopy();

    let cityHTMLRepresentation = "";
    for(const eachCity of cityInfo) {
        cityHTMLRepresentation += cityHTML(eachCity);
    }

    contentElement.innerHTML += `
    ${cityHTMLRepresentation}
    `
}