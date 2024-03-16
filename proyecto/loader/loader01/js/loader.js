window.onload = () => {
    let contenido = document.querySelector(".img-wrapper");
    let loading = document.querySelector(".loader");
    setTimeout(()=>{
        loading.style.display = 'none';
        contenido.style.display ='flex';

    }, 3000)
}