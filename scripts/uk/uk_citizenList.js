import { citizenArray } from './uk_CitizenDataProvider.js';
import { citizenHTML } from './uk_citizen.js';

export const citizenList = () => {

    const contentElement = document.querySelector(".citizensJs");
    const citizenInfo = citizenArray();

    let citizenHTMLRepresentation = "";
    for(const citizen of citizenInfo ) {
        citizenHTMLRepresentation += citizenHTML(citizen);
    }

    contentElement.innerHTML += `
    ${citizenHTMLRepresentation}
    `

}