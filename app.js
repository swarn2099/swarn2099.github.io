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



		var endpoint = "https://aa-team-jerry.herokuapp.com/flight?flightNumber=";
		var date = "2018-10-03";
		var endpoint2 = (endpoint + flightNumber + "&" + "date=" + date);
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open("GET", endpoint2, false);
	    xmlHttp.send(null);
	    var json = xmlHttp.responseText, obj = JSON.parse(json);
	    var test = obj.orgin;
	    var test2 = obj.destination;
	   	localStorage.setItem("orgin", test );
	   	localStorage.setItem("destination", test2);

}

function loadApp() {
	var storedValue = localStorage.getItem('result');
	var storedValue2 = localStorage.getItem('flightNumber');
	var storedValue3 = localStorage.getItem('flightStatus');
	var storedValue4 = localStorage.getItem('orgin');
	var storedValue5 = localStorage.getItem('destination');
	document.getElementById('demo').innerHTML = storedValue;
	document.getElementById('demo2').innerHTML = storedValue2;
	document.getElementById('demo3').innerHTML = storedValue3;
	document.getElementById('orgin').innerHTML = storedValue4;
	document.getElementById('destination').innerHTML = storedValue5;


}
