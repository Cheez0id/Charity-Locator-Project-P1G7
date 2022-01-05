<<<<<<< HEAD


=======
<<<<<<< HEAD




//Below is where we will have the charity API code
var app_id="97037ae1"
var app_key = "3db6711569ba31d8872d4b3811e6e901";


//Routing api key = 56317e1080cb40469433a05f077bbb52

var routingApiKey = "56317e1080cb40469433a05f077bbb52";
>>>>>>> 3b4f2530e8e13cb57204e3c7160f507aaf313254
var requestOptions = {
    method: 'GET',
  };
  fetch("https://api.geoapify.com/v1/routing?waypoints=50.96209827745463%2C4.414458883409225%7C50.429137079078345%2C5.00088081232559&mode=drive&apiKey=56317e1080cb40469433a05f077bbb52", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  

console.log(requestOptions);
>>>>>>> 7625ea9b97fd13e1646507fdceeb931c9d355e7a
