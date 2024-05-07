import { librerias } from './libreria.js';

const ej = document.querySelector("#ej-contenedor");




const verEjemplo= (href,html,css,js,obj)=>{
    
    
    const btnvista= document.getElementById("btnVista");
    const btnhtml = document.getElementById("btnHtml");
    const btncss = document.getElementById("btnCss");
    const btnjs = document.getElementById("btnJs");
    const btnobj = document.getElementById("btnObject");

    btnvista.addEventListener('click',()=>{ej.innerHTML=href;});
    btnhtml.addEventListener('click',()=>{ej.innerText= html;});
    btncss.addEventListener('click',()=>{ej.innerHTML=css;});
    btnjs.addEventListener('click',()=>{ej.innerHTML=js;});
    btnobj.addEventListener('click',()=>{ej.innerHTML=obj;});
   
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
                        ej.innerHTML=ejemplo.href;
                        verEjemplo(ejemplo.href,ejemplo.html,ejemplo.css,ejemplo.js,ejemplo.objeto)
                    });

                    details.appendChild(paragraph);
    })
    container.appendChild(details);
}

function getAllObjects(){

    librerias.forEach(libreria => {
        mostrarObjeto(libreria);
    });

}





getAllObjects();



// document.addEventListener("DOMContentLoaded", function () {
//     const cartelError = new CartelError('.listado');

//     fetch('json/menuLibreria.json')
//         .then(response => response.json())
//         .then(data => {
//             const menuItems = data.menu;
//             const listado = document.querySelector('.listado');

//             menuItems.forEach(item => {
//                 const details = document.createElement('details');
//                 const summary = document.createElement('summary');
//                 summary.textContent = item.titulo;
//                 details.appendChild(summary);

//                 const subitems = item.subitems;
//                 subitems.forEach(subitem => {
//                     const link = document.createElement('a');
//                     link.textContent = subitem.titulo;
//                     link.href = subitem.href;
//                     link.target= "codeFrame";

//                     const paragraph = document.createElement('p');
//                     paragraph.appendChild(link);
//                     paragraph.addEventListener('click',()=>{verEjemplo(subitem.href,subitem.html,subitem.css,subitem.js,subitem.object)})
//                     details.appendChild(paragraph);
//                 });

//                 listado.appendChild(details);
//             });
//         })
//         .catch(error => {
//             cartelError.displayError(error);

//         });
// });






// const verEjemplo= (enlace,html,css,js,obj)=>{
//     const ej = document.querySelector(".ejemplo");
//     const btnvista= document.getElementById("btnVista");
//     const btnhtml = document.getElementById("btnHtml");
//     const btncss = document.getElementById("btnCss");
//     const btnjs = document.getElementById("btnJs");
//     const btnobj = document.getElementById("btnObject");
   
//     const contHtml = "";
//     const contCss = "";
//     const contJs = "";
//     const contObj = "";
    
//     contHtml = `${html}`;

//     btnvista.addEventListener('click',()=>{iframe.src=`${enlace}`;});
//     btnhtml.addEventListener('click',()=>{ej.appendChild(`${html}`);});
//     btncss.addEventListener('click',()=>{ej.appendChild(css);});
//     btnjs.addEventListener('click',()=>{ej.appendChild(js);});
//     btnobj.addEventListener('click',()=>{ej.appendChild(obj);});
   
// }



























// // const btncopiar =document.querySelector(".iconoCopy");
// // const iframe = document.querySelector('iframe[name="codeFrame"]');
// // iframe.style.background= "#1e1d1d";
// // iframe.style.width="80vh";
// // iframe.style.height="80vh";
// // iframe.style.margin="20px"

// // iframe.contentDocument || || iframe.contentWindow.document;
// //código para copiar texto en portapapeles
// // function copiarTexto(){
// //     const iframeDoc = iframe.contentWindow.document;
// //     const codigo = iframeDoc.querySelector('pre code').innerText;
// //     if (codigo) {
// //         navigator.clipboard.writeText(codigo)
// //           .then(function () {
// //             alert("Código copiado al portapapeles");
// //           })
// //           .catch(function () {
// //             alert("Error al copiar el código");
// //           });
// //       } else {
// //         alert("Error. No hay código para copiar.");
// //       }
// // }


// // const verEjemplo= (enlace,vista,html,css,js,obj)=>{
// //     iframe.src = `${enlace}${vista}`;
// //     const btnvista= document.getElementById("vista");
// //     const btnhtml = document.getElementById("html");
// //     const btncss = document.getElementById("css");
// //     const btnjs = document.getElementById("js");
// //     const btnobj = document.getElementById("object");

// //     btnvista.addEventListener('click',()=>{iframe.src = `${enlace}${vista}`});
// //     btnhtml.addEventListener('click',()=>{iframe.src = `${enlace}${html}`;});
// //     btncss.addEventListener('click',()=>{iframe.src = `${enlace}${css}`;});
// //     btnjs.addEventListener('click',()=>{iframe.src = `${enlace}${js}`;});
// //     btnobj.addEventListener('click',()=>{iframe.src = `${enlace}${obj}`;});
   
// // }



// const cargarlibreria = ()=>{

//     try {
        
//         fetch('./libreria.json')
//             .then(response=>response.json())
//             .then(data => {
              
//                 const datos = data.libreria;
//                 datos.forEach(item => {
//                     const details = document.createElement("details");
//                     const summary = document.createElement("summary");
//                     summary.textContent = item.titulo;
//                     details.appendChild(summary);
//                     const ejemplos = item.ejemplos;
//                         ejemplos.forEach(ejemplo =>{
//                         const p = document.createElement("p");
//                         const ahref = document.createElement("a");
//                         ahref.href = "#";
//                         ahref.target = "codeFrame";
//                         ahref.textContent = ejemplo.nombre;
//                         p.appendChild(ahref);  
//                         // p.addEventListener('click', ()=>verEjemplo(ejemplo.enlace, ejemplo.vista, ejemplo.html,ejemplo.css,ejemplo.js,ejemplo.object))
//                         details.appendChild(p);  
//                         })
//                     document.querySelector(".listado").appendChild(details);    
//                 })
//             })     
//     } catch (error) {
//         console.log(error);
//     }

// }

// cargarlibreria();
