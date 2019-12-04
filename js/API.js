$(document).ready(function () {
  console.log('ready');
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

    $.getJSON(URL, function (data) {
      updateDOM(data);
    });
  }

  // Update Dom
  function updateDOM(data) {
    var city = data.name;
    var temp = Math.round(data.main.temp_max);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;
    var weathergroup = data.weather[0].main;
    var hairtype;
    var hairproduct;

    // if (weathergroup === 'Rain') {
    //   console.log('yes')
    //   var hairproduct = 'curlyrain'
    // } else if (weathergroup === 'Snow') {
    //   var hairproduct = 'curlysnow'
    // } else if (weathergroup === 'Clear'){
    //   var hairproduct = 'curlysun'
    // } else {
    //   var hairproduct = 'curlyneutral'
    // }

    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    $("#icon").attr("src", icon);
    $("#weathergroup").html(weathergroup);
    $("#hairproduct").html(hairproduct);
    $("#hairtype").html(hairtype);

    $("#option1").change(function (e) {
      hairtype = e.target.value;

      hairTypeAndWeather();

      ReplaceHairImage(); // this is doing something but the others don't seem to be
      // maybe because this changes it to neutral and then it continues being neutral hmmm
      ReplaceHairText();
    });
    $("#option2").change(function (e) {
      hairtype = e.target.value;

      hairTypeAndWeather();

      ReplaceHairImage();
      ReplaceHairText();
    });
    $("#option3").change(function (e) {
      hairtype = e.target.value;

      hairTypeAndWeather();

      ReplaceHairImage();
      ReplaceHairText();
    });

    function hairTypeAndWeather() {
      console.log(weathergroup + hairtype)
      if (weathergroup === 'Rain' && hairtype === 'Afro') {
        var hairproduct = 'afrorain';
        console.log(hairproduct);
      } else if (weathergroup === 'Rain' && hairtype === 'Curly') {
        var hairproduct = 'curlyrain';
        console.log(hairproduct);
      } else if (weathergroup === 'Rain' && hairtype === 'Straight') {
        var hairproduct = 'straightrain';
        console.log(hairproduct);
      } else if (weathergroup === 'Snow' && hairtype === 'Afro') {
        var hairproduct = 'afrosnow';
        console.log(hairproduct);
      } else if (weathergroup === 'Snow' && hairtype === 'Curly') {
        var hairproduct = 'curlysnow';
        console.log(hairproduct);
      } else if (weathergroup === 'Snow' && hairtype === 'Straight') {
        var hairproduct = 'straightsnow';
        console.log(hairproduct);
      } else if (weathergroup === 'Clear' && hairtype === 'Afro') {
        var hairproduct = 'afrosun';
        console.log(hairproduct);
      } else if (weathergroup === 'Clear' && hairtype === 'Curly') {
        var hairproduct = 'curlysun';
        console.log(hairproduct);
      } else if (weathergroup === 'Clear' && hairtype === 'Straight') {
        var hairproduct = 'straightsun';
        console.log(hairproduct);
      } else if (weathergroup === 'Clouds' && hairtype === 'Afro') {
        var hairproduct = 'afrocloud';
        console.log(hairproduct);
      } else if (weathergroup === 'Clouds' && hairtype === 'Curly') {
        var hairproduct = 'curlycloud';
        console.log(hairproduct);
      } else if (weathergroup === 'Clouds' && hairtype === 'Straight') {
        var hairproduct = 'straightcloud';
        console.log(hairproduct);
      } else {
        var hairproduct = 'neutral'; //If we have time try and figure out how to have different neutral options for hair type
        console.log(hairproduct);
      }

      // console.log(hairtype + ' HELENA ' + hairproduct)
      // HERE IT IS CONSOLE LOGGING THE CORRECT THING
    }

    function ReplaceBagImage() {

      if (weathergroup === 'Rain') {
        document.getElementById('bagproductimage').src = 'images/Rainy.png'
      } else if (weathergroup === 'Snow') {
        document.getElementById('bagproductimage').src = 'images/Snow.png'
      } else if (weathergroup === 'Clear') {
        document.getElementById('bagproductimage').src = 'images/Sunny.png'
      } else {
        document.getElementById('bagproductimage').src = 'images/Neutral.png'
      }
    }

    ReplaceBagImage();

    function ReplaceBagText() {

      if (weathergroup === 'Rain') {
        document.getElementById('bagproductname').innerHTML = "Orange City Gent Lifesaver Umbrella"
      } else if (weathergroup === 'Snow') {
        document.getElementById('bagproductname').innerHTML = "Women’s Alpine Grip Boot"
      } else if (weathergroup === 'Clear') {
        document.getElementById('bagproductname').innerHTML = "Rayban Clubmaster Classic"
      } else {
        document.getElementById('bagproductname').innerHTML = "Selby Street Small Zip-top Cross Body Bag"
      }
    }

    ReplaceBagText();

    function ReplaceHairImage() {

      if (hairproduct === 'afrosun') {
        document.getElementById('hairproductimage').src = 'images/Afro Sunny.png'
      } else if (hairproduct === 'curlysun') {
        document.getElementById('hairproductimage').src = 'images/Curly Sunny.png'
      } else if (hairproduct === 'straightsun') {
        document.getElementById('hairproductimage').src = 'images/Straight Sunny.png'
      } else if (hairproduct === 'afrorain') {
        document.getElementById('hairproductimage').src = 'images/Afro Rainy.png'
      } else if (hairproduct === 'curlyrain') {
        document.getElementById('hairproductimage').src = 'images/Curly Rainy.png'
      } else if (hairproduct === 'straightrain') {
        document.getElementById('hairproductimage').src = 'images/Straight Rainy.png'
      } else if (hairproduct === 'afrosnow') {
        document.getElementById('hairproductimage').src = 'images/Afro Snow.png'
      } else if (hairproduct === 'curlysnow') {
        document.getElementById('hairproductimage').src = 'images/Curly Snow.png'
      } else if (hairproduct === 'straightsnow') {
        document.getElementById('hairproductimage').src = 'images/Straight Snow.png'
      } else if (hairproduct === 'afrocloud') {
        document.getElementById('hairproductimage').src = 'images/Afro Neutral.png'
      } else if (hairproduct === 'curlycloud') {
        document.getElementById('hairproductimage').src = 'images/Curly Neutral.png'
      } else if (hairproduct === 'straightcloud') {
        document.getElementById('hairproductimage').src = 'images/Straight Neutral.png'
      } else {
        document.getElementById('hairproductimage').src = 'images/Curly Neutral.png'
      }
    }

    // ReplaceHairImage();


    function ReplaceHairText() {

      if (hairproduct === 'afrosun') {
        document.getElementById('hairproductname').innerHTML = 'Aveda Sun Care Protective Veil'
      } else if (hairproduct === 'curlysun') {
        document.getElementById('hairproductname').innerHTML = 'Bumble & Bumble Invisible Oil UV Protective Dry Oil Finishing Spray'
      } else if (hairproduct === 'straightsun') {
        document.getElementById('hairproductname').innerHTML = 'Bumble & Bumble Save the Day Daytime Protective Repair Fluid'
      } else if (hairproduct === 'afrorain') {
        document.getElementById('hairproductname').innerHTML = 'CURL PERFECTED Curl Correcting Milk'
      } else if (hairproduct === 'curlyrain') {
        document.getElementById('hairproductname').innerHTML = 'ORIBE Impermeable Anti-Humidity Spray'
      } else if (hairproduct === 'straightrain') {
        document.getElementById('hairproductname').innerHTML = 'Living Proof No Frizz Humidity Shield'
      } else if (hairproduct === 'afrosnow') {
        document.getElementById('hairproductname').innerHTML = 'CHARLOTTE MENSAH Manketti Hair Oil'
      } else if (hairproduct === 'curlysnow') {
        document.getElementById('hairproductname').innerHTML = 'OLAPLEX No.7 Bonding Oil'
      } else if (hairproduct === 'straightsnow') {
        document.getElementById('hairproductname').innerHTML = 'OUAI’ Hair Oil'
      } else if (hairproduct === 'afrocloud') {
        document.getElementById('hairproductname').innerHTML = 'Sheen - Natural Moisturising Spray '
      } else if (hairproduct === 'curlycloud') {
        document.getElementById('hairproductname').innerHTML = 'ghd Curl Hold Spray'
      } else if (hairproduct === 'straightcloud') {
        document.getElementById('hairproductname').innerHTML = 'ghd Final Fix Hairspray'
      } else {
        document.getElementById('hairproductname').innerHTML = 'ghd Curl Hold Spray'
      }
    }

    // ReplaceHairText();
  }

  var dt = new Date();
  document.getElementById("time").innerHTML = dt.toLocaleTimeString();

  var dt = new Date();
  document.getElementById("date").innerHTML = dt.toLocaleDateString();

});
