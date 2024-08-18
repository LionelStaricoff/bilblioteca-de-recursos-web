const Galeria01 = {
  href: "../../proyecto/Galeria01/index.html",
  titulo: "Galería-01",
  html: `<pre><code>
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="styles.css">
      <title>galeria-01</title>
  </head>
  <body>
      <div>
          <img src="img1.jpg" alt="">
          <img src="img2.jpg" alt="">
          <img src="img3.jpg" alt="">
          <img src="img4.jpg" alt="">
      </div>
  </body>
  </html>
  </code></pre>`,
  css: `<pre><code>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  div {
      display: flex;
  }
  div img {
      filter: saturate(50%);
      width: 10%;
      border: 2px solid white;
      min-height: 90vh;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
      cursor: pointer;
  }
  div img:hover {
      filter: saturate(100%);
      width: 100%;
      transition: all ease 2s;
      max-height: 90vh;
  }
  </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
};

const Galeria02 = {
  href: "../../proyecto/Galeria02/index.html",
  titulo: "Galería-02",
  html: `<pre><code>
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="styles.css">
        <title>Galería de imágenes con efecto</title>
    </head>
    <body>
    <div class="galeria">
        <img src="java.png" alt="">
        <img src="css.jpeg" alt="">
        <img src="mysql.jpeg" alt="">
    </div>
        <!-- in -->
        <div class="galeria">
            <img class="in" src="java.png" alt="">
            <img class="in" src="css.jpeg" alt="">
            <img class="in" src="mysql.jpeg" alt="">
        </div>
        <!-- out -->
    <div class="galeria">
        <img class="out" src="java.png" alt="">
        <img class="out" src="css.jpeg" alt="">
        <img class="out" src="mysql.jpeg" alt="">
    
    </body>
    </html>
  </code></pre>`,
  css: `<pre><code>
        .galeria{
            display: flex;
        }
             img{
                 display: block;
                 object-fit: cover;
                 min-width: 50px;
                 width: 300px;
                 flex: 1;
                 transition: flex .5s;
                 height: 200px;
                 gap: 10px;
            }   
            img:hover{ flex: 4; }
        
              /* in */
              .in{
                 display: block;
                 object-fit: cover;
                 min-width: 50px;
                 width: 100%;
                 flex: 4;
                 transition: flex .5s;
                 height: 300px;
                 gap: 10px;
                 border: 1px solid black;
               
            }   
            .in:hover{ flex: 1; }
        
            /* out  combinar el flex 1 con otros valores */
            .out{
                 display: block;
                 object-fit: cover;
                 min-width: 50px;
                 width: 100%;
                 flex: 1;
                 transition: flex .5s;
                 height: 30%;
                 gap: 10px;
                 border: 1px solid black;
               
            }   
            .out:hover{ flex: 3; 
            }
        </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: ["css.jpeg", "java.png", "mysql.jpeg"],
};

const DarkMode01 = {
  href: "../../proyecto/DarkMode01/index.html",
  titulo: "DarkMode-01",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="button_style.css">
    <title>button switch</title>
</head>
<body>
    <div class="button">
        <input type="checkbox"  id="btn_switch">
        <label class="lbl_switch" for="btn_switch">
        </label>
        <img class="img_icon" src="sol-y-luna_negro.png" alt="">
        <img class="img_icon_luz" src="sol-y-luna.png" alt="">
    <div class="fondo"></div>
    </div>
</body>
</html>
</code></pre>`,
  css: `<pre><code>
    :root{
        --fondo: rgb(71, 13, 64);
        --fondo_color: gray;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 100%;
    }
    .fondo{
        height: 100vh;
        width: 100%;
        background-color: var(--fondo);
    }
    .button{
        margin: 1em;
    }
    .lbl_switch{
        display: inline-block;
        width: 5.5em;
        height: 3em;
        background-color: var(--fondo_color);
        border-radius: 10em;
        position: relative;
        cursor: pointer;
    }
    #btn_switch{
        display: none;
    }
    #btn_switch:checked ~ .lbl_switch{
        --fondo_color: aqua;
    }
    #btn_switch:checked ~ .fondo{
        --fondo: rgb(19, 29, 29);
    }
    #btn_switch:checked ~ .img_icon{
        opacity: 0%;
    }
    #btn_switch:checked ~ .img_icon_luz{
        opacity: 100%;
        left: 3.8em;
    }
    .img_icon{
        position: absolute;
        z-index: 1;
        pointer-events: none;
        width: 2.2em;
        height: 2.2em;
        border-radius: 10em;
        top: 1.4em;
        left: 1.5em;
        opacity: 100%;
        transition: .3s;
    }
    .img_icon_luz{
        position: absolute;
        z-index: 1;
        pointer-events: none;
        width: 2.2em;
        height: 2.2em;
        background-color: azure;
        border-radius: 10em;
        top: 1.4em;
        left: 1.5em;
        opacity: 0%;
        transition: .3s;
    }
    </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: ["sol-y-luna_negro.png", "sol-y-luna.png"],
};

