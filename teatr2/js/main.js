
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
        autoplay: true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000, //Время смены слайда
        video: true,
        videoWidth: false, // Default false; Type: Boolean/Number
        videoHeight: false, // Default false; Type: Boolean/Number
        center:true,
        lazyLoad: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 2
            }
        }

    });

    $(window).resize(function () {
        $('.owl-carousel-top').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $('.owl-carousel-top').find('.owl-stage-outer').children().unwrap();
    });

    // F A N C Y B O X
    $(".fancybox").fancybox();

});
