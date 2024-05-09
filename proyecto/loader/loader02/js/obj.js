/*Creando la clase para exportar*/

export class crearLoader {
    constructor(padre) {
        this.agregarAlFront(padre);
    }
    agregarAlFront(padre = 'body') {
        const padre = document.querySelector(padre);
        padre.appendChild(this.armarLoader());
    }
    armarLoader() {
        const divcontent = document.createElement("div");
        divcontent.className = 'loader-content';

        const loader = document.createElement("div");
        loader.className = 'loader';

        divcontent.appendChild(loader);
        return divcontent;
     
        }
    }


