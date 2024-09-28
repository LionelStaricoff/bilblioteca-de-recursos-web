import { util } from '../utils.js';

export class BotonFX {
    constructor(padre, texto, colorFondo, colorHover, colorTexto, iconoUrl) {
        this._padre = (document.querySelector(padre)) ? document.querySelector(padre) : document.querySelector('body');
        this._texto = texto ?? 'Guardar';
        this._colorFondo = colorFondo ?? 'green' ;
        this._colorHover = colorHover ?? 'blue';
        this._colorTexto = colorTexto ?? 'white';
        this._iconoUrl = iconoUrl ?? null;

        if(!util.verificarCss('.botonFX')) this.agregarCss();
        this.crearBtnFX();
    }
    
    agregarCss(){
        const head = document.querySelector('head');
        const style = document.createElement('style');
        style.innerText = `
        .botonFX {
            width: 150px;
            height: 50px;
            background-color: ${this._colorFondo};
            color: ${this._colorTexto};
            font-size: 18px;
            font-weight: bold;
            border: 3px outset ${this._colorFondo};
            cursor: pointer;
            border-radius: 25px;
            box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.6);
            position: relative;
            overflow: hidden;
            display: grid;
            place-content: center;
            transition: transform 0.3s ease;
        }

        .botonFX span {
            z-index: 2;
            display: grid;
            place-content: center;
            grid-auto-flow: column;
        }

        .botonFX img {
            width: 24px;
            height: 24px;
        }

        .botonFX::after {
            content: "";
            width: 100%;
            position: absolute;
            z-index: 1;
            top: 0;
            left: calc(-100% - 50px);
            border-bottom: 50px solid ${this._colorHover};
            border-right: 50px solid transparent;
            transition: 0.4s ease-in-out all;
        }

        .botonFX:hover::after {
            left: 0;
        }

        .botonFX:hover span a {
            color: ${this._colorTexto};
        }

        .botonFX:hover img {
            filter: invert(100%);
        }

        .botonFX:active {
            transform: scale(0.9);
        }`

                head.appendChild(style);
            }

    crearBtnFX(){
        // Crea el botón
        this.boton = document.createElement('button');
        this.boton.classList.add('botonFX');
        
        // Crea el texto del botón
        const span = document.createElement('span');
        const a = document.createElement('a');
        a.href = '#';
        a.innerHTML = `${this._texto}`;
        
        // Añade ícono si está disponible
        if (this._iconoUrl) {
            const img = document.createElement('img');
            img.src = this._iconoUrl;
            a.appendChild(img); // Añade el icono junto al texto
        }
        
        span.appendChild(a);
        this.boton.appendChild(span);

        this._padre.appendChild(this.boton);
    }

    // Método para obtener el elemento del botón
    getElement() {
        return this.boton;
    }

  
}

