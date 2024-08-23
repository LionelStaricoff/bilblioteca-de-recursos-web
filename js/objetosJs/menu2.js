export class CrearMenuVertical{
    constructor(item1,href1,item2,href2,item3,href3,item4,href4,item5,href5,item6,href6, foto, nombre,padre){
        this.item1=item1;
        this.href1=href1 ?? '#';
        this.item2=item2;
        this.href2=href2?? '#' ;
        this.item3=item3;
        this.href3=href3 ?? '#';
        this.item4=item4;
        this.href4=href4 ?? '#';
        this.item5=item5;
        this.href5=href5 ?? '#';
        this.item6=item6;
        this.href6=href6 ?? '#';
        this.foto=foto;
        this.nombre=nombre;
        this._padre= padre;

        this.agregarAlFront();
    }

    agregarAlFront(){
        this.cargarStyle();
        const padre = document.querySelector(this._padre);
        padre.append(this.crearIconMenuHamburguesa(), this.crearControladorMenu(),this.armarMenuVertical());
    }

    crearIconMenuHamburguesa = ()=>{

        /*ICON MENU HAMBURGUESA */
        const header = document.createElement("header");
        header.className = "header";
            
        header.innerHTML=`
                    <div class="btn_menu">
            <label for="btn_menu" title="Presionar para ver el menu desplegable vertical">☰</label>
        </div>
            `;  
        return header;      
    }

    crearControladorMenu=()=>{
        const input= document.createElement("input");
            input.type="checkbox";
            input.id="btn_menu";
        return input;
    }

    armarMenuVertical = () =>{

            const contenedor = document.createElement("div");
            contenedor.className="container_menu";

            /*Creación menú----------------------------------------------*/
                const menu= document.createElement("div");
                menu.className="menu";

                    /*PROFILE */
                    if(this.foto&&this.nombre){
                        const profile= document.createElement("div")
                        profile.className="profile";
                            const photo=document.createElement("div");
                            photo.id="photo";
                                const img=document.createElement("img");
                                img.src=this.foto;
                                img.alt="Imagen de Perfil o Logo";
                            photo.appendChild(img);   
                            const name=document.createElement("div");
                            name.id="name";
                                const span=document.createElement("span");
                                span.textContent=`${this.nombre}`; 
                            name.appendChild(span);
                        profile.append(photo, name);
                        menu.appendChild(profile)
                    }

                    /*NAV */
                    const nav = document.createElement("nav");
                        if(this.item1){
                            const enlace1 = document.createElement("a");
                            enlace1.href=this.href1;
                            enlace1.textContent=`${this.item1}`
                            nav.appendChild(enlace1);
                        }

                        if(this.item2){
                            const enlace2 = document.createElement("a");
                            enlace2.href=this.href2;
                            enlace2.textContent=`${this.item2}`
                            nav.appendChild(enlace2);
                        }

                        if(this.item3){
                            const enlace3 = document.createElement("a");
                            enlace3.href=this.href3;
                            enlace3.textContent=`${this.item3}`
                            nav.appendChild(enlace3);
                        }

                        if(this.item4){
                            const enlace4 = document.createElement("a");
                            enlace4.href=this.href4;
                            enlace4.textContent=`${this.item4}`
                            nav.appendChild(enlace4);
                        }

                        if(this.item5){
                            const enlace5 = document.createElement("a");
                            enlace5.href=this.href5;
                            enlace5.textContent=`${this.item5}`
                            nav.appendChild(enlace5);
                        }

                        if(this.item6){
                            const enlace6 = document.createElement("a");
                            enlace6.href=this.href6;
                            enlace6.textContent=`${this.item6}`
                            nav.appendChild(enlace6);
                        }
                    
                    /*LABEL DE CIERRE */
                    const cierreMenu = document.createElement("div");
                    cierreMenu.innerHTML=`<label for="btn_menu">X</label>`;

                menu.append(nav, cierreMenu);    
                /*Fin Creación menú----------------------------------------------*/

            contenedor.appendChild(menu);

        return contenedor;    
    }/*fin armarMenuVertical */

    cargarStyle=()=>{
        const head = document.querySelector('head');
        const style = document.createElement('style');
        style.innerText =`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body{

    background: #000000;

    header{
        position: absolute;
        top: 40px;
        left:40px;
        .btn_menu{
            float: left;
            line-height: 100px;
            left: 10px;
            top: 5px;
            label{
                color: white;
                font-size: 30px;
                cursor: pointer;

            }
        }
    }


    #btn_menu{
        display: none;
        &:checked ~ .container_menu {
            opacity: 1;
            visibility: visible;
        }
        &:checked ~ .container_menu .menu{
            transform: translateX(0%);
        }
        
        
    }/*fin btn_menu*/


    .container_menu{
        position:relative;
        background: #000000;
        width: 200px;
        height: 100%;
        padding-bottom: 50px;
        top: 0;
        left: 0;
        transition: all 500ms ease;
        opacity: 0;
        visibility: hidden;
        
        

        .menu{
            transform: translateX(-100%);
            .profile{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 10px;
                

                #photo{
                    img{
                        width: 100px;
                    }
                }
                #name{
                    span{
                        color:#d6dd75;
                        text-align: center;
                    }
                }
            }/*fin profile*/
            nav{
                transform: translateY(15%);
                a{
                    display: block;
                    text-decoration: none;
                    font-size: 20px;
                    color:darkgoldenrod;
                    transition: all 500ms ease;
                    border-left: 10px solid transparent;
                    border-top: 2px solid transparent;
                    border-bottom: 2px solid transparent;
                    line-height: 24px;
                    padding: 20px;
                    &:hover{
                        border-left: 10px solid #d6dd75;
                        border-top: 2px solid #d6dd75;
                        border-bottom: 2px solid #d6dd75;
                        background: #201402;
                        font-size: 24px;
                    }
                }

            }/*fin nav*/
            label{
                position:absolute;
                right: 5px;
                top: 10px;
                color:darkgoldenrod;
                cursor:pointer;
                font-size: 20px;
            }/*fin label de cierre*/
        }/*fin container_menu*/

}
}/*fin Body*/
        
        `
        head.appendChild(style);
    }

    getElement(){
        return this.element
    }


}/*fin class CrearMenuVertical. */