const Acordeon01 = {
  href: "../../proyecto/Acordeon01/index.html",
  titulo: "Acordeón-01",
  html: `<pre><code>
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Acordion</title>
    </head>
    <body>
        <div class="acordeon">
        <input id="activar" type="checkbox">
        <label for="activar"><p>Dar click para abrir</p></label>
        <hr>
        <div class="acordion_item">
            <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo tenetur sit quia excepturi, labore est assumenda, possimus ea, nisi voluptatibus aliquam fugit in saepe veritatis esse. Facere, magnam sapiente.</p>
     
            <img class="p" src="five.gif" alt="">
       
        </div>
    </div>
    </body>
    </html>
</code></pre>`,
  css: `<pre><code>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .acordeon{
        width: 80%;
        max-width: 500px;
        padding: 1em;
        margin: 6em auto;
        background-color: aqua;
        box-shadow: 0 0 10px 3px rgb(0 0  10 /5) ;
       border-radius: 6px;
       border-left: 4px solid violet;
    }
    input{
        display: none;
    }
    label p{
        text-align: center;
    }
    hr{
        margin: 1em;
        background:-moz-linear-gradient(right,red,blue,green);
        height: 5px;
    }
    .acordion_item{
        display: grid;
        grid-template-rows: 0fr;
        transition: 0.3s;
    }
    .p{
        overflow: hidden;
    }
     img{
        display: none;
        margin: 1em auto;
        height: 10em;
       width: 10em;
       opacity: 0%;
       transition: 1s;
     }
    #activar:checked ~ .acordion_item{
    
        grid-template-rows: 1fr;
        transition: 0.3s;
    }
    #activar:checked ~ .acordion_item>img{
        display: block;
        opacity: 100%;
        transition: 1s;
    }
    </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [five.gif],
};

const Acordeon02 = {
  href: "../../proyecto/Acordeon02/index.html",
  titulo: "Acordeón-02",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="acordeon.css" />
    <title>Acordeon</title>
  </head>
  <body>
    <div class="accordion">
      <input id="activar" class="checkbox" type="checkbox" />
      <label for="activar" class="accordion_link">Da Clik para abrir
        <hr/>
        <div class="accordion_item">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio cum
            esse obcaecati labore officia quibusdam doloribus distinctio, atque
            enim molestias! Vitae totam quam in repellat error nulla ratione
            quibusdam magni!
          </p>
        </div>
      </label>
    </div>
  </body>
</html>
</code></pre>
    `,
  css: `<pre><code>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html{
        font-size: 100%;
      }
      body{
        background-color: rgba(128, 128, 128, 0.315);
      }
      .accordion{
        background-color: white;
        width: 80%;
        padding: 1.5em;
        margin: 60px auto;
        max-width: 500px;
        box-shadow: 0 0 10px -3px rgb(0, 0, 0, .5);
        border-radius: 6px;
        border-left: 4px solid blueviolet;
      }
      input{
        display: none;
      }
      .accordion_link{
        display: inline-block;
        color: blueviolet;
        transition: 1s;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
      }
      .accordion label:hover{
        padding: 5px;
        box-shadow: 5px 5px 10px rgb(181, 122, 236), -5px 5px 10px rgb(181, 122, 236);
        transition: 1s;
      }
      .accordion_item{
        display: grid;
        grid-template-rows: 0fr;
        transition: 0.3s ;
      }
      p{
        overflow: hidden;
      }
      hr{
        margin: .3em;
        background: -moz-linear-gradient( right,red,blue,green);
        height: 5px;
      }
      .checkbox:checked + .accordion_link > .accordion_item {
       grid-template-rows: 1fr;
       transition: 0.3s ;
      }      
      </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [],
};

const Boton_switch = {
  href: "../../proyecto/Boton_switch/index.html",
  titulo: "Boton_switch",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="boton_switch.css">
    <title>button switch</title>
</head>
<body>
    <div class="button">
        <input type="checkbox"  id="btn_switch">
        <label class="lbl_switch" for="btn_switch">
        </label>
    </div>
</body>
</html>
</code></pre>
    `,
  css: `<pre><code>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
  }
  .button {
    margin: 1em;
  }
  .lbl_switch {
    display: inline-block;
    width: 5.5em;
    height: 3em;
    background-color: gray;
    border-radius: 10em;
    position: relative;
    cursor: pointer;
    border: 1px solid black;
  }
  .lbl_switch::after {
    position: absolute;
    content: "";
    width: 2.2em;
    height: 2em;
    background-color: aqua;
    border-radius: 10em;
    top: 0.4em;
    left: 0.5em;
    transition: 0.3s;
    border: 1px solid black;
  }
  #btn_switch {
    display: none;
  }
  #btn_switch:checked ~ .lbl_switch {
    background-color: aqua;
    border: 1px solid black;
  }
  #btn_switch:checked ~ .lbl_switch::after {
    left: 2.8em;
    border: 1px solid rgb(255, 255, 255);
    background-color: gray;
  }
  #btn_switch:checked ~ .img_icon {
    opacity: 0%;
  }
  #btn_switch:checked ~ .img_icon_luz {
    opacity: 100%;
    left: 3.8em;
  }
  .img_icon {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    width: 2.2em;
    height: 2.2em;
    border-radius: 10em;
    top: 1.4em;
    left: 1.5em;
    opacity: 100%;
    transition: 0.3s;
  }
  .img_icon_luz {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    width: 2.2em;
    height: 2.2em;
    background-color: azure;
    border-radius: 10em;
    top: 1.4em;
    left: 1.5em;
    opacity: 0%;
    transition: 0.3s;
  }  
  </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [],
};

const Boton_carga = {
  href: "../../proyecto/Boton_carga/index.html",
  titulo: "Boton_carga",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="styles.css">
    <title>boton de carga</title>
  </head>
  <body>
    <div class="activar">
      <input id="input" type="checkbox" />
      <div class="barra_buton"></div>
    </div>
  </body>
</html>
</code></pre>
    `,
  css: `<pre><code>
    :root{
        --bar-color: royalblue;
        --fill-size: 0%;
        --desde:-100%;
    }
    /* boton de carga */
    .activar{
      width: 300px;
      height: 300px;
      background-color: aqua;
      margin: 0 auto;
      border-radius: 10px;
      transition: 1s;
    }
    .activar:hover{
     background-color: rgba(7, 54, 124, 0.6);
     border-radius: 50%;
    }
    .activar input{
      width: 100%;
      height: 100%;
      opacity: 5%;
    }
    
    .barra_buton{
      left: 20%;
      display: inline-block;
      position: relative;
        width: 200px;
        height: 20px;
        background-color: #ccc;
        border-radius: 2em;
        overflow: hidden;
        margin: 0 auto ; 
    }
    
    #input:checked ~.barra_buton::before{
      content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--bar-color);
        transform: translateX(var(--desde));
        animation: fill-buton 3s 0s ease-in-out forwards;
    }
    @keyframes fill-buton {
        to{
            transform: translateX(var(--fill-size));
        }
    }
    </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [],
};

const Boton_animado = {
  href: "../../proyecto/Boton_animado/index.html",
  titulo: "Boton_animado",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles.css">
    <title>boton animado</title>
</head>
<body>
    <div class="container">
        <div class="cuadrado"></div>
        <div class="circulo_top"></div>
        <div class="circulo_right"></div>
        <div class="circulo_down"></div>
        <div class="circulo_left"></div>
    </div>
</body>
</html>
</code></pre>
    `,
  css: `<pre><code>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        display: flex;
        justify-content: center;
        margin: 10em  10em  auto  auto;
    }
    .container{
       height:  10rem;
    }
    .cuadrado{
        position: absolute;
        height: 10rem;
        width: 10rem;
        background-color: rgba(255, 0, 0,0.8);
        transition: 0.3s;
        z-index: 1;
    }
    .cuadrado:hover{
        cursor: pointer;
        border-radius: 30%;
        transition: 0.3s;
    }
    .circulo_top{
        position: absolute;
        height: 5rem;
        width: 5rem;
        background-color: rgb(21, 34, 221);
        transition: 0.3s;
        margin: 2.5em   auto  auto 2.5em;
        border-radius: 50%;
    }
    .container:hover .circulo_top{
        transform: translateY(10em);
        transition: 0.3s;
    }
    .circulo_right{
        position: absolute;
        height: 5rem;
        width: 5rem;
        background-color: rgb(84, 221, 21);
        transition: 0.3s;
        margin: 2.5em   auto  auto 2.5em;
        border-radius: 50%;
    }
    .container:hover .circulo_right{
        transform: translateY(-10em);
        transition: 0.3s;
    }
    .circulo_down{
        position: absolute;
        height: 5rem;
        width: 5rem;
        background-color: black;
        transition: 0.3s;
        margin: 2.5em   auto  auto 2.5em;
        border-radius: 50%;
    }
    .container:hover .circulo_down{
        transform: translateX(-10em);
        transition: 0.3s;
    }
    .circulo_left{
        position: absolute;
        height: 5rem;
        width: 5rem;
        background-color: rgb(218, 31, 177);
        transition: 0.3s;
        margin: 2.5em   auto  auto 2.5em;
        border-radius: 50%;
    }
    .container:hover .circulo_left{
        transform: translateX(10em);
        transition: 0.3s;
    }    
    </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [],
};

const Boton_animado02 = {
  href: "../../proyecto/Boton_animado02/index.html",
  titulo: "Boton_animado02",
  html: `<pre><code>
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="styles.css" />
        <title>boton animado 02</title>
      </head>
      <body>
        <button class="boton-02">
          <span><a href="#">Button 02</a></span>
        </button>
      </body>
    </html>
</code></pre>`,
  css: `<pre><code>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    body{
        display: flex;
        justify-content: center;
        margin: 10em  auto;
    }
    .boton-02 {
                width: 150px;
                height: 50px;
                font-family: 'Roboto', sans-serif;
                font-size: 18px;
                font-weight: bold;
                background-color: greenyellow;
                border: 3px outset green;
                border-start-start-radius: 15px;
                border-end-end-radius: 15px;
                box-shadow: -5px 5px 5px rgba(67, 130, 3, 0.84);
                position: relative;
                overflow: hidden;
                display: grid;
                place-content: center;
                cursor: pointer;
    
                span {
                    z-index: 2;
                }
                &::after {
                    content: "";
                    width: 100%;
                    position: absolute;
                    z-index: 1;
                    top: 0;
                    left: calc(-100% - 50px);
                    border-bottom: 50px solid green;
                    border-right: 50px solid transparent;
                    transition: .4s ease-in-out all;
                }
                &:hover::after {
                    left: 0;
                }
                &:hover span a {
                    color: white;
                }
                &:active {
                    transform: scale(90%);
                    color: white;
                }
            }
            </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [],
};

