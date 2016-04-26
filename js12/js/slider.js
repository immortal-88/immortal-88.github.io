
// I I F E    F O R   C A R O U S E L
(function($) {
    $.fn.carousel = function() {
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 825;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        console.log(elementsCount);
        if (currentLeftValue != maximumOffset) {
          currentLeftValue += 825;
          elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
      console.log(minimumOffset);
      if (currentLeftValue != minimumOffset) {
        currentLeftValue -= 825;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
      }
    });

    return this;
  }

}(jQuery));
