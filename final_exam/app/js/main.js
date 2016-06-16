/**
 * Created by apple on 14.06.16.
 */

$(function() {

    // O W L  C A R O U S E L
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

    // M A S O N R Y
    //$('.grid').masonry({
    //    // options
    //    itemSelector: '.grid-item',
    //    // use element for option
    //    columnWidth: '.grid-item',
    //    percentPosition: true
    //});

    // I S O T O P E
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        //layoutMode: 'fitRows',
        masonry: {
            columnWidth: '.grid-item'
        }
    });

});

// M A S O N R Y
//var elem = document.querySelector('.grid');
//var msnry = new Masonry( elem, {
//    // options
//    itemSelector: '.grid-item',
//    columnWidth: 200
//});

