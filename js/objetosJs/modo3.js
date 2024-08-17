export class CrearObjeto3 {
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
        body[data-bg="DARK"]{
        filter: grayscale(100%);
        background-color: black;
    }

    body[data-bg="LIGHT"]{
    filter: grayscale(0);
    background-color: pink;
    }

    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 20px;
        background-color: pink;
        color:royalblue;
        button{
            padding: 1.5em;
            font-weight: bolder;
            border-radius: 10px;
            border: 5px solid rgb(20, 94, 69);
            background-color: aqua;
            transition: 0.5s ease-in-out all;
            &:hover{
                transform: scale(0.9);
            }
        }
    }

    </style>

</head>

<body data-bg="LIGHT">

    <h1>Haz click para cambiar el tema!</h1>
    <button id="btn-theme">DARK MODE</button>

<script>
    const btn = document.getElementById("btn-theme");

    btn.addEventListener('click', () => {

        const currentTheme = document.body.getAttribute('data-bg');
        console.log("actual: " +currentTheme);
        document.body.setAttribute('data-bg', currentTheme === 'LIGHT' ? 'DARK':'LIGHT'); //Obtener el nuevo tema con operador ternario
        
        console.log("NUEVO: "+ currentTheme);// Actualizar el atributo data-bg con el nuevo tema
        btn.textContent = currentTheme + ' MODE';// Actualizar el texto del botón con el nuevo tema
    });
</script>
</body>

        `
        return divcontent;
     
        }/*Fin armar*/

        
    }