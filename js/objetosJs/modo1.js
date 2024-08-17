

export class CrearObjeto1 {
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
                        .__dark {
                            background: black;
                            color: white;
                            font-family: 'Courier New', Courier, monospace;
                            button{
                                padding: 1.5em;
                                background-color:gray;
                                border-radius: 5px;
                                border: 2px solid white;
                                transition: transform 0.2s;
                                &:active{
                                    transform: scale(0.85);
                                }
                            }    
                        }
        
                        .__light {
                            background: lightcoral;
                            color: black;
                            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        
                            button{
                                padding: 1.5em;
                                background-color:aqua;
                                border-radius: 5px;
                                border: 2px dotted black;
                                transition: transform 0.2s;
                                &:active{
                                    transform: scale(0.85);
                                }
                            }
                    }
        
            </style>
        </head>
        
    <section class="theme-container __light">
        
            <h1>Haz clicK para cambiar el tema!</h1>
            <button id="btn-theme">CAMBIAR MODO</button>
        <script>
                const btn = document.getElementById("btn-theme");
                
                btn.addEventListener('click', () => {
                    const theme = document.querySelector('.theme-container');
                    theme.classList.toggle("__dark");
                    theme.classList.toggle("__light");
                
                });
        </script>
    </section>    


        
        `
        return divcontent;
     
        }/*Fin armar*/

        
    }