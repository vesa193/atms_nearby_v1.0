$(document).ready(function(){
  	let latitude;
	let longitude;

    var _get_current_location = new Promise(function(resolve, reject){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          alert("Geolocation is not supported by this browser.");
        }
        function showPosition(position){
          if(position.coords.latitude && position.coords.longitude) {
            _fullLocation = position.coords.latitude + "," + position.coords.longitude;
            resolve(position)            
          } else {
            reject("Error occured");
          }
        }
      });
	_get_current_location.then(function(result){
	  latitude = result.coords.latitude.toFixed(7);
	  longitude = result.coords.longitude.toFixed(7);
	    const urlLink = 'https://crossorigin.me/maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=5500&type=atm&key=AIzaSyA0c8YR67ZZj-f12UZrajSOnAVuAkm3Tr4';
	  $.get( urlLink )
	  .done(function( data ) {
	    alert( "Data Loaded: " + data );
	  });
	});
});

