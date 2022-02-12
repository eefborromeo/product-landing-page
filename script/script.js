;(function() {
    var queryString = window.location.search;
    var href = window.location.href;
    var parameters = new URLSearchParams(queryString)
    var name = parameters.get('name');
    var email = parameters.get('email');

    var domName = document.querySelector('[data-name]');
    var domEmail = document.querySelector('[data-email]');

    var header = document.querySelector('#header')
    var hamburgerButton = document.querySelector('#hamburger-menu')
    
    var year = document.querySelector('[data-year]');
    var currentYear = new Date().getFullYear();

    if (name && email) {
        domName.textContent = name.toUpperCase();
        domEmail.textContent = email;
    }

    // SCROLL
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 120) {
            header.classList.add('scroll')
        } else {
            header.classList.remove('scroll')
        }
    })
    
    // HAMBURGER MENU
    hamburgerButton.addEventListener('click', function() {
        var navBar = document.querySelector('#nav-bar')
        if (navBar.classList.contains('open')) {
            navBar.classList.remove('open')
        } else {
            navBar.classList.add('open')
        }
    })

    // YEAR
    year.textContent = currentYear;
    
})()