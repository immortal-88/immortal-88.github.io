/**
 * Created by apple on 14.04.16.
 */

// Первая версия аккордеона

$(document).ready(function() {

    $('.activeContent').show();

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();

        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).stop().slideDown(300).addClass('open');
            $(this).addClass('active__title');
            $(this).find('.pre-text').html('-');
            $(this).find('.pre-text').css("padding", "7px 12px 5px 9px");

            $('.accordion-section-title').not(this).removeClass('active__title');
            $('.accordion-section-title').not(this).find('.pre-text').html('+');
            $('.accordion-section-title').not(this).find('.pre-text').css("padding", "7px 10px 5px 7px");

        }

        e.preventDefault();
    });
});

// Вторая версия аккордеона

//$(document).ready(function() {
//
//    console.log( 'accordion.js is going' );
//
//
//    $('.activeContent').show();
//
//    $('.accordion .accordion-section-title').click(function(e) {
//        // Grab current anchor value
//        var currentAttrValue = $(this).attr('href');
//        console.log( currentAttrValue );
//        console.log( $(this).is('.active') );
//
//        if( ! $(this).is('.active') ){
//            // Add active class to section title
//            $(this).addClass('active');
//            // Open up the hidden content panel
//            $('.accordion ' + currentAttrValue).stop().slideDown(300).addClass('open');
//            $(this).addClass('active__title');
//            $(this).find('.pre-text').html('-');
//            $(this).find('.pre-text').css("padding", "7px 12px 5px 9px");
//        } else {
//            $(this).removeClass('active');
//            $(this).removeClass('active__title');
//            $(this).find('.pre-text').html('+');
//            $(this).find('.pre-text').css("padding", "7px 10px 5px 7px");
//            $('.accordion ' + currentAttrValue).slideUp(300).removeClass('open');
//        }
//        e.preventDefault();
//    });
//});