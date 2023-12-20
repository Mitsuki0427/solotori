'use strict';
// $('.hbg-menu-btn').click(function () {
//   $(this).toggleClass('menu-active');
//   $('.menu').toggleClass('active-menu');
// });
document.querySelector('.hbg-menu-btn').addEventListener('click', function () {
  console.log('.slide-menu');
  this.classList.toggle('menu-active');
  document.querySelector('.menu').classList.toggle('active-menu');
  document.querySelector('.slide-menu').classList.toggle('slide-menu-active');
});
const swiper = new Swiper('.swiper', {
  loop: true, // ループ
  slidesPerView: 1, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    //自動再生
    delay: 0, // 途切れなくループ
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
});
