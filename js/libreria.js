import * as objs from './main.js'

export const librerias = [
    {
        titulo: "Loader",
        ejemplos:[
            {
             
                titulo:"Ejemplo 1",
                href: ()=> new objs.loader1("#ej-contenedor")
  
                ,
                html:`  
                    <div class="loader-content">
                        <div class="loader"></div>
                    </div>
                
                    <div class="img-wrapper">
                        <!--<img class="img-content" src ="https://source.unsplash.com/random">-->
                    </div>
                `,
                css: `<pre class="codigo"><code>
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
                js: `<pre class="codigo"><code>

window.onload = () => {
    let contenido = document.querySelector(".img-wrapper");
    let loading = document.querySelector(".loader");
    loading.style.display = 'none';
    contenido.style.display ='flex'; 
}
                </code></pre>`,
                objeto: `<pre class="codigo"><code>

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
            
            }
            
        ]

    },

    {
        titulo: "Menus",
        ejemplos:[
            {
             
                titulo:"Ejemplo 1",
                href: ()=> new objs.menu1(".ejemplo"),
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
                css: `<pre class="codigo"><code>
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
                            line-height: 80px;
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
                            line-height: 80px;
                            text-transform: uppercase;
                            width: max-content;
                        
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
                                    line-height: 60px;
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
                                    line-height: 70px;
                                }
                        
                                .nav-menu-link:hover, .nav-menu-link_active{
                                    background: none;
                                    color: #83c5f7;
                                }
                        }            
                </code></pre>`,
                js: `<pre class="codigo"><code>
                /*Importando Clase para crear los items del menú*/
                import {menuItem} from './main.js';;
                
                
                /*
                Con estás dos líneas podemos crear el link que necesitemos en nuestro menú
                    const nombreItem = new menuItem("#", "nombreItem");
                    nombreitem.agregarAlFront();
                
                Ejemplo: */
                const home = menuItem("#", "INICIO");
                home.agregarAlFront();
                
                const about = menuItem("#", "SOBRE MÍ");
                about.agregarAlFront();
                
                const blog = menuItem("#", "BLOG");
                blog.agregarAlFront();
                
                const contact = menuItem("#", "CONTACTO");
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
                objeto: `<pre class="codigo"><code>
         
                    import {menu1} from './main.js';
                    
                    ejemplo1: colocar un id
                    new menu1(#id_del_padre) ;
                        
                    ejemplo2: colocar una clase
                    new menu1(.class_del_padre) ;
                        
                    ejemplo3:colocar cualquier elemento html
                    new menu1(div) ;

                    </code></pre>
                `,
                images:""
                
            // },
            // {
            //     href:"",
            //     titulo:"",
            //     html:``,
            //     css: `<pre class="codigo"><code></code></pre>`,
            //     js: `<pre class="codigo"><code></code></pre>`,
            //     objeto: `<pre class="codigo"><code></code></pre>`
            }
        ]
    
    },
    {
        titulo: "Sliders",
        ejemplos:[
            {
             
                titulo:"Ejemplo1",
                href:()=> new objs.slider1(".ejemplo"),
                html:`
                <div class="slider-wrap">
        <i class="fa-solid fa-angle-left" id="backBtn"> </i>
        
        <section class="slider" id="contenedor">
            
            <div>
                <span><img src="./img/Abadango Cluster Princess.jpeg" alt="Img of Abadango Cluster Princess" /></span>
                <span><img src="./img/Abradolf Lincler.jpeg" alt="img of Abradolf Lincler.jpeg" /></span>
                <span><img src="./img/Adjudicator Rick.jpeg" alt="img of Adjudicator Rick" /></span>  
            </div>    
            <div>    
                <span><img src="./img/Agency Director.jpeg" alt="img of Agency Director" /></span>
                <span><img src="./img/Aqua Morty.jpeg" alt="img of Aqua Morty" /></span>
                <span><img src="./img/Alan Rails.jpeg" alt="img of Alan Rails" /></span>
            </div>
                
        </section>
        
        <i class="fa-solid fa-angle-right" id="nextBtn"> </i>        
    </div>
                `,
                css: `<pre class="codigo"><code>
                .body{
                    background: #565656;
                }
                
                .slider-wrap{
                    display: flex;
                    max-width: 900px;
                    align-items: center;
                    justify-content: center;
                    margin: 10% auto;
                    
                    #backBtn{
                        left: 22px;
                    }
                    
                    #nextBtn{
                        right: 22px;
                    }
                
                    #backBtn, #nextBtn {
                        width: 50px;
                        height: 50px;
                        background: lightblue;
                        text-align: center;
                        line-height: 50px;
                        border-radius: 50%;
                        cursor: pointer;
                        position: absolute;
                    
                        font-size: 1.25rem;
                        transform: translateY(-50%);
                        box-shadow: 0 3px 6px rgba(0,0,0,0.23);
                        transition: transform 0.1s linear;
                        z-index: 10;
                
                        &:active {
                            transform: translateY(-50%) scale(0.85);
                        }   
                    }
                
                    
                    .slider{
                        display: flex; 
                        max-width: 800px;
                        /*flex: none;*/
                        overflow-x: scroll;
                        scroll-snap-type: x mandatory;
                        scroll-behavior: smooth;
                        scrollbar-width: none;
                        position: relative; 
                        /*width: 100%;*/
                
                        &::-webkit-scrollbar{/*no compatible con firefox*/
                            display: none;
                        }
                
                        div{
                            display: grid;
                            width: 100%;
                            grid-auto-flow: column;
                            grid-auto-columns: calc((100% / 3) - 12px);
                            grid-gap: 20px;
                            padding: 10px;
                            flex: auto;
                            
                            img {
                                width: 100%;
                                filter: grayscale(100%);
                                transition: transform 0.5s;
                                
                                object-fit: cover;
                                scroll-snap-align: center;
                                
                                &:hover{
                                    filter: grayscale(0);
                                    cursor: pointer;
                                    transform: scale(1.1);
                                }
                            }
                        }
                    
                    }/*fin .slider*/
                
                    
                }/*fin .slider-wrap */
                
                
                
                
                
                
                @media screen and (max-width: 800px){
                    .slider-wrap{
                        .slider {
                            div { grid-auto-columns: calc((100% / 2) - 9px); }
                        }
                    }
                }
                
                @media screen and (max-width: 600px){
                    .slider-wrap{
                        margin: 5% auto;
                        
                        #backBtn{
                            left: 10px;
                        }
                        
                        #nextBtn{
                            right: 10px;
                        }
                        #backBtn, #nextBtn {
                            width: 30px;
                            height: 30px;
                            line-height: 30px;
                        }
                            
                    }    
                
                    .slider-wrap{
                        .slider {
                            div { grid-auto-columns: calc(100%); }
                        }
                    }
                }
                
                
                </code></pre>`,
                js: `<pre class="codigo"><code>
                
//Funcionalidades scroll
let scrollContainer = document.querySelector(".slider");
let backbtn = document.querySelector("#backBtn");
let nextbtn = document.querySelector("#nextBtn");


scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior ="auto";
})

nextbtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft += 900;
})
backbtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior ="smooth";
    scrollContainer.scrollLeft -= 900;
})
                </code></pre>`,
                objeto: `<pre class="codigo"><code>
                import {slider1} from './main.js';
                    
                    ejemplo1: colocar un id
                    new slider1(#id_del_padre) ;
                        
                    ejemplo2: colocar una clase
                    new slider1(.class_del_padre) ;
                        
                    ejemplo3:colocar cualquier elemento html
                    new slider1(div) ;
                </code></pre>`
            }
        ]
    
    }

];

