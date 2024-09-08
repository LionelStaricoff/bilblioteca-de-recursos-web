
export class Formulario {

    constructor(father, whatsApp,photo,
        placeholder_name1 = undefined,
        placeholder_name2 = undefined,
        placeholder_name3 = undefined,
        placeholder_name4 = undefined) {
        this._whatsApp = whatsApp ?? '';
        this._foto = photo;
        this.placeholders = [placeholder_name1,placeholder_name2,placeholder_name3,placeholder_name4];
        this._padre = (document.querySelector(father)) ? document.querySelector(father) : document.querySelector('body');
        this._fondo = document.createElement('div');
        this._fondo.id = 'formulario';
        this._button = document.createElement('button');
        this._button.innerText = 'Enviar'
        this._button.addEventListener('click', () => this.enviarMensaje())
        this._x = document.createElement('button');
        this._x.innerText = "X";
        this._x.addEventListener('click', () => this._padre.removeChild(this._fondo));

    }

    unaPersona() {
        this.crearCss();
        const input = document.createElement('input');
        input.placeholder = this.placeholders[0] ?? 'Nombre completo'
        this._fondo.append(this._x, input, this._button)
        this._padre.appendChild(this._fondo)
    }

    dosPersonas() {
        this.crearCss2();
        const input = document.createElement('input');
        input.placeholder = this.placeholders[0] ?? 'Nombre completo';
        const input2 = document.createElement('input');
        input2.placeholder = this.placeholders[1] ?? 'Nombre completo'
        this._fondo.append(this._x, input, input2, this._button)
        this._padre.appendChild(this._fondo)
    }

    tresPersonas() {
        this.crearCss3();
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
        this.crearCss4();
        const input = document.createElement('input');
        input.placeholder = this.placeholders[0] ?? 'Nombre completo';
        const input2 = document.createElement('input');
        input2.placeholder = this.placeholders[1] ??'Nombre completo';
        const input3 = document.createElement('input');
        input3.placeholder = this.placeholders[2] ??'Nombre completo';
        const input4 = document.createElement('input');
        input4.placeholder = this.placeholders[3] ?? 'Nombre completo';
        this._fondo.append(this._x, input, input2, input3, input4, this._button)
        this._padre.appendChild(this._fondo)
    }

    enviarMensaje() {
        const numero = this._whatsApp;
        let mensaje = '';
        const inputs = document.querySelectorAll("input");
        inputs.forEach(f => mensaje += ' ' + f.value);

        const mensajeCodificado = encodeURIComponent(`confirmo invitacion ${mensaje}`);


        const enlaceWhatsApp = `https://wa.me/${numero}?text=${mensajeCodificado}`;


        globalThis.open(enlaceWhatsApp);
    }

    crearCss() {
        const head = document.head;
        const style = document.createElement('style');
        style.innerText = `
        #formulario {
    position: fixed;
    z-index: 2;
    width: min(20em, 100%);
    height: min(30em, 100%);
border-radius: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url('${this._foto}');
      background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     background-color: #333;

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
        font-weight: bolder;
        position: relative;
        transform: translate(100px, 0px);
        background-color: inherit;
        color: rgb(211, 21, 21);
        border: none;
        background-color: transparent;

        &:hover {
            font-weight: 200;
        }
    }

    input:nth-child(2) {
        text-align: center;
        border-radius: 15px;
        padding: 0.5em;
        font-size: 1.2em;
    }

    button:nth-child(3) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: whitesmoke;
        padding: 0.5em;
        font-size: 1.5em;
        border-radius: 15px;

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
    height: min(30em, 100%);
border-radius: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

       background-image: url('${this._foto}');
      background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     background-color: #333;

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
        font-weight: bolder;
        position: relative;
        transform: translate(100px, 0px);
        background-color: inherit;
        color: rgb(211, 21, 21);
        border: none;
        background-color: transparent;

        &:hover {
            font-weight: 200;
        }
    }

    input:nth-child(2), input:nth-child(3) {
        text-align: center;
        border-radius: 15px;
        padding: 0.5em;
        font-size: 1.2em;
    }

    button:nth-child(4) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: whitesmoke;
        padding: 0.5em;
        font-size: 1.5em;
        border-radius: 15px;

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
    height: min(30em, 100%);
border-radius: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url('${this._foto}');
      background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     background-color: #333;

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
        font-weight: bolder;
        position: relative;
        transform: translate(100px, 0px);
        background-color: inherit;
        color: rgb(211, 21, 21);
        border: none;
        background-color: transparent;

        &:hover {
            font-weight: 200;
        }
    }

    input:nth-child(2), input:nth-child(3), input:nth-child(4) {
        text-align: center;
        border-radius: 15px;
        padding: 0.5em;
        font-size: 1.2em;
    }

    button:nth-child(5) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: whitesmoke;
        padding: 0.5em;
        font-size: 1.5em;
        border-radius: 15px;

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
    height: min(30em, 100%);
border-radius: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

     background-image: url('${this._foto}');
      background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     background-color: #333;

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
        font-weight: bolder;
        position: relative;
        transform: translate(100px, 0px);
        background-color: inherit;
        color: rgb(211, 21, 21);
        border: none;
        background-color: transparent;

        &:hover {
            font-weight: 200;
        }
    }

    input:nth-child(2), input:nth-child(3), input:nth-child(4), input:nth-child(5) {
        text-align: center;
        border-radius: 15px;
        padding: 0.5em;
        font-size: 1.2em;
    }

    button:nth-child(6) {
        height: fit-content;
        width: fit-content;
        background-color: rgb(51, 51, 51, 20%);
        color: whitesmoke;
        padding: 0.5em;
        font-size: 1.5em;
        border-radius: 15px;

    }
}
      

        `

        head.appendChild(style);
    }

}