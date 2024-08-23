import {crearLoader} from './objetosJs/Loader2.js';
//import { librerias } from './libreria.js';
import { CrearMenu, Item } from './objetosJs/menu1.js';
import { CrearMenuVertical } from './objetosJs/menu2.js';
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



export class loader1 extends crearLoader{};

export class menu1 extends CrearMenu{};

export class menu2 extends CrearMenuVertical{};

export class menuItem extends Item{};

export class slider1 extends CrearSlider{};

export class slider2 extends CrearSlider2{};

export class slider3 extends CrearSlider3{};

export class slider4 extends CrearSlider4{};

export class modo1 extends CrearObjeto1{};

export class modo2 extends CrearObjeto2{};

export class modo3 extends CrearObjeto3{};

export class login extends cartelLogin{};

export class cartelDosBotones extends cartelBbdd{};

export class ModalError extends CartelError{};


//new loader1('#ej-contenedor')

//const obj = librerias[0].ejemplos.href;

//console.log('librerias: '+ obj.ht)
//librerias.forEach(l => console.l(l.ejemplos.href))