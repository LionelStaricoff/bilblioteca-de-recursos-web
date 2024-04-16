import { CartelError } from './utils.js';

document.addEventListener("DOMContentLoaded", function () {
    const cartelError = new CartelError('.listado');

    fetch('json/menuLibreria.json')
        .then(response => response.json())
        .then(data => {
            const menuItems = data.menu;
            const listado = document.querySelector('.listado');

            menuItems.forEach(item => {
                const details = document.createElement('details');
                const summary = document.createElement('summary');
                summary.textContent = item.titulo;
                details.appendChild(summary);

                const subitems = item.subitems;
                subitems.forEach(subitem => {
                    const link = document.createElement('a');
                    link.textContent = subitem.titulo;
                    link.href = subitem.href;

                    const paragraph = document.createElement('p');
                    paragraph.appendChild(link);

                    details.appendChild(paragraph);
                });

                listado.appendChild(details);
            });
        })
        .catch(error => {
            cartelError.displayError(error);

        });
});
