/**
 * Created by apple on 20.03.16.
 */

function initMap() {
    var mapDiv = document.getElementById('google-map-container');
    var myLatLng = {lat: 55.7803398, lng: 37.5563369};
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 16
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
}
