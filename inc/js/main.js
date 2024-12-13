function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    const menuToggle = document.querySelector('.menu-toggle');

    menuContainer.classList.toggle('menu-open');
    if (menuContainer.classList.contains('menu-open')) {
        menuContainer.style.height = `${menuContainer.scrollHeight}px`;
    } else {
        menuContainer.style.height = 0;
    }
}

function toggleSubmenu(event) {
    const submenu = event.target.nextElementSibling;

    if (submenu) {
        const isOpen = submenu.classList.contains('submenu-open');
        submenu.classList.toggle('submenu-open', !isOpen);
        submenu.style.height = isOpen ? 0 : `${submenu.scrollHeight}px`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

    document.querySelectorAll('.submenu-toggle').forEach(button => {
        button.addEventListener('click', toggleSubmenu);
    });
});
