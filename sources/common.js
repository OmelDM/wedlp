$(document).ready(function() {

  $('[data-animation]').css('visibility', 'hidden');

  $('[data-animation]').one('inview', function() {
    var animationType = 'animated ' + $(this).data('animation');
    $(this).addClass(animationType);
    $(this).css('visibility', 'visible');
  })

});
