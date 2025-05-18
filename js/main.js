document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-container');
    if (logo) {
        logo.style.transition = 'transform 0.3s ease';
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        logo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    var heroSwiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var eventSwiper = new Swiper(".my-Swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".my-Swiper .swiper-pagination",
            clickable: true,
        },
        rewind: true,
        navigation: {
            nextEl: ".my-Swiper .swiper-button-next",
            prevEl: ".my-Swiper .swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
});
