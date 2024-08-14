


export class CartelError {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
    }

    displayError(errorMessage) {
        console.error(errorMessage);
        const errorMessageElement = document.createElement('div');
        errorMessageElement.textContent = '¡Ouch! Hubo un error al cargar la información. Intenta más tarde.';
        errorMessageElement.classList.add('errorMessage');
        this.container.appendChild(errorMessageElement);
    }
}



//Botón para ir al inicio desde cualquier sección
// Función para volver al inicio de la página
function volverArriba() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// Event listener para el botón de volver arriba
window.onload = function () {
    // Busca el botón por su ID
    var btnVolverArriba = document.getElementById("btnVolverArriba");

    // Agrega un event listener para el evento de clic
    btnVolverArriba.addEventListener("click", function () {
        volverArriba();
    });
};

// Función para controlar la visibilidad del botón de volver arriba
window.onscroll = function () {
    // Verifica la posición de desplazamiento
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Si se ha desplazado lo suficiente, muestra el botón
        document.getElementById("btnVolverArriba").style.display = "block";
    } else {
        // Si no se ha desplazado lo suficiente, oculta el botón
        document.getElementById("btnVolverArriba").style.display = "none";
    }
};
volverArriba();






export const util = {

    colorearHtml:  () => {
        // = colorearModule ?? null;
        if (!globalThis.color) {
            import('./ColorearHtml.js')
                .then(module => module.default)

                .then(data => {

                 globalThis.color =  class colorearModule extends  data{};
                    
                 globalThis.color.Builder()
                    .etiquetas('blue')
                    .background('red')
                    .atributos('green')
                    .letras('black')
                    .build();
                })
                .catch(error => console.error(error));
        } else {
            try {
              
               new globalThis.color()
            } catch (error) {
                console.error(error)
            }
          


        }



    }
}




