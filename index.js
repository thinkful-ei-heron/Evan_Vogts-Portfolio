/* eslint-disable indent */

const renderNavMenu = function () {
    let html = ``;
    if (navMenuToggle === true) {
        html = navMenuOpen();
    }
    else if (navMenuToggle === false) {
        html = ``;
    }
    $('.menu-input').html(html);
};

const navMenuOpen = function () {
    return `
    <li>Home</li>
    <li>About Me</li>
    <li>Projects</li>
    <li>Contact</li>`;
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