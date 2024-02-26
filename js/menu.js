// Obtener todos los enlaces dentro del menú
const enlacesMenu = document.querySelectorAll('nav ul li a');

// Recorrer cada enlace y agregar un evento de clic
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Cerrar el menú al hacer clic en cualquier enlace
        document.getElementById('check').checked = false;
    });
});


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







