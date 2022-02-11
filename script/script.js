;(function() {
    var queryString = window.location.search;
    var href = window.location.href;
    var parameters = new URLSearchParams(queryString)
    var name = parameters.get('name');
    var email = parameters.get('email');

    var domName = document.querySelector('[data-name]');
    var domEmail = document.querySelector('[data-email]');

    var headerWave = document.querySelector('#header .wave')

    if (name && email) {
        domName.textContent = name.toUpperCase();
        domEmail.textContent = email;
    }

    // SCROLL
    window.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop > 120) {
            headerWave.classList.add('scroll')
        } else {
            headerWave.classList.remove('scroll')
        }
    })
})()