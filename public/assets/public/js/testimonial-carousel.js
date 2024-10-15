$(document).ready(function () {
    $("#owl-demo1").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        768: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
          loop: false,
        },
      },
    });
  });
  