// script.js

// Script para mostrar mais produtos
const moreProductsButton = document.getElementById('more-products');
const productGrid = document.getElementById('product-grid');

moreProductsButton.addEventListener('click', () => {
    productGrid.style.display = 'grid'; // Mostra os produtos ao clicar no botão
});



function moveSlide(button, direction) {
    const carousel = button.parentElement;
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    // Remove a classe 'active' da imagem atual
    images[currentIndex].classList.remove('active');

    // Calcula o novo índice
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1; // Volta para a última imagem se estiver no início
    if (currentIndex >= images.length) currentIndex = 0; // Volta para a primeira imagem se estiver no final

    // Adiciona a classe 'active' na nova imagem
    images[currentIndex].classList.add('active');
}
