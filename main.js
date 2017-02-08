function main () {
  // get filter=filterName

}

$(document).ready(function() {

  var bgUrl = $('.hero-container').data('background-url');
  $('.hero-container').css('background-image', 'url('+bgUrl+')');

});

function block (argument) {
  // body...
}
$(document).ready(function() {
  function makeTemplate(period) {
    return '<li class="counter__item"><div class="counter__value"><span>{'+period+'n}</span></div><div class="counter__measurement">{'+period+'l}</div></li>'
  }

  $('.counter__time').countdown({
    until: new Date(2017, 8, 16),
    format: 'DHMS',
    layout: makeTemplate('d') + makeTemplate('h') + makeTemplate('m') + makeTemplate('s')
  });
});

$(document).ready(function() {

  $('.menu').click(function() {
    $('.navigation-container_small').toggleClass('navigation-container_active');

    if($('.menu__icon_burger').is(":visible")) {
      $('.menu__icon_burger').hide();
      $('.menu__icon_close').show();
    } else {
      $('.menu__icon_burger').show();
      $('.menu__icon_close').hide();
    }
  });
});

$(document).ready(function() {

  var bgUrl = $('.hero-container').data('background-url');
  $('.hero-container').css('background-image', 'url('+bgUrl+')');

});

$(document).ready(function() {
  $('[data-action="showMore"]').click(function() {
    $('.relative_main').removeClass('relative_main');
    $(this).hide();
  });
});


$(document).ready(function() {

});

$(document).ready(function() {
  var bgUrl = $('.thanks-container').data('background-url');
  $('.thanks-container').css('background-image', 'url('+bgUrl+')');
});
