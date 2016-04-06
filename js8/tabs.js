/**
 * Created by apple on 03.04.16.
 */

$(document).ready(function() {

    $('.tabs-links li a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).slideDown(400).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    $('input').focus(function() {
        $(this).next().fadeIn(500).show();
        if($(this).val() != '') {
            $(this).next().fadeOut(500).hide();
        }
    });

    $('input').blur(function() {
        $(this).next().fadeOut('slow').hide();
    });

    $('input').on('input', function() {
        if($(this).val() != '') {
            $(this).next().fadeOut(500).hide();
        }
    });

    $('.form-button').on('click', function() {
        $('input').next().fadeIn(500).show();
        var timeOut = window.setTimeout(function() {
            $('input').next().fadeOut('slow').hide();
        }, 3000);
    });

});