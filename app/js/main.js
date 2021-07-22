$(function(){

  $('.header__menu-btn').on('click', function () {
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
    $('.header__menu-btn').toggleClass('header__menu-btn--active');
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.top-slider__list').slick({
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplayspeed: 2000
  });

  $(".menu a, .footer a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 105;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 10) {
      $(".header__top-inner").css({ "background": "rgb(2, 51, 59, 0.9)" })
    }
    if (10 > scrolled) {
      $(".header__top-inner").css({ "background": "transparent" })
    }
  }

  $('.portfolio__slider').slick({
    dots: false,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplayspeed: 2000
  });

});