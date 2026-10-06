/* =========================================================
   BRIDGE THE GROWTH - MAIN JAVASCRIPT
   Handles dynamic interactions: mobile menu toggle and dynamic copyright year.
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 01. MOBILE MENU TOGGLE
    // Toggles visibility of navigation links on small screens.
    // =========================================================
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mainNav = document.getElementById('main-nav');

    if (menuToggleBtn && mainNav) {
        menuToggleBtn.addEventListener('click', () => {
            const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
            
            // Toggle active class on menu
            mainNav.classList.toggle('is-active');
            
            // Update accessibility aria-expanded status
            menuToggleBtn.setAttribute('aria-expanded', !isExpanded);
        });

        // Close mobile navigation when a menu link is clicked
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('is-active');
                menuToggleBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // =========================================================
    // 02. DYNAMIC COPYRIGHT YEAR
    // Keeps footer copyright year updated automatically.
    // =========================================================
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});