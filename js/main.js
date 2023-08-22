$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        draggable: false,
        infinity: true,
        waitForAnimate: false,
        responsive:
        [
            {
                breakpoint: 1100,
                settings: {
                slidesToShow: 3,
                },
            },
            {
                breakpoint: 750,
                settings: {
                slidesToShow: 2,
                },
            },
            {
                breakpoint: 450,
                settings: {
                slidesToShow: 1,
                },
            },
        ]

    })
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        infinity: true,
        waitForAnimate: false,
        dots: true,
        appendDots: $('.testimonials__dots'),

    })

    $('.testimonials__arrow-left').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__arrow-right').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    $('.program__lesson-item-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('program__lesson-item-link--active')
        $(this).children('.program__lesson-paragraph').slideToggle()
    })



    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false ) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0);
    
    $('.burger, .overlay, .header__top').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
        $('.burger--open-right').toggleClass('burger--close-right')
        $('.burger--open-left').toggleClass('burger--close-left')
    })

    $('.footer__list-title').on('click', function (e) {
        $(this).next().slideToggle()
    })
    

})

