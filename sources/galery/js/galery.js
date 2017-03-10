$(document).ready(function() {

  $('[data-magnigic-popup]').magnificPopup({
    type: 'image',
    closeOnContentClick: true
  });

  $('[data-tag-target]').click(function() {
    $('[data-tag-current]').removeAttr('data-tag-current');
    $(this).attr('data-tag-current', 'true');
    var targetTag = $(this).data('tag-target');
    if ('tag_all' === targetTag) {
      $('[data-tag]').show();
    } else {
      $('[data-tag='+targetTag+']').show();
      $('[data-tag]').not('[data-tag='+targetTag+']').hide();
    }
  });

});
