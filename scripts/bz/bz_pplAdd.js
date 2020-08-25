import { pplArrayCopy } from "./bz_pplData.js"
import { pplHTML } from "./bz_pplTemplateHTML.js";

export const addPpl = () => {
// debugger; 
    const contentElement = document.querySelector(".citizensJs");
    const pplInfo = pplArrayCopy();

    let pplHTMLRepresentation = "";
    for(const eachPpl of pplInfo) {
        pplHTMLRepresentation += pplHTML(eachPpl);
    }

    contentElement.innerHTML += `
    ${pplHTMLRepresentation}
    `
}