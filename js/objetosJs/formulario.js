import {util} from '../utils.js'

export class Formulario {

    constructor({father, whatsApp, photo, 
        colorBtn, backgroundInput,backgroundForm,
        placeholder_name1 = undefined,
        placeholder_name2 = undefined,
        placeholder_name3 = undefined,
        placeholder_name4 = undefined,
        nameBtn,
        functionBtn}
    ) {
        this._whatsApp = whatsApp ?? '';
        this._foto = photo;
        this._colorBtn = colorBtn ?? 'grey';
        this._backgroundInput = backgroundInput ?? 'whitesmoke';
        this._backgroundForm = backgroundForm ?? '#333'
        this.placeholders = [placeholder_name1, placeholder_name2, placeholder_name3, placeholder_name4];
        this._padre = (document.querySelector(father)) ? document.querySelector(father) : document.querySelector('body');
        this._fondo = document.createElement('div');
        this._fondo.id = 'formulario';
        this._button = document.createElement('button');
        this._button.innerText = nameBtn ?? 'Enviar'
        this._button.addEventListener('click', () => this.enviarMensaje())
        this._x = document.createElement('button');
        this._x.innerText = "X";
        this._x.addEventListener('click', () => this._padre.removeChild(this._fondo));
        this._functionBtn = functionBtn;

    }

    unaPersona() {
        if(!util.verificarCss('#formulario') ) this.crearCss();
        const input = document.createElement('input');
        input.placeholder = this.placeholders[0] ?? 'Nombre completo'
        this._fondo.append(this._x, input, this._button)
        this._padre.appendChild(this._fondo)
    }

    dosPersonas() {
        if(!util.verificarCss('#formulario') ) this.crearCss2();
        const input = document.createElement('input');
        input.placeholder = this.placeholders[0] ?? 'Nombre completo';
        const input2 = document.createElement('input');
        input2.placeholder = this.placeholders[1] ?? 'Nombre completo'
        this._fondo.append(this._x, input, input2, this._button)
        this._padre.appendChild(this._fondo)
    }

    tresPersonas() {
        if(!util.verificarCss('#formulario') ) this.crearCss3();
        const input = document.createElement('input');
        input.placeholder = this.placeholders[0] ?? 'Nombre completo';
        const input2 = document.createElement('input');
        input2.placeholder = this.placeholders[1] ?? 'Nombre completo';
        const input3 = document.createElement('input');
        input3.placeholder = this.placeholders[2] ?? 'Nombre completo';
        this._fondo.append(this._x, input, input2, input3, this._button)
        this._padre.appendChild(this._fondo)
    }

    cuatroPersonas() {
        if(!util.verificarCss('#formulario') ) this.crearCss4();
        const input = document.createElement('input');
        input.placeholder = this.placeholders[0] ?? 'Nombre completo';
        const input2 = document.createElement('input');
        input2.placeholder = this.placeholders[1] ?? 'Nombre completo';
        const input3 = document.createElement('input');
        input3.placeholder = this.placeholders[2] ?? 'Nombre completo';
        const input4 = document.createElement('input');
        input4.placeholder = this.placeholders[3] ?? 'Nombre completo';
        this._fondo.append(this._x, input, input2, input3, input4, this._button)
        this._padre.appendChild(this._fondo)
    }

    enviarMensaje() {

        if( typeof this._functionBtn == 'function'){
            this._functionBtn();
        }else{
        const numero = this._whatsApp;
        let mensaje = '';
        const inputs = document.querySelectorAll("input");
        inputs.forEach(f => mensaje += ' ' + f.value);

        const mensajeCodificado = encodeURIComponent(`confirmo invitacion ${mensaje}`);


        const enlaceWhatsApp = `https://wa.me/${numero}?text=${mensajeCodificado}`;


        globalThis.open(enlaceWhatsApp);
        }
    }

    crearCss() {
        const head = document.head;
        const style = document.createElement('style');
        style.innerText = `
        #formulario {
    position: fixed;
    z-index: 2;
    width: min(20em, 100%);
    height: auto;
    border-radius: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url('${this._foto}');
      background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     background-color: ${this._backgroundForm};

    display: grid;
    justify-content: space-around;
    text-align: center;
    place-items: center;
    gap: 20px;

    border: solid 3px #333;
    

    button:nth-child(1) {
        height: fit-content;
        width: fit-content;
        font-size: 2.2em;
        font-weight: 200;
        position: relative;
        transform: translate(100px, 0px);
        background-color: inherit;
        color: ${this._colorBtn};
        border: none;
        background-color: transparent;

        &:hover {
            font-weight: 200;
        }
    }

    input:nth-child(2) {
        text-align: center;
        border-radius: 12px;
        padding: 0.5em;
        font-size: 1.2em;
        height: 48px;
        width: 200px;
        color: ${this._colorBtn};
        background-color: ${this._backgroundInput};
    }

    button:nth-child(3) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: ${this._colorBtn};
        padding: 0.5em;
        font-size: 1.5em;
        border-radius: 12px;
        height: 48px;
        width: 200px;
        box-shadow: 1px 1px 1px 1px ${this._backgroundInput};
        margin-bottom: 1em;

    }
}
        `

        head.appendChild(style);
    }

