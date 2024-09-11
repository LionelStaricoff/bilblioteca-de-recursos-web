import { crearLoader } from './objetosJs/Loader2.js';
//import { librerias } from './libreria.js';
import { CrearMenu, Item } from './objetosJs/menu1.js';
import { CrearSlider } from './objetosJs/slider1.js';
import { CrearSlider2 } from './objetosJs/slider2.js';
import { CrearSlider3 } from './objetosJs/slider3.js';
import { CrearSlider4 } from './objetosJs/slider4.js';
import { CrearObjeto1 } from './objetosJs/modo1.js';
import { CrearObjeto2 } from './objetosJs/modo2.js';
import { CrearObjeto3 } from './objetosJs/modo3.js';
import { cartelLogin } from './objetosJs/cartelLogin.js';
import { cartelBbdd } from './objetosJs/cartelBbdd.js';
import { CartelError } from './objetosJs/CartelError.js';
import { Notificacion } from './objetosJs/CartelNotificacion.js';
import { CrearTextoFX01 } from './objetosJs/TextoFX01.js';
import { Formulario } from './objetosJs/formulario.js';




export class TextoFX01 extends CrearTextoFX01 { };

export class loader1 extends crearLoader { };

export class menu1 extends CrearMenu { };

export class menuItem extends Item { };

export class slider1 extends CrearSlider { };

export class slider2 extends CrearSlider2 { };

export class slider3 extends CrearSlider3 { };

export class slider4 extends CrearSlider4 { };

export class modo1 extends CrearObjeto1 { };

export class modo2 extends CrearObjeto2 { };

export class modo3 extends CrearObjeto3 { };

export class login extends cartelLogin { };

export class cartelDosBotones extends cartelBbdd { };

export class ModalError extends CartelError { };

export class CartelNotificacion extends Notificacion { };

export class formularioWsatsApp1 extends Formulario {
    constructor({ father: _father, whatsApp: _whatsApp, photo: _photo, 
        colorBtn: _colorBtn, backgroundInput: _backgroundInput,
         backgroundForm: _backgroundForm, placeholder_name1: _placeholder_name1 = undefined,
          nameBtn: _nameBtn, functionBtn: _functionBtn }) {
        const objform = {
            father:_father,whatsApp: _whatsApp,
            photo: _photo, colorBtn: _colorBtn,
            backgroundInput: _backgroundInput,
            backgroundForm : _backgroundForm,
            placeholder_name1: _placeholder_name1,
            nameBtn: _nameBtn,functionBtn: _functionBtn
          }
        super(objform);
        this.unaPersona();
    }
};

export class formularioWsatsApp2 extends Formulario {
    constructor({ father, whatsApp, photo, colorBtn, backgroundInput, backgroundForm, placeholder_name1 = undefined, placeholder_name2 = undefined, placeholder_name3 = undefined, placeholder_name4 = undefined, nameBtn, functionBtn }) {
        super(father, whatsApp, photo, colorBtn, backgroundInput, backgroundForm, placeholder_name1, placeholder_name2, placeholder_name3, placeholder_name4, nameBtn, functionBtn);
        this.dosPersonas();
    }
};

export class formularioWsatsApp3 extends Formulario {
    constructor({ father, whatsApp, photo, colorBtn, backgroundInput, backgroundForm, placeholder_name1 = undefined, placeholder_name2 = undefined, placeholder_name3 = undefined, placeholder_name4 = undefined, nameBtn, functionBtn }) {
        super(father, whatsApp, photo, colorBtn, backgroundInput, backgroundForm, placeholder_name1, placeholder_name2, placeholder_name3, placeholder_name4, nameBtn, functionBtn);
        this.tresPersonas();
    }
};

export class formularioWsatsApp4 extends Formulario {
    constructor({ father, whatsApp, photo, colorBtn, backgroundInput, backgroundForm, placeholder_name1 = undefined, placeholder_name2 = undefined, placeholder_name3 = undefined, placeholder_name4 = undefined, nameBtn, functionBtn }) {
        super(father, whatsApp, photo, colorBtn, backgroundInput, backgroundForm, placeholder_name1, placeholder_name2, placeholder_name3, placeholder_name4, nameBtn, functionBtn);
        this.cuatroPersonas();
    }
};


//new loader1('#ej-contenedor')

//const obj = librerias[0].ejemplos.href;

//console.log('librerias: '+ obj.ht)
//librerias.forEach(l => console.l(l.ejemplos.href))

//new Notificacion('../img/emojis/mueca.png', '¡Ups, algún dato es incorrecto!', 'error');
