$(document).ready(function(){
    $('.slider-slides').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
  });