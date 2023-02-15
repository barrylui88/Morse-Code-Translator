// Homepage Typewriter Effects
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Translate your message to letters')
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
let homepageDateMorse
let weatherText = $("#weather");
let dateText = $("#date");
let morseDateText = $("#date-morse")
let morseWeatherText = $("#weather-morse")

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
        weatherText.html(homepageWeatherString);
        morseWeatherText.html(homepageWeatherStringMorse)
    })
}

callAPI();

// Homepage Time API Call
dateText.html(`Today is ${moment().format("dddd Do MMMM YYYY")}`);
homepageDateMorse = translationLettersToMorse(`Today is ${moment().format("dddd Do MMMM YYYY")}`);
morseDateText.html(homepageDateMorse);