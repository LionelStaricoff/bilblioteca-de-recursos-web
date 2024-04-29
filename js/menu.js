import * as obj from './main.js';
import './itemsMenuLibreria.js';
import './webInteres.js';
import {ColorearHtml} from './utils.js';

const enlacesMenu = document.querySelectorAll('nav ul li a');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Cerrar el menú al hacer clic en cualquier enlace
        document.getElementById('check').checked = false;
    });
});

// Función para controlar el desplazamiento vertical cuando un menú desplegable está abierto
function controlarDesplazamientoVertical(checkboxId) {
    const menuCheckbox = document.getElementById(checkboxId);
    const body = document.body;

    menuCheckbox.addEventListener('change', () => {
        if (menuCheckbox.checked) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }
    });
}

// Llama a la función para el menú de inicio
controlarDesplazamientoVertical('check');

// Llama a la función para el menú de la librería
controlarDesplazamientoVertical('check-2');


new ColorearHtml();



    







  










