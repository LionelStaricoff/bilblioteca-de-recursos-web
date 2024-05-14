

export class crearLoader {
    constructor(padre) {
        this.agregarAlFront(padre);
    }
    agregarAlFront(padre = 'body') {
        const papa = document.querySelector(padre);
        papa.appendChild(this.armarLoader());
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


