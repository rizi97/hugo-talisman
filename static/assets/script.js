window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;

    var element = document.getElementById('custom_navigation');

    if (scrollPosition > 0) {
        element.classList.add('fixed-nav-bg-image', 'fixed', 'w-100', 'z-1');
    } else {
        element.classList.remove('fixed-nav-bg-image', 'fixed', 'w-100', 'z-1');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // If a link has a dropdown, add sub menu toggle.
    var navLinks = document.querySelectorAll('nav ul li a:not(:only-child)');
    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function (e) {
            var siblingDropdown = this.nextElementSibling;
            if (siblingDropdown && siblingDropdown.classList.contains('nav-dropdown')) {
                siblingDropdown.style.display = siblingDropdown.style.display === 'block' ? 'none' : 'block';
                // Close one dropdown when selecting another
                var allDropdowns = document.querySelectorAll('.nav-dropdown');
                allDropdowns.forEach(function (dropdown) {
                    if (dropdown !== siblingDropdown) {
                        dropdown.style.display = 'none';
                    }
                });
                e.stopPropagation();
            }
        });
    });

    // Clicking away from dropdown will remove the dropdown class
    document.addEventListener('click', function () {
        var allDropdowns = document.querySelectorAll('.nav-dropdown');
        allDropdowns.forEach(function (dropdown) {
            dropdown.style.display = 'none';
        });
    });

    // Toggle open and close nav styles on click
    var navToggle = document.getElementById('nav-toggle');
    navToggle.addEventListener('click', function () {
        var navUl = document.querySelector('nav ul');
        if (navUl.style.display === 'block') {
            navUl.style.display = 'none';
        } else {
            navUl.style.display = 'block';
        }
    });

    // Hamburger to X toggle
    navToggle.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});