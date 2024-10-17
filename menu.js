const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu ul li a');


menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('open'); 
});


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open'); 
    });
});


AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});
