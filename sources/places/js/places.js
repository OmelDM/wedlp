var map;

$(document).ready(function() {

  $('[data-tab-target]').click(function() {
    $('[data-nav-current]').removeAttr('data-nav-current');
    $(this).attr('data-nav-current', 'true');
    $('[data-tab-current]').removeAttr('data-tab-current').hide();
    var targetTabNum = $(this).data('tab-target');
    var targetTab = $('[data-tab='+targetTabNum+']');
    targetTab.fadeToggle('slow').attr('data-tab-current', 'true');
    map.setCenter({
      lat: targetTab.data('place-lat'),
      lng: targetTab.data('place-lng')
    });
  });

});

function initMap() {
  var currentPlace = $('[data-tab-current]');
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {
      lat: currentPlace.data('place-lat'),
      lng: currentPlace.data('place-lng')
    },
    disableDefaultUI: true
  });

  map.addListener('bounds_changed', function() {
    var currentPlace = $('[data-tab-current]');
    map.setCenter({
      lat: currentPlace.data('place-lat'),
      lng: currentPlace.data('place-lng')
    });
  });

  $('[data-place-lat]').each(function() {
    addMarker({
      lat: $(this).data('place-lat'),
      lng: $(this).data('place-lng')
    });
  });
}

function addMarker(cord) {
  var marker = new google.maps.Marker({
    position: cord,
    map: map
  });
}
