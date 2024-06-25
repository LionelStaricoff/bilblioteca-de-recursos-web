
export class CrearSlider2 {
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
        
            </style>
        </head>
    
        <body>
    
            <div class="contenedor">
                <div class="img-slide">
                <!--Acá se va a agregar la galería de imágenes-->
                    <img src="./img/objetos/imgSliders/img01.jpeg" />
                    <img src="./img/objetos/imgSliders/img02.jpeg" />
                    <img src="./img/objetos/imgSliders/img03.jpeg" />
                    <img src="./img/objetos/imgSliders/img04.jpeg" />
                    <img src="./img/objetos/imgSliders/img05.jpeg" />
                    <img src="./img/objetos/imgSliders/img06.jpeg" />
                    <img src="./img/objetos/imgSliders/img07.jpeg" />
                    <img src="./img/objetos/imgSliders/img08.jpeg" />
                    <img src="./img/objetos/imgSliders/img09.jpeg" />
                    <img src="./img/objetos/imgSliders/img10.jpeg" />
                    <img src="./img/objetos/imgSliders/img11.jpeg" />
                </div>
            </div>
    
        
            <script>
                
                /*clona galería de imágenes, para simular un efecto continuo e infinito*/
                const copy = document.querySelector('.img-slide').cloneNode(true);
                document.querySelector('.contenedor').appendChild(copy);
            
            </script>    
        </body>
        </html>
        
        `
        return divcontent;
     
        }/*Fin armarLoader*/

        
    }