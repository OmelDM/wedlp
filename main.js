function initMap(){var a=$("[data-tab-current]");map=new google.maps.Map(document.getElementById("map"),{zoom:16,center:{lat:a.data("place-lat"),lng:a.data("place-lng")},disableDefaultUI:!0}),map.addListener("bounds_changed",function(){var a=$("[data-tab-current]");map.setCenter({lat:a.data("place-lat"),lng:a.data("place-lng")})}),$("[data-place-lat]").each(function(){addMarker({lat:$(this).data("place-lat"),lng:$(this).data("place-lng")})})}function addMarker(a){new google.maps.Marker({position:a,map:map})}$(document).ready(function(){$("[data-animation]").css("visibility","hidden"),$("[data-animation]").one("inview",function(){if(768<window.innerWidth){var a="animated "+$(this).data("animation");$(this).addClass(a)}$(this).css("visibility","visible")})}),$(document).ready(function(){function a(a){return'<li class="counter__item"><div class="counter__value"><span>{'+a+'n}</span></div><div class="counter__measurement">{'+a+"l}</div></li>"}var t=$("#counter").data("counter-year"),e=$("#counter").data("counter-month"),n=$("#counter").data("counter-day"),o=new Date;new Date(t,e,n)<o?($(".counter__time").countdown({since:new Date(t,e,n+1),format:"DHMS",layout:a("d")+a("h")+a("m")+a("s")}),$(".counter__title").text($("#counter").data("counter-expired-title")),$(".counter__description").hide()):$(".counter__time").countdown({until:new Date(t,e,n),format:"DHMS",layout:a("d")+a("h")+a("m")+a("s")})}),$(document).ready(function(){$("[data-magnigic-popup]").magnificPopup({type:"image",closeOnContentClick:!0,gallery:{enabled:!0}}),$(".owl-carousel").owlCarousel({nav:!0,dots:!1,navText:[],autoplay:!0,loop:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3},1400:{items:4},1700:{items:5}}})}),$(document).ready(function(){$('[data-action="showMore"]').click(function(){$(".guest_hidden").removeClass("guest_hidden"),$(this).hide()})}),$(document).ready(function(){function a(){$(".navigation-container_small").toggleClass("navigation-container_active"),$(".menu__icon_burger").is(":visible")?($(".menu__icon_burger").hide(),$(".menu__icon_close").show()):($(".menu__icon_burger").show(),$(".menu__icon_close").hide())}$("[data-smooth-scroll]").smoothScroll({beforeScroll:a}),$(".menu").click(a)}),$(document).ready(function(){var a=$(".hero-container").data("background-url");$(".hero-container").css("background-image","url("+a+")")});var map;$(document).ready(function(){$("[data-tab-target]").click(function(){$("[data-nav-current]").removeAttr("data-nav-current"),$(this).attr("data-nav-current","true"),$("[data-tab-current]").removeAttr("data-tab-current").hide();var a=$(this).data("tab-target"),t=$("[data-tab="+a+"]");t.fadeToggle("slow").attr("data-tab-current","true"),map.setCenter({lat:t.data("place-lat"),lng:t.data("place-lng")})})}),$(document).ready(function(){Pace.on("done",function(){$("#preloader").fadeOut()})}),$(document).ready(function(){$("[data-accardion-header]").click(function(){$(this).next().slideToggle()}),$("[data-accardion-header]").eq(0).next().slideToggle()}),$(document).ready(function(){$('[data-action="showMore"]').click(function(){$(".relative_main").removeClass("relative_main"),$(this).hide()})}),$(document).ready(function(){function a(){var a=!0;return $('[name="name"]').val()?$('[name="name"]').removeClass("has-error"):($('[name="name"]').addClass("has-error"),a=!1),a}function t(a){var t=null;window.FormData&&(t=new FormData(a)),t&&$.ajax({url:"rsvp.php",type:"POST",data:t,processData:!1,contentType:!1,dataType:"json",success:e,error:n})}function e(a){$("[data-rsvp-main]").addClass("hidden"),$("[data-rsvp-thanks]").removeClass("hidden"),$("html, body").animate({scrollTop:$("[data-rsvp-thanks]").offset().top-200},1e3)}function n(a){alert("Error "+a.responseJSON.text)}$("#rsvpform").submit(function(e){e.preventDefault(),a()&&t(this)})}),$(document).ready(function(){var a=$(".thanks-container").data("background-url");$(".thanks-container").css("background-image","url("+a+")")}),$(document).ready(function(){$("[data-wishes-slider]").lightSlider({item:1,addClass:"wishes__list",adaptiveHeight:!0,auto:!0,pause:5e3,pauseOnHover:!0,loop:!0,nextHtml:'<svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M35 88.5c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l35.7-35.7-36-36c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0L77 47.7 37.2 87.6c-.6.6-1.4.9-2.2.9z"/></svg>',prevHtml:'<svg class="arrow arrow_prev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M35 88.5c-.8 0-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1 0-4.2l35.7-35.7-36-36c-1.2-1.2-1.2-3.1 0-4.2 1.2-1.2 3.1-1.2 4.2 0L77 47.7 37.2 87.6c-.6.6-1.4.9-2.2.9z"/></svg>'}),$('[data-action="addWish"]').click(function(){$.smoothScroll({scrollElement:$("html, body"),scrollTarget:"#rsvp"})})});