document.addEventListener('DOMContentLoaded', function() {
        // Hover effect for team member photos
        const memberPhotos = document.querySelectorAll('.member-photo');

        memberPhotos.forEach(photo => {
            photo.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

            photo.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
            });

            photo.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
        });

        // You could add more interactivity like:
        // - Modal pop-ups with more team member info on click
        // - Filtering options for different roles
        // - Animated entrance effects for team members when scrolling
    });