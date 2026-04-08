"use strict";

//selectClass is the dropdown menu for selecting what class the user wants to go to
let selectClass;

//When the user changes the value of selectClass
const selectClassChanged = (e) => {
    console.log("selectClass changed");
    window.open("../classes/class1.html");
}

//Gets DOM elements and sets up events for them
const init = () => {
    selectClass = document.querySelector("#select-class");
    selectClass.addEventListener("change", selectClassChanged);
}

window.addEventListener("load", init);