$(function() {
  var waypoint = new Waypoint({
    element: document.getElementById('content'),
    handler: function(direction) {
      // notify(this.id + ' hit');
      console.log('passed');
      $('#menuTop').toggleClass('inverse-nav');
      $('#menu').toggleClass('inverse-menu');
      $('#menu img').toggle();
      console.log('addedclass');
    },
    offset: 180
  });
});
