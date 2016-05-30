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

    var arr1 = _.sortedUniq(_.sortBy( _.mapValues(_.flatten(skills), _.method('toLowerCase')) ));
    console.log('Задание 1', arr1);


    // 2 task
    var sortedJson = (_.sortBy(json, ['friends', 'name']));
    var names = sortedJson.map(function(obj) {
        return obj.name;
    });
    console.log('Задание 2', names);


    // 3 task
    var friends = json.map(function(obj) {
       return obj.friends;
    });

    var arr3 = [];
    var deep =_.flattenDepth(friends);
    deep.forEach(function(item) {
        arr3.push(_.get(item, 'name'));
    });
    console.log('Задание 3', _.uniq(arr3));
});