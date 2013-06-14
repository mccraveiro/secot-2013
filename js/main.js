$(document).ready(function() {    
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyCgAyPM3Fn9VTdmVwQcDVroHQbnjnWgfuk&sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    
    var mapOptions = {
        scrollwheel: false,
        draggable: false,
        disableDefaultUI: true,
        center: new google.maps.LatLng(-23.48981, -47.43046),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        //position: new google.maps.LatLng(25.770976, -80.190069),
        position: new google.maps.LatLng(-23.48863, -47.44442),
        map: map,
        title: '',
        icon: 'img/map-marker.png'
    });
}