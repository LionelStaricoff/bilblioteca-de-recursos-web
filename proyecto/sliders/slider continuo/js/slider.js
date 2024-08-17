//importamos obj.js

import  { galeria } from './obj.js';

//Creando nuevo objeto de galeria para agregar imágenes

const nuevaGaleria = new galeria(
    './img/objetos/imgSliders/img01.jpeg',//corresponde a img1
    './img/objetos/imgSliders/img02.jpeg',//corresponde a img2
    '../img/objetos/imgSliders/img03.jpeg',//corresponde a img3
    './img/objetos/imgSliders/img04.jpeg',//corresponde a img4
    './img/objetos/imgSliders/img05.jpeg',//corresponde a img5
    './img/objetos/imgSliders/img06.jpeg',//corresponde a img6
    './img/objetos/imgSliders/img07.jpeg',//corresponde a img7
    './img/objetos/imgSliders/img08.png',//corresponde a img8
    './img/objetos/imgSliders/img09.png',//corresponde a img9
    './img/objetos/imgSliders/img10.jpeg',//corresponde a img10RickSanchez
    './img/objetos/imgSliders/img11.jpeg'//corresponde a img11 Summer smith
)

nuevaGaleria.agregarAlFront();//llamamos función para agregar al front

/*clona galería de imágenes, para simular un efecto continuo e infinito*/
const copy = document.querySelector('.img-slide').cloneNode(true);
document.querySelector('.contenedor').appendChild(copy);

