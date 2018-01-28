function myFunction(){
	var str2 = document.getElementById("first");
	var str3 = document.getElementById("last");
	var flightNumber = document.getElementById("flight");
	var flightResult = "AA " +  flightNumber.value;
	localStorage.setItem("flightNumber", flightResult);
	var final = "Hello " + str2.value + ' ' + str3.value;
	localStorage.setItem("result", final);
}

function loadApp() {
	var storedValue = localStorage.getItem('result');
	var storedValue2 = localStorage.getItem('flightNumber');
	document.getElementById('demo').innerHTML = storedValue;
	document.getElementById('demo2').innerHTML = storedValue2;
}
