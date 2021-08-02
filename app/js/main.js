$(function(){

  $('.header__formbox-btn, .header__call-btn').on('click', function () {
    $(this).addClass('header__formbox--active');
    $('.header__formbox').toggleClass('header__formbox--active');
  });

  $('.header__form-btn').on('click', function () {
    $(this).addClass('header__formbox--active');
    $('.header__formbox').toggleClass('header__formbox--active');
  });

  $('.top-slider__btn, .portfolio__btn, .price__item-btn').on('click', function () {
    $('header__formbox').addClass('header__formbox--active');
    $('.header__formbox').toggleClass('header__formbox--active');
  });

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

  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Данные отправлены. Мы свяжемся с Вами в указанное время");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  new WOW().init();

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

  $('.materials__list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 5000,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      }
    ]
  });

  $('.reviews__list').slick({
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplayspeed: 2000
  });

});

