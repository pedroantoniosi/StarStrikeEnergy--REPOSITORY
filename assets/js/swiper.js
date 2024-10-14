
// Inicializa o swiper após o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', function() {
        var showcaseSlider = document.getElementById('showcaseSlider');
        var windowWidth = window.innerWidth;
    
        if (windowWidth >= 768) {
            showcaseSlider.swiper.params.slidesPerView = 3;
        } else {
            showcaseSlider.swiper.params.slidesPerView = 1;
        }
    
        showcaseSlider.swiper.update(); // Atualiza o swiper
    });

    
    var showcaseSlider = document.getElementById('showcaseSlider');

    // Inicializa o swiper
    var swiper = new Swiper(showcaseSlider, {
        // Opções do swiper
        // Você pode adicionar outras opções aqui
    });

    showcaseSlider.swiper = swiper; // Adiciona a instância do swiper ao elemento
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', function() {
        var showcaseSlider = document.getElementById('newsSlider');
        var windowWidth = window.innerWidth;
    
        if (windowWidth >= 768) {
            showcaseSlider.swiper.params.slidesPerView = 4;
        } else {
            showcaseSlider.swiper.params.slidesPerView = 1;
        }
    
        showcaseSlider.swiper.update(); // Atualiza o swiper
    });

    
    var showcaseSlider = document.getElementById('showcaseSlider');

    // Inicializa o swiper
    var swiper = new Swiper(showcaseSlider, {
        // Opções do swiper
        // Você pode adicionar outras opções aqui
    });

    showcaseSlider.swiper = swiper; // Adiciona a instância do swiper ao elemento
});