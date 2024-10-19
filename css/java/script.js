// script.js

// Script para mostrar mais produtos
const moreProductsButton = document.getElementById('more-products');
const productGrid = document.getElementById('product-grid');

moreProductsButton.addEventListener('click', () => {
    productGrid.style.display = 'grid'; // Mostra os produtos ao clicar no botão
});
