
export class CrearSlider4 {
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
            
          <style>
                    #slider {
                    display: flex;
                    overflow-x: scroll;
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;
                    height: 100vh;
        
                    div {
                        flex: 0 0 100%;
                        scroll-snap-align: start;
                        animation: slide 12s alternate 2;
                        background-color: aqua;
                        @media screen {
                        @media(width < 617px) {
                            animation: slide2 12s alternate 2;
                        }
                        
                        @media screen and (orientation: landscape){
                        width: 100%;
                        flex: 0 0 0;
                        img {
                        object-fit: 110%;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        }
                        }
                        }
                        img {
                        object-fit: contain;
                        width: auto;
                        height: 100vh;
                        
                        }
                    
                    }
        
                    }
        
        
                    @keyframes slide {
                    0% {
                        transform: translateX(0);
                    }
                    25% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(-200%);
                    
                    }
        
                    }
        
        
                    /* para en modo movile*/
                    @keyframes slide2 {
                    0% {
                        transform: translateX(0);
                    }
                    25% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(-250%);
                    
                    }
        
                    }
        
          </style>
            <title>Slider con Css</title>
        </head>
        <body>
            <section id="slider">
                <div><img src="img/objetos/imgSliders/img12.jpg" alt="Paisaje Otoño"></div>
                <div><img src="img/objetos/imgSliders/img13.jpg" alt="Mural General San Martín"></div>
                <div><img src="img/objetos/imgSliders/img14.jpg" alt="Paisaje Estación de Tren Abandonada"></div>
              </section>
        </body>
        </html>
        
        `
        return divcontent;
     
        }/*Fin armarLoader*/

        
    }