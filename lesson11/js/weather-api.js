const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=a882736064fe2832c0ea90cae7134c76";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {

    document.getElementById("temp").innerHTML = Math.round(weatherInfo.main.temp);
    document.getElementById("speed").innerHTML = Math.round(weatherInfo.wind.speed);
    document.getElementById("current").innerHTML = weatherInfo.weather[0].main;
    document.getElementById("humidity").innerHTML = Math.round(weatherInfo.main.humidity);

    const tempNumber = parseFloat(document.getElementById("temp").textContent);

    const speedNumber = parseFloat(document.getElementById("speed").textContent)

    let windchill = 35.74 + (0.6215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
    windchill = Math.round(windchill);

    if(tempNumber<=50 && speedNumber >3) {
        document.getElementById("chill").textContent = +windchill+" \xB0F";
    } else {
        document.getElementById("chill").textContent = "N/A";
    }
  });

  