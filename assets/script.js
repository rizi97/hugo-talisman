window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    var element = document.getElementById('navigation');

    if (scrollPosition > 0) {
        element.classList.add('fixed-nav-bg-image', 'fixed', 'w-100', 'z-1');
    } else {
        element.classList.remove('fixed-nav-bg-image', 'fixed', 'w-100', 'z-1');
    }
});