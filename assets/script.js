console.log("testnote");

//Charity API ID and Key; The base URL for the Data API is:
https://api.data.charitynavigator.org/v2

var app_id="97037ae1"
var app_key = "3db6711569ba31d8872d4b3811e6e901";

var charityQuery ="https://api.data.charitynavigator.org/v2/Organizations?app_id=97037ae1&app_key=3db6711569ba31d8872d4b3811e6e901&pageSize=50&search=food&rated=true&fundraisingOrgs=false&state=GA&city=Atlanta&scopeOfWork=REGIONAL"

fetch(charityQuery);
console.log(charityQuery);






//Routing api key = 56317e1080cb40469433a05f077bbb52
var routingApiKey = "56317e1080cb40469433a05f077bbb52";

var requestOptions = {
    method: 'GET',
  };
  fetch("https://api.geoapify.com/v1/routing?waypoints=50.96209827745463%2C4.414458883409225%7C50.429137079078345%2C5.00088081232559&mode=drive&apiKey=56317e1080cb40469433a05f077bbb52", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  

console.log(requestOptions);
//>>>>>>> 7625ea9b97fd13e1646507fdceeb931c9d355e7a
