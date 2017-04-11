$(document).ready(function() {
  function makeTemplate(period) {
    return '<li class="counter__item"><div class="counter__value"><span>{'+period+'n}</span></div><div class="counter__measurement">{'+period+'l}</div></li>'
  }

  var year = $('#counter').data('counter-year');
  var month = $('#counter').data('counter-month');
  var day = $('#counter').data('counter-day');

  $('.counter__time').countdown({
    until: new Date(year, month, day),
    format: 'DHMS',
    layout: makeTemplate('d') + makeTemplate('h') + makeTemplate('m') + makeTemplate('s')
  });
});
