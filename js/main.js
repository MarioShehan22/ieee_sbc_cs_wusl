document.addEventListener('DOMContentLoaded', function() {
    // Example of simple animation for the logo
    const logo = document.querySelector('.logo-container');
    logo.style.transition = 'transform 0.3s ease';

    logo.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });

    logo.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // You could add more interactivity like image sliders,
    // event countdown timers, etc.
});
