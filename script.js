// Smooth Scrolling for Anchor Links
document.addEventListener('DOMContentLoaded', () => {
    const smoothScroll = (event) => {
        if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });

    // Example of a simple toggle for a mobile menu (if needed)
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.nav-menu');
    
    if (menuButton && menu) {
        menuButton.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
});
