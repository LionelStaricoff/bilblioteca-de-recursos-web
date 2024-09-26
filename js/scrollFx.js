import {VerificarCss} from './main.js';


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

        if(!VerificarCss('.aparecer'))  agregarCss();

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