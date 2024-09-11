import { librerias } from './libreria.js';
import { util } from './utils.js';
import { CargarWebsInteres } from '../js/webInteres.js';
import { formularioWsatsApp } from './main.js';



const objform = {
  father:'.class',
  whatsApp: null,
  photo: null,
  colorBtn: null,
  backgroundInput: null,
  backgroundForm : null,
  placeholder_name1: 'nombre',
  placeholder_name2: 'apellido',
  placeholder_name3: 'dni',
  placeholder_name4: 'ciudad',
  nameBtn: null,
  functionBtn: null
}

const f = new formularioWsatsApp({father:".ejemplo"});



//,'nombre','apellido','dni','mensaje')
//f.cuatroPersonas();
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
  btncss.addEventListener('click', () => { iframe.srcdoc = ""; ej.innerHTML = css; });
  btnjs.addEventListener('click', () => { iframe.srcdoc = ""; ej.innerHTML = js; });
  btnobj.addEventListener('click', () => { iframe.srcdoc = ""; ej.innerHTML = obj; });




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


