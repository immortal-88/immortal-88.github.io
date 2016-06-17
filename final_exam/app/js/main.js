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

    // I S O T O P E
    var $grid = $('.grid').imagesLoaded( function() {
        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item'
            }
        });
    });

    // P I X A B A Y   A P I
    $('.header__button--search').click(function () {
        var QUERY = $('.search__box').val();
        var API_KEY = '2642645-cf42d869fc25a73a97a804db7';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + QUERY;


        $.getJSON(URL, function (data) {
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function (i, hit) {
                    console.log(hit.pageURL);
                    if (i < 1) {
                            $("<img/>").attr("src", hit.webformatURL)
                                .css({
                                    height: '100%',
                                    position: 'absolute',
                                    left: '-25%'
                                })
                                .appendTo(".grid-item1");
                    }
                });
            else
                console.log('No hits');
        });

    });

    //$.ajax({
    //    method: "GET",
    //    url: "api.pixplorer.co.uk/image?word=doge&amount=5&size=tb",
    //    dataType: "jsonp"
    //});

    // Отправка запроса на Enter
    $('body').keypress(function (e) {
        if (e.which == 13) {
            $('.header__button--search').click();
        }
    });

});

// -------------------------

//var $container = $('#image-container');
//var $status = $('#status');
//var $progress = $('progress');
//
//var supportsProgress = $progress[0] &&
//        // IE does not support progress
//    $progress[0].toString().indexOf('Unknown') === -1;
//
//var loadedImageCount, imageCount;
//
//$('#add').click( function() {
//    // add new images
//    var items = getItems();
//    $container.prepend( $(items) );
//    // use ImagesLoaded
//    $container.imagesLoaded()
//        .progress( onProgress )
//        .always( onAlways );
//    // reset progress counter
//    imageCount = $container.find('img').length;
//    resetProgress();
//    updateProgress( 0 );
//});
//
//// reset container
//$('#reset').click( function() {
//    $container.empty();
//});

//// -----  ----- //
//
//// return doc fragment with
//function getItems() {
//    var items = '';
//    for ( var i = 0; i < 7; i++ ) {
//        items += getImageItem();
//    }
//    return items;
//}
//
//// return an <li> with a <img> in it
//function getImageItem() {
//    var item = '<li class="is-loading">';
//    var size = Math.random() * 3 + 1;
//    var width = Math.random() * 110 + 100;
//    width = Math.round( width * size );
//    var height = Math.round( 140 * size );
//    var rando = Math.ceil( Math.random() * 1000 );
//    // 10% chance of broken image src
//    // random parameter to prevent cached images
//    var src = rando < 100 ? '//foo/broken-' + rando + '.jpg' :
//        // use lorempixel for great random images
//    '//lorempixel.com/' + width + '/' + height + '/' + '?' + rando;
//    item += '<img src="' + src + '" /></li>';
//    return item;
//}
//
//// -----  ----- //
//
//function resetProgress() {
//    $status.css({ opacity: 1 });
//    loadedImageCount = 0;
//    if ( supportsProgress ) {
//        $progress.attr( 'max', imageCount );
//    }
//}
//
//function updateProgress( value ) {
//    if ( supportsProgress ) {
//        $progress.attr( 'value', value );
//    } else {
//        // if you don't support progress elem
//        $status.text( value + ' / ' + imageCount );
//    }
//}
//
//// triggered after each item is loaded
//function onProgress( imgLoad, image ) {
//    // change class if the image is loaded or broken
//    var $item = $( image.img ).parent();
//    $item.removeClass('is-loading');
//    if ( !image.isLoaded ) {
//        $item.addClass('is-broken');
//    }
//    // update progress element
//    loadedImageCount++;
//    updateProgress( loadedImageCount );
//}
//
//// hide status when done
//function onAlways() {
//    $status.css({ opacity: 0 });
//}



