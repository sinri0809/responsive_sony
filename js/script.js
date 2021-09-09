'use strict';

window.onload = function (){
  var swp_latest = new Swiper('.swp-latest', {
    slidesPerView: "auto",
    // slidesPerGroup: "auto",
    spaceBetween: 25,
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
    $('.icon-up-open-mini').toggleClass('icon-up-open-mini-upsidedown');
    $('.notc__lst').slideToggle();
  });
});