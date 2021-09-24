'use strict';
window.onload = function () {
  // electric product slide
  let menu = $('#depth2');
  let depth2 = $('.gnb-main-depth2');
  var depth2_timer;

  function depth2Up() {
    depth2.stop().slideUp();
  }

  menu.mouseenter(function () {
    depth2.stop().slideDown();
  });
  menu.mouseleave(function () {
    depth2_timer = setTimeout(depth2Up, 100);
  });
  depth2.mouseenter(function () {
    clearTimeout(depth2_timer);
  });
  depth2.mouseleave(function () {
    depth2Up();
  });
  new Swiper('.swp-latest', {
    slidesPerView: "auto",
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

  // sony site toggle
  let sony_site = $('.sony-site');
  let sony_site_bt = $('.gnb-sub__site-map');
  sony_site_bt.click(function () {
    sony_site.slideToggle();
    $(this).toggleClass('gnb-sub__button-focused');
  })
  $('.bt-cancel').click(function () {
    sony_site.slideUp();
  });

  // search tool control
  function search_control(_obj, _commd) {
    if (_commd == 'hide') {
      _obj.stop().slideDown();
      _obj.attr('open-state', 'show');
    }
    else if (_commd == 'show') {
      _obj.stop().fadeOut();
      _obj.attr('open-state', 'hide');
    }
  }

  let search_bt = $('.gnb-sub__search');
  let search_wrap = $('.search-wrap');
  let search_txt = $('#search-txt');
  let form_cancel = $('.form-cancel');

  search_wrap.click(function (e) {
    e.stopPropagation();
  });
  search_bt.click(function (e) {
    e.stopPropagation();
    let temp = search_wrap.attr('open-state');
    search_control(search_wrap, temp);
    $(this).toggleClass('gnb-sub__search-active');
  });
  $('body').click(function () {
    search_control(search_wrap, 'show');
    search_bt.removeClass('gnb-sub__search-active');
  });
  
  search_txt.keyup(function (e) { 
    let temp = $(this).val();
    if (temp == '') {
      form_cancel.hide();
    }
    else {
      form_cancel.show();
    }
  });
  form_cancel.click(function () {
    search_txt.val('');
    $(this).hide();
  });

  // notice toggle slide
  $('.notc__button-more').click(function () {
    $(this).find('i').toggleClass('icon-up-open-mini-upsidedown-down');
    $('.notc__lst').slideToggle();
  });

  // sns box slideup
  let sns_box = $(".company-sns").find('>li>a');

  function snsShowbox(_obj, _act) {
    var sns_box_data = _obj.attr('data-sns');
    if (_act == 'enter') {
      $(sns_box_data).show();
      $(sns_box_data).stop().fadeIn();
    } else if (_act == 'leave') {
      $(sns_box_data).stop().fadeOut();
    }
  }
  $.each(sns_box, function (index) {
    $(this).mouseenter(function () {
      snsShowbox($(this), 'enter');
    });
    $(this).mouseleave(function () {
      var timer = setTimeout(snsShowbox($(this), 'leave'), 100);
      console.log(timer);
      // snsShowbox($(this), 'leave');
    });
  });


  // button go top setting
  $(window).scroll(function () {
    var scY = $(window).scrollTop();
    if (scY >= 500) {
      $('.button-go-top').addClass('--active');
    } else {
      $('.button-go-top').removeClass('--active');
    }
    if (scY >= 1700) {
      $('.button-go-top-wrapper').addClass('--stop');
    } else {
      $('.button-go-top-wrapper').removeClass('--stop');
    }
  });
}
