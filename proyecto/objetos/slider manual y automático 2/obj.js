export class slider{
    constructor(img1, img2, img3, img4, img5, img6){
this.img1 = img1;
this.img2 = img2;
this.img3 = img3;
this.img4 = img4;
this.img5 = img5;
this.img6 = img6;

this.cuerpo = `<div class="slider-wrap">
<i class="fa-solid fa-angle-left" id="backBtn"> </i>
<section class="slider">
    <div>
        <span><img src="${this.img1}" /></span>
        <span><img src="${this.img2}" /></span>
        <span><img src="${this.img3}" /></span>
        
    </div>
    <div>
        <span><img src="${this.img4}" /></span>
        <span><img src="${this.img5}" /></span>
        <span><img src="${this.img6}" /></span>
    </div>
</section>
<i class="fa-solid fa-angle-right" id="nextBtn"> </i>
</div>`;
    }

    agregarAlFront(){
const front = document.querySelector('.cuerpo');
front.innerHTML = this.cuerpo;
    }
}




