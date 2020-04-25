// var swiper = new Swiper('.swiper-container', {

//   autoplay: {
//     delay: 5000,
//     stopOnLastSlide: false,
//     disableOnInteraction: false,
//     reverseDirection: false
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   loop: true,
//   speed: 600,
// });


// ヘッダーメニューのスムーススクロール
$(function () {
  var headerHight = 100; // ヘッダの高さを指定する
  $('.nav_btn').click(function () {
    //↑ aリンクのclassを指定
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
    $("html, body").animate({ scrollTop: position }, 550, "swing");
  });
});

// ヘッダーメニューをクリックしたら下線を引く
$('.nav_item').click(function () {
  var $answer = $(this).find('.nav_btn');

  if ($answer.hasClass('active')) {
    $answer.removeClass('active');
  } else {
    $('.nav_btn').removeClass('active');
    $answer.addClass('active');
  }
});


// TOPへ戻るボタン 画面右下の
jQuery(window).on("scroll", function ($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show();
  } else {
    jQuery('.floating').hide();
  }
});

jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

// ドロワーメニュー
$(document).ready(function () {
  $('.drawer').drawer();
  $('.drawer-menu li').on('click', function () {
    $('.drawer').drawer('close');
  });
});

//ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  var height = $("#nav").height();
  $("#home").css("margin-top", height);
})