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

const hamtext = document.querySelectorAll('.ham-text');

hamtext.forEach((e) => {
  e.addEventListener('click', () => {
    document.querySelector('.hbg-menu-btn').classList.remove('menu-active');
    document.querySelector('.menu').classList.remove('active-menu');
    document.querySelector('.slide-menu').classList.remove('slide-menu-active');
  });
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
const box = new Swiper('.boxes', {
  loop: true,
  slidesPerView: 1.2,
});
// プロフィール帳
const p_swiper = new Swiper('.mySwiper', {
  loop: true, // ループ
  speed: 300, // 少しゆっくり(デフォルトは300z
  // ページネーション
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((e) => {
      e.classList.remove('active-btn');
    });
    let slideIndex = parseInt(tab.getAttribute('data-slide'));
    p_swiper.slideTo(slideIndex);
    tab.classList.add('active-btn');
  });
});
