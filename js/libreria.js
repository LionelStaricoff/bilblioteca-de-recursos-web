export const librerias = [
    {
        titulo: "Loader",
        ejemplos:[
            {
             
                titulo:"Ejemplo 1",
                href:`
                
                <head>
                                
                    <style>
  
                      
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
                
                    </style>
                </head>
                <body>
                
                    <div class="loader-content">
                        <div class="loader"></div>
                    </div>
                
                    <div class="img-wrapper">
                        <!-- <img class="img-content" src ="https://source.unsplash.com/random"> -->
                    </div>
                
                    <script>
                    alert('hola')
                    
                    </script>
                    
               
                `,
                html:`  
                    <div class="loader-content">
                        <div class="loader"></div>
                    </div>
                
                    <div class="img-wrapper">
                        <!--<img class="img-content" src ="https://source.unsplash.com/random">-->
                    </div>
                `,
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
                objeto: `<pre><code>

            import {loader1} from './main.js';
                
            ejemplo1: colocar un id
              new loader1(#id_del_padre) ;
                
            ejemplo2: colocar una clase
              new loader1(.class_del_padre) ;
                
            ejemplo3:colocar cualquier elemento html
              new loader1(div) ;

                </code></pre>
                `,
                images:""
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
        titulo: "Menus",
        ejemplos:[
            {
             
                titulo:"Ejemplo 1",
                href:`
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <script src="https://kit.fontawesome.com/2d9fe71672.js" crossorigin="anonymous"></script>
                    <style>
                        
                        body {
                            font-family: sans-serif;
                            padding: 90px 20px 0;
                        }
                
                        .header{
                            background-color: #0769e9;
                            height: 80px;
                            /*para fijar posición de la barra de navegación*/
                            position: fixed; 
                            width: 100%;
                            top:0;
                            left:0;
                        }
                        .nav{
                            display: flex;
                            justify-content: space-between;
                            /*Con la idea de que en navegadores muy anchos el contenido se vea centrado, se agrega los siguientes códigos*/
                            max-width: 992px;
                            margin: 0 auto;
                        }
                
                        .nav-link{
                            color:white;
                            text-decoration: none;
                        }
                
                        .logo{
                            font-size: 30px;
                            font-weight: bold;
                            padding: 0 40px;
                            line-height: 80px;/*se establece con la misma medida que el height del header para que su contenido aparezca centrado verticalmente*/
                        }
                
                        .nav-toggle{
                            color: white;
                            background: none;
                            border: none;
                            font-size: 30px;/*igual que logo*/
                            padding: 0 20px;
                            line-height: 60px;/*esta línea en modo navegador va a tener 60px pos default*/
                            cursor: pointer;
                            display:none;/*para que no sea vea en el dispositivo*/
                        }
                
                        .nav-menu{
                            display:flex;
                            margin-right: 40px;
                            list-style:none;
                        }
                
                        .nav-menu-item{
                            font-size: 18px;
                            margin: 0 10px;
                            line-height: 80px;/*se establece con la misma medida que el height del header para que su contenido aparezca centrado verticalmente*/
                            text-transform: uppercase;
                            width: max-content; /*evita que el texto del menu "about me" se vaya hacia una segunda linea*/
                
                        }
                
                        .nav-menu-link{
                            padding: 8px 12px;
                            border-radius: 3px;
                
                
                        }
                
                        .nav-menu-link:hover, .nav-menu-link_active{
                            background-color: #034574;
                            transition: 0.5s;
                        }
                
                        @media(max-width: 768px){
                            
                                body {
                                    padding-top: 70px;
                                }
                
                                .header{
                                    height: 60px;
                                }
                                
                
                                .logo{
                                    font-size: 25px;
                                    line-height: 60px;/*se establece con la misma medida que el height del header para que su contenido aparezca centrado verticalmente*/
                                }
                
                                .nav-toggle{
                                display: block;
                                }
                
                                .nav-toggle:focus(:focus-visible){
                                    outline: none;
                                }
                
                                .nav-menu{
                                    flex-direction: column;
                                    align-items: center;
                                    margin-right: 20px;
                                    background-color: #2C3e50;
                                    position: fixed;
                                    
                                    width: 100%;
                                    padding: 20px 0;
                                    height: calc(100%-60px);/*para calcular el alto automáticamente*/
                                    overflow-y: auto;/*agrega u scrool cuando sea necesario*/
                                    
                                    
                                    /*Desplazamiento hacia arriba
                                    top:100%;
                                    left: 0;
                                    transition: top 0.3s;*/
                                
                                    /*Deplazamiento hacia la izquierda
                                    top:60px;
                                    left: 100%;
                                    transition: left 0.3s;*/
                                    
                                    /*Deplazamiento hacia la derecha*/
                                    top:60px;
                                    right: 100%;
                                    transition: right 0.3s;
                                }
                
                                .nav-menu_visible{
                
                                    /*Desplazamiento hacia arriba
                                    top: 60px;*/
                
                                    /*Deplazamiento hacia la izquierda
                                    left:0;*/
                
                                    /*Deplazamiento hacia la derecha*/
                                    right:0;
                                    margin-right: 0;
                                }
                
                                .nav-menu-item{
                                    line-height: 70px;/*se establece con la misma medida que el height del header para que su contenido aparezca centrado verticalmente*/
                                }
                
                                .nav-menu-link:hover, .nav-menu-link_active{
                                    background: none;
                                    color: #83c5f7;
                                }
                        }
                    </style>
                    <title>Menu Responsive</title>
                </head>
                <body>
                    <header class="header">
                        <nav class="nav">
                            <a href="#" class="logo nav-link">Your Logo</a>
                            <buttton class="nav-toggle" aria-label="Abrir Menú">
                                <i class="fas fa-bars"></i>
                            </buttton>
                            <ul class="nav-menu">
                               <!--acá se agrega el contenido del menu-->
                                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">HOME</a></li>
                                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">ABOUT ME</a></li>
                                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">BLOG</a></li>
                                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">CONTACT</a></li>
                            </ul>
                        </nav>
                    </header>
                    <script>
                       
                        /*Comportamiento navToggle */
                                const navToggle = document.querySelector(".nav-toggle");
                                const navMenu = document.querySelector(".nav-menu");
                
                        navToggle.addEventListener('click', ()=>{
                            navMenu.classList.toggle('nav-menu_visible');
                            if(navMenu.classList.contains("nav-menu_visible")){
                                navToggle.setAttribute("aria-label","Cerrar Menú");
                            }else{
                                navToggle.setAttribute("aria-label","Abrir Menú");
                            }
                        });
                
                       
                    </script>
                </body>
                </html>
                
`,
                html:`
                    

                
    <header class="header">
        <nav class="nav">
            <a href="#" class="logo nav-link">Your Logo</a>
            <buttton class="nav-toggle" aria-label="Abrir Menú">
                <i class="fas fa-bars"></i>
            </buttton>
            <ul class="nav-menu">
            <!--acá se agrega el contenido del menu-->
            </ul>
        </nav>
    </header>
             
                    
                `,
                css: `<pre><code>
                        *{
                            margin: 0;
                            box-sizing: border-box;
                        }
                        
                        body {
                            font-family: sans-serif;
                            padding: 90px 20px 0;
                        }
                        
                        .header{
                            background-color: #0769e9;
                            height: 80px;
                            /*para fijar posición de la barra de navegación*/
                            position: fixed; 
                            width: 100%;
                            top:0;
                            left:0;
                        }
                        .nav{
                            display: flex;
                            justify-content: space-between;
                            /*Con la idea de que en navegadores muy anchos el contenido se vea centrado, se agrega los siguientes códigos*/
                            max-width: 992px;
                            margin: 0 auto;
                        }
                        
                        .nav-link{
                            color:white;
                            text-decoration: none;
                        }
                        
                        .logo{
                            font-size: 30px;
                            font-weight: bold;
                            padding: 0 40px;
                            line-height: 80px;/*se establece con la misma medida que el height del header para que su contenido aparezca centrado verticalmente*/
                        }
                        
                        .nav-toggle{
                            color: white;
                            background: none;
                            border: none;
                            font-size: 30px;/*igual que logo*/
                            padding: 0 20px;
                            line-height: 60px;/*esta línea en modo navegador va a tener 60px pos default*/
                            cursor: pointer;
                            display:none;/*para que no sea vea en el dispositivo*/
                        }
                        
                        .nav-menu{
                            display:flex;
                            margin-right: 40px;
                            list-style:none;
                        }
                        
                        .nav-menu-item{
                            font-size: 18px;
                            margin: 0 10px;
                            line-height: 80px;/*se establece con la misma medida que el height del header para que su contenido aparezca centrado verticalmente*/
                            text-transform: uppercase;
                            width: max-content; /*evita que el texto del menu "about me" se vaya hacia una segunda linea*/
                        
                        }
                        
                        .nav-menu-link{
                            padding: 8px 12px;
                            border-radius: 3px;
                        
                        
                        }
                        
                        .nav-menu-link:hover, .nav-menu-link_active{
                            background-color: #034574;
                            transition: 0.5s;
                        }
                        
                        @media(max-width: 768px){
                            
                                body {
                                    padding-top: 70px;
                                }
                        
                                .header{
                                    height: 60px;
                                }
                                
                        
                                .logo{
                                    font-size: 25px;
                                    line-height: 60px;/*se establece con la misma medida que el height del header para que su contenido aparezca centrado verticalmente*/
                                }
                        
                                .nav-toggle{
                                display: block;
                                }
                        
                                .nav-toggle:focus(:focus-visible){
                                    outline: none;
                                }
                        
                                .nav-menu{
                                    flex-direction: column;
                                    align-items: center;
                                    margin-right: 20px;
                                    background-color: #2C3e50;
                                    position: fixed;
                                    
                                    width: 100%;
                                    padding: 20px 0;
                                    height: calc(100%-60px);/*para calcular el alto automáticamente*/
                                    overflow-y: auto;/*agrega u scrool cuando sea necesario*/
                                    
                                    
                                    /*Desplazamiento hacia arriba
                                    top:100%;
                                    left: 0;
                                    transition: top 0.3s;*/
                                
                                    /*Deplazamiento hacia la izquierda
                                    top:60px;
                                    left: 100%;
                                    transition: left 0.3s;*/
                                    
                                    /*Deplazamiento hacia la derecha*/
                                    top:60px;
                                    right: 100%;
                                    transition: right 0.3s;
                                }
                        
                                .nav-menu_visible{
                        
                                    /*Desplazamiento hacia arriba
                                    top: 60px;*/
                        
                                    /*Deplazamiento hacia la izquierda
                                    left:0;*/
                        
                                    /*Deplazamiento hacia la derecha*/
                                    right:0;
                                    margin-right: 0;
                                }
                        
                                .nav-menu-item{
                                    line-height: 70px;/*se establece con la misma medida que el height del header para que su contenido aparezca centrado verticalmente*/
                                }
                        
                                .nav-menu-link:hover, .nav-menu-link_active{
                                    background: none;
                                    color: #83c5f7;
                                }
                        }            
                </code></pre>`,
                js: `<pre><code>
                /*Importando Clase para crear objeto*/
                import { item } from './obj.js';
                
                
                /*
                Con estás dos líneas podemos crear el link que necesitemos en nuestro menú
                    const nombreItem = new item("#", "nombreItem");
                    nombreitem.agregarAlFront();
                
                Ejemplo: */
                const home = new item("#", "HOME");
                home.agregarAlFront();
                
                const about = new item("#", "ABOUT ME");
                about.agregarAlFront();
                
                const blog = new item("#", "BLOG");
                blog.agregarAlFront();
                
                const contact = new item("#", "CONTACT");
                contact.agregarAlFront();
                //____________________________________________________________________
                
                
                
                /*Comportamiento navToggle */
                const navToggle = document.querySelector(".nav-toggle");
                const navMenu = document.querySelector(".nav-menu");
                
                navToggle.addEventListener('click', ()=>{
                    navMenu.classList.toggle('nav-menu_visible');
                    if(navMenu.classList.contains("nav-menu_visible")){
                        navToggle.setAttribute("aria-label","Cerrar Menú");
                    }else{
                        navToggle.setAttribute("aria-label","Abrir Menú");
                    }
                });
               
                </code></pre>`,
                objeto: `<pre><code>
         

                </code></pre>
                `,
                images:""
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


