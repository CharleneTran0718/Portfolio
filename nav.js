

//nav bar mobile
function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Check if this is the active page
        if (href === currentPage ||
            (currentPage === 'index.html' && href === 'home.html') ||
            (currentPage === '' && href === 'home.html') ||
            (currentPage === 'index.html' && href === 'index.html') ||
            (href === 'home.html' && (currentPage === 'home.html' || currentPage === 'index.html'))) {
            link.classList.add('active');
        }
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);


