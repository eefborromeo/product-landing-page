;(function() {
    var queryString = window.location.search;
    var href = window.location.href;
    var parameters = new URLSearchParams(queryString)
    var name = parameters.get('name');
    var email = parameters.get('email');

    var domName = document.querySelector('[data-name]');
    var domEmail = document.querySelector('[data-email]');

    var header = document.querySelector('#header')

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
})()