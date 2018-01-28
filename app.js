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
}

function loadApp() {
	var storedValue = localStorage.getItem('result');
	var storedValue2 = localStorage.getItem('flightNumber');
	var storedValue3 = localStorage.getItem('flightStatus');
	document.getElementById('demo').innerHTML = storedValue;
	document.getElementById('demo2').innerHTML = storedValue2;
	document.getElementById('demo3').innerHTML = storedValue3;


}
