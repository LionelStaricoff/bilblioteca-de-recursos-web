import {VerificarCss} from '../main.js'

export default class Contador {

    /**
     * Clase para armar un conteo regresivo.
     * @param {*} _padre :Debemos agregar un #id o .class.
     * @param {*} _año : debemos colocar un numero de año desde el actual en adelante.
     * @param {*} _mes :debemos colocar un numero de mes desde el 1 al 12.
     * @param {*} _dia :debemos colocar un numero de dia válido desde el 1 al 31 verificando que el mes cumpla con eso.
     * @param {*} _horas :debemos colocar un numero de hora válida desde el 0 al 24.
     */
    constructor(_padre, _año, _mes, _dia,_horas) {
        this.padre = _padre ?? 'body';
        this.año = _año;
        this.mes = _mes -1;
        this.dia = _dia;
        this.horas = _horas;
       globalThis.timer = new Date(this.año,this.mes,this.dia,this.horas);
     
      if(!VerificarCss('.contador'))  this.armarCss();
        this.armarHTml();
       
    }
    armarHTml() {
        const section_cuarto = document.querySelector(this.padre);

        const contador = document.createElement('div')
        contador.classList = 'contador';
        contador.innerHTML = `

            <span class="counter"></span>
            <span class="counter"></span>
            <span class="counter"></span>
            <span class="counter"></span>

             <i>Días</i>
            <i>Horas</i>
            <i>Minutos</i>
            <i>Segundos</i>
`
        section_cuarto.appendChild(contador)
    }

    armarCss() {
        const style = document.createElement('style');
        style.innerText = `
    .contador {
    width: min(25em, 100%);
    height: 6em;
    border: solid 3px rgb(51, 51, 51, 0.8);
    margin: 0 auto;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 20px;
    place-content: center;
    justify-items: center;
   
  
    span {
  
      height:100%;
      width: 100%;
    font-size: 1.5em;
     @media(max-width: 400px){
        font-size: 100%;
    }
    }
    i{
        height:100%;
        width: 100%;
      font-size: 1.5em;
      @media(max-width: 400px){
        font-size: 100%;
    }
    }
  
  }
        `;

        document.head.appendChild(style);
    }

     
    static async calcularTiempoRestante() {
        const fechaObjetivo = new Date( globalThis.timer);
        const fechaActual = new Date();

        const diferencia = fechaObjetivo - fechaActual;
        const segundosRestantes = Math.floor(diferencia / 1000);

        const segundos = segundosRestantes % 60;
        const minutos = Math.floor(segundosRestantes / 60) % 60;
        const horas = Math.floor(segundosRestantes / 3600) % 24;
        const dias = Math.floor(segundosRestantes / 86400);

        return { dias, horas, minutos, segundos };
    }

    static async mostrarContador() {
        const tiempoRestante = await Contador.calcularTiempoRestante();
        const spans = document.querySelectorAll('.counter')

        if(tiempoRestante.segundos >=0){
        spans[0].innerText = tiempoRestante.dias;
        spans[1].innerText = tiempoRestante.horas;
        spans[2].innerText = tiempoRestante.minutos;
        spans[3].innerText = tiempoRestante.segundos;
            }else{
                spans[0].innerText = 0;
                spans[1].innerText = 0;
                spans[2].innerText = 0;
                spans[3].innerText = 0;
            }    }


}