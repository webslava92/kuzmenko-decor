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
    infinite: true,
    speed: 3000
  });

});