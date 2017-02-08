$(document).ready(function() {
  $('[data-action="showMore"]').click(function() {
    $('.relative_main').removeClass('relative_main');
    $(this).hide();
  });
});
