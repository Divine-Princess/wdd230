const mydate = new Date();
const todayDayNumber = mydate.getDay();

const myweekday = new Array(7);

myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";
console.log(todayDayNumber);

const apiURL = "//api.openweathermap.org/data/2.5/onecall?lat=47.6597&lon=-117.4291&units=imperial&exclude=minutely&appid=a882736064fe2832c0ea90cae7134c76";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.table(weatherInfo);

    document.getElementById("current").innerHTML = weatherInfo.current.weather[0].main;

    document.getElementById("temp").innerHTML = Math.round(weatherInfo.current.temp);
    
    document.getElementById("humidity").innerHTML = Math.round(weatherInfo.current.humidity);

    let forecastDayNumber = todayDayNumber;

    console.log(weatherInfo.daily);

        for (i = 0; i < 3; i++) {
           
            forecastDayNumber += 1;

            if (forecastDayNumber === 7) {forecastDayNumber = 0;}

            let theDayName = document.createElement("h3");
            theDayName.textContent = myweekday[forecastDayNumber];

            let theTemp = document.createElement("p");
            theTemp.textContent = Math.round(weatherInfo.daily[i].temp.day) + "\xB0";

            let iconcode = weatherInfo.daily[i].weather[0].icon;
            let alt = weatherInfo.daily[i].weather[0].main;
            let iconPath = "//openweathermap.org/img/wn/" + iconcode + "@2x.png";
            let theIcon = document.createElement("img");
            theIcon.src = iconPath;
            theIcon.alt = alt;

            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theIcon);
            theDay.appendChild(theTemp);
            
            document.getElementById("threedayforecast").appendChild(theDay); 
        
    }

  });

  