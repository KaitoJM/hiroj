document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
document.querySelector(".close-menu").addEventListener("click", toggleMenu);

function toggleMenu(event) {
    let nav = document.getElementById('main-nav-container');
    let icon = document.getElementById('nav-toggle-icon');

    if(nav.classList.contains('open')) {
        nav.classList.remove('open');
        icon.setAttribute('src', 'assets/images/menu.png');
    } else {
        nav.classList.add('open');
        icon.setAttribute('src', 'assets/images/close.png');
    }
}

function closeMenu() {
    let nav = document.getElementById('main-nav-container');
    let icon = document.getElementById('nav-toggle-icon');

    nav.classList.remove('open');
    icon.setAttribute('src', 'assets/images/menu.png');
}