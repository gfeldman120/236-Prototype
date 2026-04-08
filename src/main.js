//main.js should only contain js that applies to all pages
let selectClass;

//Gets variables for DOM elements
const init = () => {
    console.log("init called");
    selectClass = document.querySelector("#select-class");
}

export { selectClass, init };