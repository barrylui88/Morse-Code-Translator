// Homepage Typewriter Effects
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Translate your message to letter')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('-- --- .-. ... .')
    .pauseFor(2500)
    .deleteAll()
    .start();

// Homepage Weather API Call

// API URL Construction
// TODAY SECTION
let queryURLTop = "https://api.openweathermap.org/data/2.5/weather?q=";
let queryTerm = "London"; // e.g. London
let queryURLBottom = "&appid=";
let APIKey = "1f171651aeaa44734ffe7198c60a1f2c";
let responseCityName;
let responseTodayTemperature;
let responseTodayWind;
let responseTodayHumidity;
let homepageWeatherString;
let homepageWeatherStringMorse;
let weatherText = $("#weather");

function callAPI () {
    // Today URL
    apiCall = $.ajax({
        url: queryURLTop + queryTerm + queryURLBottom + APIKey,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        responseCityName = `${response["name"]}, ${response["sys"]["country"]}`;
        responseTodayTemperature = response["main"]["temp"];
        responseTodayWind = response["wind"]["speed"];
        responseTodayHumidity = response["main"]["humidity"];
        homepageWeatherString = `The temperature in ${responseCityName} is ${Math.floor(responseTodayTemperature-273.15)}°C with a ${Math.floor(responseTodayWind)}km/h wind speed and ${responseTodayHumidity}% humidity.`
        homepageWeatherStringMorse = translationLettersToMorse(homepageWeatherString);
        console.log(homepageWeatherString);
        console.log(homepageWeatherStringMorse);
        weatherText.html(homepageWeatherString);
    })
}
callAPI();

// Homepage Time API Call