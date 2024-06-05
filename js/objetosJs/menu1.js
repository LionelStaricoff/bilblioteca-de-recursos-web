


export class CrearMenu {
    constructor(padre) {
        this.agregarAlFront(padre);
        
    }
    agregarAlFront(padre = 'iframe') {
        const papa = document.querySelector(padre);
        papa.appendChild(this.armarMenu());
    }
     armarMenu() {
        const divcontent = document.querySelector("#iframe")
        divcontent.srcdoc = `
        
        <head>
        <script src="https://kit.fontawesome.com/2d9fe71672.js" crossorigin="anonymous"></script>
    <style>
        
        .header{
            font-family: sans-serif;
            background-color: #0769e9;
            height: 80px;
            /*para fijar posición de la barra de navegación*/
            position: fixed; 
            width: 100%;
            top:35px;
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
                    height: calc(100%-90px);/*para calcular el alto automáticamente*/
                    overflow-y: auto;/*agrega u scrool cuando sea necesario*/
                    
                    
                    /*Desplazamiento hacia arriba
                    top:100%;
                    left: 0;
                    transition: top 0.3s;*/
                
                    /*Deplazamiento hacia la izquierda
                    top:90px;
                    left: 100%;
                    transition: left 0.3s;*/
                    
                    /*Deplazamiento hacia la derecha*/
                    top:90px;
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
    </style></head>
        
        <section class="header">
        <nav class="nav">
            <a href="#" class="logo nav-link">Tu Logo</a>
            <buttton class="nav-toggle" aria-label="Abrir Menú">
                <i class="fas fa-bars"></i>
            </buttton>
            <ul class="nav-menu">
             
                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">INICIO</a></li>
                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">SOBRE MÍ</a></li>
                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">BLOG</a></li>
                <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">CONTACTO</a></li>
            </ul>
        </nav>
    </section>
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
        `
        return divcontent;
     
        }/*Fin armarMenu*/

        
    }

/*Creando la clase para crear contenido de menú para exportar */

export class Item {
    constructor(enlace, nombre){
        this.enlace = enlace;
        this.nombre = nombre;

        this.newItem = `
                        <a href="${enlace}" class="nav-menu-link nav-link">${nombre}</a>
                        `
    }/*fin constructor */

    agregarAlFront(){
        const front =document.querySelector('.nav-menu');
        const itemMenu = document.createElement('li');
        itemMenu.className ='nav-menu-item';
        itemMenu.innerHTML = this.newItem;
        front.appendChild(itemMenu);
    }


}/*fin class item */
