document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.reveal');

    const showImages = () => {
        const triggerBottom = window.innerHeight * 0.8;

        images.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;

            if (imgTop < triggerBottom) {
                img.classList.add('show');
            } else {
                img.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', showImages);
    showImages(); // Para que funcione al cargar la página
});



// ! Trasncion suave al clickear en HOME.

    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // ! Realizamos la lista de destinos para que el usuario interactue.

    const btnSend = document.querySelector('.deleteAll-btn')

    const btnEnviar = () => {
    alert ('Destiny send')
    }

    btnSend.addEventListener('click', btnEnviar);


    