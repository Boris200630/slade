var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
}); 

let paginationItems = document.querySelectorAll(".cta__pagination-item");
let activeIndex = 0;

const images = [
  { 0: "./assets/img/main_photo.jpq", 1: "./assets/img/second.jpq", 2: "./assets/img/third.jpg" },
];

