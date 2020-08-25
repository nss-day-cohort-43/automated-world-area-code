import { citizenArrayCopy } from "./nz_citizenData.js";
import { citizenHTML } from "./nz_citizenTemplateHTML.js";

export const addCitizen = () => {
    const contentElement = document.querySelector(".citizensJs");
    const citizenArray = citizenArrayCopy();

    let citizenHTMLRepresentation = "";
    
    for (const eachCitizen of citizenArray) {
        citizenHTMLRepresentation += citizenHTML(eachCitizen);
    }

    contentElement.innerHTML += `
        ${citizenHTMLRepresentation}
    `
}