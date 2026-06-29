// =========================================
// Modal Functionality
// =========================================
function openModal() {
    document.getElementById('formModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('formModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// =========================================
// Hamburger Menu Functionality
// =========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.site-nav ul li a');

// Toggle menu open/close
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});