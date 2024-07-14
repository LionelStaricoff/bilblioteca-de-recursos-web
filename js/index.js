import { librerias } from './libreria.js';
import{ColorearHtml} from 'https://lionelstaricoff.github.io/paint-code/Paint.js';

const iframe = document.querySelector("#iframe");
const ej = document.querySelector("#ej-contenedor");






  document.getElementById('boton-copiar').addEventListener('click', ()=> {
   
   
  const aux = document.createElement("textarea");


  aux.innerHTML = (document.querySelector('code') !== null)?document.querySelector('code').innerHTML  : document.querySelector('.codigo').innerHTML ;

  document.body.appendChild(aux);

  aux.select();


  document.execCommand("copy");


  document.body.removeChild(aux);
  alert(aux.innerText)

  });


const verEjemplo= (href,html,css,js,obj)=>{
    
    
    const btnvista= document.getElementById("btnVista");
    const btnhtml = document.getElementById("btnHtml");
    const btncss = document.getElementById("btnCss");
    const btnjs = document.getElementById("btnJs");
    const btnobj = document.getElementById("btnObject");



    btnvista.addEventListener('click',()=>{
        iframe.srcdoc=""; ej.innerHTML= ""; iframe.innerText="";
        esFuncion(href);
        });
    
    btnhtml.addEventListener('click',()=>{
      iframe.srcdoc=""; 
      ej.innerText=html;

        new ColorearHtml();
    });
    btncss.addEventListener('click',()=>{iframe.srcdoc=""; ej.innerHTML=css;});
    btnjs.addEventListener('click',()=>{iframe.srcdoc=""; ej.innerHTML=js;});
    btnobj.addEventListener('click',()=>{iframe.srcdoc=""; ej.innerHTML=obj;});
   
}

function mostrarObjeto(objeto) {
    
    const container = document.querySelector('.listado');
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = objeto.titulo;
    details.appendChild(summary);

    const ejemplos = objeto.ejemplos;

    ejemplos.forEach(ejemplo => {
                    const link= document.createElement('a');
                    link.textContent= ejemplo.titulo;
                    const paragraph = document.createElement('p');
                    paragraph.appendChild(link);
                    paragraph.addEventListener('click',()=>{
                      iframe.srcdoc=""; ej.innerHTML= '';
                      let vistaHtml = ejemplo.href;
                      esFuncion(vistaHtml);
                       
                      verEjemplo(vistaHtml,ejemplo.html,ejemplo.css,ejemplo.js,ejemplo.objeto)
                    });

                    details.appendChild(paragraph);
    })
    container.appendChild(details);
}

// fecactorizandon getAllObjects()
 ( ()=>{

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




//getAllObjects();


