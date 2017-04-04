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

});
