//class.js should only have js that applies to classes
"use strict";

//buttonClassGrades is the grades button on the class header
let buttonClassGrades;

//When the user clicks buttonClassGrades
//Goes to general grades page now, replace with class-specific grades page
const buttonClassGradesClicked = () => {
    window.open("/misc-pages/grades.html", "_self");
}

//Gets DOM elements and sets up events for them
const init = () => {
    buttonClassGrades = document.querySelector("#button-class-grades");
    buttonClassGrades.addEventListener("click", buttonClassGradesClicked);
}

window.addEventListener("load", init);