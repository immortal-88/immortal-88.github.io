function initMap(){var o=document.getElementById("google-map-container"),t={lat:55.7803398,lng:37.5563369},e=new google.maps.Map(o,{center:t,zoom:16});new google.maps.Marker({position:t,map:e})}$(document).ready(function(){var o=new Date($(".countdown").attr("date-time"));$(".countdown").countdown({until:o,format:"yowdHMS"}),$(".fancybox").fancybox(),$(".top_mnu").navigation(),$(".block").waypoint(function(o){"down"===o?$(".class").addClass("active"):"up"===o&&$(".class").removeClass("deactive")},{offset:100}),$("a.scroll").click(function(){$.scrollTo($(".div"),800,{offset:-90})});var t=$(".owl-carousel");t.owlCarousel({loop:!1,margin:10,nav:!1,autoplay:!1,smartSpeed:1e3,autoplayTimeout:2e3,responsive:{0:{items:1},600:{items:2},1e3:{items:4}}}),$(".next-button").click(function(){t.trigger("next.owl.carousel")}),$(".prev-button").click(function(){t.trigger("prev.owl.carousel",[300])}),$("#top").click(function(){return $("body, html").animate({scrollTop:0},800),!1}),$("form").submit(function(){return $.ajax({type:"GET",url:"mail.php",data:$("form").serialize()}).done(function(){alert("Спасибо за заявку!"),setTimeout(function(){$.fancybox.close()},1e3)}),!1})});