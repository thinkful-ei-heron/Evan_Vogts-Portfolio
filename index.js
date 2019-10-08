/* eslint-disable indent */

const renderNavMenu = function () {
    let html = '';
    if (navMenuToggle === true) {
        html = navMenuOpen();
    }
    else if (navMenuToggle === false) {
        html = navMenuClosed();
    }
    $('.menu-input').html(html);
};

const navMenuOpen = function () {
    return `
    <img src="./assets/hamburger_menu.png" alt="menu" class="menu">
    <ul class="notHidden">
    <li class="navOptions"><a href="#banner">Home</a></li>
    <li class="navOptions"><a href="#bioSection">About</a></li>
    <li class="navOptions"><a href="#allProjects">Projects</a></li>
    <li class="navOptions"><a href="#bioContact">Contact</a></li>
    </ul>`;
};

const navMenuClosed = function () {
    return `
    <img src="./assets/hamburger_menu.png" alt="menu" class="menu">
    <ul class="hidden">
    <li class="navOptions"><a href="#banner">Home</a></li>
    <li class="navOptions"><a href="#bioSection">About</a></li>
    <li class="navOptions"><a href="#allProjects">Projects</a></li>
    <li class="navOptions"><a href="#bioContact">Contact</a></li>
    </ul>`;
};

const handleOpenNavMenu = function () {
    $('nav').on('click','.menu', function () {
        toggleExpandedMenu();
        renderNavMenu();
    });
};

const handleCloseNavMenu = function () {
    $('nav').on('click', '.navOptions', function(){
        toggleExpandedMenu();
        renderNavMenu();
    });
};

const toggleExpandedMenu = function () {
    navMenuToggle = !navMenuToggle;
  };

const main = function () {
    handleOpenNavMenu();
    renderNavMenu();
    handleCloseNavMenu();
};

let navMenuToggle = false;

$(main);