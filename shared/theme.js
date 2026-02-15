/**
 * Shared Theme Management
 * Handles dark mode toggle and persistence across all pages
 */

(function() {
    const html = document.documentElement;
    
    // Initialize theme on page load (runs immediately to prevent flash)
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }
    
    // Toggle theme function
    function toggleTheme() {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    }
    
    // Bind click handlers when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        // Support id-based toggles
        const themeToggle = document.getElementById('theme-toggle');
        const themeToggleMobile = document.getElementById('theme-toggle-mobile');
        
        if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
        if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
    });
})();
