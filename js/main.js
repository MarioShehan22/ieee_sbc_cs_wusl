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

$(document).ready(function() {
            // Initialize carousel with 10 second interval
            $('#recipeCarousel').carousel({
                interval: 10000
            });

            // Clone items to create the multi-item effect
            $('.carousel .carousel-item').each(function() {
                var minPerSlide = 3;
                var next = $(this).next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
                
                for (var i = 0; i < minPerSlide - 1; i++) {
                    next = next.next();
                    if (!next.length) {
                        next = $(this).siblings(':first');
                    }
                    next.children(':first-child').clone().appendTo($(this));
                }
            });

            // Custom event handlers for the carousel
            $('#recipeCarousel').on('slide.bs.carousel', function(e) {
                var $e = $(e.relatedTarget);
                var idx = $e.index();
                var itemsPerSlide = 3;
                var totalItems = $('.carousel-item').length;
                
                if (idx >= totalItems - (itemsPerSlide - 1)) {
                    var it = itemsPerSlide - (totalItems - idx);
                    for (var i = 0; i < it; i++) {
                        // Append copies to the end
                        if (e.direction == "left") {
                            $('.carousel-item').eq(i).appendTo('.carousel-inner');
                        } else {
                            $('.carousel-item').eq(0).appendTo('.carousel-inner');
                        }
                    }
                }
            });
        });