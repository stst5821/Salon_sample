var swiper = new Swiper('.swiper-container', {

  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  speed: 600,
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

// calendar

const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const config = {
    show: 3,
}

function showCalendar(year, month) {
    for ( i = 0; i < config.show; i++) {
        const calendarHtml = createCalendar(year, month)
        const sec = document.createElement('section')
        sec.innerHTML = calendarHtml
        document.querySelector('#calendar').appendChild(sec)

        month++
        if (month > 12) {
            year++
            month = 1
        }
    }
}

function createCalendar(year, month) {
    const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
    const endDate = new Date(year, month,  0) // 月の最後の日を取得
    const endDayCount = endDate.getDate() // 月の末日
    const lastMonthEndDate = new Date(year, month - 1, 0) // 前月の最後の日の情報
    const lastMonthendDayCount = lastMonthEndDate.getDate() // 前月の末日
    const startDay = startDate.getDay() // 月の最初の日の曜日を取得
    let dayCount = 1 // 日にちのカウント
    let calendarHtml = '' // HTMLを組み立てる変数

    calendarHtml += '<h1>' + year  + '/' + month + '</h1>'
    calendarHtml += '<table>'

    // 曜日の行を作成
    for (let i = 0; i < weeks.length; i++) {
        calendarHtml += '<td>' + weeks[i] + '</td>'
    }

    for (let w = 0; w < 6; w++) {
        calendarHtml += '<tr>'

        for (let d = 0; d < 7; d++) {
            if (w == 0 && d < startDay) {
                // 1行目で1日の曜日の前
                let num = lastMonthendDayCount - startDay + d + 1
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
            } else if (dayCount > endDayCount) {
                // 末尾の日数を超えた
                let num = dayCount - endDayCount
                calendarHtml += '<td class="is-disabled">' + num + '</td>'
                dayCount++
            } else {
                calendarHtml += '<td>' + dayCount + '</td>'
                dayCount++
            }
        }
        calendarHtml += '</tr>'
    }
    calendarHtml += '</table>'

    return calendarHtml
}

showCalendar(year, month)