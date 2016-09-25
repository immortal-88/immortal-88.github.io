/**
 * Created by apple on 20.03.16.
 */

function initMap() {
    var mapDiv = document.getElementById('google-map-container');
    var myLatLng = {lat: 61.0011727, lng: 69.0324414};
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 16,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
