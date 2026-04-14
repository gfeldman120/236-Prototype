//main.js should only contain js that applies to all pages
"use strict";

//selectClass is the dropdown menu on the header for selecting what class the user wants to go to
let selectClass;

//buttonHelp is the help button on the main header
let buttonHelp;

//buttonGrades is the grades button on the main header
let buttonGrades;

//buttonSIS is the SIS button on the main header
let buttonSIS;

//buttonProfile is the profile button on the main header
let buttonProfile;

//When the user changes the value of selectClass, switch the page to the one specified
const selectClassChanged = () => {
    //Temp fix, should change later
    
    if (selectClass.value === "home-page") {
        window.open("https://gfeldman120.github.io/236-Prototype/", "_self");
    }
    else if (selectClass.value === "class-1") {
        window.open("https://gfeldman120.github.io/236-Prototype/classes/class-1/class-1.html", "_self");
    }
    else if (selectClass.value === "class-2") {
        window.open("https://gfeldman120.github.io/236-Prototype/classes/class-2/class-2.html", "_self");
    }
}

//When the user clicks the help button
const buttonHelpClicked = () => {
    window.open("https://gfeldman120.github.io/236-Prototype/misc-pages/help.html", "_self");
}

//When the user clicks the grades button on the main header
const buttonGradesClicked = () => {
    window.open("https://gfeldman120.github.io/236-Prototype/misc-pages/grades.html", "_self");
}

//When the user clicks the SIS button on the main header
const buttonSISClicked = () => {
    window.open("https://campus.ps.rit.edu/psc/RITXCP1D/EMPLOYEE/SA/c/NUI_FRAMEWORK.PT_LANDINGPAGE.GBL?&", "_self");
}

//When the user clicks the profile button on the main header
const buttonProfileClicked = () => {
    window.open("https://gfeldman120.github.io/236-Prototype/misc-pages/profile.html", "_self");
}

//Gets DOM elements and sets up events for them
const init = () => {
    selectClass = document.querySelector("#select-class");
    selectClass.addEventListener("change", selectClassChanged);

    buttonHelp = document.querySelector("#button-help");
    buttonHelp.addEventListener("click", buttonHelpClicked);

    buttonGrades = document.querySelector("#button-grades");
    buttonGrades.addEventListener("click", buttonGradesClicked);

    buttonSIS = document.querySelector("#button-sis");
    buttonSIS.addEventListener("click", buttonSISClicked);

    buttonProfile = document.querySelector("#button-profile");
    buttonProfile.addEventListener("click", buttonProfileClicked);
}

window.addEventListener("load", init);