const Centrar_elementos = {
  href: "../../proyecto/Centrar_elementos/index.html",
  titulo: "Centrar_elementos",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Centrar elementos</title>
</head>

<body>
    <main class="body">
        <!--primer contenedor-->
        <div class="container">
            <img src="github.svg" alt="imagen de github" class="img">
        </div>

        <!--segundo contenedor-->
        <div class="container">
            <img src="github.svg" alt="imagen de github" class="img2">
        </div>

        <!--tercer contenedor-->
        <div class="container3">
            <img src="github.svg" alt="imagen de github" class="img3">
        </div>

        <!--cuart0 contenedor-->
        <div class="container4">
            <img src="github.svg" alt="imagen de github" class="img4">
        </div>

        <!--quinta contenedor-->
        <div class="container5">
            <img src="github.svg" alt="imagen de github" class="img5">
        </div>

        <!--sexta contenedor-->
        <div class="container6">
            <img src="github.svg" alt="imagen de github" class="img6">
        </div>

        <!--septima contenedor-->
        <div class="container7">
            <img src="github.svg" alt="imagen de github" class="img7">
        </div>

        <!--octaba contenedor-->
        <div class="container8">
            <img src="github.svg" class="img8">
        </div>

    </main>
</body>

</html>
</code></pre>
    `,
  css: `<pre><code>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 100%;
    }
    
    .body{
        height: 100%;
        background-color: blueviolet;
        display: grid;
        /* align-items: center;
        justify-items: center; */
        place-items: center;
    }
    
    .container{
        padding: 1em;
        width: 25em;
        height: 25em;
        border: 5px solid rgb(0 0 0 /5);
        background-color: aqua;
        margin: 1em 0;
        position: relative;
    }
    
    .img{
        border: 2px solid wheat;
        width: 20em;
        position: absolute;
        inset: 0;
        margin: auto;
    }
    
    /* segundo centrado  utiliza el mismo container que el 
    de arriba*/
    
    .img2{
        border: 2px solid rgb(67, 0, 250);
        width: 20em;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
    }
    
    
    /* tercer contenedor */
    
    .container3{
        padding: 1em;
        width: 25em;
        height: 25em;
        border: 5px solid rgb(0 0 0 /5);
        background-color: aqua;
        margin: 1em 0;
        display: grid;
        place-items: center;
    }
    .img3{
        border: 2px solid rgb(247, 168, 22);
        width: 20em;
    }
    
    /* cuarto contenedor */
    
    .container4{
        padding: 1em;
        width: 25em;
        height: 25em;
        border: 5px solid rgb(0 0 0 /5);
        background-color: aqua;
        margin: 1em 0;
    
        display: grid;
        /* align-items: center;
        justify-items: center; */
    
    }
    
    .img4{
        border: 2px solid rgb(247, 22, 161);
        width: 20em;
      /* la propiedad place-self es la abreviatura de estas dos: */
       /* justify-self: center;
       align-self: center; */
       place-self: center;
    }
    
    
    /* quinta contenedor */
    
    .container5{
        padding: 1em;
        width: 25em;
        height: 25em;
        border: 5px solid rgb(0 0 0 /5);
        background-color: aqua;
        margin: 1em 0;
        display: grid;
    }
    
    .img5{
        border: 2px solid rgb(57, 224, 15);
        width: 20em;
        margin: auto;
    }
    
    /* sexta contenedor */
    
    .container6{
        padding: 1em;
        width: 25em;
        height: 25em;
        border: 5px solid rgb(0 0 0 /5);
        background-color: aqua;
        margin: 1em 0;
        display: flex;
    }
    
    .img6{
        border: 2px solid rgb(224, 15, 25);
        width: 20em;
        margin: auto;
    }
    
    /* septima contenedor */
    
    .container7{
        padding: 1em;
        width: 25em;
        height: 25em;
        border: 5px solid rgb(0 0 0 /5);
        background-color: aqua;
        margin: 1em 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .img7{
        border: 2px solid rgb(36, 36, 36);
        width: 20em;
    }
    
    /* octava contenedor */
    
    .container8{
        padding: 1em;
        width: 25em;
        height: 25em;
        border: 5px solid rgb(0 0 0 /5);
        background-color: aqua;
        margin: 1em 0;
        display: grid;
    }
    .img8{
        border: 2px solid rgb(224, 25, 25);
        width: 20em;
        justify-self: center;
        align-self: center
    }
    </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [github.svg],
};

