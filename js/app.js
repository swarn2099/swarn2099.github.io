function myFunction(){
	//The greeting
	var str2 = document.getElementById("first");
	var str3 = document.getElementById("last");
	var flightNumber = document.getElementById('flightNumber');
	var final = "Hello " + str2.value + ' ' + str3.value;
	localStorage.setItem("greeting", final);
	//flight number 
	var flightResult = "AA " +  flightNumber.value;
	localStorage.setItem("flightNumber", flightResult);	
	//things to look out for
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
	
	//flight status with flight Aware
	var strflightStatus = '<a href="https://flightaware.com/live/flight/AA' + flightNumber.value + '" target="_blank"><figure><img src="img/status.jpg" ></figure></a>'; 
	localStorage.setItem("flightStatus", strflightStatus);

	//origin and destination 
	var endpoint = "https://aa-team-jerry.herokuapp.com/flight?flightNumber=";
	var endpoint2 = (endpoint + flightNumber.value + "&" + "date=2018-01-29");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", endpoint2, false);
    xmlHttp.send(null);
    var json = xmlHttp.responseText, obj = JSON.parse(json);
    var originl = obj.destination;
    localStorage.setItem("weather", originl);
    var test = obj.origin + " to " + obj.destination;
   	localStorage.setItem("orgin", test);

   	//flightStatus with Api
   	var status = obj.flightStatus;
   	localStorage.setItem("flightStatusCurrent", status);
}

function loadApp() {
	var greeting = localStorage.getItem('greeting');
	var flightNumberResult = localStorage.getItem('flightNumber');
	var thingsOfInterest = localStorage.getItem('passOver');
	var flightAware = localStorage.getItem('flightStatus');
	var travelOrgtoDest = localStorage.getItem('orgin');
	var flightStatusResult = localStorage.getItem('flightStatusCurrent');

	document.getElementById('greeting').innerHTML = greeting;
	document.getElementById('flightNumberResult').innerHTML = flightNumberResult;
	document.getElementById('poi').innerHTML = thingsOfInterest;
	document.getElementById('flightaware').innerHTML = flightAware;
	document.getElementById('orgin').innerHTML = travelOrgtoDest;
	document.getElementById('currentStatus').innerHTML = flightStatusResult;


}
// v3.1.0
//Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: localStorage.getItem('weather'),
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});