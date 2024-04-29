export const librerias = [
    {
        titulo: "Loader",
        ejemplos:[
            {
                href:"../../proyecto/loader/loader02/index.html",
                titulo:"Ejemplo 1",
                html:`<pre><code>
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Loader sin setTimeOut</title>
                    <link rel="stylesheet" href="./css/index.css">
                    <script src="./js/loader.js"></script>
                    <script src="https://kit.fontawesome.com/2d9fe71672.js" crossorigin="anonymous"></script>
                </head>
                <body>
                
                    <div class="loader-content">
                        <div class="loader"></div>
                    </div>
                
                    <div class="img-wrapper">
                        <img class="img-content" src ="https://source.unsplash.com/random">
                    </div>
                </body>
                </html>
                </code></pre>`,
                css: `<pre><code>
                body{
                    position: relative;
                }
                
                .img-wrapper{
                    height: 100vh;
                    display: none;
                    justify-content: center;
                    align-items: center;
                
                    .img-content{
                        width: 500px;
                        height: auto;
                    }
                
                
                }/*fin img-wrapper*/

                .loader-content{
            
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    width: 100vw;
                }
                
                .loader {
                    
                    width: 80px;
                    height: 80px;
                    border: solid 5px #436ff3;
                    border-top: solid 5px #e7ecf8;
                    border-radius: 50%;
                
                    animation: spin 1.2s
                                linear infinite;
                
                    
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                    
                }
                </code></pre>`,
                js: `<pre><code>

                window.onload = () => {
                    let contenido = document.querySelector(".img-wrapper");
                    let loading = document.querySelector(".loader");
                    loading.style.display = 'none';
                    contenido.style.display ='flex'; 
                }
                </code></pre>`,
                objeto: `<pre><code></code></pre>`
            // },
            // {
            //     href:"",
            //     titulo:"",
            //     html:`<pre><code></code></pre>`,
            //     css: `<pre><code></code></pre>`,
            //     js: `<pre><code></code></pre>`,
            //     objeto: `<pre><code></code></pre>`
            }
        ]

    },

    {
        titulo: "Animacion",
        ejemplos:[
            {
                href:"./proyecto/loader/loader02/index.html",
                titulo:"Ejemplo 1",
                html:`<pre><code>
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Loader sin setTimeOut</title>
                    <link rel="stylesheet" href="./css/index.css">
                    <script src="./js/loader.js"></script>
                    <script src="https://kit.fontawesome.com/2d9fe71672.js" crossorigin="anonymous"></script>
                </head>
                <body>
                
                    <div class="loader-content">
                        <div class="loader"></div>
                    </div>
                
                    <div class="img-wrapper">
                        <img class="img-content" src ="https://source.unsplash.com/random">
                    </div>
                </body>
                </html>
                </code></pre>`,
                css: `<pre><code>
                body{
                    position: relative;
                }
                
                .img-wrapper{
                    height: 100vh;
                    display: none;
                    justify-content: center;
                    align-items: center;
                
                    .img-content{
                        width: 500px;
                        height: auto;
                    }
                
                
                }/*fin img-wrapper*/
    
                .loader-content{
            
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    width: 100vw;
                }
                
                .loader {
                    
                    width: 80px;
                    height: 80px;
                    border: solid 5px #436ff3;
                    border-top: solid 5px #e7ecf8;
                    border-radius: 50%;
                
                    animation: spin 1.2s
                                linear infinite;
                
                    
                }
                
                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                    
                }
                </code></pre>`,
                js: `<pre><code>
    
                window.onload = () => {
                    let contenido = document.querySelector(".img-wrapper");
                    let loading = document.querySelector(".loader");
                    loading.style.display = 'none';
                    contenido.style.display ='flex'; 
                }
                </code></pre>`,
                objeto: `<pre><code></code></pre>`
            // },
            // {
            //     href:"",
            //     titulo:"",
            //     html:`<pre><code></code></pre>`,
            //     css: `<pre><code></code></pre>`,
            //     js: `<pre><code></code></pre>`,
            //     objeto: `<pre><code></code></pre>`
            }
        ]
    
    }

];
// Ahora tienes el objeto listo para ser copiado por el usuario
console.log(librerias);


// const ejemploGaleria = {
//     html: `<!DOCTYPE html>
//   <html lang="es">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <link rel="stylesheet" href="styles.css">
//       <title>galeria-01</title>
//   </head>
//   <body>
//       <div>
//           <img src="img1.jpg" alt="">
//           <img src="img2.jpg" alt="">
//           <img src="img3.jpg" alt="">
//           <img src="img4.jpg" alt="">
//       </div>
//   </body>
//   </html>`,
//     css: `* {
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//   }
//   div {
//       display: flex;
//   }
//   div img {
//       filter: saturate(50%);
//       width: 10%;
//       border: 2px solid white;
//       min-height: 90vh;
//       height: 100%;
//       object-fit: cover;
//       border-radius: 12px;
//       cursor: pointer;
//   }
//   div img:hover {
//       filter: saturate(100%);
//       width: 100%;
//       transition: all ease 2s;
//       max-height: 90vh;
//   }`,
//     js: ``,
//     imagenes: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]
//   };
  
//   // Ahora tienes el objeto listo para ser copiado por el usuario
//   console.log(ejemploGaleria);
































// // export class Libreria {
// //     constructor(titulo,ejemplos,nombre,enlace,object,html,css,js,object){
// //         this.titulo=titulo;
// //         this.ejemplos=ejemplos;
// //         this.nombre=nombre;
// //         this.enlace=enlace;
// //         this.vista=vista;
// //         this.html=html;
// //         this.css=css;
// //         this.js=js;
// //         this.object=object;

// //     }

// //     crearSummary(){
// //         const details = document.createElement("details");
// //         const summary = document.createElement('summary');
// //         summary.textContent = this.titulo;
// //         details.appendChild(summary);
// //     }

// //     crearEjemplos(){
// //         const p = document.createElement("p");
// //         const ahref = document.createElement("a");
// //         ahref.href = "#";
// //         ahref.target = "codeFrame";
// //         ahref.textContent = this.nombre;
// //         p.appendChild(ahref);  
// //         p.addEventListener('click', ()=>verEjemplo(this.enlace, this.vista, this.html,this.css,this.js,this.object))
// //         details.appendChild(p);  
// //     }

    
// // }


