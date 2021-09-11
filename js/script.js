'use strict';

window.onload = function () {
  $('#depth2').mouseenter(function () {
    $('.nav__gnb-main-depth2').slideToggle();
  });
  $('.nav__gnb-main-depth2').mouseleave(function () {
    $('.nav__gnb-main-depth2').slideUp();
  });


  var swp_latest = new Swiper('.swp-latest', {
    slidesPerView: "auto",
    // slidesPerGroup: "auto",
    spaceBetween: 25,
    allowTouchMove: false,
    centeredSlides: true,
    pagination: {
      el: '.swp-latest__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".--next",
      prevEl: ".--prev",
    },
  });

}

$(document).ready(function () {
  $('.notc__button-more').click(function () {
    $('.icon-up-open-mini').toggleClass('icon-up-open-mini-upsidedown-down');
    $('.notc__lst').slideToggle();
  });


  $('a[title="youtube"]').mouseenter(function () { 
    var box = $(this).attr('data-sns');
    $(box).show();     
    $('.--yt-sub').show();
    $('.--yt-sub').stop().fadeIn();
  });
  $('a[title="youtube"]').mouseleave(function () {
    $('.--yt-sub').stop().fadeOut();
  });

  $('a[title="facebook"]').mouseenter(function () { 
    var box = $(this).attr('data-sns');
    $(box).show();     
    $('.--fb-sub').show();
    $('.--fb-sub').stop().fadeIn();
  });
  $('a[title="facebook"]').mouseleave(function () {
    $('.--fb-sub').stop().fadeOut();
  });

  // button go top

  $(window).scroll(function () {
    var scY = $(window).scrollTop();

    if (scY >= 500) {
      $('.button-go-top').addClass('--active');
    }
    else {
      $('.button-go-top').removeClass('--active');
    }

    if (scY >= 1700){
      $('.button-go-top-wrapper').addClass('--stop');
    }
    else {
    $('.button-go-top-wrapper').removeClass('--stop');
    }
  });
  $('.button-go-top').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);

  });
});