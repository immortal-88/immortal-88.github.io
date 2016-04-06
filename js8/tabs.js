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
        if($('input').text =='') {
            $(this).next().fadeIn(500).show();
        }
    });

    $('input').blur(function() {
        $(this).next().fadeIn(500).hide();
    });

});