/* --------------------------------------------------
	Google Maps Settings
-------------------------------------------------- */



$(document).ready(function(){
	function addPointOnMap(map, latitude, longitude, title) {
		// Map marker 
		var image = '/assets/images/map-pin.png';
		var myLatLng = new google.maps.LatLng(latitude, longitude);
		var beachMarker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image,
			title: title
		});
	}
	
	function initGMap() {
		'use strict';

		var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 2,
		scrollwheel: false,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(12.870328, -85.221781),

		// Styling of the map in JSON object
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#cdd2d4"},{"visibility":"on"}]}]
		};
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		addPointOnMap(map, -30.038382, -51.209875, "Porto Alegre");
		addPointOnMap(map, -8.059605, -34.893639, "Recife");
		addPointOnMap(map, -23.550041, -46.618693, "São Paulo");
		addPointOnMap(map, 43.652612, -79.383560, "Toronto");
		addPointOnMap(map, 47.605504, -122.330421, "Seattle");
	} // initGMap

	google.maps.event.addDomListener(window, 'load', initGMap);

});