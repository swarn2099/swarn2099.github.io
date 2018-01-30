function myFunction(){
	var str2 = document.getElementById("first");
	var str3 = document.getElementById("last");
	var flightNumber = document.getElementById("flight");
	   	if (flightNumber.value == "1246") {
	   		var strPoint = "This route crosses the Grand Canyon<br><br>This route crosses Las Vegas<br><br>This route crosses Lubbock";
	   	}
	   	else if (flightNumber.value == "1352") {
	   		var strPoint = "This route crosses the Gulf of Mexico<br><br>This route crosses by New Orleans<br><br>This route is near Mojave Desert";
	   	}
	   	else if (flightNumber.value == "130") {
	   		var strPoint = "This route crosses the Great Lakes<br><br>This route crosses Cleveland<br><br>This route crosses Detroit";
	   	}
		else if (flightNumber.value == "1776") {
	   		var strPoint = "Passes by Nashville<br><br>Passes by Washington DC<br><br>Passes by Mississippi River";
	   	}
	   	else if (flightNumber.value == "750") {
	   		var strPoint = "Passes by Grand Canyon<br><br>Passes by Kansas City<br><br>Passes by Columbus";
	   	}
	   	else if (flightNumber.value == "2493") {
	   		var strPoint = "Passes by Statue of Liberty<br><br>Passes by Atlantic City<br><br>Passes by Nortfolk";
	   	}
	   	else if (flightNumber.value == "354") {
	   		var strPoint = "Passes by Washington D.C.<br><br>Passes by Nortfolk<br><br>Passes by Wilmington";
	   	}
		else if (flightNumber.value == "2257") {
	   		var strPoint = "Passes by Grand Canyon<br><br>Passes by Colorado Springs<br><br>Passes by Rocky Mountains";
	   	}
	   	else if (flightNumber.value == "2761") {
	   		var strPoint = "Passes by St. Loius<br><br>Passes by Mississippi River<br><br>Passes by Fayetteville";
	   	}

	   	localStorage.setItem("passOver", strPoint);
	var flightResult = "AA " +  flightNumber.value;
	localStorage.setItem("flightNumber", flightResult);

	var final = "Hello " + str2.value + ' ' + str3.value;
	localStorage.setItem("result", final);

	var strflightStatus = '<a href="https://flightaware.com/live/flight/AA' + flightNumber.value + '" target="_blank"><figure class="image is-4by3"><img src="img/status.jpg"></figure></a>'; 
	localStorage.setItem("flightStatus", strflightStatus);



		var endpoint = "https://aa-team-jerry.herokuapp.com/flight?flightNumber=";
		var endpoint2 = (endpoint + flightNumber.value + "&" + "date=2018-01-29");
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open("GET", endpoint2, false);
	    xmlHttp.send(null);
	    var json = xmlHttp.responseText, obj = JSON.parse(json);
	    var test = obj.origin + " to " + obj.destination;
	    var status = obj.flightStatus;
	   	localStorage.setItem("orgin", test);
	   	localStorage.setItem("flightStatusCurrent", status);



}

function loadApp() {
	var storedValue = localStorage.getItem('result');
	var storedValue2 = localStorage.getItem('flightNumber');
	var storedValue3 = localStorage.getItem('flightStatus');
	var storedValue4 = localStorage.getItem('orgin');
	var storedValue5 = localStorage.getItem('passOver');
	var storedValue6 = localStorage.getItem('flightStatusCurrent');
	document.getElementById('demo').innerHTML = storedValue;
	document.getElementById('demo2').innerHTML = storedValue2;
	document.getElementById('demo3').innerHTML = storedValue3;
	document.getElementById('orgin').innerHTML = storedValue4;
	document.getElementById('poi').innerHTML = storedValue5;
	document.getElementById('currentStatus').innerHTML = storedValue6;


}
