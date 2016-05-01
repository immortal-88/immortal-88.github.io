
$(function() {
  var waypoint = new Waypoint({
    element: document.getElementById('content'),
    handler: function(direction) {
      // notify(this.id + ' hit');
      $('#menuTop').toggleClass('inverse-nav');
      $('#menu').toggleClass('inverse-menu');
      $('#small-menu-buttton').toggleClass('inverse-small-menu-buttton');
      if(direction == 'down') {
          $('#menu img').replaceWith("<img src='icon/img/logo_invert.png' />");
      }else{
          $('#menu img').replaceWith("<img src='icon/img/teatr-logo-small-white.png' />");
      }
    },
    offset: 180
  });

// Scroll up and down Menu visibility toggle
  (function () {
      var previousScroll = 0;

      $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();

        if (currentScroll === 0) {
          $('#menuTop').removeClass('menu-hide');
          console.log('show');
        }
        else if(currentScroll > 0) {
         if (currentScroll > previousScroll && $('#menuTop').css('top') == '0px'){
            $('#menuTop').addClass('menu-hide');
            console.log('hide');
         } else if(currentScroll < previousScroll && $('#menuTop').css('top') == '-150px') {
            $('#menuTop').removeClass('menu-hide');
            console.log('show');
         }
       }
         previousScroll = currentScroll;
      });
  }());


});
