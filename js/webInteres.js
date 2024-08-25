
export function CargarWebsInteres() {

    // Leer el archivo JSON
    fetch('json/WebsInteres.json')
        .then(response => response.json())
        .then(data => {
            // Obtener el elemento donde se insertará el contenido
            const websDeInteres = document.querySelector('.websDeInteres');

            // Iterar sobre los datos del JSON
            data.websDeInteres.forEach(seccion => {
                // Crear el elemento <details> para la sección
                const details = document.createElement('details');

                // Crear el elemento <summary> para el título de la sección
                const summary = document.createElement('summary');
                summary.textContent = seccion.titulo;
                summary.classList.add('titleLinks');
                details.appendChild(summary);

                // Crear la lista de enlaces dentro de la sección
                const enlaces = document.createElement('ol');
                enlaces.classList.add('listLinks');

                // Iterar sobre los enlaces de la sección
                seccion.links.forEach((link) => {
                    // Crear el elemento <li> para cada enlace
                    const listItem = document.createElement('li');
                    listItem.classList.add('li')

                    // Crear el elemento <a> para el enlace
                    const enlace = document.createElement('a');
                    enlace.textContent = link;
                    enlace.href = link;
                    enlace.classList.add('link');
                    enlace.target = "_blank"; 

                    // Insertar el enlace en el elemento <li>
                    listItem.appendChild(enlace);

                    // Insertar el elemento <li> en la lista <ol>
                    enlaces.appendChild(listItem);
                });

                // Insertar la lista de enlaces en el detalle de la sección
                details.appendChild(enlaces);

                // Insertar el detalle de la sección en el contenedor principal
                websDeInteres.appendChild(details);
            });
        })
        .catch(error => {
            // cartelError.displayError(error);
        });
};
