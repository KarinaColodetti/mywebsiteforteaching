document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuIcon = document.querySelector('.mobile_menu_icon');
    const mobileMenu = document.querySelector('.menu');

    mobileMenuIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle ('mobile_menu_open');
    });
});
