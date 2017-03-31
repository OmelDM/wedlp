$(document).ready(function() {

  $('#rsvpform').ajaxrsvp({
    successCallback: function() {
      $('[data-rsvp-main]').addClass('hidden');
      $('[data-rsvp-thanks]').removeClass('hidden');
    	$('html, body').animate({
        scrollTop: $('[data-rsvp-thanks]').offset().top - 200
      }, 1000);
    }
  });

});
