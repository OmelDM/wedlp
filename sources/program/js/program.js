$(document).ready(function() {
  $('[data-accardion-header]').click(function() {
    $(this).next().slideToggle();
  });

  $('[data-accardion-header]').eq(0).next().slideToggle();

});
