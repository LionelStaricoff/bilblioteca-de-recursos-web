import * as obj from './main.js';
import './itemsMenuLibreria.js';
import './webInteres.js.js';
import {ColorearHtml} from './utils.js';

const enlacesMenu = document.querySelectorAll('nav ul li a');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Cerrar el menú al hacer clic en cualquier enlace
        document.getElementById('check').checked = false;
    });
});

new ColorearHtml();

    







  










