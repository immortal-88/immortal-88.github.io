/**
 * Created by apple on 10.04.16.
 */

$(document).ready(function(){

    // O W L  C A R O U S E L
    $('.owl-carousel').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 10, //Отступ от картино если выводите больше 1
        autoplay: false, //Автозапуск слайдера
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

    var owl = $('.owl-carousel');

    $('.owl-next').click(function(){
        owl.trigger('next.owl.carousel');
    });
    $('.owl-prev').click(function(){
        owl.trigger('prev.owl.carousel');
    });

    $(window).resize(function () {
        $('.owl-carousel-top').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $('.owl-carousel-top').find('.owl-stage-outer').children().unwrap();
    });

    // B U R N I N G  T E X T
    $(document).ready(function() {
        $('.burning').burn();
    });

    // S E L E C T
    $(function(){
        $('select').selectric();
    });

    // C H E C K B O X
    var inputList = $('form .checkbox');
    for (var i = inputList.length - 1; i >= 0; i--) {
        $(inputList[i]).prettyCheckable({

        });
    }

    // A N I M A T I O N    M E N U
    $('.sub-menu').hide();
    $('.menu-item').hover(function() {
        $(this).find('.sub-menu').slideDown().fadeIn(300);
    }, function () {
        $('.sub-menu').stop(true).slideUp();
    });

});