const Barra_de_carga = {
  href: "../../proyecto/Barra_de_carga/index.html",
  titulo: "Barra_de_carga",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles.css">
    <title>Barra</title>
</head>
<body>
    <div class="progress-bar"></div>
</body>
</html>
</code></pre>
    `,
  css: `<pre><code>
    
:root{
    --bar-color: royalblue;
    --fill-size: 0%;
    --desde:-100%;
}
.progress-bar{
    position: relative;
    width: 200px;
    height: 20px;
    background-color: #ccc;
    border-radius: 2em;
    overflow: hidden;
    margin: 2em auto;
}
.progress-bar::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--bar-color);
    transform: translateX(var(--desde));
    animation: fill-bar 3s 1s ease-in-out forwards;
}
@keyframes fill-bar {
    to{
        transform: translateX(var(--fill-size));
    }
}

</code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [],
};

const Spinner = {
  href: "../../proyecto/Spinner/index.html",
  titulo: "Spinner",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles.css">
    <title>Spinner</title>
</head>
<body>
    <div class="spiner"></div>
</body>
</html>
</code></pre>
    `,
  css: `<pre><code>
.spiner{
    margin: 10em auto;
    border: 4px solid rgba(0, 0, 0, .1);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border-left-color: #09f;
    animation: spin 1s ease infinite;
}
@keyframes spin{
    0%{
        transform: rotate(0deg);
    }
    100%{
     transform: rotate(360deg);
    }
}
</code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [],
};

