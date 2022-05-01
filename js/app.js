window.onload = function(){
    AOS.init();
    const swiper = new Swiper("#mySwiper", {
        direction: "vertical",
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
 