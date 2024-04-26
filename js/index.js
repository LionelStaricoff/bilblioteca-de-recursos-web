



// const btncopiar =document.querySelector(".iconoCopy");
// const iframe = document.querySelector('iframe[name="codeFrame"]');
// iframe.style.background= "#1e1d1d";
// iframe.style.height="80vh";
// iframe.style.margin="20px"

// iframe.contentDocument || || iframe.contentWindow.document;
//código para copiar texto en portapapeles
// function copiarTexto(){
//     const iframeDoc = iframe.contentWindow.document;
//     const codigo = iframeDoc.querySelector('pre code').innerText;
//     if (codigo) {
//         navigator.clipboard.writeText(codigo)
//           .then(function () {
//             alert("Código copiado al portapapeles");
//           })
//           .catch(function () {
//             alert("Error al copiar el código");
//           });
//       } else {
//         alert("Error. No hay código para copiar.");
//       }
// }


// const verEjemplo= (enlace,vista,html,css,js,obj)=>{
//     iframe.src = `${enlace}${vista}`;
//     const btnvista= document.getElementById("vista");
//     const btnhtml = document.getElementById("html");
//     const btncss = document.getElementById("css");
//     const btnjs = document.getElementById("js");
//     const btnobj = document.getElementById("object");

//     btnvista.addEventListener('click',()=>{iframe.src = `${enlace}${vista}`});
//     btnhtml.addEventListener('click',()=>{iframe.src = `${enlace}${html}`;});
//     btncss.addEventListener('click',()=>{iframe.src = `${enlace}${css}`;});
//     btnjs.addEventListener('click',()=>{iframe.src = `${enlace}${js}`;});
//     btnobj.addEventListener('click',()=>{iframe.src = `${enlace}${obj}`;});
   
// }



const cargarlibreria = ()=>{

    try {
        
        fetch('./libreria.json')
            .then(response=>response.json())
            .then(data => {
              
                const datos = data.libreria;
                datos.forEach(item => {
                    const details = document.createElement("details");
                    const summary = document.createElement("summary");
                    summary.textContent = item.titulo;
                    details.appendChild(summary);
                    const ejemplos = item.ejemplos;
                        ejemplos.forEach(ejemplo =>{
                        const p = document.createElement("p");
                        const ahref = document.createElement("a");
                        ahref.href = "#";
                        ahref.target = "codeFrame";
                        ahref.textContent = ejemplo.nombre;
                        p.appendChild(ahref);  
                        // p.addEventListener('click', ()=>verEjemplo(ejemplo.enlace, ejemplo.vista, ejemplo.html,ejemplo.css,ejemplo.js,ejemplo.object))
                        details.appendChild(p);  
                        })
                    document.querySelector(".listado").appendChild(details);    
                })
            })     
    } catch (error) {
        console.log(error);
    }

}

cargarlibreria();