const Paint = {
  href: "../../proyecto/Paint/index.html",
  titulo: "Paint",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>paint</title>
</head>
<body>
    <nav>
    <button id="borrar">borrar</button>
    <input id="color" type="color">
</nav>
<canvas width="600" height="500"></canvas>

</body>
<script src="paint.js"></script>

</html>
</code></pre>
    `,
  css: `<pre><code>
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }
    body{
        background-color: blue;
    }
    #borrar , #color{
        height: 3em;
        font-size: 100%;
    }
    nav{
        display: flex;
        align-content: center;
        justify-content: center;
    }
    </code></pre>`,
  js: `
    let pantalla = document.querySelector("canvas");
    let pincel = pantalla.getContext("2d");
    
    pincel.fillStyle = "grey";
    pincel.fillRect(0,0,600,400);
    //clearRect sirve para crear otro rectanguno o borrar por zonas segun se use
    //pincel.clearRect(20, 20, 100, 50);
    
    
    //evento: se refiere al mouse cuando hace click
    //esta funcion indica en que jugar de la pantalla hace click el mouse
    function exibirAlerta(evento){
        let x = evento.pageX - pantalla.offsetLeft; //resta de la pantalla lo que no pertenece al canvas del lado izquierdo como el margin
        let y = evento.pageY - pantalla.offsetTop;
        alert(x + ", " + y);
    }
    
    var puedoDibujar= false;
    
    function dibujarCirculo(evento){
        let x = evento.pageX - pantalla.offsetLeft;
        let y = evento.pageY - pantalla.offsetTop;
    
    //funcionalidad para cambiar de color
    let color = document.querySelector("#color").value;
    
      if(puedoDibujar){
        pincel.fillStyle= color;
        pincel.beginPath();
        pincel.arc(x,y,10,0,2*Math.PI);
        pincel.fill();
      }
    }
    
    function borrarPantalla(){
      pincel.fillStyle = "grey";
      pincel.fillRect(0,0,600,400);
    }
    
    function pintar(){
        puedoDibujar = true;
        pantalla.onmousemove = dibujarCirculo;
    }
     function pintarOf(){
        puedoDibujar = false;
        pantalla.onmousemove = null;
     }
    
    //funcionalidad del boton borrar
    let btnBorrar = document.querySelector("#borrar");
    btnBorrar.onclick = borrarPantalla;
    
    //funcionalidad para dibujar circulos en pantalla
    pantalla.onmousedown = pintar;
    pantalla.onmouseup = pintarOf;
    
    `,
    objeto: `<pre><code></code></pre>`,
  imagenes: [],
};

const Menu_responsive = {
  href: "../../proyecto/Menu_responsive/index.html",
  titulo: "Menu_responsive",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Menu Responsive</title>
  </head>
  <body>
    <main>
      <nav class="navbar">
        <h1>Menu</h1>
        <input class="checkbox" type="checkbox" />
        <img class="icon amb" src="./svg/menu.svg" alt="Menú"/>
        <img class="icon x" src="./svg/close.svg" alt="Cierra Menú" />

        <ul class="menu">
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Cursos</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </main>
  </body>
</html>
</code></pre>

    `,
  css: `<pre><code>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  .navbar {
    background-color: aquamarine;
    height: 4em;
    padding: 1em;
    position: relative;
  }
  
  /* colocar el checkbox y las imagenes del mismo tamaño */
  .checkbox,
  .icon {
    height: 3em;
    width: 3em;
    position: absolute;
    top: .5em;
    right: 1em;
    cursor: pointer;
  }
  
  /* el para que no le haga caso a las imagenes y si al check */
  .icon {
    pointer-events: none;
    font-size: 1em;
  }
  .checkbox {
    opacity: 0;
  }
  .checkbox:checked ~ .amb {
    display: none;
  }
  .x {
    display: none;
  }
  .checkbox:checked ~ .x {
    display: block;
  }
  .menu {
    width: 20em;
    position: absolute;
    top: -12em;
    z-index: -1;
    right: 0em;
    transition: 250ms;
  }
  .menu li {
    list-style: none;
  }
  
  .menu li a {
    text-decoration: none;
    color: inherit;
    background-color: rgba(40, 230, 230, 0.3);
    display: block;
    padding: 1.3em 1em;
    text-align: center;
  }
  
  .menu li a:hover {
    background-color: rgba(40, 230, 230, 0.6);
  }
  
  .checkbox:checked ~ .menu {
    top: 3.8em;
  }
  
  @media (min-width: 560px) {
    .checkbox,
    .amb,
    .x {
      display: none;
    }
    
    .menu {
      top: 0;
      z-index: 1;
      width: unset;
      display: flex;
    }
  
  
    .menu li a {
      height: 4em;
      padding: 1.3em 1em;
      place-content: center;
    }
  }
  
  </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: ["close.svg", "menu.svg"],
};

const Slider_01 = {
  href: "../../proyecto/Slider_01/index.html",
  titulo: "Slider_01",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
    <title>Slider</title>
</head>
<body>
    <section id="slider">
        <div><img src="img/full_stack_java_codoacodo.jpg" alt="Imagen 1"></div>
        <div><img src="img/spring_codoacodo.jpg" alt="Imagen 2"></div>
        <div><img src="img/titulo_spring_alura.jpg" alt="Imagen 3"></div>
      </section>
</body>
</html>
</code></pre>
    `,
  css: `<pre><code>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
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
  
  /* para en modo mobile*/
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
  </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [
    "full_stack_java_codoacodo.jpg",
    "spring_codoacodo.jpg",
    "titulo_spring_alura.jpg",
  ],
};

const Slider_02 = {
  href: "../../proyecto/Slider_02/index.html",
  titulo: "Slider_02",
  html: `<pre><code>
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
    <title>Slider</title>
