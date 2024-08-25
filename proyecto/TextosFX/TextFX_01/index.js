import { TextoFX01 } from '../../../js/main.js';
new TextoFX01('.title-container', 'Tu Título Aquí')

class CrearTextoFX01 {
    constructor(padre, text) {
        this._padre = document.querySelector(padre ?? 'body');
        this._text = text;
        this.agregarCss();
        if (this._padre) {
            this.renderTitle();
        } else {
            console.error(`No se encontró el elemento con el selector '${padre}'`);
        }
    }


    agregarCss(){
        const style = document.createElement('style');
        style.textContent = `
        
        .title-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
            font-size: 2.6em;
            font-weight: bolder;
            letter-spacing: 10px;
            color: orange;
        }

        .animated-title {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(100%);
            animation: slideIn 1s forwards;
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
            // document.head.appendChild(style);
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