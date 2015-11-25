(function() {
    var myMapOptions = {
        //disableDefaultUI: true, 		// disable everything
        //zoomControl: false, 			// disable top left corner zoom control
        streetViewControl: false, 	    // disable top left street view control
        //scrollwheel: false, 			// disable zoom with mouse scroll
        //scaleControl: false,			// disable map scale
        rotateControl: false,			//
        panControl: false,			    // disable top left rond control
        //overviewMapControl: false,	//
        //draggable: false,				// disable drag on the map
        mapTypeControl: false,		    // disable top right map type control
        maxZoom: 9,
        minZoom: 1,
        zoom: 4,
        center: new google.maps.LatLng(37.775,-122.4183333),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var negativeImg = new google.maps.MarkerImage('img/map/negative.png',
        // This marker is 20 pixels wide by 32 pixels tall.
        new google.maps.Size(20, 34),
        // The origin for this image is 0,0.
        new google.maps.Point(0,0)
    );

    var initHomeMap = function () {
        var map = new google.maps.Map(document.getElementById("home-map-canvas"),  myMapOptions);
        var markerOptions = {
            position: new google.maps.LatLng(37.785057, -122.406874),
            icon: negativeImg,
            map: map
        };
        var myMarker = new google.maps.Marker(markerOptions);
    };

    window.initHomeMap = initHomeMap;
})();

$(document).ready( function () {
    initHomeMap();
});