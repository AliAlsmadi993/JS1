var menuToggle = document.getElementById('menuToggle');
var navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});
