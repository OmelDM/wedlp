function main () {
  // get filter=filterName

}

$(document).ready(function() {

  var bgUrl = $('.hero-container').data('background-url');
  $('.hero-container').css('background-image', 'url('+bgUrl+')');

});

function block (argument) {
  // body...
}
$(document).ready(function() {
  function makeTemplate(period) {
    return '<li class="counter__item"><div class="counter__value"><span>{'+period+'n}</span></div><div class="counter__measurement">{'+period+'l}</div></li>'
  }

  $('.counter__time').countdown({
    until: new Date(2017, 8, 16),
    format: 'DHMS',
    layout: makeTemplate('d') + makeTemplate('h') + makeTemplate('m') + makeTemplate('s')
  });
});


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

$(document).ready(function() {
  $('[data-action="showMore"]').click(function() {
    $('.guest_hidden').removeClass('guest_hidden');
    $(this).hide();
  });
});

$(document).ready(function() {

  $('.menu').click(function() {
    $('.navigation-container_small').toggleClass('navigation-container_active');

    if($('.menu__icon_burger').is(":visible")) {
      $('.menu__icon_burger').hide();
      $('.menu__icon_close').show();
    } else {
      $('.menu__icon_burger').show();
      $('.menu__icon_close').hide();
    }
  });
});

$(document).ready(function() {

  var bgUrl = $('.hero-container').data('background-url');
  $('.hero-container').css('background-image', 'url('+bgUrl+')');

});


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

$(document).ready(function() {
});

$(document).ready(function() {
  $('[data-accardion-header]').click(function() {
    $(this).next().slideToggle();
  });
});

$(document).ready(function() {
  $('[data-action="showMore"]').click(function() {
    $('.relative_main').removeClass('relative_main');
    $(this).hide();
  });
});

$(document).ready(function() {
  $('#events').selectric();
});


$(document).ready(function() {

});

$(document).ready(function() {
  var bgUrl = $('.thanks-container').data('background-url');
  $('.thanks-container').css('background-image', 'url('+bgUrl+')');
});

$(document).ready(function() {

  $('[data-wishes-slider]').lightSlider({
    item: 1,
    addClass: 'wishes__list',
    adaptiveHeight:true,
    auto: true,
    pause: 5000,
    pauseOnHover: true,
    loop: true,
    nextHtml: '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M35 88.5c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l35.7-35.7-36-36c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0L77 47.7 37.2 87.6c-.6.6-1.4.9-2.2.9z"/></svg>',
    prevHtml: '<svg class="arrow arrow_prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M35 88.5c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l35.7-35.7-36-36c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0L77 47.7 37.2 87.6c-.6.6-1.4.9-2.2.9z"/></svg>',
  });

  $('[data-action="addWish"]').magnificPopup({
    showCloseBtn: false,
    midClick: true,
    items: {
      type:'inline',
      src: $('[data-role="addWishForm"]')
    }
  });

  $('[data-action="closeAddWishForm"]').click(function() {
    $('[data-action="addWish"]').magnificPopup('close');
  });

});