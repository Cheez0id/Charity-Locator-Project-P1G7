//Charity API ID and Key; The base URL for the Data API is:
var app_id = "97037ae1";
var app_key = "3db6711569ba31d8872d4b3811e6e901";
var geocoder;
var map;
var charityTitle;
var charityURL;
var charityAddress;
var charityQCard;
var charityQState;
var charityQResult = document.getElementById("charitiesList");
var charityViewResult = document.getElementById("charitiesViewed");
// var charityQState = "GA";
// If you get an alert error code that says you have reached qa query limit, uncomment the code above

function initMap() {
	geocoder = new google.maps.Geocoder();
	mapDiv = document.getElementById('map');
	console.log(mapDiv);
	map = new google.maps.Map(document.getElementById("map"),
		{
			center: { lat: 33.7490, lng: -84.3880 },
			zoom: 8
		});
};

//a function that when called will run a query on charity API
function fetchCharity() {
	console.log("click");
	var charityQState = document.getElementById("State").value;
	var charityQCity = document.getElementById("City").value;
	var charityQZip = document.getElementById("zipCode").value;
	var charityQsearch = "food";
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
		"&zip=" +
		charityQZip +
		"&scopeOfWork=ALL";

	fetch(charityQuery)
		.then(function (response) {
			console.log(response);
			if (response.status === 404) {
				var charityQCardNo = document.createElement("p");
				charityQCardNo.setAttribute("class", "charityCardNo");
				charityQCardNo.setAttribute("data-content", "NO RESULTS FOUND");
				charityQCardNo.textContent = "No Results Found!";
				charityQResult.append(charityQCardNo);
			}
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			displayEverything(data);

		});
};

//Display Charities in cards and on the map
function displayEverything(data) {
	console.log("all the cards");
	for (var i = 0; i <= data.length; i++) {
		var charityQCard = document.createElement("p");
		charityQCard.setAttribute("class", "charityCard");
		charityTitle = data[i].charityName;
		charityQCard.setAttribute("charityName", charityTitle);
		charityURL = data[i].websiteURL;
		charityQCard.setAttribute("charityUrl", charityURL);
		charityAddress =
			data[i].mailingAddress.streetAddress1 +
			", " +
			data[i].mailingAddress.streetAddress2 +
			", " +
			data[i].mailingAddress.city +
			", " +
			data[i].mailingAddress.stateOrProvince +
			", " +
			data[i].mailingAddress.postalCode;
		charityQCard.setAttribute("charityAddress", charityAddress);
		charityQCard.textContent =
			charityTitle +
			" Website: " +
			charityURL +
			" Mailing Address: " +
			charityAddress;
		charityQResult.append(charityQCard);

		//Showing on map function
		var address = data[i].mailingAddress.streetAddress1
		console.log(address);
		geocoder.geocode({
			"address": address
		}, function (results, status) {
			if (status == 'OK') {
				console.log(results);
				var lat = results[0].geometry.location.lat();
				console.log(lat);
				var lng = results[0].geometry.location.lng();
				console.log(lng);
				var location = { lat: lat, lng: lng }
				// map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: map,
					position: location
				});
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		})

	}
};

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


//CLEAR BUTTON TO REFRESH PAGE
document.getElementById("clearBtn").addEventListener("click", function () {
	console.log("a button was clicked");
	window.location.reload();
});

//When the Charity in Results is clicked on
var charityViewed = [];
charityQResult.addEventListener("click", function (event) {
	console.log(event.target);
	var charityInfo = {
		name: event.target.getAttribute("charityName"),
		url: event.target.getAttribute("charityUrl"),
		location: event.target.getAttribute("charityAddress"),
	};
	if (charityInfo.name === null) {
		return;
	}
	charityViewed.unshift(charityInfo);
	localStorage.setItem("viewed", JSON.stringify(charityViewed));
	displayViewed();
	window.open(charityInfo.url, "_blank");
});

//When the Charity in Recent is clicked on
charityViewResult.addEventListener("click", function (event) {
	console.log(event.target);
	var charityInfo = {
		name: event.target.getAttribute("charityName"),
		url: event.target.getAttribute("charityUrl"),
		location: event.target.getAttribute("charityAddress"),
	};
	if (charityInfo.name === null) {
		return;
	}
	charityViewed.unshift(charityInfo);
	localStorage.setItem("viewed", JSON.stringify(charityViewed));
	displayViewed();
	window.open(charityInfo.url, "_blank");
});

//Display on the Recent Viewed
function displayViewed() {
	charityViewResult.innerHTML = "";
	var charityInfo = JSON.parse(localStorage.getItem("viewed"));
	for (var j = 0; j < 5; j++) {
		charityName = charityInfo[j].name;
		charityURL = charityInfo[j].url;
		charityAddress = charityInfo[j].location;
		var charityViewCard = document.createElement("p");
		charityViewCard.setAttribute("class", "charityCard");
		charityViewCard.setAttribute("charityName", charityName);
		charityViewCard.setAttribute("charityUrl", charityURL);
		charityViewCard.setAttribute("charityAddress", charityAddress);
		charityViewCard.textContent =
			charityName +
			" Website: " +
			charityURL +
			" Mailing Address: " +
			charityAddress;
		charityViewResult.append(charityViewCard);
	}
};

//Repopulate the Local Storage
function fillStorage () {
	var storage = JSON.parse(localStorage.getItem("viewed"));
	if (storage !== null) {
		charityViewed = storage;
	}
	displayViewed();
}

//Run on loading the page
fillStorage();
