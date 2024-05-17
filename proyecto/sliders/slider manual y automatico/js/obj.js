/*Para agregar imágenes en el carousel*/

export class tarjeta {
    
    constructor(img,titulo,descripcion){
        this.img = img;
        this.titulo = titulo;
        this.descripcion = descripcion;
       
    
        this.newTarjeta = `
                            <div class="img"><img src="${this.img}" alt="" draggable="false"/></div>
                            <h2>${this.titulo}</h2>
                            <span>${descripcion}</span>
                        
                           `
    
    
    
    }//fin constructor    

    agregarAlFront(){
        const front =document.querySelector('.carousel');
        const tarj = document.createElement('li');
        tarj.className='card';
        tarj.innerHTML = this.newTarjeta;
        front.appendChild(tarj);
    }


}//fin galeria