/*Para agregar imagenes en el slide continuo*/

export class galeria {
    /*agregar  o quitar dentro del constructor todas las imágenes que necesites*/
    constructor(img1,img2,img3,img4,img5,img6,img7,img8,img9,img10){
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.img5 = img5;
        this.img6 = img6;
        this.img7 = img7;
        this.img8 = img8;
        this.img9 = img9;
        this.img10 = img10;
        //no olvidar agregar o quitar acá las imgs adicionales

        this.newGaleria = `
                            <img src="${this.img1}" />
                            <img src="${this.img2}" />
                            <img src="${this.img3}" />
                            <img src="${this.img4}" />
                            <img src="${this.img5}" />
                            <img src="${this.img6}" />
                            <img src="${this.img7}" />
                            <img src="${this.img8}" />
                            <img src="${this.img9}" />
                            <img src="${this.img10}" /> 
                          `

    }//fin constructor

    agregarAlFront(){
        const front =document.querySelector('.img-slide');
        front.innerHTML = this.newGaleria;
    }

}//fin class galería