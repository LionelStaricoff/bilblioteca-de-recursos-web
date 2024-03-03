import {slider} from './obj.js';

const slider1 = new slider('./characters/Abadango Cluster Princess.jpeg',
'./characters/Abadango Cluster Princess.jpeg',
'./characters/Abadango Cluster Princess.jpeg',
'./characters/Abadango Cluster Princess.jpeg',
'./characters/Abadango Cluster Princess.jpeg',
'./characters/Abadango Cluster Princess.jpeg');
slider1.agregarAlFront();



let scrollContainer = document.querySelector(".slider");
let backbtn = document.querySelector("#backBtn");
let nextbtn = document.querySelector("#nextBtn");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior ="auto";
})

nextbtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 900;
})
backbtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 900;
})


