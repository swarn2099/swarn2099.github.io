function myFunction(){
	var str2 = document.getElementById("first");
	var str3 = document.getElementById("last");
	var flightNumber = document.getElementById("flight");

	var flightResult = "AA " +  flightNumber.value;
	localStorage.setItem("flightNumber", flightResult);

	var final = "Hello " + str2.value + ' ' + str3.value;
	localStorage.setItem("result", final);

	var strflightStatus = '<a href="https://flightaware.com/live/flight/AA' + flightNumber.value + '" target="_blank"><figure class="image is-4by3"><img src="giphy.gif"></figure></a>'; 
	localStorage.setItem("flightStatus", strflightStatus);

	var month = document.getElementById("month");
	var day = document.getElementById("day");
	var year = document.getElementById("year");


		var endpoint = "https://aa-team-jerry.herokuapp.com/flight?flightNumber=";
		var endpoint2 = (endpoint + flightNumber.value + "&" + "date=" + year.value+"-" + month.value + "-" + day.value);
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open("GET", endpoint2, false);
	    xmlHttp.send(null);
	    var json = xmlHttp.responseText, obj = JSON.parse(json);
	    var test = obj.origin + " to " + obj.destination;
	   	localStorage.setItem("orgin", test);

}

function loadApp() {
	var storedValue = localStorage.getItem('result');
	var storedValue2 = localStorage.getItem('flightNumber');
	var storedValue3 = localStorage.getItem('flightStatus');
	var storedValue4 = localStorage.getItem('orgin');
	document.getElementById('demo').innerHTML = storedValue;
	document.getElementById('demo2').innerHTML = storedValue2;
	document.getElementById('demo3').innerHTML = storedValue3;
	document.getElementById('orgin').innerHTML = storedValue4;


}
