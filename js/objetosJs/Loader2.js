

export class crearLoader {
    constructor(padre) {
        this.agregarAlFront(padre);
        this.agregarStyle();
    }
    agregarAlFront(padre = 'body') {
        const papa = document.querySelector(padre);
        papa.appendChild(this.armarLoader());
    }
     armarLoader() {
        const divcontent = document.createElement("div");
        divcontent.className = 'loader-content';

        const loader = document.createElement("div");
        loader.className = 'loader';

        divcontent.appendChild(loader);
        return divcontent;
     
        }
        agregarStyle(){
            const style = document.querySelector('head')
            
            style.innerHTML+=`<style>
  
                      
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
    
        </style>`
        }
    }


