/*Para agregar imagenes en el slide continuo*/

export class galeria {
    /*agregar  o quitar dentro del constructor todas las imágenes que necesites*/
    constructor(img01,img02,img03,img04,img05,img06,img07,img08,img09,img10,img11){
        this.img01 = img01;
        this.img02 = img02;
        this.img03 = img03;
        this.img04 = img04;
        this.img05 = img05;
        this.img06 = img06;
        this.img07 = img07;
        this.img08 = img08;
        this.img09 = img09;
        this.img10 = img10;
        this.img11 = img11;
        //no olvidar agregar o quitar acá las imgs adicionales

        this.newGaleria = `
                            <img src="${this.img01}" />
                            <img src="${this.img02}" />
                            <img src="${this.img03}" />
                            <img src="${this.img04}" />
                            <img src="${this.img05}" />
                            <img src="${this.img06}" />
                            <img src="${this.img07}" />
                            <img src="${this.img08}" />
                            <img src="${this.img09}" />
                            <img src="${this.img10}" />
                            <img src="${this.img11}" /> 
                          `

    }//fin constructor

    agregarAlFront(){
        const front =document.querySelector('.img-slide');
        front.innerHTML = this.newGaleria;
    }

}//fin class galería