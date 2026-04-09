//main.js should only contain js that applies to all pages
"use strict";

//selectClass is the dropdown menu on the header for selecting what class the user wants to go to
let selectClass;

//buttonHelp is the help button on the main header
let buttonHelp;

//When the user changes the value of selectClass, switch the page to the one specified
const selectClassChanged = () => {
    if (selectClass.value === "home-page") {
        window.open("/index.html#select-class", "_self");
    }
    else if(selectClass.value === "class-1") {
        window.open("/classes/class-1/class-1.html#select-class", "_self");
    }
    else if(selectClass.value === "class-2") {
        window.open("/classes/class-2/class-2.html#select-class", "_self");
    }
}

//When the user clicks the help button
const buttonHelpClicked = () => {
    window.open("/misc-pages/help.html#button-help", "_self");
}

//Gets DOM elements and sets up events for them
const init = () => {
    selectClass = document.querySelector("#select-class");
    selectClass.addEventListener("change", selectClassChanged);
    buttonHelp = document.querySelector("#button-help");
    buttonHelp.addEventListener("click", buttonHelpClicked);
}

window.addEventListener("load", init);