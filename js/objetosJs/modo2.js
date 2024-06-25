
export class CrearObjeto2 {
    constructor(padre) {
        this.agregarAlFront(padre);
        
    }
    agregarAlFront(padre = 'iframe') {
        const papa = document.querySelector(padre);
        papa.appendChild(this.armar());
    }
     armar() {
        const divcontent = document.querySelector("#iframe")
        divcontent.srcdoc = `
        <head>
        
            <title>Cambiar entre modo Claro y Oscuro</title>
            <style>
                section[data-bg="DARK"]{
                    background-color: black;
                    color:white;
                }
        
                section[data-bg="LIGHT"]{
                    background-color: white;
                    color:black;
                }
        
                section{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    gap: 20px;
                    button{
                        padding: 1.5em;
                        font-weight: bolder;
                        border-radius: 10px;
                        border: 5px solid #fea;
                        transition: 0.5s ease-in-out all;
                        &:hover{
                            transform: scale(0.9);
                        }
                    }
                }
        
            </style>
        </head>
        
        <body>
            <section class="body" data-bg="LIGHT">
        
                <h1>Haz click para cambiar el tema!</h1>
                <button id="btn-theme">DARK MODE</button>
                
            </section>
        
            <script>
                const btn = document.getElementById("btn-theme");
                btn.addEventListener('click', () => {
                    const theme = document.querySelector(".body");
                    const currentTheme = theme.getAttribute('data-bg');
                    console.log("actual: " +currentTheme);
                    theme.setAttribute('data-bg', currentTheme === 'LIGHT' ? 'DARK':'LIGHT'); //Obtener el nuevo tema con operador ternario
                    
                    console.log("NUEVO: "+ currentTheme);// Actualizar el atributo data-bg con el nuevo tema
                    btn.textContent = currentTheme + ' MODE';// Actualizar el texto del botón con el nuevo tema 
                });
            </script>
        </body>


        `
        return divcontent;
     
        }/*Fin armar*/

        
    }