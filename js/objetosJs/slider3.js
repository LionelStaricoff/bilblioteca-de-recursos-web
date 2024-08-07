
export class CrearSlider3 {
    constructor(padre) {
        this.agregarAlFront(padre);
        
    }
    agregarAlFront(padre = 'iframe') {
        const papa = document.querySelector(padre);
        papa.appendChild(this.armarLoader());
    }
     armarLoader() {
        const divcontent = document.querySelector("#iframe")
        divcontent.srcdoc = `
        <head>
        <script src="https://kit.fontawesome.com/2d9fe71672.js" crossorigin="anonymous"></script>
            <style>
                                * {
                            margin:0%;
                            padding: 0%;
                            box-sizing: border-box;
                        }
        
                        body {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 100vh;
                            padding: 0 35px;
                            background: #343434;
                        
                        }
        
        
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
        
            </style>
    </head>
    
    <body>
    
        <div class="contenedor">
            <i id="left" class="fa-solid fa-angle-left"> </i>
    
            <ul class="carousel">
                            
                    <li class="card">
                        <div class="img"><img src="./img/objetos/imgSliders/img01.jpeg" draggable="false"/></div>
                        <h2>Abadango Cluster</h2>
                        <span>ALIEN</span>
                    </li>
                    <li class="card">
                        <div class="img"><img src="./img/objetos/imgSliders/img02.jpeg" draggable="false"/></div>
                        <h2>Abradolf Lincler</h2>
                        <span>HUMAN</span>
                    </li>
                    <li class="card">
                        <div class="img"><img src="./img/objetos/imgSliders/img03.jpeg" draggable="false"/></div>
                        <h2>Adjudicator Rick</h2>
                        <span>HUMAN</span>
                    </li>
                    <li class="card">
                        <div class="img"><img src="./img/objetos/imgSliders/img04.jpeg" draggable="false"/></div>
                        <h2>Agency Director</h2>
                        <span>HUMAN</span>
                    </li>
                    <li class="card">
                        <div class="img"><img src="./img/objetos/imgSliders/img05.jpeg" draggable="false"/></div>
                        <h2>Aqua Morty</h2>
                        <span>HUMANOID</span>
                    </li>
                    <li class="card">
                        <div class="img"><img src="./img/objetos/imgSliders/img06.jpeg" draggable="false"/></div>
                        <h2>Alan Rails</h2>
                        <span>HUMAN</span>
                    </li>
    
            </ul>
            <i id="right" class="fa-solid fa-angle-right"> </i>  
        </div>
    
        
        <script>
                        
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
    
    
        </script>
    
    </body>
    
    </html>
        
        `
        return divcontent;
     
        }/*Fin armarLoader*/

        
    }