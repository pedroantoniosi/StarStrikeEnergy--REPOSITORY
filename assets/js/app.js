// Função para animar a rolagem suavemente até o topo
function scrollToTop() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 12);
    }
}// Adiciona um evento de clique ao botão para chamar a função scrollToTop
document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);


toggleBtn.addEventListener('click', () => {
 console.log('worked')
});


window.addEventListener('scroll', () => {
    const headerInner = document.querySelector('.header-inner');
    const scrollPosition = window.scrollY;
    headerInner.classList.toggle('active', scrollPosition > 200);
});