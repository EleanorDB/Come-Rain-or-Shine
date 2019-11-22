$(document).ready(function() {
  // Get Location
  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long);
  }

  function error() {
    console.log("There was an error");
  }

  // Call Weather
  function weather(lat, long) {
    var fixedLat = lat.toFixed(2);
    var fixedLong = long.toFixed(2);
    console.log(fixedLat, fixedLong);
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${fixedLat}&lon=${fixedLong}`;

    $.getJSON(URL, function(data) {
      updateDOM(data);
    });
  }

  // Update Dom
  function updateDOM(data) {
    var city = data.name;
    var temp = Math.round(data.main.temp_max);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;

    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    $("#icon").attr("src", icon);
  }

  var dt = new Date();
  document.getElementById("time").innerHTML = dt.toLocaleTimeString();

  var dt = new Date();
  document.getElementById("date").innerHTML = dt.toLocaleDateString();
});
