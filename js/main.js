import {crearLoader} from './objetosJs/Loader2.js';
//import { librerias } from './libreria.js';
import { CrearMenu, Item } from './objetosJs/menu1.js';
import { CrearSlider } from './objetosJs/slider1.js';
import { CrearSlider2 } from './objetosJs/slider2.js';
import { CrearSlider3 } from './objetosJs/slider3.js';

export class loader1 extends crearLoader{};

export class menu1 extends CrearMenu{};

export class menuItem extends Item{};

export class slider1 extends CrearSlider{};

export class slider2 extends CrearSlider2{};

export class slider3 extends CrearSlider3{};

//new loader1('#ej-contenedor')

//const obj = librerias[0].ejemplos.href;

//console.log('librerias: '+ obj.ht)
//librerias.forEach(l => console.l(l.ejemplos.href))