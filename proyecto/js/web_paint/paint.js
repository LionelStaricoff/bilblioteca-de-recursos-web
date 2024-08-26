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

