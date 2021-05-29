document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
document.querySelector(".close-menu").addEventListener("click", toggleMenu);
document.querySelectorAll(".navigate").forEach(item => {
    item.addEventListener("click", redirection);
})

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

function redirection(e) {
    e.preventDefault();
    let section = document.getElementById(e.target.getAttribute('rel'));
    // section.scrollIntoView({ behavior: 'smooth', block: 'center'});

    var headerOffset = 71;
    var screenWidth = window.screen.width;

    if (screenWidth <= 900) {
        headerOffset = 145;
    }

    if (screenWidth <= 768) {
        headerOffset = 74;
    }

    var elementPosition = section.offsetTop;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}