    crearCss2() {
        const head = document.head;
        const style = document.createElement('style');
        style.innerText = `
        #formulario {
    position: fixed;
    z-index: 2;
    width: min(20em, 100%);
    height: auto;
border-radius: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

       background-image: url('${this._foto}');
      background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     background-color: ${this._backgroundForm};

    display: grid;
    justify-content: space-around;
    text-align: center;
    place-items: center;
    gap: 20px;
 
    border: solid 3px #333;
    

    button:nth-child(1) {
        height: fit-content;
        width: fit-content;
        font-size: 2.2em;
        font-weight: 200;
        position: relative;
        transform: translate(100px, 0px);
        background-color: inherit;
         color: ${this._colorBtn};
        border: none;
        background-color: transparent;

        &:hover {
            font-weight: 200;
        }
    }

    input:nth-child(2), input:nth-child(3) {
        text-align: center;
        border-radius: 12px;
        padding: 0.5em;
        font-size: 1.2em;
        height: 48px;
        width: 200px;
        color: ${this._colorBtn};
        background-color: ${this._backgroundInput};
      
    }

    button:nth-child(4) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: ${this._colorBtn};
        padding: 0.5em;
        font-size: 1.5em;
        border-radius: 12px;
        height: 48px;
        width: 200px;
        box-shadow: 1px 1px 1px 1px ${this._backgroundInput};
        margin-bottom: 1em;
    }
}
        `

        head.appendChild(style);
    }

    crearCss3() {
        const head = document.head;
        const style = document.createElement('style');
        style.innerText = `
     #formulario {
    position: fixed;
    z-index: 2;
    width: min(20em, 100%);
    height: auto;
    border-radius: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url('${this._foto}');
      background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     background-color:${this._backgroundForm};

    display: grid;
    justify-content: space-around;
    text-align: center;
    place-items: center;
    gap: 20px;

    border: solid 3px #333;
    

    button:nth-child(1) {
        height: fit-content;
        width: fit-content;
        font-size: 2.2em;
        font-weight: 200;
        position: relative;
        transform: translate(100px, 0px);
        background-color: inherit;
        color: ${this._colorBtn};
        border: none;
        background-color: transparent;

        &:hover {
            font-weight: 200;
        }
    }

    input:nth-child(2), input:nth-child(3), input:nth-child(4) {
        text-align: center;
        border-radius: 12px;
        padding: 0.5em;
        font-size: 1.2em;
        height: 48px;
        width: 200px;
        color: ${this._colorBtn};
        background-color: ${this._backgroundInput};
   
    }

    button:nth-child(5) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: ${this._colorBtn};
        margin-bottom: 20px;
        font-size: 1.5em;
        border-radius: 12px;
        height: 48px;
        width: 200px;
        box-shadow: 1px 1px 1px 1px ${this._backgroundInput};
        margin-bottom: 1em;
    }
}
      

        `

        head.appendChild(style);
    }

    crearCss4() {
        const head = document.head;
        const style = document.createElement('style');
        style.innerText = `
     #formulario {
    position: fixed;
    z-index: 2;
    width: min(20em, 100%);
    height: auto;
    border-radius: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url('${this._foto}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${this._backgroundForm};

    display: grid;
    justify-content: space-around;
    text-align: center;
    place-items: center;
    gap: 20px;

    border: solid 3px #333;
    

    button:nth-child(1) {
        height: fit-content;
        width: fit-content;
        font-size: 2.2em;
        font-weight: 300;
        position: relative;
        transform: translate(100px, 0px);
        background-color: inherit;
        color: ${this._colorBtn};
        border: none;
        background-color: transparent;

        &:hover {
            font-weight: 200;
        }
    }
  

    input:nth-child(2), input:nth-child(3), input:nth-child(4), input:nth-child(5) {
        text-align: center;
        border-radius: 12px;
        padding: 0.5em;
        font-size: 1.2em;
        color: ${this._colorBtn};
        background-color: ${this._backgroundInput};
        height: 48px;
        width: 200px;
    }

    button:nth-child(6) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: ${this._colorBtn};
         margin-bottom: 20px;
        font-size: 1.5em;
        border-radius: 12px;
        border: 1px solid ${this._colorBtn};
        height: 48px;
        width: 200px;
        box-shadow: 1px 1px 1px 1px ${this._backgroundInput};
        margin-bottom: 2em;
    }
}
      

        `

        head.appendChild(style);
    }

}