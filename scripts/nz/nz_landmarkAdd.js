import { landmarksArrayCopy } from "./nz_landmarkData.js";
import { landmarkHTML } from "./nz_landmarkTemplateHTML.js";

export const addLandmark = () => {
    const contentElement = document.querySelector(".landmarksJs")
    const landmarkArray = landmarksArrayCopy();

    let landmarkHTMLRepresentation = "";

    for (const eachLandmark of landmarkArray) {
        landmarkHTMLRepresentation += landmarkHTML(eachLandmark);
    }

    contentElement.innerHTML += `
        ${landmarkHTMLRepresentation}
    `
}