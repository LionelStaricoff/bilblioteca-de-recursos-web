/*Creando la clase para exportar*/

export class item {
        constructor(enlace, nombre){
            this.enlace = enlace;
            this.nombre = nombre;

            this.newItem = `
                            <a href="${enlace}" class="nav-menu-link nav-link">${nombre}</a>
                            `
        }/*fin constructor */

        agregarAlFront(){
            const front =document.querySelector('.nav-menu');
            const itemMenu = document.createElement('li');
            itemMenu.className ='nav-menu-item';
            itemMenu.innerHTML = this.newItem;
            front.appendChild(itemMenu);
        }


}/*fin class item */