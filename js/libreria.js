
export class Libreria {
    constructor(titulo,ejemplos,nombre,enlace,object,html,css,js,object){
        this.titulo=titulo;
        this.ejemplos=ejemplos;
        this.nombre=nombre;
        this.enlace=enlace;
        this.vista=vista;
        this.html=html;
        this.css=css;
        this.js=js;
        this.object=object;

    }

    crearSummary(){
        const details = document.createElement("details");
        const summary = document.createElement('summary');
        summary.textContent = this.titulo;
        details.appendChild(summary);
    }

    crearEjemplos(){
        const p = document.createElement("p");
        const ahref = document.createElement("a");
        ahref.href = "#";
        ahref.target = "codeFrame";
        ahref.textContent = this.nombre;
        p.appendChild(ahref);  
        p.addEventListener('click', ()=>verEjemplo(this.enlace, this.vista, this.html,this.css,this.js,this.object))
        details.appendChild(p);  
    }

    
}


