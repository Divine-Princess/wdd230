const mydate = new Date();
const todayDayNumber = mydate.getDay();
console.log(todayDayNumber);

const myweekday = new Array(7);

myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

const apiForecastURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a882736064fe2832c0ea90cae7134c76";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((forecastInfo) => {
    console.log(forecastInfo);

        let forecastDayNumber = todayDayNumber;
        console.log(forecastDayNumber);

        for (i = 0; i < forecastInfo.list.length; i++) {
            let time = forecastInfo.list[i].dt_txt;
            if (time.includes('18:00:00')) {

                forecastDayNumber += 1;

                if (forecastDayNumber === 7) {forecastDayNumber = 0;}

                let theDayName = document.createElement("h4");
                theDayName.textContent = myweekday[forecastDayNumber];
                console.log(">"+myweekday[forecastDayNumber]);

                let theTemp = document.createElement("p");
                theTemp.textContent = Math.round(forecastInfo.list[i].main.temp) + "\xB0";
                console.log(theTemp);

                let iconcode = forecastInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/wn/" + iconcode + "@2x.png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theIcon);
                theDay.appendChild(theTemp);
                

                document.getElementById("fivedayforecast").appendChild(theDay);
            }
        }
});