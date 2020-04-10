var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


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