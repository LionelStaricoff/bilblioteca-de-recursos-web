export class CartelError {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
    }

    displayError(errorMessage) {
        console.error(errorMessage);
        const errorMessageElement = document.createElement('div');
        errorMessageElement.textContent = '¡Ouch! Hubo un error al cargar la información. Intenta más tarde.';
        errorMessageElement.classList.add('errorMessage');
        this.container.appendChild(errorMessageElement);
    }
}

export class ColorearHtml{
constructor(){
this.menor = 'gray';
this.div = 'blue';
this.section =  'cyan';
this.button =  'palevioletred';
this.main =  'yellow';
this.header =   'yellow';
this.footer =  'yellow';
this.H1 = 'yellowgreen';
this.H2 =  'yellowgreen';
this.H3 =  'yellowgreen';
this.H4 =  'yellowgreen';
this.H5 =  'yellowgreen';
this.H6 =  'yellowgreen';

this.reemplazar();
}

reemplazar(){
    document.addEventListener('DOMContentLoaded', ()=> {
        const codigoHtml = document.querySelectorAll('.colorear');
        codigoHtml.forEach(c =>  this.colorear(c) );
   
      });
}

colorear(codigoHtml){
    codigoHtml.style.backgroundColor = "#333333";
    const contenido = codigoHtml.innerHTML;
      
    const contenidoModificado = contenido.replace('<', `<L style="color: ${this.menor};">&lt;</L>`)
                                         .replace('>', `<L style="color: ${this.menor};">&gt;</L>`)
                                         .replace('section',`<L style="color: ${this.section};"> </L>`)
                                         .replace('div',`div style="color: ${this.div};"`)
                                         .replace('button',`<L style="color: ${this.button};">button</L>`)
                                         .replace('main',`<L style="color: ${this.main};">main</L>`)
                                         .replace('header',`<L style="color: ${this.header};">header</L>`)
                                         .replace('footer',`<L style="color: ${this.footer};">footer</L>`)
                                         .replace('H1',`<L style="color: ${this.H1};">H1</L>`)
                                         .replace('h1',`<L style="color: ${this.H1};">h1</L>`)
                                         .replace('H2',`<L style="color: ${this.H2};">H2</L>`)
                                         .replace('h2',`<L style="color: ${this.H2};">h2</L>`)
                                         .replace('H3',`<L style="color: ${this.H3};">H3</L>`)
                                         .replace('h3',`<L style="color: ${this.H3};">h3</L>`)
                                         .replace('H4',`<L style="color: ${this.H4};">H4</L>`)
                                         .replace('h4',`<L style="color: ${this.H4};">h4</L>`)
                                         .replace('H5',`<L style="color: ${this.H5};">H5</L>`)
                                         .replace('h5',`<L style="color: ${this.H5};">h5</L>`)
                                         .replace('H6',`<L style="color: ${this.H6};">H6</L>`)
                                         .replace('h6',`<L style="color: ${this.H6};">h6</L>`)
                                        // .replace('',`<L style="color: ${this.};"></L>`)
                                         //.replace('',`<L style="color: ${this.};"></L>`)
                                         ;
  
    codigoHtml.innerHTML = contenidoModificado;
}

}