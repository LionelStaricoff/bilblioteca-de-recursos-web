export class CartelError {
    constructor(containerSelector = 'body', _errorMessage) {
        this.container = document.querySelector(containerSelector);

       if(!this.verificarCss('.errorMessage') )  this.agregarStyleCss();
        this.displayError(_errorMessage)
    
    }

    displayError(errorMessage) {
      
        const errorMessageElement = document.createElement('div');
        errorMessageElement.textContent = errorMessage ?? '¡Ouch! Hubo un error al cargar la información. Intenta más tarde.';
        errorMessageElement.classList.add('errorMessage');

        const x = document.createElement('span');
        x.textContent = 'X';
        x.id = 'span_cartelError'
        x.addEventListener('click', () => this.eliminarCartel(errorMessageElement))

        errorMessageElement.appendChild(x);
        this.container.appendChild(errorMessageElement);
    }

    agregarStyleCss() {
       
      
        const head = document.querySelector('head');
        const style = document.createElement('style');
      
        style.innerText = `.errorMessage {
    width: 10em;
    background-color: #f2bfbf;
    color: #ff0000;
    padding: 10px;
    padding-top: 1em;
    border: 3px double #ff0000;
    border-radius: 10px;
    font-size: 1.1rem;
    text-align: center;
    margin: auto;
    margin-top: 60px;
    animation: desliza 0.5s ease-in-out;
    position: relative;
    span{
        width: 1em;
        height: 1em;
        color: #333;
        position: absolute;
        top: 0;
        right: 0;
       font-weight: bolder;
       &:hover{
        transform:scale(.9) ;
        color: red
       }
    }
}

@keyframes desliza {
    0% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    100% { transform: translateX(-10px); }
}
`

        head.appendChild(style);
       
   
    }
    verificarCss(_mensaje) {

      return  ( (mensaje)=> {
            const hojasDeEstilo = document.styleSheets;
          
            for (const hoja of hojasDeEstilo) {
              try {
                const reglas = hoja.cssRules || hoja.rules;
                if (reglas) {
                  for (const regla of reglas) {
                    if (regla.selectorText && regla.selectorText.includes(`${mensaje}`)) {
                      return true;
                    }
                  }
                }
              } catch (error) {
              //  console.error('Error al acceder a las reglas de la hoja de estilo:', error);
              }
            }
          
            //console.log('La regla .errorMessage no se encontró en ninguna hoja de estilo.');
            return false;
          })(_mensaje)
          
      
    }
    eliminarCartel(_padre) {
        const padre = _padre.parentNode;
        padre.removeChild(_padre)

    }
}