jQuery(function ($) {
  // ページトップボタン
  var topBtn = $(".js-pagetop");
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });
});

// // ハンバーガー
$(function () {
  $(".c-hamburger-button").on("click", function () {
    $(".c-hamburger-button__line, .c-header__nav-box").toggleClass("open");
  });
});

$(".c-header-nav__item a").on("click", function () {
  $(
    ".c-header-title, .c-header__sub-title, .c-header-nav__box, .c-hamburger-button__line"
  ).removeClass("open");
});

// ハンバーガーメニュー;
// $(".js-hamburger").click(function () {
//   $(this).toggleClass("is-active");
//   // bodyに「.active」class付け外し
//   $("body").toggleClass("active");
//   $(".js-drawer").fadeToggle();
// });
