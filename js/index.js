import { librerias } from './libreria.js';
import { util } from './utils.js';
import {CargarWebsInteres} from '../js/webInteres.js';
import {Formulario} from './objetosJs/formulario.js';

const f = new Formulario('.centro',null,null,'white')
  //,'542668','data:image/jpeg;base64,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'
  //,'nombre','apellido','dni','mensaje')
 // f.cuatroPersonas();
 //f.tresPersonas();
 //f.dosPersonas()
 f.unaPersona()

const iframe = document.querySelector("#iframe");
const ej = document.querySelector("#ej-contenedor");



document.getElementById('boton-copiar').addEventListener('click', function () {
  // const codigo = document.getElementById('codigo').innerText; // Obtener el texto del código
  const codigo = document.querySelector('.codigo').innerText; // Obtener el texto del código
  navigator.clipboard.writeText(codigo) // Escribir el texto en el portapapeles

    .then(() => {

      if (!codigo) {
        this.innerHTML += '<span>Sólo para copiar código</span>';
        setTimeout(() => {
          this.innerHTML = '<img src="img/iconos/copiar.png" alt="Copiar Código" width="20px" height="20px" title="Copiar código">';
        }, 3000);
      } else {

        this.innerHTML += '<span>Código copiado</span>';
        setTimeout(() => {
          this.innerHTML = '<img src="img/iconos/copiar.png" alt="Copiar Código" width="20px" height="20px" title="Copiar código">';
        }, 3000)

      }


    })
    .catch(err => {
      // console.error('Error al copiar el código: ', err);
    });
});



const verEjemplo = (href, html, css, js, obj) => {


  const btnvista = document.getElementById("btnVista");
  const btnhtml = document.getElementById("btnHtml");
  const btncss = document.getElementById("btnCss");
  const btnjs = document.getElementById("btnJs");
  const btnobj = document.getElementById("btnObject");



  btnvista.addEventListener('click', () => {
    iframe.srcdoc = ""; ej.innerHTML = ""; iframe.innerText = "";
    esFuncion(href);
  });

  btnhtml.addEventListener('click', () => {
    iframe.srcdoc = "";
    ej.innerText = html;
    util.colorearHtml()
  });
  btncss.addEventListener('click', () => {  iframe.srcdoc = ""; ej.innerHTML = css; });
  btnjs.addEventListener('click', () => { iframe.srcdoc = ""; ej.innerHTML = js; });
  btnobj.addEventListener('click', () => {  iframe.srcdoc = ""; ej.innerHTML = obj; });




}

function mostrarObjeto(objeto) {

  const container = document.querySelector('.listado');
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  summary.textContent = objeto.titulo;
  details.appendChild(summary);

  const ejemplos = objeto.ejemplos;

  ejemplos.forEach(ejemplo => {
    const link = document.createElement('a');
    link.textContent = ejemplo.titulo;
    const paragraph = document.createElement('p');
    paragraph.appendChild(link);
    paragraph.addEventListener('click', () => {
      iframe.srcdoc = ""; ej.innerHTML = '';
      let vistaHtml = ejemplo.href;
      esFuncion(vistaHtml);

      verEjemplo(vistaHtml, ejemplo.html, ejemplo.css, ejemplo.js, ejemplo.objeto)
    });

    details.appendChild(paragraph);
  })
  container.appendChild(details);
}

// fecactorizando getAllObjects()
(() => {

  librerias.forEach(libreria => {
    mostrarObjeto(libreria);
  });

})();

function esFuncion(dato) {

  if (typeof dato === 'function') {
    dato();
  } else {
    alert('El dato no es una función');
  }
}

CargarWebsInteres();


//getAllObjects();
/* verificar la funcionalidad del porque no colorea, tira error de ansestro

const _btnhtml = document.getElementById("btnHtml");
_btnhtml.addEventListener('click', ()=>{
  alert('iniciando')
  new ColorearHtml()

})*/


