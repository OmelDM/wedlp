$(document).ready(function() {

  selectAll()

  $('[data-select-event]').change(function(event) {
    if (event.target.value === 'all') {
      selectAll();
    } else {
    //  $('[data-select-event] option[name="all"]').removeAttr('selected');
    }
  });

  function selectAll() {
    $('[data-select-event] option').each(function(index, element) {
      $(element).prop('selected', 'true');
    });
  }

});
