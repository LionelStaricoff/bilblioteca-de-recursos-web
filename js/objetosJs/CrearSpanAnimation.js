import {VerificarCss} from '../main.js'

export class CrearSpanAnimation {
    constructor(palabras, padre) {
        this._palabras = palabras ?? '';
        this._padre = document.querySelector(padre ?? 'body');

       if(!VerificarCss('spanAnimation')) this.agregarCss();
        this.crearSpanAnimation();
    }
    crearSpanAnimation() {
        let arreyPalabras = Array.from(this._palabras);
        const div = document.createElement('div');
        div.classList.add('spanAnimation');
        let time = 0.1;
        arreyPalabras.forEach(a => {
            const span = document.createElement('span');
            span.textContent = a;
            span.style.animationDelay = `${time}s`;
            div.appendChild(span);
            time += 0.1;
        })
        this._padre.appendChild(div);
    }

    agregarCss() {

        const style = document.createElement('style');
        const css = `
        
   .spanAnimation {

    span {
     
    overflow: visible;
    white-space: nowrap;
    opacity: 0;
    transform: translateX(100%);
    animation: slideIn forwards;
    height: fit-content;
    text-wrap: wrap;
    }

}



/* Animación para cada letra */
@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

        `;

        style.innerText = css;

        document.head.appendChild(style);
    }
}
