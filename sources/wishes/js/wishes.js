$(document).ready(function() {

  $('[data-wishes-slider]').lightSlider({
    item: 1,
    addClass: 'wishes__list',
    adaptiveHeight:true,
    controls: false,
    responsive : [
      {
        breakpoint: 768,
        settings: {
          controls: false
        }
      }
    ]
  });

});
