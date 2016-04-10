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
            $(this).next().hide();
        }
    });

    $('input').blur(function() {
        $(this).next().hide();
    });

    $('input').on('input', function() {
        if($(this).val() == '') {
            $(this).next().fadeIn(500).show();
        }else{
            $(this).next().hide();
        }
    });

    $('.form-button').on('click', function() {
        $('input').next().fadeIn(500).show();
        window.setTimeout(function() {
            $('input').next().hide();
        }, 3000);
    });

});