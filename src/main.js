//main.js should only contain js that applies to all pages

"use strict";
let selectClass;

//I don't really know what the issue is, it should print something but it's just not- aurora
//Gets variables for DOM elements
document.onload = () => {
    selectClass = document.querySelector("#select-class");

    //Sends the user to the page selected in selectClass
    selectClass.addEventListener("input", (e) => {
        console.log(e);
    });
}