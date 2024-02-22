// Obtener todos los enlaces dentro del menú
const enlacesMenu = document.querySelectorAll('nav ul li a');

// Recorrer cada enlace y agregar un evento de clic
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Cerrar el menú al hacer clic en cualquier enlace
        document.getElementById('check').checked = false;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const checkBtn = document.getElementById("check-2");
    const menuMobile = document.querySelector(".menuMobile");

    checkBtn.addEventListener("change", function () {
        menuMobile.style.transform = checkBtn.checked ? "translateX(0)" : "translateX(100%)";
    });

    // Cierra el menú si se hace clic en un enlace del menú
    const menuLinks = document.querySelectorAll(".menuMobile .listado a");
    menuLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            checkBtn.checked = false;
            menuMobile.style.transform = "translateX(100%)";
        });
    });
});


