/**
 * Created by apple on 28.05.16.
 */

$(function() {

    $(".owl-carousel").owlCarousel({
        items: 1,
        dotsContainer: '#carousel-custom-dots',
        margin: 5,
        loop: true,
        autoplay: true
    });

    $('.owl-dot').click(function () {
        owl.trigger('to.owl-carousel', [$(this).index(), 300]);
    });

});