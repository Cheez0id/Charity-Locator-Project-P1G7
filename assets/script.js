//Charity API ID and Key; The base URL for the Data API is:
var charityQState = "";
var charityQCity = "";
var charityQsearch = "food";
var app_id = "97037ae1";
var app_key = "3db6711569ba31d8872d4b3811e6e901";
var charityQResult = document.getElementById("charitiesList");

var charityQuery =
	"https://api.data.charitynavigator.org/v2/Organizations?app_id=" +
	app_id +
	"&app_key=" +
	app_key +
	"&search=" +
	charityQsearch +
	"&fundraisingOrgs=false&state=" +
	charityQState +
	"&city=" +
	charityQCity +
	"&scopeOfWork=ALL";



//a function that when called will run a query on charity API
function fetchCharity() {
	fetch(charityQuery)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log("hello! here is some data");
			console.log(data);
				for (var i = 0; i < data.length; i++) {
				var charityQCard = document.createElement("p");
				charityQCard.setAttribute("class", "charityCard");
				var charityName = data[i].charityName;
				var charityURL = data[i].websiteURL;
				var charityAddress =
					data[i].mailingAddress.streetAddress1 +
					", " +
					data[i].mailingAddress.streetAddress2 +
					", " +
					data[i].mailingAddress.city +
					", " +
					data[i].mailingAddress.stateOrProvince +
					", " +
					data[i].mailingAddress.postalCode;
				charityQCard.textContent =
					charityName +
					" Website: " +
					charityURL +
					" Mailing Address: " +
					charityAddress;
				charityQResult.append(charityQCard);
				// charityCard.addEventListener("click", function () {
				// 	console.log("a charityCard was clicked");
				// 	});
			}
		});
}
console.log(charityQResult.value);
//TODO: pull location details from charity api (as well as other elements we will display)

//calling the function on click of a blue button
// then running fetchCharity();
document.getElementById("inputForm").addEventListener("submit", function (event) {
	event.preventDefault();
	console.log("a button was clicked");
	fetchCharity();
	});

	//CLEAR BUTTON TO REFRESH PAGE
	document.getElementById("clearBtn").addEventListener("click", function () {
		console.log("a button was clicked");
		window.location.reload();
		});



//When the Charity is clicked on, store in local   (WORK IN PROGRESS)
charityCard.addEventListener("click", function () {
	console.log("a charityCard was clicked");
	var charityInfo = {
		name: name.value,
		mission: mission.value,
		url: url.value,
		location: location.value,
	};
	localStorage.setItem("viewed", JSON.stringify(charityInfo));

	displayViewed();
});
//Display on some HTML element  (WORK IN PROGRESS)
function displayViewed() {
	var charityInfo = JSON.parse(localStorage.getItem("viewed"));
	document.getElementById("").htmlEl = charityInfo.name;
	document.getElementById("").htmlEl = charityInfo.mission;
	document.getElementById("").htmlEl = charityInfo.url;
	document.getElementById("").htmlEl = charityInfo.location;
}
// (WORK IN PROGRESS)


//GOOGLE MAPS WORK IN PROGRESS
//SET MAP OPTIONS
var mylatlng = {
	lat: 33.7490,
	lng: 84.3880
};

var mapOptions = {
	center: mylatlng,
	zoom: 12,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions)

// directions service object to use the route method and get a result for our requests
var directionsService = new google.maps.DirectionsService();

//Direction render object which we will use to display the root. 
directionsDisplay = new google.maps.DirectionsRender();

// bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);

 function calcRoute(){
	 //create a request 
	 var request = {
		 origin: document.getElementById("from").value,
		 destination: document.getElementById("to").value,
		 travelMode: google.maps.TravelMode.DRIVING, //you can change this to WALKING, BYCYLING, and  TRANSIT
		 unitSystem: google.maps.UnitSystem.IMPERIAL
	 }
	 //pass the request to the root method 
	 directionsService.route(request, (result, status) => {
		 if (status === google.maps.DirectionStatus.Ok){
			 //get distance and time
			 const output= document.querySelector("#output");
			 output.innerHTML = "<div class='alert-info'>  From: " + document.getElementById("from").value + "  .<br />To: " + document.getElementById("to").value +  ".<br /> Driving distance: " + result.routes[0].legs[0].distance.text + ".<br />Duration: " + result.routes[0].legs[0].duration.text + ". </div>"

			 //display route

			 //********PICK UP HERE */
		 }
	 })
 }