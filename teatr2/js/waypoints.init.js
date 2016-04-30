
$(function() {
  var waypoint = new Waypoint({
    element: document.getElementById('content'),
    handler: function(direction) {
      // notify(this.id + ' hit');
      $('#menuTop').toggleClass('inverse-nav');
      $('#menu').toggleClass('inverse-menu');
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
         if (currentScroll <= 0) {
            //  $('#menuTop').style.top = '0px';
         } else if (currentScroll > previousScroll){
             console.log('down');
             $('#menuTop').slideUp();
         } else {
             console.log('up');
             $('#menuTop').slideDown(200);
         }
         previousScroll = currentScroll;
      });
  }());

});
