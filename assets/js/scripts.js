$(document).ready(function () {
  $(".preloader").addClass("hide");
});

$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 60) {
          $('.scroll-top').addClass('active');
      } else {
          $('.scroll-top').removeClass('active');
      }
  });

  $('.scroll-top').click(function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
  });
});

const swiper_testimonial = new Swiper(".swiper-testimonial ", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  }
});

function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
}
window.onload = setCurrentYear;

AOS.init({
  once: true
});
