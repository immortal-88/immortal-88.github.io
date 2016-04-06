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

    $('input').hover(function() {
        //var currentText = $(this).attr('title');

        $(this).next().fadeIn(500).show();
    },
        function() {
            $(this).next().fadeOut(500).hide();
        }
    );

});