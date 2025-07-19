$(window).scroll(function () {
    var scroll_top = $(window).scrollTop();
    if (scroll_top >= 200) {
        $("#header").addClass("header_fixed");
    }
    else {
        $("#header").removeClass("header_fixed")
    }
})

AOS.init({
    duration: 3000,
    once: true,
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets", // Ensures dot pagination
    },
    breakpoints: {
        // For smaller screens (e.g., mobile)
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // For tablets
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // For desktops and larger screens
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});