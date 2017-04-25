$(document).ready(function() {

  var ANIMATION_MIN_WIDTH = 768;

  $('[data-animation]').css('visibility', 'hidden');

  $('[data-animation]').one('inview', function() {
    if (ANIMATION_MIN_WIDTH < window.innerWidth) {
      var animationType = 'animated ' + $(this).data('animation');
      $(this).addClass(animationType);

    }
    $(this).css('visibility', 'visible');
  })

});
