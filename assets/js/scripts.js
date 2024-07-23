$(document).ready(function () {
  $(".preloader").addClass("hide");
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $(".scroll-top").addClass("active");
    } else {
      $(".scroll-top").removeClass("active");
    }
  });

  $(".scroll-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $(".buy-veiw-theme").addClass("active");
    } else {
      $(".buy-veiw-theme").removeClass("active");
    }
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    var contactUsPosition = $('#contact-us').offset().top - $(window).height() / 2;
    if (scrollPosition >= contactUsPosition) {
      $('.call-whatsapp').addClass('hide');
    } else {
      $('.call-whatsapp').removeClass('hide');
    }
  });
});

const swiper_testimonial = new Swiper(".swiper-testimonial ", {
  slidesPerView: 1,
  loop: true,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = currentYear;
}
window.onload = setCurrentYear;

AOS.init({
  once: true,
});
