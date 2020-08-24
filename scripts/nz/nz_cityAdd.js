import { cityArrayCopy } from "./nz_cityData.js";
import { cityHTML } from "./nz_cityTemplateHTML.js";

export const addCity = () => {

    const contentElement = document.querySelector(".citiesJs");
    const cityArray =  cityArrayCopy();

    let cityHTMLRepresentation = "";
    debugger;
    for (const eachCity of cityArray) {
        cityHTMLRepresentation  += cityHTML(eachCity);
    }

    contentElement.innerHTML += `
        ${cityHTMLRepresentation}
    `
};
