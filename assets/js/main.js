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
    gsap.registerPlugin(ScrollTrigger, SplitText);

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
                    start: "top 80%",
                    toggleActions: "play pause resume none",
                    immediateRender: false,
                }
            }

        )

    })
    // text animation 

    $(".header__title").each(function (i) {
        const $h1 = $(this).find("h1");
        const $h2 = $(this).find("h2");

        if ($h2.length || $h1.length) {
            const split = new SplitText($h1.length ? $h1[0] : $h2[0])
            const chars = split.chars

            gsap.fromTo(chars,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: chars,
                        start: "top bottom",
                        toggleActions: "play pause resume none",
                        immediateRender: false
                    }
                }
            )
        }
    })

    // gsap fade in animation 
    gsap.utils.toArray(".fade-in").forEach((element, i) => {
        const singleAnimi = element.dataset.name

        const elementData = element.dataset.delay;
        const delay = (elementData ? parseFloat(elementData) : i) * 0.15;

        gsap.fromTo(
            element,
            { opacity: 0, y: 200 },
            {
                opacity: 1,
                y: 0,
                duration: 0.2,
                delay: singleAnimi === "single" ? 0 : (delay === 0 ? .1 : delay),
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play pause resume none",
                    immediateRender: false
                }
            }
        );
    });

    // gsap fade right animation 
    gsap.utils.toArray(".fade-right").forEach((element) => {
        const delay = element.dataset.delay
        gsap.fromTo(
            element,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: delay ? delay : 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play pause resume none",
                    immediateRender: false
                }
            }
        );
    });

    // images animation
    const images = gsap.utils.toArray(".image-reveal");
    images.forEach((image) => {
        const position = image.dataset.position;

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
                    toggleActions: "play pause resume none",
                    immediateRender: false,
                }
            }
        );

    });

    // refresh scroll trigger for reload 

    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });

    // runig swiper slider
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

    //raning__partner slider
    const ranningPartner = new Swiper(".raning__partner", {
        slidesPerView: 'auto',
        loop: true,
        speed: 4000,
        spaceBetween: 74,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        freeMode: true,
        freeModeMomentum: false,
        allowTouchMove: false,
        loopedSlides: 6,
        slidesPerGroup: 1,
        loopAdditionalSlides: 6,
        cssMode: false,
    })
    // testimonial slider
    const testimonial = new Swiper(".testimonial__slider", {
        slidesPerView: "auto",
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 2000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    })
    // testimonial-2 slider
    const testimonial2 = new Swiper(".testimonial__slider-info", {
        slidesPerView: "auto",
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        autoplay: {
            delay: 2000,
        },
        navigation: true
    })
    // testimonial-3 slider
    const testimonial3 = new Swiper(".testimonial__slider-img", {
        grabCursor: true,
        initialSlide: 3,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        navigation: true,
        loopedSlides: 3,
        slidesPerGroup: 1,
        loopAdditionalSlides: 3,
        thumbs: {
            swiper: testimonial2,
        },
    });

    // Ensure the slider starts centered after initialization
    testimonial3.on('init', function () {
        testimonial3.slideToLoop(testimonial3.params.initialSlide, 0, false);
    });
    testimonial3.init();




    // var swiper = new Swiper(".mySwiper", {
    //   loop: true,
    //   spaceBetween: 10,
    //   slidesPerView: 4,
    //   freeMode: true,
    //   watchSlidesProgress: true,
    // });
    // var swiper2 = new Swiper(".mySwiper2", {
    //   loop: true,
    //   spaceBetween: 10,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   thumbs: {
    //     swiper: swiper,
    //   },
    // });
})


