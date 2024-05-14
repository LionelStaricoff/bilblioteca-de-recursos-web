import * as obj from './main.js';
import './itemsMenuLibreria.js';
// import '/index.js';
import './webInteres.js';
//import {ColorearHtml} from './utils.js';

const enlacesMenu = document.querySelectorAll('nav ul li a');

enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Cerrar el menú al hacer clic en cualquier enlace
        document.getElementById('check').checked = false;
    });
});

//Evito que hagan scrollY, cuando el menú desplegable esté abierto
/*const menuCheckbox = document.getElementById( 'check' );
const body = document.body;
menuCheckbox.addEventListener( 'change', ()=>{
    if (menuCheckbox.checked) {
        body.style.overflowY = 'hidden';
    } else {
        body.style.overflowY = 'auto';
    }
});*/

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

// Llamar a la función para el menú de inicio
controlarDesplazamientoVertical('check');

// Llamar a la función para el menú de la librería
controlarDesplazamientoVertical('check-2');


//new ColorearHtml();

//cargarlibreria();

    







  










