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
             
                titulo:"Ejemplo1: Manual",
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
            },
            {
                titulo:"Ejemplo2: Continuo Infinito",
                href:()=> new objs.slider2(".ejemplo"),
                html:`
                <div class="contenedor">
        <div class="img-slide">
           <!--Acá se va a agregar la galería de imágenes-->
        </div>
    </div>
                `,
                css: `<pre class="codigo">
                
/*genero una transformación que se traslada horizontalmente, sobre el eje X. de izq a derecha*/
@keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

.contenedor {
    overflow: hidden;
    padding:30px 0;
    background: white; 
    white-space: nowrap;
    position: relative;

    /*pausa la animación cuando el cursor esta encima del logo*/
    &:hover .img-slide {
        animation-play-state: paused;
    }

    /*Un detalle al comienzo y al final del slide*/
    &::before, &::after {
        position: absolute;
        top: 0;
        width: 200px;
        height: 100%;
        content: "";
        z-index: 2;
    }  
    &:before {
        left: 0%;
        background: linear-gradient(to left,rgba(255,255,255,0),white);
    }
    
    &:after {
        right: 0%;
        background: linear-gradient(to right,rgba(255,255,255,0),white);
    }

    /*Aplico transformación creada en linea 12 a una animación*/  
    .img-slide {
        display: inline-block;
        animation: 35s slide infinite linear; /*acá puedo modificar la velocidad del slider*/

        
        /*Igualo el alto de todas las imágenes y el margen entre ellas*/
        img {
            height: 250px;
            margin: 0 20px;
        }

    }/*fin estilo .img-slider*/
    
} /*fin estilo .contenedor*/


                <code></code></pre>`,
                js: `<pre class="codigo"><code>
                /*clona galería de imágenes, para simular un efecto continuo e infinito*/
        const copy = document.querySelector('.img-slide').cloneNode(true);
        document.querySelector('.contenedor').appendChild(copy);
                </code></pre>`,
                objeto: `<pre class="codigo">
                <pre class="codigo"><code>
                import {slider2} from './main.js';
                    
                    ejemplo1: colocar un id
                    new slider2(#id_del_padre) ;
                        
                    ejemplo2: colocar una clase
                    new slider2(.class_del_padre) ;
                        
                    ejemplo3:colocar cualquier elemento html
                    new slider2(div) ;
                </code></pre>`

            },
            {
                titulo:"Ejemplo3: Manual y automático",
                href:()=> new objs.slider3(".ejemplo"),
                html:`
                <div class="contenedor">
                <i id="left" class="fa-solid fa-angle-left"> </i>
        
                <ul class="carousel">
                   <!-- acá galeria
                        <li class="card">
                            <div class="img"><img src="./img/Abadango Cluster Princess.jpeg" alt="Img of Abadango Cluster Princess" draggable="false"/></div>
                            <h2>Abadango Cluster</h2>
                            <span>ALIEN</span>
                        </li> 
                    -->
                </ul>
                <i id="right" class="fa-solid fa-angle-right"> </i>  
            </div>
                `,
                css: `<pre class="codigo">
                
.contenedor {
    max-width: 1100px;
    width: 100%;
    position: relative;
    
    i {
        height: 50px;
        width: 50px;
        background: lightgoldenrodyellow;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        top: 50%;
        font-size: 1.25rem;
        transform: translateY(-50%);
        box-shadow: 0 3px 6px rgba(0,0,0,0.23);
        transition: transform 0.1s linear;
        z-index: 10;

        &:active {
            transform: translateY(-50%) scale(0.85);
          }
          
        &:first-child {
            left: -22px;
        }
        
        &:last-child {
            right: -22px;
        }
    }/*fin estilo i*/


    .carousel {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: calc((100% / 3) - 12px);
        gap: 16px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;/*para que no se vea el scroller*/
        border-radius: 8px;
        
        &::-webkit-scrollbar {
            display: none;/*no compatible con firefox*/
          }
        .no-transition {
            scroll-behavior: auto;
          }

        .dragging {
            scroll-snap-type: none;
            scroll-behavior: auto;
            .card {
            cursor: grab;
            user-select: none;
            }
        }

             
        :where(.card,.img){
            display: flex;
            align-items: center;
            justify-content: center;
          }
               
        .card {
            scroll-snap-align: start;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 350px;
            list-style: none;
            background: whitesmoke;
            padding-bottom: 15px;
            border-radius: 8px;
            cursor: pointer;

            
            .img {
                background: #343434;
                width: 206px;
                height: 206px;
                border-radius: 50%;

                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    border: 4px solid lightgoldenrodyellow;
                    object-fit: cover;    
                }
                
            }/*fin estilo .img*/

            h2 {
                font-weight:bolder;
                font-size: 1.56rem;
                margin: 30px 0 5px;
            }

            span {
                color: #343434;
                font-size: 1.31rem;
            }

        }/*fin estilo .card*/
        
    }/*fin estilo .carousel*/

    
    
} /*fin estilo .contenedor*/




@media screen and (max-width: 900px){
    .contenedor {
        .carousel { grid-auto-columns: calc((100% / 2) - 9px); }
    }
}

@media screen and (max-width: 600px){
    .contenedor {
        .carousel  {grid-auto-columns: 100%; }
        
    }
}

                
                <code></code></pre>`,
                js: `<pre class="codigo"><code>
                
                
const contenedor = document.querySelector(".contenedor");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".contenedor i");//llamo los botones flechas
const firstCardWidth = carousel.querySelector(".card").offsetWidth;//offsetWidth devuelve el ancho del layout del elemento, valor real del elemento
const carouselChildrens = [...carousel.children]; //creando un array con los childrens de carousel


let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// calcula el número de cards que se ven a la vez
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

/*Código para simular un scrollin infinito
Para insertar copias al comienzo del carousel*/ 
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
/*Para insertar copias al final del carousel*/
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Agrego evento para arrow buttons para deslizar carousel hacia la izquiera o derecha
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth; //se traslada el ancho de una card a la izq o a la dcha
    });
});




const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");//evita que el usuario pueda seleccionar el texto

    // Guarda posición inicial del carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // Si isDragging es falso 
    // Para que el carousel se siga moviendo desde donde está a la izq automáticamente
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}


const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScroll = () => {
    // Si la galeria llega al comienzo, que continue con el final
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // Si la galería llega al final continua con el comiezo
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    
    // Se activa el autoplay si el mouse no está hover
    clearTimeout(timeoutId);
    if(!contenedor.matches(":hover")) autoPlay();
}


carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
contenedor.addEventListener("mouseenter", () => clearTimeout(timeoutId));
contenedor.addEventListener("mouseleave", autoPlay);


                </code></pre>`,
                objeto: `<pre class="codigo"><code>
                import {slider3} from './main.js';
                    
                    ejemplo1: colocar un id
                    new slider3(#id_del_padre) ;
                        
                    ejemplo2: colocar una clase
                    new slider3(.class_del_padre) ;
                        
                    ejemplo3:colocar cualquier elemento html
                    new slider3(div) ;
                </code></pre>`
        
            }
        ]
    
    }

];

