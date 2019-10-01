// Your code goes here

const busClick = document.querySelector("img");


window.addEventListener("load", () => {
    busClick.style.transform = "scale( 1.2)";
    busClick.style.transition = "all 2s";
});

busClick.addEventListener("mouseover", () => {
    busClick.style.transform = "scale( 1.0)";
    busClick.style.transition = "all 2s";
});

busClick.addEventListener("click", () => {
    busClick.style.transform = "scale( 2.5)";
    busClick.style.transition = "all 3s";
});

const body = document.querySelector('body');

body.addEventListener("wheel", () => {
    body.style.backgroundColor = "purple";
});