</head>
<body>
  
    <section id="slider">
      <figure class="picture">
        <img  src="img/YoAnimado.jpeg" alt="soy yo animado">
        <figcaption class="caption">AGUSTIN MOLDAVSKY</figcaption>
        <p>
          Hola! Soy un apasionado desarrollador full stack Java con experiencia en el desarrollo de aplicaciones web y API REST robustas. Me especializo en la creación de proyectos innovadores utilizando las últimas tecnologías como Java, Spring Boot, Hibernate, HTML, CSS, JavaScript, pruebas unitarias con JUnit y Mockito, patrones de diseño MVC y TDD, y bases de datos MySQL. Tengo experiencia en el desarrollo de aplicaciones web utilizando Spring Boot y su suite. Además, tengo la capacidad para trabajar en equipo y resolver problemas de manera efectiva. <br>
          <i>¡Es un placer conocerte!</i>
        </p>
      </figure>
      
        
        <div><img src="img/Moldavsky Rodoni Agustin German-codoAcodo_page-0001.jpg" alt="Imagen 1"></div>
        <div><img src="img/Moldavsky Agustín 34430871_page-0001.jpg" alt="Imagen 2"></div>
        <div><img src="img/Curriculum Vitae Contadora Minimalista Moderno_page-0001.jpg" alt="Imagen 3"></div>
      </section>
