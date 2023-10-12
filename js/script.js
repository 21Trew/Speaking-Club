// Слайдер

$(document).ready(function(){
    $('.slider-slides').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 8000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
});

