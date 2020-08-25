import { landmarkArrayCopy } from "./bz_landData.js"
import { landmarkHTML } from "./bz_landTemplateHTML.js";

export const addLandmark = () => {

    const contentElement = document.querySelector(".landmarksJs");
    const landmarkInfo = landmarkArrayCopy();

    let landmarkHTMLRepresentation = "";
    for(const eachLandmark of landmarkInfo) {
        landmarkHTMLRepresentation += landmarkHTML(eachLandmark);
    }

    contentElement.innerHTML += `
    ${landmarkHTMLRepresentation}
    `
}

//Landmark List Component 