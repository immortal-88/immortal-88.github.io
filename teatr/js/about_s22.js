
$(document).ready(function() {

    // T A B S
    $('.tabs-links li a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    // O W L  C A R O U S E L
    var $owl = $('.owl-carousel');
    $owl.owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 10, //Отступ от картино если выводите больше 1
        autoplay: false, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        video: true,
        videoWidth: false, // Default false; Type: Boolean/Number
        videoHeight: false, // Default false; Type: Boolean/Number
        //center:true,
        lazyLoad: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 5
            }
        }
    });

    // Go to the next item
    $('.next-button').click(function() {
        $owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.prev-button').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $owl.trigger('prev.owl.carousel', [300]);
    });

    // O W L  C A R O U S E L  F I X
    $(window).resize(function () {
        $('.owl-carousel-top').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $('.owl-carousel-top').find('.owl-stage-outer').children().unwrap();
    });

    // F A N C Y B O X
    $(".fancybox").fancybox();

    // A U D I O  P L A Y E R
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
        $(this).jPlayer("setMedia", {
            mp3: "audio/ducktales_remastered.mp3",
            oga: ""
        });
        },
        swfPath: "/js",
        supplied: "mp3,oga"
    });

    // L I G H T  G A L L E R Y
    $('#lightgallery, #lightgallery2, #video-gallery').lightGallery({
        selector: '.item',
        download: false,
        thumbnail: 0
    });

    $('.light-gal-item').lightGallery({
        videoAutoplay : false
        //thumbnail: false,
        //thumbWidth: 120,
        //thumbContHeight: 90,
        //loadYoutubeThumbnail: true,
        //youtubeThumbSize: 'default',
        //youtubePlayerParams: {
        //            modestbranding: 1,
        //            showinfo: 0,
        //            rel: 0,
        //            controls: 0
        //        },
        //        vimeoPlayerParams: {
        //            byline : 0,
        //            portrait : 0,
        //            color : 'A90707'
        //        }

    });

    //$('.video-gallery').lightGallery({
    //    selector: "video-item",
    //    youtubePlayerParams: {
    //        modestbranding: 1,
    //        showinfo: 0,
    //        rel: 0,
    //        controls: 0
    //    },
    //    vimeoPlayerParams: {
    //        byline : 0,
    //        portrait : 0,
    //        color : 'A90707'
    //    }
    //});

});
