/*Para agregar imagenes en el slide*/

export class galeria {
    /*agregar  o quitar dentro del constructor todas las imágenes que necesites*/
    constructor(img1,img2,img3,img4,img5,img6,img7,img8,img9){
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.img5 = img5;
        this.img6 = img6;
        this.img7 = img7;
        this.img8 = img8;
        this.img9 = img9;
        
        //no olvidar agregar o quitar acá las imgs adicionales

        this.newGaleria = `
                            <span><img src="${this.img1}" /></span>
                            <span><img src="${this.img2}" /></span>
                            <span><img src="${this.img3}" /></span>
                            <span><img src="${this.img4}" /></span>
                            <span><img src="${this.img5}" /></span>
                            <span><img src="${this.img6}" /></span>
                            <span><img src="${this.img7}" /></span>
                            <span><img src="${this.img8}" /></span>
                            <span><img src="${this.img9}" /></span>
                            
                          `

    }//fin constructor

    agregarAlFront(){
        const front =document.querySelector('.slider');
        const page = document.createElement('div');
        page.innerHTML = this.newGaleria;
        front.appendChild(page);
    }

}//fin class galería































//para agregar tres imágenes por divs
export class uno{
    constructor(img1,img2,img3){
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;

        this.newImg =  `
                            <span><img src="${this.img1}"/></span>
                            <span><img src="${this.img2}"/></span>
                            <span><img src="${this.img3}"/></span>
                        `
    }

    agregarAlFront(){
        const front= document.querySelector('.hoja1');
        front.innerHTML = this.newImg;
        
    }

}

export class dos{
    constructor(img1,img2,img3){
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;

        this.newImg =  `
                            <span><img src="${this.img1}"/></span>
                            <span><img src="${this.img2}"/></span>
                            <span><img src="${this.img3}"/></span>
                        `
    }

    agregarAlFront(){
        const front= document.querySelector('.hoja2');
        front.innerHTML = this.newImg;
        
    }

}

export class tres{
    constructor(img1,img2,img3){
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;

        this.newImg =  `
                            <span><img src="${this.img1}"/></span>
                            <span><img src="${this.img2}"/></span>
                            <span><img src="${this.img3}"/></span>
                        `
    }

    agregarAlFront(){
        const front= document.querySelector('.hoja3');
        front.innerHTML = this.newImg;
        
    }

}


//para agregar varias imágenes

export class variasImg{
    constructor(img1,img2,img3,img4,img5,img6,img7,img8,img9){
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.img5 = img5;
        this.img6 = img6;
        this.img7 = img7;
        this.img8 = img8;
        this.img9 = img9;

        this.newsImagens = `
                                <div>
                                    <span><img src="${this.img1}"/></span>
                                    <span><img src="${this.img2}"/></span>
                                    <span><img src="${this.img3}"/></span> 
                                </div>    
                                <div>    
                                    <span><img src="${this.img4}"/></span>
                                    <span><img src="${this.img5}"/></span>
                                    <span><img src="${this.img6}"/></span>
                                </div>
                                <div>    
                                    <span><img src="${this.img7}"/></span>
                                    <span><img src="${this.img8}"/></span>
                                    <span><img src="${this.img9}"/></span>
                                </div>

                            `
    }

    agregarAlFront(){
        const front= document.querySelector('#contenedor');
        front.innerHTML = this.newsImagens;
        
    }
}/**/