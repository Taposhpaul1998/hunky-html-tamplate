$(document).ready(function () {
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();
        $(".header").toggleClass("header__sticky", window.scrollY > 0)
    })

    $(".mobile__dropdawn--btn").click(function () {
        const dropdawn = $(this).next();
        dropdawn.slideToggle()
    })

    // gsap animation
    gsap.registerPlugin(ScrollTrigger);

    // images animation

    const leftimages = gsap.utils.toArray(".img__slide--left-to-right");
    const rightimages = gsap.utils.toArray(".img__slide--right-to-left");

    leftimages.forEach((image) => {
        gsap.fromTo(image,
            {
                x: "-5%",
                clipPath: "inset(0 100% 0 0)",
                opacity: 0,
            },
            {
                x: "0",
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: image,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play pause resume none",
                    once: false
                }
            }
        )
    });
    rightimages.forEach((image) => {
        gsap.fromTo(image,
            {
                x: "5%",
                clipPath: "inset(0 0 0 100%)",
                opacity: 0,
            },
            {
                x: "0",
                clipPath: "inset(0 0 0 0%)",
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: image,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play pause resume none",
                    once: false
                }
            }
        )
    })

    // swiper slider 
    const swiper = new Swiper(".runing__swiper", {
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 4000,
        freeMode: true,
        freeModeMomentum: false,
        loopedSlides: 6,
        allowTouchMove: false,
        slidesPerGroup: 1,
        loopAdditionalSlides: 6,
        cssMode: false,
    })
    // slider 2
    const swiper2 = new Swiper(".testimonial__slider", {
        slidesPerView: "auto",
        loop: true,
        speed: 4000,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    })

})


