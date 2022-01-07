//Charity API ID and Key; The base URL for the Data API is:
var charityQState = "";
var charityQCity = "";
var charityQsearch = "food";
var app_id = "97037ae1";
var app_key = "3db6711569ba31d8872d4b3811e6e901";
var charityQResult = document.getElementById("charitiesList");
var geocoder;
var map; 


function initMap() {
	geocoder = new google.maps.Geocoder();
	mapDiv = document.getElementById('map');
	console.log(mapDiv);
	map = new google.maps.Map(document.getElementById("map"),
	{
  center: {lat: 33.7490, lng: -84.3880 },
  zoom: 8
  });
  }


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
			function codeAddress (data){
				for (i = 0; i <= data.length; i++){

				
				var address = data[i].mailingAddress.streetAddress1
				console.log(address);
				geocoder.geocode({
					"address": address
				}, function (results, status){
					if (status == 'OK') {
							console.log(results);
							var lat = results[0].geometry.location.lat();
							console.log(lat);
							var lng = results[0].geometry.location.lng();
							console.log(lng);
							var location = {lat: lat, lng: lng }
						// map.setCenter(results[0].geometry.location);
						var marker = new google.maps.Marker({
							map: map,
							position: location
						});
					  } else {
						alert('Geocode was not successful for the following reason: ' + status);
					  }
				}
				)
			}
				
			}
			codeAddress(data);

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




 
