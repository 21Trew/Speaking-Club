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

// Отправка формы в телеграмм-бот

const chat_id = "";
const token = "";
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage`;

document.getElementById('cta').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = '<b>Заявка с сайта</b>\n';
    message += `<b>Имя: </b> ${this.name.value }'\n'`;
    message += `<b>Запрос: </b> ${this.request.value }'\n'`;
    message += `<b>Телефон: </b> ${this.tel.value }`;

axios.post(URI_API, {
    chat_id: chat_id,
    parse_mode: 'html',
    text: message
})
})
