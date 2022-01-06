// e305b86027cf27703fd844cd62d002cb62ddd319
//3b4f2530e8e13cb57204e3c7160f507aaf313254
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
	"https://api.data.charitynavigator.org/v2/Organizations?app_id=" + app_id +
	"&app_key=" +	app_key +
	"&search=" + charityQsearch +
	"&fundraisingOrgs=false&state=" +	charityQState +
	"&city=" +	charityQCity + "&scopeOfWork=ALL";

//a function that when called will run a query on charity API
function fetchCharity() {
	fetch(charityQuery)
		//TODO:  query works; need to get specific data from XHP and Fetch to display upon request - ??Fetch>Organizations>[array]
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log("hello! here is some data");
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				console.log(data[i].charityName);
        charityQResult.value += (data[i].charityName);
			}
		});
}
console.log(charityQResult.value)

//calling the function on click of a blue button
// then running fetchCharity();
document.getElementById("blueButton").addEventListener("click", function () {
	console.log("a button was clicked");
	fetchCharity();
});


// >>>>>>> e305b86027cf27703fd844cd62d002cb62ddd319




//Routing api key = 56317e1080cb40469433a05f077bbb52
var routingApiKey = "56317e1080cb40469433a05f077bbb52";
// >>>>>>> 3b4f2530e8e13cb57204e3c7160f507aaf313254
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
