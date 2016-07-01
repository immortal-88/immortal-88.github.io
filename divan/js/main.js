/**
 * Created by apple on 14.04.16.
 */
$(document).ready(function() {

    // O W L  C A R O U S E L
    $('.slider').owlCarousel({
        items: 1,
        autoplay: true,
        //navText: ['<img src="app/img/left-arrow.png">', '<img src="app/img/right-arrow.png" alt="">'],
        loop: true,
        margin: 10,
    });

    $(".fancybox").fancybox();

});