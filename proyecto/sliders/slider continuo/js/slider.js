//importamos obj.js

import  { galeria } from './obj.js';

//Creando nuevo objeto de galeria para agregar imágenes

const nuevaGaleria = new galeria(
    './img/Abadango Cluster Princess.jpeg',//corresponde a img1
    './img/Abradolf Lincler.jpeg',//corresponde a img1
    './img/Adjudicator Rick.jpeg',//corresponde a img2
    './img/Agency Director.jpeg',//corresponde a img3
    './img/Alan Rails.jpeg',//corresponde a img4
    './img/Aqua Morty.jpeg',//corresponde a img5
    './img/Beth Smith.jpeg',//corresponde a img6
    './img/Jerry Smith.png',//corresponde a img7
    './img/Morty Smith.png',//corresponde a img8
    './img/Rick Sanchez.jpeg',//corresponde a img9
    './img/Summer Smith.jpeg'//corresponde a img10
)

nuevaGaleria.agregarAlFront();//llamamos función para agregar al front

/*clona galería de imágenes, para simular un efecto continuo e infinito*/
const copy = document.querySelector('.img-slide').cloneNode(true);
document.querySelector('.contenedor').appendChild(copy);

