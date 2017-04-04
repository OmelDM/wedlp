$(document).ready(function() {

  $('#rsvpform').submit(function(event) {
    event.preventDefault();

    if (isFormValid()) {
      sendForm(this);
    } else {
      showErrors();
    }

  });

  function isFormValid() {
    return true;
  }

  function sendForm(form) {
    var formData = null;

    if (window.FormData) {
      formData = new FormData(form);
    }

    if (formData) {
      $.ajax({
        url: "rsvp.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: successCallback,
        error: errorCallback
      });
    }
  }

  function showErrors() {

  }

  function successCallback(resonse) {
    $('[data-rsvp-main]').addClass('hidden');
    $('[data-rsvp-thanks]').removeClass('hidden');
    $('html, body').animate({
      scrollTop: $('[data-rsvp-thanks]').offset().top - 200
    }, 1000);
  }

  function errorCallback(jqXHR) {
    alert('Error ' + jqXHR.responseJSON.text);
  }
});
