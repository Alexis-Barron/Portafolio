// menu.js

// Script para controlar la apertura y cierre del menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu ul li a');

// Evento para cambiar el icono y abrir/cerrar el menú
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('open'); // Cambia el icono a "X"
});

// Cerrar el menú cuando se hace clic en un enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open'); // Cerrar el menú
    });
});

// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});
