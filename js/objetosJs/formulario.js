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
        this._colorBtn = colorBtn ?? 'white';
        this._backgroundInput = backgroundInput ?? 'whitesmoke';
        this._backgroundForm = backgroundForm ?? 'DarkTurquoise'
        this.placeholders = [placeholder_name1, placeholder_name2, placeholder_name3, placeholder_name4];
        this._padre = (document.querySelector(father)) ? document.querySelector(father) : document.querySelector('body');
        this._fondo = document.createElement('div');
        this._fondo.id = 'formulario1';
        this._button = document.createElement('button');
        this._button.innerText = nameBtn ?? 'Enviar'
        this._button.addEventListener('click', () => this.enviarMensaje())
        this._x = document.createElement('button');
        this._x.innerText = "x";
        this._x.addEventListener('click', () => this._padre.removeChild(this._fondo));
        this._functionBtn = functionBtn;

    }

    unaPersona() {
        if(!util.verificarCss('#formulario1') ) this.crearCss();
        const input = document.createElement('input');
        input.placeholder = this.placeholders[0] ?? 'Nombre completo'
        this._fondo.append(this._x, input, this._button)
        this._padre.appendChild(this._fondo)
    }

    dosPersonas() {
        if(!util.verificarCss('#formulario2') ) this.crearCss2();
        this._fondo.id = 'formulario2';
        const input = document.createElement('input');
        input.placeholder = this.placeholders[0] ?? 'Nombre completo';
        const input2 = document.createElement('input');
        input2.placeholder = this.placeholders[1] ?? 'Nombre completo'
        this._fondo.append(this._x, input, input2, this._button)
        this._padre.appendChild(this._fondo)
    }

    tresPersonas() {
        if(!util.verificarCss('#formulario3') ) this.crearCss3();
        this._fondo.id = 'formulario3';
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
        if(!util.verificarCss('#formulario4') ) this.crearCss4();
        this._fondo.id = 'formulario4';
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
        #formulario1 {
    position: absolute;
    z-index: 2;
    width: min(20em, 100%);
    height: auto;
    border-radius: 25px;
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
    padding: 2em 0;

    button:nth-child(1) {
        height: fit-content;
        width: fit-content;
        font-size: 1.5em;
        font-weight: 200;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: rgba(0,0,0,0.1);
        color: ${this._colorBtn};
        border-radius: 25px;
        border:none;
        padding: 0.5px 10px 0.4px;
        cursor: pointer;

        &:hover {
            font-weight: 400;
        }
    }

    input:nth-child(2) {
        text-align: center;
        border-radius: 25px;
        padding: 0.1em;
        font-size: 1.2em;
        height: 48px;
        width: 95%;
        color: black;
        background-color: ${this._backgroundInput};
    }

    button:nth-child(3) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: ${this._colorBtn};
        padding: 0.5em;
        font-size: 1.2em;
        border-radius: 25px;
        height: 48px;
        width: 95%;
        box-shadow: -1px 1px 1px 1px grey;
        line-height: 100%;
        cursor: pointer;
    }
}
        `

        head.appendChild(style);
    }

    crearCss2() {
        const head = document.head;
        const style = document.createElement('style');
        style.innerText = `
        #formulario2 {
    position: absolute;
    z-index: 2;
    width: min(20em, 100%);
    height: auto;
    border-radius: 25px;
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
    padding: 2em 0;

    button:nth-child(1) {
        height: fit-content;
        width: fit-content;
        font-size: 1.5em;
        font-weight: 200;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: rgba(0,0,0,0.1);
        color: ${this._colorBtn};
        border-radius: 25px;
        border: none;
        padding: 0.5px 10px 0.4px;
        cursor: pointer;

        &:hover {
            font-weight: 400;
        }
    }

    input:nth-child(2), input:nth-child(3) {
        text-align: center;
        border-radius: 25px;
        padding: 0.1em;
        font-size: 1.2em;
        height: 48px;
        width: 95%;
        color: black;
        background-color: ${this._backgroundInput};
      
    }

    button:nth-child(4) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: ${this._colorBtn};
        padding: 0.5em;
        font-size: 1.2em;
        border-radius: 25px;
        height: 48px;
        width: 95%;
        box-shadow: -1px 1px 1px 1px grey;
        line-height: 100%;
        cursor: pointer;
    }
}
        `

        head.appendChild(style);
    }

    crearCss3() {
        const head = document.head;
        const style = document.createElement('style');
        style.innerText = `
     #formulario3 {
    position: absolute;
    z-index: 2;
    width: min(20em, 100%);
    height: auto;
    border-radius: 25px;
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
    padding: 2em 0;

    button:nth-child(1) {
        height: fit-content;
        width: fit-content;
        font-size: 1.5em;
        font-weight: 200;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: rgba(0,0,0,0.1);
        color: ${this._colorBtn};
        border-radius: 25px;
        border: none;
        padding: 0.5px 10px 0.4px;
        cursor: pointer;

        &:hover {
            font-weight: 200;
        }
    }

    input:nth-child(2), input:nth-child(3), input:nth-child(4) {
        text-align: center;
        border-radius: 25px;
        padding: 0.1em;
        font-size: 1.2em;
        height: 48px;
        width: 95%;
        color: black;
        background-color: ${this._backgroundInput};
   
    }

    button:nth-child(5) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: ${this._colorBtn};
        padding: 0.5em;
        font-size: 1.2em;
        border-radius: 25px;
        height: 48px;
        width: 95%;
        box-shadow: -1px 1px 1px 1px grey;
        line-height: 100%;
        cursor: pointer;
        
    }
}
      

        `

        head.appendChild(style);
    }

    crearCss4() {
        const head = document.head;
        const style = document.createElement('style');
        style.innerText = `
     #formulario4 {
    position: absolute;
    z-index: 2;
    width: min(20em, 100%);
    height: auto;
    border-radius: 25px;
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
    padding: 2em 0;

    button:nth-child(1) {
        height: fit-content;
        width: fit-content;
        font-size: 1.5em;
        font-weight: 200;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: rgba(0,0,0,0.1);
        color: ${this._colorBtn};
        border-radius: 25px;
        border:none;
        padding: 0.5px 10px 0.4px;
        cursor: pointer;

        &:hover {
            font-weight: 200;
        }
    }
  

    input:nth-child(2), input:nth-child(3), input:nth-child(4), input:nth-child(5) {
        text-align: center;
        border-radius: 25px;
        padding: 0.1em;
        font-size: 1.2em;
        height: 48px;
        width: 95%;
        color: black;
        background-color: ${this._backgroundInput};
    }

    button:nth-child(6) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: ${this._colorBtn};
        padding: 0.5em;
        font-size: 1.2em;
        border-radius: 25px;
        height: 48px;
        width: 95%;
        box-shadow: -1px 1px 1px 1px grey;
        line-height: 100%;
        cursor: pointer;
    }
}
      

        `

        head.appendChild(style);
    }

}