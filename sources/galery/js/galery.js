$(document).ready(function() {

  $('[data-magnigic-popup]').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    gallery: {
      enabled: true
    }
  });

  $(".owl-carousel").owlCarousel({
    nav:true,
    dots: false,
    navText: [],
    autoplay: true,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:4
        },
        1700:{
            items:5
        }
    }
});

});
