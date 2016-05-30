/**
 * Created by apple on 28.05.16.
 */

$(function() {

    $(".owl-carousel").owlCarousel({
        items: 1,
        dotsContainer: '#carousel-custom-dots',
        margin: 5,
        loop: true,
        autoplay: true
    });

    $('.owl-dot').click(function () {
        owl.trigger('to.owl-carousel', [$(this).index(), 300]);
    });

//    L O D A S H   T E S T

    // 1 task
    var skills = json.map(function(obj) {
        return obj.skills;
    });

    var arr1 = _.sortedUniq(_.sortBy(_.flatten(skills)));
    console.log('Задание 1', arr1);

    // 2 task
    //var names = json.map(function(obj) {
    //    return obj.name;
    //});
    //
    //json.forEach(function(item) {
    //    console.log(_.sortBy(names, item.friends));
    //});

    //console.log(names);

    // 3 task
    var friends = json.map(function(obj) {
       return obj.friends;
    });

    console.log((_.flatten(friends)));

});