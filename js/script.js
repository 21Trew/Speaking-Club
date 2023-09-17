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

const upButton = document.querySelector(".up-button");

window.addEventListener("scroll", trackScroll);

function trackScroll() {
    const scrolled = window.scrollY;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        upButton.classList.add("up-button_show");
    } else {
        upButton.classList.remove("up-button_show");
    }
}
