import { landmarkArray } from './uk_LandmarkDataProvider.js';
import { landmarkHTML } from './uk_landmark.js';

export const landmarkList = () => {

    const contentElement = document.querySelector(".landmarksJs");
    const landmarkInfo = landmarkArray();

    let landmarkHTMLRepresentation = "";
    for(const landmark of landmarkInfo ) {
        landmarkHTMLRepresentation += landmarkHTML(landmark);
    }

    contentElement.innerHTML += `
    ${landmarkHTMLRepresentation}
    `

}