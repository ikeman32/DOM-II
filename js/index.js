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

const image = document.querySelector(".img-fluid");

image.addEventListener("mousedown", () => {
    image.style.opacity = "0.5";
});

image.addEventListener("mouseup", () => {
    image.style.opacity = "1.0";
});
const bg = document.querySelector('.text-content');
bg.addEventListener('click', () => {
    bg.style.backgroundColor = "red";
});

const tc = document.querySelector('.text-content h2');

tc.addEventListener('click', (e) => {
    tc.style.backgroundColor = "yellow";
    e.stopPropagation(); //stops propagation of color changes
});


const btn = document.querySelector(".btn");

btn.addEventListener("dblclick", () => {
    btn.style.opacity = "0.5";
});

btn.addEventListener("mouseout", () => {
    btn.style.opacity = "1.0";
})

const img = document.querySelector(".content-section .img-content img");

img.addEventListener("mouseenter", () => {
    img.style.transform = "rotate(360deg)";
    img.style.transition = "all 1s";
});

img.addEventListener("mouseleave", () => {
    img.style.transform = "rotate(-360deg)";
    img.style.transition = "all 1s";
})

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
    }, false);
});