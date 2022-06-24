$(function () {
  $('.header__burger-btn--img').on('click', function (){
    $('.header__burger-wrapp').addClass('header__burger-active')
  })
  $('.header__burger-btn--close').on('click', function (){
    $('.header__burger-wrapp').removeClass('header__burger-active')
  })
    $('.games__box-slider').slick({
        dots: false,
        arrows: true,
        fade: false,
        autoplay: false,
        centerMode: false,
        slidesToScroll: 1,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
        ]
    });
})