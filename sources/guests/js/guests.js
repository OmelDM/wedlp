$(document).ready(function() {
  $('[data-action="showMore"]').click(function() {
    $('.guest_hidden').removeClass('guest_hidden');
    $(this).hide();
  });
});
