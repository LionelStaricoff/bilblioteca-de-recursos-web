document.addEventListener("DOMContentLoaded", function() {
  // Leer el archivo JSON
  fetch('json/WebsInteres.json')
      .then(response => response.json())
      .then(data => {
          // Obtener el elemento donde se insertará el contenido
          const websDeInteres = document.querySelector('.websDeInteres');

          // Iterar sobre los datos del JSON
          for (const seccion of data.websDeInteres) {
              // Crear el elemento <h3> para el título de la sección
              const titulo = document.createElement('h3');
              titulo.textContent = seccion.titulo;
              titulo.classList.add('titleLinks');

              // Insertar el título en la sección
              websDeInteres.appendChild(titulo);

              // Crear la lista <ol> para los enlaces
              const listaEnlaces = document.createElement('ol');
              listaEnlaces.classList.add('listLinks');

              // Iterar sobre los enlaces de la sección
              for (const link of seccion.links) {
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
              }

              // Insertar la lista de enlaces en la sección
              websDeInteres.appendChild(listaEnlaces);
          }
      })
      .catch(error => {
        const websDeInteres = document.querySelector('.websDeInteres');

        console.error('Error al cargar WebsInteres.json .', error);

              
        const errorMessage = document.createElement('div');
        errorMessage.textContent = '¡Ouch! Hubo un error al cargar el listado. Intenta más tarde.';
        errorMessage.classList.add('errorMessage');

      //  const websDeInteres = document.querySelector('.websDeInteres');
      //  websDeInteres.innerHTML = ''; 
       websDeInteres.appendChild(errorMessage);

      });
});
