/**
 * Created by apple on 14.06.16.
 */

$(function() {

    $('#slider1, #slider2, #slider3').owlCarousel({
        items: 1,
        autoplay: false,
        navText: ['<img src="app/img/left-arrow.png">', '<img src="app/img/right-arrow.png" alt="">'],
        loop: true,
        margin: 10,
        responsive: {
            768: {
                nav: true
            }
        }
    });

});