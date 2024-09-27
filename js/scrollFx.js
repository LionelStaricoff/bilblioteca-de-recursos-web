import {VerificarCss} from './main.js';

/**
 * @param {*} _elements : Este parámetro se utiliza para agarrar todos los componentes que se le aplicaran los efectos del scroll.
 * Puede ser un, id: #identificador, o una clase: .classFx.
 * 
 * @param {*} _classNameFx : Este parámetro corresponde únicamente al nombre de una clase que posea un efecto para realizar el scroll,
 *  el cual ya debería estar cargado con anterioridad, el cual tiene que ser pasado sin el punto de la clase y como un String, ejemplo: 'classFx'.
 */
export const scrollFx =  (_elements,_classNameFx) => {
   
    document.addEventListener("scroll", () => {
        
        const agregarCss = () => {
            const css = `
.desaparecer {
opacity: 1;
transform: scale(0.5);
transition: opacity 0.5s, transform 2s;
}

.aparecer {
opacity: 1;
transform: scale(1);
}

`;
            const style = document.createComment('style');
            style.innerText = css;
            document.head.appendChild(style);
        }

      if(!_classNameFx)  if(!VerificarCss('.aparecer')) agregarCss();

        const divs = document.querySelectorAll(_elements ?? ".desaparecer" );
        divs.forEach(div => {
            const rect = div.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight && rect.bottom >= 0) {
                div.classList.add(_classNameFx ?? "aparecer");
            } else {
                div.classList.remove(_classNameFx ?? "aparecer");
            }
        });
    })

}