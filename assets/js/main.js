$(document).ready(function () {
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        $(".header").toggleClass("header__sticky", window.scrollY > 0)
    })

    $(".mobile__dropdawn--btn").click(function () {
        const dropdawn = $(this).next();
        dropdawn.slideToggle()
    })

    // slider 
    const swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        loop: true,
        speed: 4000, // Slow speed for smooth continuous scroll
        autoplay: {
            delay: 0, // No delay between transitions
            disableOnInteraction: false,
        },
        freeMode: true,
        freeModeMomentum: false,
    })

})


