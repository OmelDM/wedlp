$(document).ready(function() {

  $('[data-smooth-scroll]').smoothScroll({
    beforeScroll: toogleMenu
  });

  $('.menu').click(toogleMenu);

  function toogleMenu() {
    $('.navigation-container_small').toggleClass('navigation-container_active');

    if($('.menu__icon_burger').is(":visible")) {
      $('.menu__icon_burger').hide();
      $('.menu__icon_close').show();
    } else {
      $('.menu__icon_burger').show();
      $('.menu__icon_close').hide();
    }
  }
});
