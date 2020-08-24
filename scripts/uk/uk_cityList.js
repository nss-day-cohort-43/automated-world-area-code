import { cityArray } from './uk_CityDataProvider.js';
import { cityHTML } from './uk_city.js';

export const cityList = () => {

    const contentElement = document.querySelector(".citiesJs");
    const cityInfo = cityArray();

    let cityHTMLRepresentation = "";
    for(const city of cityInfo ) {
        cityHTMLRepresentation += cityHTML(city);
    }

    contentElement.innerHTML += `
    ${cityHTMLRepresentation}
    `



}