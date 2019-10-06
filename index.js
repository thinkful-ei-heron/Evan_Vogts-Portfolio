/* eslint-disable indent */

const renderNavMenu = function () {
    let html = ``;
    if (navMenuToggle === true) {
        html = navMenuOpen();
    }
    else if (navMenuToggle === false) {
        html = navMenuClosed();
    }
    $('.menu-input').html(html);
};

const navMenuOpen = function () {
    return `<ul class="notHidden">
    <li><a href="#banner">Home</a></li>
    <li><a href="#bioSection">About Me</a></li>
    <li><a href="#allProjects">Projects</a></li>
    <li><a href="#bioContact">Contact</a></li>
    </ul>`;
};

const navMenuClosed = function () {
    return `<ul class="hidden>
    </ul>`;
};

const handleOpenNavMenu = function () {
    $('nav').on('click','.navMenu', function () {
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
};

let navMenuToggle = false;

$(main);