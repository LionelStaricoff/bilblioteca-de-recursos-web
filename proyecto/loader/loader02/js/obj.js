/*Creando la clase para exportar*/

export class crearLoader {
    
    agregarAlFront(){
        const divcontent = document.body.createElement("div");
        divcontent.className='loader-content';
        
        const loader =document.createElement("div");
        loader.className='loader';
        
        divcontent.appendChild(loader);

    }


}/*fin class crearLoader */