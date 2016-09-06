//


function myFunction() {
    var e = document.getElementById('myDropdown');
    if (e.style.display == 'none' || e.style.display == '') {
        e.style.display = 'block';
    } else {
        e.style.display = 'none';
    }
}

// Carousel
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        animateOut: 'fadeOut'
    });
});

// Mobile menu
$(document).ready(function() {

    $('.activeContent').show();

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).stop().slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});

// Button group color highlighter
$('.btn-group .btn').on('click', function() {

    var self = $(this);

    if (self.find(':checkbox').length > 0) {
        //alert('checkbox clicked');
        if (self.hasClass('selectit')) {
            self.removeClass('selectit');
            self.addClass('btn-default');
        } else {
            self.addClass('selectit');
            self.removeClass('btn-default');
        }
        return;
    }

    if (self.find(':radio').length > 0) {
        //alert('radiobutton clicked');
        // CHANGE SELECTED ITEM TO GREEN   
        self.siblings("label").addBack().each(function(index, value) {
            $(this).removeClass("selectit");
            $(this).addClass("btn-default");
        });
        //alert($(this).text());
        self.removeClass("btn-default");
        self.addClass("selectit");
        return;
    }
});

// Number spinner
$(document).ready(function() {
    $("input[name='demo3_21']").TouchSpin({
        initval: 1,
        min: 1,
        max: 25
    });
});

