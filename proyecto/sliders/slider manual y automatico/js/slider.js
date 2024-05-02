import { tarjeta } from './obj.js';

//con estas dos líneas puedes agregar todas las tarjetas que desees.
/*
const tarj# = new tarjeta("acá img","acá título","acá descripción")
tarj#.agregarAlFront();
--------------------------------------------------------------------------------*/

//Ejemplos:
const tarj1 = new tarjeta( "./img/Abadango Cluster Princess.jpeg","Abadango Cluster","ALIEN");
tarj1.agregarAlFront();

const tarj2 = new tarjeta( "./img/Abradolf Lincler.jpeg","Abradolf Lincler","HUMAN");
tarj2.agregarAlFront();

const tarj3 = new tarjeta("./img/Adjudicator Rick.jpeg","Adjudicator Rick","HUMAN");
tarj3.agregarAlFront();

const tarj4 = new tarjeta("./img/Agency Director.jpeg","Agency Director","HUMAN")
tarj4.agregarAlFront();

const tarj5 = new tarjeta("./img/Aqua Morty.jpeg","Aqua Morty","HUMANOID")
tarj5.agregarAlFront();

const tarj6 = new tarjeta("./img/Alan Rails.jpeg","Alan Rails","HUMAN")
tarj6.agregarAlFront();
/*se agregaron 6 tarjetas */


const contenedor = document.querySelector(".contenedor");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".contenedor i");//llamo los botones flechas
const firstCardWidth = carousel.querySelector(".card").offsetWidth;//offsetWidth devuelve el ancho del layout del elemento, valor real del elemento
const carouselChildrens = [...carousel.children]; //creando un array con los childrens de carousel


let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// calcula el número de cards que se ven a la vez
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

/*Código para simular un scrollin infinito
Para insertar copias al comienzo del carousel*/ 
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
/*Para insertar copias al final del carousel*/
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Agrego evento para arrow buttons para deslizar carousel hacia la izquiera o derecha
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth; //se traslada el ancho de una card a la izq o a la dcha
    });
});




const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");//evita que el usuario pueda seleccionar el texto

    // Guarda posición inicial del carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // Si isDragging es falso 
    // Para que el carousel se siga moviendo desde donde está a la izq automáticamente
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}


const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
    // Si la galeria llega al comienzo, que continue con el final
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // Si la galería llega al final continua con el comiezo
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    
    // Se activa el autoplay si el mouse no está hover
    clearTimeout(timeoutId);
    if(!contenedor.matches(":hover")) autoPlay();
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
contenedor.addEventListener("mouseenter", () => clearTimeout(timeoutId));
contenedor.addEventListener("mouseleave", autoPlay);

