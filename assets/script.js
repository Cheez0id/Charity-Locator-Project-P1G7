//Charity API ID and Key; The base URL for the Data API is:
//api.data.charitynavigator.org/v2
//Params and magic reference documentation: https://charity.3scale.net/docs/data-api/reference

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
				var charityAddress = 	data[i].mailingAddress.streetAddress1 +
				", " +
				data[i].mailingAddress.streetAddress2 +
				", " +
				data[i].mailingAddress.city +
				", " +
				data[i].mailingAddress.stateOrProvince +
				", " +
				data[i].mailingAddress.postalCode;
				charityQCard.setAttribute("class", "charityCard");
				charityQCard.textContent =
					data[i].charityName +
					" Website: " +
					data[i].websiteURL +
					" Mailing Address: " +
					charityAddress;
				charityQResult.append(charityQCard);
			}
		});
}
console.log(charityQResult.value);
//TODO: pull location details from charity api (as well as other elements we will display)

//calling the function on click of a blue button
// then running fetchCharity();
document.getElementById("blueButton").addEventListener("click", function () {
	console.log("a button was clicked");
	fetchCharity();
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
//>>>>>>> 7625ea9b97fd13e1646507fdceeb931c9d355e7a

//When the Charity is clicked on, store in local   (WORK IN PROGRESS)
charityCard.addEventListener("click", function () {
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
