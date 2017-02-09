$(document).ready(function() {
  $('[data-accardion-header]').click(function() {
    var header = $(this);
    $(this).next().slideToggle(function() {
      
    });
  });
});
