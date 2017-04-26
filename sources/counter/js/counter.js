$(document).ready(function() {
  function makeTemplate(period) {
    return '<li class="counter__item"><div class="counter__value"><span>{'+period+'n}</span></div><div class="counter__measurement">{'+period+'l}</div></li>'
  }

  var year = $('#counter').data('counter-year');
  var month = $('#counter').data('counter-month');
  var day = $('#counter').data('counter-day');

  var today = new Date();
  var weddingDay = new Date(year, month, day);
  if (weddingDay < today) {
    $('.counter__time').countdown({
      since: new Date(year, month, day + 1),
      format: 'DHMS',
      layout: makeTemplate('d') + makeTemplate('h') + makeTemplate('m') + makeTemplate('s')
    });
    $('.counter__title').text($('#counter').data('counter-expired-title'));
    $('.counter__description').hide();

  } else {
    $('.counter__time').countdown({
      until: new Date(year, month, day),
      format: 'DHMS',
      layout: makeTemplate('d') + makeTemplate('h') + makeTemplate('m') + makeTemplate('s')
    });
  }

});
