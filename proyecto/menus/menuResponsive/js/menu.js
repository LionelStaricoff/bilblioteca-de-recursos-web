/*Importando Clase para crear objeto*/
import { item } from './obj.js';


/*
Con estás dos líneas podemos crear el link que necesitemos en nuestro menú
    const nombreItem = new item("#", "nombreItem");
    nombreitem.agregarAlFront();

Ejemplo: */
const home = new item("#", "HOME");
home.agregarAlFront();

const about = new item("#", "ABOUT ME");
about.agregarAlFront();

const blog = new item("#", "BLOG");
blog.agregarAlFront();

const contact = new item("#", "CONTACT");
contact.agregarAlFront();
//____________________________________________________________________



/*Comportamiento navToggle */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav-menu_visible');
    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Cerrar Menú");
    }else{
        navToggle.setAttribute("aria-label","Abrir Menú");
    }
});