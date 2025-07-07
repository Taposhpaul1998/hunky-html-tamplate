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

    // gsap counter 

    gsap.utils.toArray(".counter").forEach((element) => {
        const count = element.dataset.count;

        gsap.fromTo(
            element,
            { innerText: 0 },
            {
                innerText: count,
                duration: 1,
                ease: "power2.out",
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%"
                }
            }

        )

    })

    // gsap fade in animation 
    gsap.utils.toArray(".fade-in").forEach((element, i) => {
        gsap.fromTo(
            element,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: .5,
                delay: i * 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%"
                }
            }
        );
    });

    // images animation
    const images = gsap.utils.toArray(".image-reveal");
    images.forEach((image) => {
        const position = image.dataset.position;
        const img = image.querySelector("img");

        var clipStart = "inset(0 100% 0 0)";
        // Debugging line to check position

        switch (position) {
            case "left":
                clipStart = "inset(0 100% 0 0)";
                break;
            case "right":
                clipStart = "inset(0 0 0 100%)";
                break;
            case "top":
                clipStart = "inset(100% 0 0 0)";
                break;
            case "bottom":
                clipStart = "inset(0 0 100% 0)";
                break;
            default:
                clipStart = "inset(0 0 0 0)";
        }

        gsap.fromTo(
            image,
            {
                clipPath: clipStart,
                opacity: 0,
                x: position === "left" ? "-5%" : position === "right" ? "5%" : "0",
                y: position === "top" ? "-5%" : position === "bottom" ? "5%" : "0"
            },
            {
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                x: "0",
                y: "0",
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: image,
                    start: "top 80%",
                }
            }
        );

    });

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


