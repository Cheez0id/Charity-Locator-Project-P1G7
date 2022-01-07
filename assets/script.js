//Charity API ID and Key; The base URL for the Data API is:
var app_id = "97037ae1";
var app_key = "3db6711569ba31d8872d4b3811e6e901";
var charityQResult = document.getElementById("charitiesList");

// var charityQCity = document.getElementById("City").value;
// console.log(charityQCity);

//a function that when called will run a query on charity API
function fetchCharity() {
var charityQState = document.getElementById("State").value;
var charityQCity = document.getElementById("City").value;
var charityQZip= document.getElementById("zipCode").value;
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
	"&scopeOfWork=ALL"
	;
	console.log(charityQCity);

	fetch(charityQuery)
		.then(function (response) {
			return response.json();
		})
			.then(function (data) {
				console.log(data);
				for (var i = 0; i <= data.length; i++) {
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


//calling the function on submitting the form then running fetchCharity();
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

//Routing api key = 56317e1080cb40469433a05f077bbb52
var routingApiKey = "56317e1080cb40469433a05f077bbb52";
var requestOptions = {
	method: "GET",
};
fetch(
	"https://api.geoapify.com/v1/routing?waypoints=50.96209827745463%2C4.414458883409225%7C50.429137079078345%2C5.00088081232559&mode=drive&apiKey=56317e1080cb40469433a05f077bbb52",
	requestOptions
)
	.then((response) => response.json())
	.then((result) => console.log(result))
	.catch((error) => console.log("error", error));

console.log(requestOptions);

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
