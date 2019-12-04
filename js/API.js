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
    var skintype;
    var skinproduct;

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
    $("#skinproduct").html(skinproduct);
    $("skintype").html(skintype);

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

    $("#skin1").change(function (e) {
      skintype = e.target.value;

      skinTypeAndWeather();

      ReplaceSkinImage();
      ReplaceSkinText();
    });
    $("#skin2").change(function (e) {
      skintype = e.target.value;

      skinTypeAndWeather();

      ReplaceSkinImage();
      ReplaceSkinText();
    });
    $("#skin3").change(function (e) {
      skintype = e.target.value;

      skinTypeAndWeather();

      ReplaceSkinImage();
      ReplaceSkinText();
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

      // console.log(hairtype + ' WORKING ' + hairproduct)
      // HERE IT IS CONSOLE LOGGING THE CORRECT THING
    }

    function skinTypeAndWeather() {
      console.log(weathergroup + skintype)
      if (weathergroup === 'Rain' && skintype === 'Sensitive/Dry') {
        var skinproduct = 'dryrain';
        console.log(skinproduct);
      } else if (weathergroup === 'Rain' && skintype === 'Combination/Normal') {
        var skinproduct = 'normalrain';
        console.log(skinproduct);
      } else if (weathergroup === 'Rain' && skintype === 'Oily') {
        var skinproduct = 'oilyrain';
        console.log(skinproduct);
      } else if (weathergroup === 'Snow' && skintype === 'Sensitive/Dry') {
        var skinproduct = 'drysnow';
        console.log(skinproduct);
      } else if (weathergroup === 'Snow' && skintype === 'Combination/Normal') {
        var skinproduct = 'normalsnow';
        console.log(skinproduct);
      } else if (weathergroup === 'Snow' && skintype === 'Oily') {
        var skinproduct = 'oilysnow';
        console.log(skinproduct);
      } else if (weathergroup === 'Clear' && skintype === 'Sensitive/Dry') {
        var skinproduct = 'drysun';
        console.log(skinproduct);
      } else if (weathergroup === 'Clear' && skintype === 'Combination/Normal') {
        var skinproduct = 'normalsun';
        console.log(skinproduct);
      } else if (weathergroup === 'Clear' && skintype === 'Oily') {
        var skinproduct = 'oilysun';
        console.log(skinproduct);
      } else if (weathergroup === 'Clouds' && skintype === 'Sensitive/Dry') {
        var skinproduct = 'drycloud';
        console.log(skinproduct);
      } else if (weathergroup === 'Clouds' && skintype === 'Combination/Normal') {
        var skinproduct = 'normalcloud';
        console.log(skinproduct);
      } else if (weathergroup === 'Clouds' && skintype === 'Oily') {
        var skinproduct = 'oilycloud';
        console.log(skinproduct);
      } else {
        var skinproduct = 'neutral'; //If we have time try and figure out how to have different neutral options for skin type
        console.log(skinproduct);
      }
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
        document.getElementById('hairproductname').innerHTML = 'Sheen - Natural Moisturising Spray'
      } else if (hairproduct === 'curlycloud') {
        document.getElementById('hairproductname').innerHTML = 'ghd Curl Hold Spray'
      } else if (hairproduct === 'straightcloud') {
        document.getElementById('hairproductname').innerHTML = 'ghd Final Fix Hairspray'
      } else {
        document.getElementById('hairproductname').innerHTML = 'ghd Curl Hold Spray'
      }
    }

    // ReplaceHairText();

    function ReplaceSkinImage() {

      if (skinproduct === 'drysun') {
        document.getElementById('skinproductimage').src = 'images/Dry Sunny.png'
      } else if (skinproduct === 'normalsun') {
        document.getElementById('skinproductimage').src = 'images/Normal Sunny.png'
      } else if (skinproduct === 'oilysun') {
        document.getElementById('skinproductimage').src = 'images/Oily Sunny.png'
      } else if (skinproduct === 'dryrain') {
        document.getElementById('skinproductimage').src = 'images/Dry Rainy.png'
      } else if (skinproduct === 'normalrain') {
        document.getElementById('skinproductimage').src = 'images/Normal Rainy.png'
      } else if (skinproduct === 'oilyrain') {
        document.getElementById('skinproductimage').src = 'images/Oily Rainy.png'
      } else if (skinproduct === 'drysnow') {
        document.getElementById('skinproductimage').src = 'images/Dry Snow.png'
      } else if (skinproduct === 'normalsnow') {
        document.getElementById('skinproductimage').src = 'images/Oily Snow.png'
      } else if (skinproduct === 'oilysnow') {
        document.getElementById('skinproductimage').src = 'images/Oily Snow.png'
      } else if (skinproduct === 'drycloud') {
        document.getElementById('skinproductimage').src = 'images/Dry Neutral.png'
      } else if (skinproduct === 'normalcloud') {
        document.getElementById('skinproductimage').src = 'images/Normal Neutral.png'
      } else if (skinproduct === 'oilycloud') {
        document.getElementById('skinproductimage').src = 'images/Oily Neutral.png'
      } else {
        document.getElementById('skinproductimage').src = 'images/Dry Sunny.png'
      }
    }

    function ReplaceSkinText() {

      if (skinproduct === 'drysun') {
        document.getElementById('skinproductname').innerHTML = 'Avene Mineral Fluid'
      } else if (skinproduct === 'normalsun') {
        document.getElementById('skinproductname').innerHTML = 'La Roche-Posay Effaclar H Moisturiser'
      } else if (skinproduct === 'oilysun') {
        document.getElementById('skinproductname').innerHTML = 'Paula’s Choice Calm Mineral Moisturiser Broad Spectrum SPF 30 Oily Skin'
      } else if (skinproduct === 'dryrain') {
        document.getElementById('skinproductname').innerHTML = 'My Clarins RE-FRESH Hydrating Beauty Mist'
      } else if (skinproduct === 'normalrain') {
        document.getElementById('skinproductname').innerHTML = 'Urban Decay Chill Makeup Setting Spray'
      } else if (skinproduct === 'oilyrain') {
        document.getElementById('skinproductname').innerHTML = 'Urban Decay De-Slick Setting Spray'
      } else if (skinproduct === 'drysnow') {
        document.getElementById('skinproductname').innerHTML = 'La Roche-Posay Hydraphase UV Intense Moisturiser Light'
      } else if (skinproduct === 'normalsnow') {
        document.getElementById('skinproductname').innerHTML = 'Urban Decay Heavy Dose All Nighter Setting Spray Duo'
      } else if (skinproduct === 'oilysnow') {
        document.getElementById('skinproductname').innerHTML = 'Urban Decay Heavy Dose All Nighter Setting Spray Duo'
      } else if (skinproduct === 'drycloud') {
        document.getElementById('skinproductname').innerHTML = 'La Roche-Posay Toleriane Sensitive Fluid Moisturiser'
      } else if (skinproduct === 'normalcloud') {
        document.getElementById('skinproductname').innerHTML = 'La Roche-Posay Effaclar H Moisturiser'
      } else if (skinproduct === 'oilycloud') {
        document.getElementById('skinproductname').innerHTML = 'Supergel Oil-free Moisturiser M3 For Oily And Acne-prone Skin'
      } else {
        document.getElementById('skinproductname').innerHTML = 'Avene Mineral Fluid'
      }
    }
  }

  var dt = new Date();
  document.getElementById("time").innerHTML = dt.toLocaleTimeString();

  var dt = new Date();
  document.getElementById("date").innerHTML = dt.toLocaleDateString();

});
