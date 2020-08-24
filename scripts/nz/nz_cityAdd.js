import { cityArrayCopy } from "./nz_cityData.js";
import { cityHTML } from "./nz_cityTemplateHTML.js";

export const addCity = () => {

    const contentElement = document.querySelector(".citiesJs");
    const cityArray =  cityArrayCopy();

    let cityHTMLRepresentation = "";

    for (const eachCity of cityArray) {
        cityHTMLRepresentation  += cityHTML(eachCity);
    }

    console.log(cityHTMLRepresentation);

    contentElement.innerHTML += `
        ${cityHTMLRepresentation}
    `
};
