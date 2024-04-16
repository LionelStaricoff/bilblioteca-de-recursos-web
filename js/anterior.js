import { CartelError } from './utils.js';

document.addEventListener("DOMContentLoaded", function() {
    const cartelError = new CartelError('.websDeInteres');

    // Leer el archivo JSON
    fetch('json/WebsInteres.json')
        .then(response => response.json())
        .then(data => {
            // Obtener el elemento donde se insertará el contenido
            const websDeInteres = document.querySelector('.websDeInteres');

            // Iterar sobre los datos del JSON usando forEach
            data.websDeInteres.forEach(seccion => {
                // Crear el elemento <h3> para el título de la sección
                const titulo = document.createElement('h3');
                titulo.textContent = seccion.titulo;
                titulo.classList.add('titleLinks');

                // Insertar el título en la sección
                websDeInteres.appendChild(titulo);

                // Crear la lista <ol> para los enlaces
                const listaEnlaces = document.createElement('ol');
                listaEnlaces.classList.add('listLinks');

                // Iterar sobre los enlaces de la sección usando forEach
                seccion.links.forEach(link => {
                    // Crear el elemento <li> para cada enlace
                    const listItem = document.createElement('li');
                    listItem.classList.add('li');

                    // Crear el elemento <a> para el enlace
                    const enlace = document.createElement('a');
                    enlace.href = link;
                    enlace.textContent = link;
                    enlace.classList.add('link');

                    // Insertar el enlace en el elemento <li>
                    listItem.appendChild(enlace);

                    // Insertar el elemento <li> en la lista <ol>
                    listaEnlaces.appendChild(listItem);
                });

                // Insertar la lista de enlaces en la sección
                websDeInteres.appendChild(listaEnlaces);
            });
        })
        .catch(error => {
            cartelError.displayError(error);
            
        });
});
