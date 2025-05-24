var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: { rows: 2 },
    spaceBetween: 30,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
        0: { slidesPerView: 1, grid: { rows: 1 } },      // Mobile
        768: { slidesPerView: 2, grid: { rows: 2 } },    // Tablet
        1024: { slidesPerView: 3, grid: { rows: 2 } }    // Desktop
    }
});
