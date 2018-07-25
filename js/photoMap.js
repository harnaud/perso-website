(function() {
    var myMapOptions = {
        //disableDefaultUI: true, 		// disable everything
        //zoomControl: false, 			// disable top left corner zoom control
        streetViewControl: false, 	    // disable top left street view control
        //scrollwheel: false, 			// disable zoom with mouse scroll
        //scaleControl: false,			// disable map scale
        rotateControl: false,			//
        panControl: false,			    // disable top left square control
        //overviewMapControl: false,	//
        //draggable: false,				// disable drag on the map
        mapTypeControl: false,		    // disable top right map type control
        maxZoom: 9,
        minZoom: 1,
        zoom: 1,
        center: new google.maps.LatLng(30.025814, 1.867663),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var negativeImg = new google.maps.MarkerImage('img/map/negative.png',
        // This marker is 20 pixels wide by 32 pixels tall.
        new google.maps.Size(20, 34),
        // The origin for this image is 0,0.
        new google.maps.Point(0,0)
    );

    var orangeImg = new google.maps.MarkerImage('img/map/orange.png',
        // This marker is 20 pixels wide by 32 pixels tall.
        new google.maps.Size(20, 34),
        // The origin for this image is 0,0.
        new google.maps.Point(0,0)
    );

    var whiteImg = new google.maps.MarkerImage('img/map/white.png',
        // This marker is 20 pixels wide by 32 pixels tall.
        new google.maps.Size(20, 34),
        // The origin for this image is 0,0.
        new google.maps.Point(0,0)
    );

    var infoWindowContent = function (title, albumName) {
        return '<div ng-click="photoCtrl.showAlbum(\''+albumName+'\')"><h4>'+title+'</h4></div>';
    };

    var addMarker = function(mapParam ,xParam ,yParam,
                            iconParam, labelParam, shortcutParam) {
        var markerOptions = {
            position: new google.maps.LatLng(xParam,yParam),
            icon: iconParam,
            animation: google.maps.Animation.DROP,
            map: mapParam
        };
        var marker = new google.maps.Marker(markerOptions);
        var contentString = infoWindowContent(labelParam, shortcutParam);
        var infoWindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(mapParam, marker);
        });
    };

    var initPhotoMap = function () {
        var map = new google.maps.Map(document.getElementById("photo-map-canvas"),  myMapOptions);

        addMarker(map, 37.773830, -122.418222, negativeImg, 'San Francisco', 'San Francisco');
        addMarker(map, 37.334613, -121.882651, negativeImg, 'San Jose', 'San Jose');
        addMarker(map, 34.419268, -119.695888, negativeImg, 'Santa Barbara', 'Santa Barbara');
        addMarker(map, 39.307586, -123.796412, negativeImg, 'Mendocino', 'Mendocino');
        addMarker(map, 36.598773, -121.895137, negativeImg, 'Monterey', 'Monterey');
        addMarker(map, 36.973121, -122.027454, negativeImg, 'Santa Cruz', 'Santa Cruz');
        addMarker(map, 38.583467, -121.472447, negativeImg, 'Sacramento', 'Sacramento');
        addMarker(map, 39.069467, -120.046279, negativeImg, 'Lake Tahoe', 'Lake Tahoe');
        addMarker(map, 37.743744, -119.595436, negativeImg, 'Yosemite', 'Yosemite National Park');
        addMarker(map, 36.490420, -121.183650, negativeImg, 'Pinnacles', 'Pinnacles National Park');
        addMarker(map, 35.066942, -109.785171, negativeImg, 'Petrified Forest', 'Petrified Forest National Park');
        addMarker(map, 33.876863, -115.899170, negativeImg, 'Joshua Tree', 'Joshua Tree National Park');
        addMarker(map, 40.738960, -73.994787, negativeImg, 'New York City', 'New York City');
        addMarker(map, 41.033507, -73.625553, negativeImg, 'Connecticut', 'Connecticut');
        addMarker(map, 41.873626, -87.630532, negativeImg, 'Chicago', 'Chicago');
        addMarker(map, 45.515104, -122.658154, negativeImg, 'Portland', 'Portland');
        addMarker(map, 42.940911, -122.107793, negativeImg, 'Oregon', 'Oregon');
        addMarker(map, 40.795567, -124.176776, negativeImg, 'Eureka', 'Eureka');
        addMarker(map, 47.603738, -122.339339, negativeImg, 'Seattle', 'Seattle');
        addMarker(map, 36.502568, -117.084558, negativeImg, 'Death Valley', 'Death Valley');
        addMarker(map, 37.164410, -113.011529, negativeImg, 'Zion Canyon', 'Zion Canyon');
        addMarker(map, 37.592859, -112.187283, negativeImg, 'Bryce Canyon', 'Bryce Canyon');
        addMarker(map, 37.002326, -110.111224, negativeImg, 'Monument Valley', 'Monument Valley');
        addMarker(map, 36.057075, -112.104382, negativeImg, 'Grand Canyon', 'Grand Canyon');
        addMarker(map, 36.255191, -112.697927, negativeImg, 'Havasu', 'Havasu');
        addMarker(map, 33.447114, -112.068782, negativeImg, 'Phoenix', 'Phoenix');
        addMarker(map, 35.037814, -115.614863, negativeImg, 'Mojave', 'Mojave');
        addMarker(map, 44.418994, -110.571107, negativeImg, 'Yellowstone', 'Yellowstone');
        addMarker(map, 43.791603, -110.668894, negativeImg, 'Grand Teton', 'Grand Teton');
        addMarker(map, 40.764127, -111.899886, negativeImg, 'Salt Lake City', 'Salt Lake City');
        addMarker(map, 20.800428, -156.330430, negativeImg, 'Maui', 'Maui');
        addMarker(map, 21.307279, -157.863172, negativeImg, 'Oahu', 'Oahu');
        addMarker(map, 33.835457, -116.547476, negativeImg, 'Palm Springs', 'Palm Springs');
        addMarker(map, 34.054322, -118.244227, negativeImg, 'Los Angeles', 'Los Angeles');
        addMarker(map, 32.713697, -117.165201, negativeImg, 'San Diego', 'San Diego');
        addMarker(map, 29.932137, -90.093883, negativeImg, 'New Orleans', 'New Orleans');
        addMarker(map, 36.111688, -115.173455, negativeImg, 'Las Vegas', 'Las Vegas');
        addMarker(map, 45.513973, -73.565828, negativeImg, 'Montréal', 'Montréal');
        addMarker(map, 12.968719, 77.584248, negativeImg, 'India', 'India');
        addMarker(map, 15.528908, 73.758264, negativeImg, 'Goa', 'Goa');
        addMarker(map, 27.175667, 78.041788, negativeImg, 'Agra', 'Agra');
        addMarker(map, 28.630690, 77.228048, negativeImg, 'Delhi', 'Delhi');
        addMarker(map, -22.256759, 166.444963, negativeImg, 'New Caledonia', 'New Caledonia');
        addMarker(map, -20.996700, 167.230093, negativeImg, 'Lifou', 'Lifou');
        addMarker(map, -21.530729, 167.972242, negativeImg, 'Maré', 'Maré');
        addMarker(map, -22.617070, 167.476484, negativeImg, 'Iles des Pins', 'Iles des Pins');
        addMarker(map, 51.509415, -0.137991, negativeImg, 'United Kingdom', 'United Kingdom');
        addMarker(map, 47.488174, 19.052025, negativeImg, 'Hungary', 'Hungary');
        addMarker(map, 41.385775, 2.169024, negativeImg, 'Barcelona', 'Barcelona');
        addMarker(map, 45.426469, 12.329585, negativeImg, 'Venice', 'Venice');
        addMarker(map, 43.769176, 11.257376, negativeImg, 'Florence', 'Florence');
        addMarker(map, 43.723002, 10.396514, negativeImg, 'Pise', 'Pise');
        addMarker(map, 42.107274, 9.088436, negativeImg, 'Corsica', 'Corsica');
        addMarker(map, 50.075453, 14.436810, negativeImg, 'Prague', 'Prague');
        addMarker(map, 43.948457, 4.808531, negativeImg, 'Avignon', 'Avignon');
        addMarker(map, 43.293386, 5.368060, negativeImg, 'Marseille', 'Marseille');
        addMarker(map, 48.856939, 2.350321, negativeImg, 'Paris', 'Paris');
        addMarker(map, 45.762246, 4.835462, negativeImg, 'Lyon', 'Lyon');
        addMarker(map, 48.662905, -0.514407, negativeImg, 'Normandie', 'Normandie');
        addMarker(map, 43.891395, -0.499039, negativeImg, 'Mont-de-Marsan', 'Mont-de-Marsan');
        addMarker(map, 21.161079, -86.846443, negativeImg, 'Cancun', 'Cancun');
        addMarker(map, 25.761902, -80.193660, negativeImg, 'Miami', 'Miami');
        addMarker(map, 28.539021, -81.376313, negativeImg, 'Orlando', 'Orlando');
        addMarker(map, 43.660560, -79.382873, negativeImg, 'Toronto', 'Toronto');
        addMarker(map, 43.084017, -79.072720, negativeImg, 'Niagara Falls', 'Niagara Falls');
        addMarker(map, 6.254340, -75.569272, negativeImg, 'Medellin', 'Medellin');
        addMarker(map, 3.449896, -76.530816, negativeImg, 'Cali', 'Cali');
        addMarker(map, 10.403049, -75.506023, negativeImg, 'Cartagena', 'Cartagena');
        addMarker(map, 1.332575, 103.853875, negativeImg, 'Singapore', 'Singapore');
        addMarker(map, -8.344296, 115.104327, negativeImg, 'Bali', 'Bali');
        addMarker(map, 25.825014, -77.913694, negativeImg, 'Great Stirrup Cay', 'Great Stirrup Cay');
        addMarker(map, 35.084015, -106.608511, negativeImg, 'Albuquerque', 'Albuquerque');
        addMarker(map, 35.686098, -105.938063, negativeImg, 'Santa Fe', 'Santa Fe');
        addMarker(map, 34.863811, -111.784668, negativeImg, 'Sedona', 'Sedona');
        addMarker(map, 39.738387, -104.990389, negativeImg, 'Denver', 'Denver');
        addMarker(map, 39.639256, -106.372965, negativeImg, 'Vail', 'Vail');
        addMarker(map, 30.264995, -97.743111, negativeImg, 'Austin', 'Austin');
        addMarker(map, 36.166868, -86.781584, negativeImg, 'Nashville', 'Nashville');
        addMarker(map, 37.899330, -85.968873, negativeImg, 'Fort Knox', 'Fort Knox');
        // TO BE DONE NEXT
        //addMarker(map, -8.344296, 115.104327, orangeImg, '', '');
    };

    window.initPhotoMap = initPhotoMap;
})();