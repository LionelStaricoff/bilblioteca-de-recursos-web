import { TextoFX01 } from '../../../js/main.js';
new TextoFX01('.title-container', 'Tu Título Aquí')

export class CrearTextoFX01 {
    constructor(padre, text) {
        this._padre = (document.querySelector(padre)) ? document.querySelector(padre) : document.querySelector('body');
        this._text = text;
        if (!util.verificarCss('animated-title')) this.agregarCss();
        this.renderTitle();

    }


    agregarCss(){
        const style = document.createElement('style');
        style.textContent = `

        .animated-title {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(100%);
            animation: slideIn 1s forwards;
            font-size: 2em !important;
            font-family: Lucida !important;
            
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
            `
            document.head.appendChild(style);
    }

    renderTitle() {

        this._text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.classList.add('animated-title');
            span.style.animationDelay = `${(index + 1) * 0.1}s`;
            span.textContent = char === ' ' ? '\u00A0' : char;

            this._padre.appendChild(span);
        });
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     new CrearTextoFX01('.title-container', 'Tu Título Aquí');
// });