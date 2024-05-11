export class CartelError {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
    }

    displayError(errorMessage) {
        console.error(errorMessage);
        const errorMessageElement = document.createElement('div');
        errorMessageElement.textContent = '¡Ouch! Hubo un error al cargar la información. Intenta más tarde.';
        errorMessageElement.classList.add('errorMessage');
        this.container.appendChild(errorMessageElement);
    }
}

export class ColorearHtml {
    constructor() {
        this.menor = 'gray';
        this.div = 'blue';
        this.section = 'cyan';
        this.button = 'palevioletred';
        this.main = 'yellow';
        this.header = 'yellow';
        this.footer = 'yellow';
        this.H1 = 'yellowgreen';
        this.H2 = 'yellowgreen';
        this.H3 = 'yellowgreen';
        this.H4 = 'yellowgreen';
        this.H5 = 'yellowgreen';
        this.H6 = 'yellowgreen';

        this.reemplazar();
    }

    reemplazar() {
        document.addEventListener('DOMContentLoaded', () => {
            const codigoHtml = document.querySelectorAll('.colorear');
            codigoHtml.forEach(c => this.colorear(c));

        });
    }

    colorear(codigoHtml) {
        codigoHtml.style.backgroundColor = "#333333";
        codigoHtml.style.padding = '1em';
        codigoHtml.style.color  = 'gainsboro';
 
        const contenido = codigoHtml.innerHTML;

        const contenidoModificado = contenido
   
        
        //.replace( /<[^>]*>/g,`<L style="color: ${this.header};">`+/<[^>]*>/g`</L>`)
        .replace(/ >/g, `<L style="color: ${this.header};">&gt; </L>`)
        .replace(/">/g, `<L style="color: ${this.header};">"&gt; </L>`)
        .replace(/id="/g, `<L style="color: ${this.header};">id=" </L>`)
        .replace(/class="/g, `<L style="color: ${this.header};">class=" </L>`)
       
        //.replace(/<footer>(.*?)<\/footer>/g, '<footer style="color: ' + this.footer + ';">$1</footer>')
            .replace(/<header/g, `<L style="color: ${this.header};">&lt;header</L>`)
            .replace(/<\/header>/g, `<L style="color: ${this.header};">&lt;/header&gt;<br> </L>`)
            .replace(/<section/g, `<L style="color: ${this.section};">&lt;section</L>`)
            .replace(/<\/section>/g, `<L style="color: ${this.section};">&lt;/section&gt;<br> </L>`)
            .replace('<div', `<L style="color: ${this.div};">&lt;div</L>`)
            .replace('</div>', `<L style="color: ${this.div};">&lt;/div&gt;<br> </L>`)
            .replace('<button', `<L style="color: ${this.button};">&lt;button</L>`)
            .replace('</button>', `<L style="color: ${this.button};">&lt;/button&gt;<br> </L>`)
            .replace('<main', `<L style="color: ${this.main};">&lt;main</L>`)
            .replace('</main>', `<L style="color: ${this.main};">&lt;/main&gt;<br> </L>`)
            .replace(/<footer/g, `<L style="color: ${this.footer};">&lt;footer&gt;</L>`)
            .replace(/<\/footer>/g, `<L style="color: ${this.footer};">&lt;/footer&gt;<br> </L>`)
            .replace('<H1>', `<L style="color: ${this.H1};">&lt;H1&gt;</L>`)
            .replace('</H1>', `<L style="color: ${this.H1};">&lt;/H1&gt;<br> </L>`)
            .replace('<h1>', `<L style="color: ${this.H1};">&lt;h1&gt;</L>`)
            .replace('</h1>', `<L style="color: ${this.H1};">&lt;/h1&gt;<br> </L>`)
            .replace('<H2>', `<L style="color: ${this.H2};">&lt;H2&gt;</L>`)
            .replace('</H2>', `<L style="color: ${this.H2};">&lt;/H2&gt;<br> </L>`)
            .replace('<h2>', `<L style="color: ${this.H2};">&lt;h2&gt;</L>`)
            .replace('</h2>', `<L style="color: ${this.H2};">&lt;/h2&gt;<br> </L>`)
            .replace('<H3>', `<L style="color: ${this.H3};">&lt;H3&gt;</L>`)
            .replace('</H3>', `<L style="color: ${this.H3};">&lt;/H3&gt;<br> </L>`)
            .replace('<h3>', `<L style="color: ${this.H3};">&lt;h3&gt;</L>`)
            .replace('</h3>', `<L style="color: ${this.H3};">&lt;/h3&gt;<br> </L>`)
            .replace('<h4>', `<L style="color: ${this.H4};">&lt;h4&gt;</L>`)
            .replace('</h4>', `<L style="color: ${this.H4};">&lt;/h4&gt;<br> </L>`)
            .replace('<H4>', `<L style="color: ${this.H4};">&lt;H4&gt;</L>`)
            .replace('<H4>', `<L style="color: ${this.H4};">&lt;/H4&gt;<br> </L>`)
            .replace('<h5>', `<L style="color: ${this.H5};">&lt;h5&gt;</L>`)
            .replace('</h5>', `<L style="color: ${this.H5};">&lt;/h5&gt;<br> </L>`)
            .replace('<H5>', `<L style="color: ${this.H5};">&lt;H5&gt;</L>`)
            .replace('</H5>', `<L style="color: ${this.H5};">&lt;/H5&gt;<br> </L>`)
            .replace('<h6>', `<L style="color: ${this.H6};">&lt;h6&gt;</L>`)
            .replace('</h6>', `<L style="color: ${this.H6};">&lt;/h6&gt;<br> </L>`)
            .replace('<H6>', `<L style="color: ${this.H6};">&lt;H6&gt;</L>`)
            .replace('<H6>', `<L style="color: ${this.H6};">&lt;/H6&gt;<br> </L>`)

            
            ;

        codigoHtml.innerHTML = contenidoModificado;
    }

}

//Botón para ir al inicio desde cualquier sección
// Función para volver al inicio de la página
function volverArriba() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}




// Función para controlar la visibilidad del botón de volver arriba
window.onscroll = function() {
    // Verifica la posición de desplazamiento
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Si se ha desplazado lo suficiente, muestra el botón
        document.getElementById("btnVolverArriba").style.display = "block";
    } else {
        // Si no se ha desplazado lo suficiente, oculta el botón
        document.getElementById("btnVolverArriba").style.display = "none";
    }
};
volverArriba();

// Event listener para el botón de volver arriba
btnVolverArriba.addEventListener("click", function() {
    // Ejecuta la transición suave
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 4000);
  });