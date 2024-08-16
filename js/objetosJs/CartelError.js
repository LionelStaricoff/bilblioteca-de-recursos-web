export class CartelError {
    constructor(containerSelector = 'body', _errorMessage) {
        this.container = document.querySelector(containerSelector);
 
        this.agregarStyleCss();
        this.displayError(_errorMessage)
       // this.verificarCss()
    }

    displayError(errorMessage) {
        // console.error(errorMessage);
        const errorMessageElement = document.createElement('div');
        errorMessageElement.textContent = errorMessage ?? '¡Ouch! Hubo un error al cargar la información. Intenta más tarde.';
        errorMessageElement.classList.add('errorMessage');
     
        const x = document.createElement('span');
        x.id = 'span_cartelError'
        x.textContent = 'X';
        x.addEventListener('click',()=>this.eliminarCartel(errorMessageElement) )
        
        errorMessageElement.appendChild(x);
        this.container.appendChild(errorMessageElement);
    }

    agregarStyleCss() {
       // alert(this.agregarStyleCss())
     //  if( this.agregarStyleCss() ){
        const head = document.querySelector('head');
        const style = document.createElement('style');
        style.id = 'carltelError';
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
      // }
    }
    verificarCss(){
     
        let css = document.querySelectorAll('style');
        css = css.Node
        console.dir(css)
        console.log(css.some(c => c.id == 'carltelError'))
       //const style = css.filter(c => c.id == 'carltelError')
        //return css != undefined;
    }
    eliminarCartel(_padre){
        const padre = _padre.parentNode;
        padre.removeChild(_padre)

    }
}
