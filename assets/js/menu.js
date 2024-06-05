document.addEventListener('DOMContentLoaded', function() {
    // menu principal
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menu.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
        if (!menu.contains(e.target) && menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });

    menu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // desplazamiento
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const offsetPosition = (document.getElementById(this.getAttribute('href').substring(1)).getBoundingClientRect().top) + window.pageYOffset - heightMenu;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            menu.classList.remove('open');
            sidebar.classList.remove('open');
        });
    });

    let heightMenu = 0
    // Para verificar si esta en en un ancho de 769px
    function handleMediaQueryChange(event) {
        if (event.matches) {
            heightMenu=160;
        } else {
            heightMenu=90;
        }
    }
    const mediaQueryList = window.matchMedia("only screen and (orientation:portrait), (max-width: 768px)");
    mediaQueryList.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQueryList);



    const menuToggleSecondary = document.querySelector('.menu-toggle-secondary');
    const sidebar = document.querySelector('.sidebar');

    menuToggleSecondary.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });

    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !menuToggleSecondary.contains(e.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    menuToggleSecondary.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});


