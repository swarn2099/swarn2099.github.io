function myFunction(){
	var str2 = document.getElementById("first");
	var str3 = document.getElementById("last");
	var flightNumber = document.getElementById("flight");
	   	if (flightNumber.value == "1246") {
	   		var strPoint = "This route crosses the Gulf of Mexico<br>This route crosses New Orleans<br> This route crosses the Mojave Dessert";
	   	}
	   	else if (flightNumber.value == "1352") {
	   		var strPoint = "This route crosses the Grand Canyon<br>This route crosses Las Vegas<br>This route crosses Lubbock";
	   	}
	   	else if (flightNumber.value == "1352") {
	   		var strPoint = "This route crosses the Great Lakes<br>This route crosses through Cleveland<br>This route is near Detroit";
	   	}
		else if (flightNumber.value == "321") {
	   		var strPoint = "Passes through Nashville<br>Passes through Washington DC<br>Passes through Mississippi River";
	   	}
	   	else if (flightNumber.value == "750") {
	   		var strPoint = "Passes through Grand Canyon<br>Passes through Kansas City<br>Passes through Columbus";
	   	}
	   	else if (flightNumber.value == "2493") {
	   		var strPoint = "Passes through Statue of Liberty<br>Passes through Atlantic City<br>Passes through Nortfolk";
	   	}
	   	else if (flightNumber.value == "354") {
	   		var strPoint = "Passes through Washington D.C.<br>Passes through Nortfolk<br>Passes through Wilkmington";
	   	}
		else if (flightNumber.value == "2257") {
	   		var strPoint = "Passes through Grand Canyon<br>Passes through Colorado Springs<br>Passes through Rocky Mountains";
	   	}
	   	else if (flightNumber.value == "2761") {
	   		var strPoint = "Passes through St. Loius<br>Passes through Mississippi River<br>Passes through Fayetteville";
	   	}

	   	localStorage.setItem("passOver", strPoint);
	var flightResult = "AA " +  flightNumber.value;
	localStorage.setItem("flightNumber", flightResult);

	var final = "Hello " + str2.value + ' ' + str3.value;
	localStorage.setItem("result", final);

	var strflightStatus = '<a href="https://flightaware.com/live/flight/AA' + flightNumber.value + '" target="_blank"><figure class="image is-4by3"><img src="giphy.gif"></figure></a>'; 
	localStorage.setItem("flightStatus", strflightStatus);



		var endpoint = "https://aa-team-jerry.herokuapp.com/flight?flightNumber=";
		var endpoint2 = (endpoint + flightNumber.value + "&" + "date=2018-01-29");
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
	var storedValue5 = localStorage.getItem('passOver');
	document.getElementById('demo').innerHTML = storedValue;
	document.getElementById('demo2').innerHTML = storedValue2;
	document.getElementById('demo3').innerHTML = storedValue3;
	document.getElementById('orgin').innerHTML = storedValue4;
	document.getElementById('poi').innerHTML = storedValue5;


}