</body>
</html>
</code></pre>
    `,
  css: `<pre><code>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", "Franklin Gothic Light";
  }
  body{
    min-height: auto;
  }
  #slider {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    height: 100vh;
  
    figure {
      position: fixed;
      width: 10em;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      height: 2em;
  
      figcaption {
        margin-top: 5px;
        padding: 5px;
        color: white;
        font-weight: bold;
        letter-spacing: .15em;
        background-color: rgba(58, 112, 73, 0.9);
        border-radius: 15px 15px 0 0;
      }
  
      img {
        width: 10em;
        height: 10em;
        object-fit: cover;
        align-self: center;
        justify-content: center;
        border-radius: 50%;
        outline: 5px solid black;
        filter: drop-shadow(2px 2px 10px rgba(58, 112, 73, 0.9));
      }
  
      p {
        font-size: 1.3rem;
        width: 50rem;
        transform: translateX(-320px);
        background-color: rgba(58, 112, 73, 0.9);
        border-radius: 15px;
        color: #fff;
        padding: 15px 15px 80px;
        line-height: 1.35em;
  
        @media (width <768px) {
          width: 26rem;
          transform: translateX(-140px);
          font-size: 1.4rem;
        }
        @media (width < 420px) {
          width: 20rem;
          transform: translateX(-90px);
          font-size: 1.2rem;
        }
      }
    }
  
    div {
      flex: 0 0 100%;
      scroll-snap-align: start;
      animation: slide 12s alternate 2;
      background-color: aqua;
  
      @media screen {
        @media (width < 617px) {
          animation: slide2 12s alternate 2;
        }
  
        @media screen and (orientation: landscape) {
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
      transform: translateX(-250%);
    }
  }
  
  .caption {
    text-align: center;
  }
  
  .picture {
    text-align: center;
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
  
  </code></pre>`,
  js: `<pre><code></code></pre>`,
  objeto: `<pre><code></code></pre>`,
  imagenes: [
    "Curriculum Vitae Contadora Minimalista Moderno_page-0001.jpg",
    "Moldavsky Agustín 34430871_page-0001.jpg",
    "Moldavsky Rodoni Agustin German-codoAcodo_page-0001.jpg",
    "YoAnimado.jpeg",
  ],
};

const CartelNotificacion = {
  href = "../proyecto/CartelNotificacion/index.html",

  titulo:"Cartel Error con emoji",
        href:()=> new objs.CartelNotificacion(".ejemplo"),
        html:
        `<pre><code>
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles.css">
    <title>Spinner</title>
</head>
<body>
       <div class="ad-content">
          <div class="ad-icon">
            <img src='${this._iconSrc}' alt="Icono" />
          </div>
          <p class="ad-message">${this._message}</p>
        </div>

        </body>
</html>
</code></pre>
    `,
        css: `<pre class="codigo"><code>
      .ad {
          width: calc(100% - 32px);
          position: fixed;
          z-index: 10;
          top: -500px;
          left: 0;
          display: flex;
          justify-content: center;
          pointer-events: none;
          z-index: 9999;
        }
        
      @keyframes slide-up {
        to { top: 50%; left: 50%; 
        transform: translate(-50%, -50%); 
        }
      }

        @keyframes slide-down {
          to { top: -400px; }
        }
        .ad-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ad-icon {
          width: 72px;
          height: 72px;
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
          display: flex; 
          justify-content: center; 
          align-items: center; 
          margin-bottom: -4px;
          z-index: 11;
        }
        .ad-icon img {
          height: 50px;
        }
        .ad-message {
          min-width: 280px;
          width: calc(100% - 32px);
          min-height: 48px;
          border-radius: 4px;
          font-family: Roboto, sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 10px 20px; 
          text-align: center;
          align-content: center;
          letter-spacing: 0.3px;
        }
        .ad-success .ad-message {
          background-color: ${this._colors.success.background};
          border: 1px solid ${this._colors.success.border};
        }
        .ad-error .ad-message {
          background-color: ${this._colors.error.background};
          border: 1px solid ${this._colors.error.border};
        }
      
        
        
        </code></pre>`,
        js: `<pre class="codigo"><code>
    new Notificacion(
    '../img/emojis/mueca.png', 
    '¡Ups, algún dato es incorrecto!', 
    'error');

        </code></pre>`,
        objeto: `<pre class="codigo"><code>
        
        import {CartelNotificacion} from  ' ${url} ';

export class Notificacion {
  constructor(iconSrc, message, type = 'success', padre = 'body', colors = {}) {
    this._iconSrc = iconSrc;
    this._message = message;
    this._type = type;
    this._padre = document.querySelector(padre);
    this._colors = {
      success: { background: '#7BF087', border: '#31c140' },
      error: { background: '#fa9f9f', border: '#C00D0D' },
      
    };

    this.createNotification();
  }

  createNotification() {

    this.agregarCss();

    this._notificationElement = document.createElement('div');

    this._notificationElement.classList.add('ad', 'ad-${this._type}');

    this._notificationElement.innerHTML = '
      <div class="ad-content">
        <div class="ad-icon">
          <img src="${this._iconSrc}" alt="Icono" />
        </div>
        <p class="ad-message">${this._message}</p>
      </div>
    ';

    this._padre.appendChild(this._notificationElement);

    // Usé requestAnimationFrame para asegurar que el elemento esté renderizado
    requestAnimationFrame(() => {
      this._notificationElement.style.animation = 'slide-up 0.5s forwards';

    });

    // Programar la animación de salida
    setTimeout(() => {
      this._notificationElement.style.animation = 'slide-down 2.5s forwards';
      // Eliminar el elemento después de la animación
      setTimeout(() => this.removeNotification(), 500);
    }, 2500);
  }

  removeNotification() {
    if (this._notificationElement && this._notificationElement.parentNode) {
      this._notificationElement.parentNode.removeChild(this._notificationElement);
    }
  }
  
  agregarCss() {
    if (!document.querySelector('#notificationStyles')) {
      const head = document.querySelector('head');
      const style = document.createElement('style');
      style.id = 'notificationStyles';
      style.innerText = '
        .ad {
          width: calc(100% - 32px);
          position: fixed;
          z-index: 10;
          top: -500px;
          left: 0;
          display: flex;
          justify-content: center;
          pointer-events: none;
          z-index: 9999;
        }
        
      @keyframes slide-up {
        to { top: 50%; left: 50%; 
        transform: translate(-50%, -50%); 
        }
      }

        @keyframes slide-down {
          to { top: -400px; }
        }
        .ad-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ad-icon {
          width: 72px;
          height: 72px;
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
          display: flex; 
          justify-content: center; 
          align-items: center; 
          margin-bottom: -4px;
          z-index: 11;
        }
        .ad-icon img {
          height: 50px;
        }
        .ad-message {
          min-width: 280px;
          width: calc(100% - 32px);
          min-height: 48px;
          border-radius: 4px;
          font-family: Roboto, sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 10px 20px; 
          text-align: center;
          align-content: center;
          letter-spacing: 0.3px;
        }
        .ad-success .ad-message {
          background-color: ${this._colors.success.background};
          border: 1px solid ${this._colors.success.border};
        }
        .ad-error .ad-message {
          background-color: ${this._colors.error.background};
          border: 1px solid ${this._colors.error.border};
        }
      ';

    // document.head.appendChild(style);
  }
}
}

// Instancias 

// const datoIncorrecto = new Notificacion('../img/emojis/mueca.png', '¡Ups, algún dato es incorrecto!', 'error');


// const pedidoFinalizado = new Notificacion('../img/emojis/guiño.png', '¡Excelente, pedido finalizado!', 'success');


        </code></pre>`
    }
}