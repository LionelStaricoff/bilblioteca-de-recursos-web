//importando clase para crear objeto
import { galeria } from './obj.js';

const page1 = new galeria("./img/Abadango Cluster Princess.jpeg",
                          "./img/Abradolf Lincler.jpeg",
                          "./img/Adjudicator Rick.jpeg",
                          "./img/Agency Director.jpeg",
                          "./img/Aqua Morty.jpeg",
                          "./img/Alan Rails.jpeg",
                          "./img/Morty Smith.png",
                          "./img/Summer Smith.jpeg",
                          "./img/Rick Sanchez.jpeg")

page1.agregarAlFront();
//_________________________________________________________________

//Funcionalidades scroll
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