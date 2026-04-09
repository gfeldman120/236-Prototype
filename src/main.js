//main.js should only contain js that applies to all pages
"use strict";

//selectClass is the dropdown menu on the header for selecting what class the user wants to go to
let selectClass;

//When the user changes the value of selectClass, switch the page to the one specified
const selectClassChanged = () => {
    if (selectClass.value === "home-page") {
        if (document.URL.includes("index.html")) {
            window.open("index.html#select-class", "_self");
        }
        else if (document.URL.includes("class-1.html") || document.URL.includes("class-2.html")) {
            window.open("../../index.html#select-class");
        }
    }
    else if (selectClass.value === "class-1") {
        if (document.URL.includes("index.html")) {
            window.open("classes/class-1/class-1.html#select-class", "_self");
        }
        else if (document.URL.includes("class-1.html")) {
            window.open("class-1.html#select-class");
        }
        else if (document.URL.includes("class-2.html")) {
            window.open("../class-1.html#select-class");
        }
    }
    else if (selectClass.value === "class-2") {
        window.open("../classes/class2.html#select-class", "_self");
    }
}

//Gets DOM elements and sets up events for them
const init = () => {
    selectClass = document.querySelector("#select-class");
    selectClass.addEventListener("change", selectClassChanged);
}

window.addEventListener("load", init);