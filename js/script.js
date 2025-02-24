window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation-menu'),
          menuItem = document.querySelectorAll('.navigation-link'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('navigation-menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('hamburger-active');
            menu.classList.remove('navigation-menu_active');        
        });
    });
});
